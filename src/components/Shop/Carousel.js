import React from "react";
import {Link} from 'react-router-dom'
import shopBanner from '../../assets/Shop-banner.jpg'
import $ from 'jquery'

export default function Home() {
    return (
        <div className="container slider">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                    <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={shopBanner} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={shopBanner} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={shopBanner} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
