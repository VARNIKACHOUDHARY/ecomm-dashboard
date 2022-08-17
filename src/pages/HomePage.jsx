import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs, } from "firebase/firestore";
import fireDB from "../fireConfig";
import { ecartproducts } from "../ecart-products";
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { cleanup } from "@testing-library/react";



function HomePage() {
    const [products, setProducts] = useState([])
    const {cartItems} = useSelector(state=>state.cartReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            const users = await getDocs(collection(fireDB, "products"));
            const productsArray = [];
            users.forEach((doc) => {
                const obj = {
                    id: doc.id,
                    ...doc.data(),
                };

                productsArray.push(obj);
            });

            setProducts(productsArray)
        } catch (error) {
            console.log(error);

        }
    }



    function addProductsData() {
        ecartproducts.map(async (product) => {
            try {
                await addDoc(collection(fireDB, "products"), product);
            } catch (error) {
                console.log(error);

            }
        })
    }


    useEffect(() => {
        localStorage.setItem('cartItems' , JSON.stringify(cartItems));
        },[cartItems])
    

    const addToCart=(product)=>{
        dispatch({ type: "ADD TO CART", payload: product});

    };


    return (
        <Layout>
            <div className="hero">
                <div class="card bg-dark text-white border-0">
                    <img src="/assets/ecart-bg2.jpg" class="card-img" alt="backgroung image" />
                    <div class="card-img-overlay flex-column text-align-center justify-content-center">
                        <div className="container">
                            <h5 class="card-title display-2">NEW SEASON ARRIVALS</h5>
                            <p class="card-text fs-2 ">Check out all the Trends</p>


                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    {products.map((product) => {
                        return <div className="col-md-3 ">
                            <div className="m-2 p-1 product position-relative">
                                <div className="product-content">
                                    <p>{product.name}</p>
                                    <div className="text-center">
                                        <img src={product.imageURL} alt="" className="product-img" />

                                    </div>
                                </div>
                                <div className="product-actions">
                                    <h2>{product.price} RS/-</h2>
                                    <div className="d-flex">
                                        <button className="mx-2" onClick={()=>addToCart(product)}>ADD TO CART</button>
                                        <button onClick={()=>{
                                            navigate(`/productinfo/${product.id}`)
                                        }}>VIEW</button>

                                    </div>
                                </div>



                            </div>
                        </div>
                    })}
                </div>
            </div>
        </Layout>
    );
}

export default HomePage