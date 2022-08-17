import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useSelector , useDispatch } from "react-redux";
import {FaTrash} from 'react-icons/fa';



const CartPage = () => {

    const {cartItems} = useSelector(state=>state.cartReducer)
    const [totalAmount , setTotalAmount] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        let temp=0
        cartItems.forEach((cartItem) =>{
            temp = temp+cartItem.price
        })
        setTotalAmount(temp)
        },[cartItems])

    useEffect(() => {
        localStorage.setItem('cartItems' , JSON.stringify(cartItems));
        },[cartItems])

    const deleteFromCart=(product)=>{
        dispatch({ type: "DELETE FROM CART", payload: product});

    };

    return (
        <Layout>
            <div className="animationcart">
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_6wutsrox.json"  background="transparent"  speed="1"    loop  autoplay></lottie-player>
            </div>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {cartItems.map(item=>{
                        return <tr>
                            <td><img src={item.imageURL} height="80" width="80" /></td>

                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><FaTrash onClick={()=>deleteFromCart(item)}/></td>
                        </tr>

                    
                })}
                </tbody>
            </table>

            <div className="d-flex justify-content-end">
                <h1 className="total-amount">TOTAL AMOUNT = {totalAmount} RS/-</h1>

            </div>

            <div className="d-flex justify-content-end mt-3">
                <button>Place Order</button>

            </div>
        </Layout>
    );
}

export default CartPage