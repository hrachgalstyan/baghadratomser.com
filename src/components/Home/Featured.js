import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import cake1 from '../../assets/cake-1.jpg'

export default function Featured() {
    // const [loading, setLoading] = React.useState(false);
    // const [featured, setFeatured] = React.useState([]);

    // React.useEffect(()=>{
    //     setLoading(true);
    //     async function getRecipes() {
    //         try {
    //             const response = await fetch(`https://firestore.googleapis.com/v1/projects/baghadratomser/databases/(default)/documents/Ցուցադրված`);
    //             const data = await response.json();
    //             console.log(data);
    //             const {documents} = data;
    //             if(documents){
    //                     const newRecipe = documents.map(item => {
    //                     const {title, author, id, image, ingredients, preparation, time, type} = item.fields;
    //                     return {title, author, id, image, ingredients, preparation, time, type};
    //                 });
    //                 setFeatured(newRecipe);
    //             }
    //             else{
    //                 setFeatured([]);
    //             }
    //         } 
    //         catch (error) {
    //             console.log(error);
    //         }
    //             setLoading(false);
    //     }
    //         getRecipes();
    //     },[featured]);
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="single-post w-75 mx-auto text-center">
                        <h3 className="post-category font-weight-light p-3 py-5 text-center">Բաղադրատոմսեր</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid-posts">
            <div className="container">
                <div className="row">
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={cake1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={cake1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={cake1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={cake1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={cake1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={cake1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={cake1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={cake1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={cake1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-4">
            <div className="row">
                <div className="col">
                    <div className="single-post w-75 mx-auto text-center">
                    <Link to='/recipes' className="btn btn-outline-dark load-more" style={{border: "1px solid rgba(0, 0, 0, 0.5)"}}>
                        Տեսնել ավելին
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
