import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import cake1 from '../../assets/cake-1.jpg'
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import banner3 from '../../assets/banner-3.jpg'
import banner4 from '../../assets/banner-4.jpg'

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
                        <h3 className="post-category font-weight-light p-sm-4 p-3 text-center">Բաղադրատոմսեր</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid-posts">
            <div className="container">
                <div className="row">
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={banner4} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Մաֆին</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={banner1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Մրգային տորթ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={banner2} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Նրբաբլիթներ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={banner3} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Աղանդեր</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={banner4} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Մաֆին</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={banner3} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Աղանդեր</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={banner1} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Մրգային տորթ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={banner2} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Նրբաբլիթներ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                        <div className="card">
                            <img className="card-img-top" src={banner3} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="post-category font-weight-light text-center">Աղանդեր</h5>
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
