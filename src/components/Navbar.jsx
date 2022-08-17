import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar = () => {

    const {cartItems}= useSelector(state=>state.cartReducer)
    const {user} =JSON.parse(localStorage.getItem('currentUser'))

    const logout=()=>{
        localStorage.removeItem('currentUser');
        window.location.reload();
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div class="container-fluid ">
                    <Link class="navbar-brand fw-bold fs-4" to="/">LA COLLECTION</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">{user.email.substring(0,user.email.length-10)}</Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link class="nav-link" to="/" onClick={logout}>logout </Link>
                            </li>




                        </ul>
                        <div className="buttons">
                            <Link to="/login" className="btn btn-outline-dark">
                                <i class=" fa fa-solid fa-user"></i> Login</Link>
                            <Link to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-solid fa-user-plus "></i> Register</Link>
                            <Link to="/cart" className="btn btn-outline-dark ms-2" >
                                <i className="fa fa-solid fa-cart-plus"></i> Cart {cartItems.length}</Link>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;

