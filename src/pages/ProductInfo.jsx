import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { doc, getDoc } from "firebase/firestore";
import fireDB from "../fireConfig";
import { useParams } from "react-router-dom";


function ProductInfo() {
    const [product, setProduct] = useState();
    const params = useParams()

    useEffect(() => {
        getData()
    }, []);



    async function getData() {
        try {
            const productTemp = await getDoc(
                doc(fireDB, "products", params.productid)
            );



            setProduct(productTemp.data());
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <Layout>

       
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 ">
                    {product && (<div>
                    <p><b>{product.name}</b></p>
                    <img src={product.imageURL} className="productinfo-img" />
                    <hr />
                    <p>{product.description}</p>
                    <div className="d-flex justify-content my-3">
                        <button>ADD TO CART</button>
                    </div>
                </div>)}
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 ">
                    {product && (<div>
                    <p><b>{product.name}</b></p>
                    <img src={product.imageURL} className="productinfo-img" />
                    <hr />
                    <p>{product.description}</p>
                    <div className="d-flex justify-content my-3">
                        <button>ADD TO CART</button>
                    </div>
                </div>)}
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 ">
                    {product && (<div>
                    <p><b>{product.name}</b></p>
                    <img src={product.imageURL} className="productinfo-img" />
                    <hr />
                    <p>{product.description}</p>
                    <div className="d-flex justify-content my-3">
                        <button>ADD TO CART</button>
                    </div>
                </div>)}
                    </div>
                </div>
            </div>
            <hr></hr>



        </Layout>
    );
}

export default ProductInfo

