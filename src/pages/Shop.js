import React, {Component} from 'react'
import styled from 'styled-components'
import Loading from '../components/Loading'
import Carousel from '../components/Shop/Carousel'
import {db} from '../context/firebase'
import { ProductConsumer } from '../context/shop'

export default function Shop() {
    return(
        <ProductConsumer>
            {value => {
                const {loading, sorted, type, price, products, handleChange, search} = value;
                // type
                let types = new Set();
                types.add("Տեսակ");
                for(let product in products){
                    types.add(products[product]["type"]);
                }
                types = [...types];

                // time
                let prices = new Set();
                let min = Math.min(...products.map(item => item.price));
                let max = Math.max(...products.map(item => item.price));
                let minValue = Math.round(min/1000)*1000;
                let maxValue = Math.round(max/1000)*1000 + 1000;
                prices.add("Գին");
                for(var i = minValue; i <= maxValue; i+=1000){
                    prices.add(`${i} դրամ`);
                }
                prices = [...prices];

                // sort price
                prices.sort(function(a, b){return a-b});

                if(loading){
                    return (
                        <>
                            <Loading />
                        </>
                    )
                }
                else{
                    return(
                            <>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="single-post w-75 mx-auto text-center">
                                                <h3 className="post-category font-weight-light p-2 text-center">Խանութ</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <Carousel /> */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="single-post w-75 mx-auto text-center">
                                                <h3 className="post-category font-weight-light p-3 text-center">Ընդլայնված որոնում</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-posts">
                                    <div className="container">
                                        <div className="row d-flex justify-context-center">
                                        <div className="col-9 col-sm-8 col-md-7 col-lg-4 my-2 mx-auto">
                                            <InputButton type="text" className="form-control" name="search" id="search" placeholder="Փնտրել" value={search} onChange={handleChange} />
                                        </div>
                                        <div className="col-9 col-sm-8 col-md-7 col-lg-4 my-2 mx-auto">
                                            <CustomSelect className="custom-select" name="type" id="type" value={type} onChange={handleChange}>
                                                {types.map((type, index) => {
                                                    return (
                                                    <option key={index} value={type}>
                                                        {type}
                                                    </option>
                                                    );
                                                })}
                                            </CustomSelect>
                                        </div>
                                        <div className="col-9 col-sm-8 col-md-7 col-lg-4 my-2 mx-auto">
                                            <CustomSelect className="custom-select" name="price" id="price" value={price} onChange={handleChange}>
                                                {prices.map((price, index) => {
                                                    return (
                                                    <option key={index} value={price}>
                                                        {price}
                                                    </option>
                                                    );
                                                })}
                                            </CustomSelect>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="single-post w-75 mx-auto text-center">
                                                <h3 className="post-category font-weight-light p-3 text-center">Ցուցադրված։ {sorted.length}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-posts">
                                    <div className="container">
                                        <div className="row">
                                                {sorted.map(item => {
                                                    const {title, image, price, url} = item;
                                                    return (
                                                        <div className="col-9 col-sm-6 col-md-4 col-lg-3 p-2 mx-auto" key={item.id}>
                                                            <div className="card">
                                                                <img src={image} className="card-img-top" alt={title} />
                                                                <div className="card-body text-center">
                                                                    <h5 className="post-category font-weight-light text-center">{title}</h5>
                                                                    <p className="font-weight-light text-center">{price} դրամ</p>
                                                                    <a href={url} className="btn btn-outline-dark text-center mx-auto" target="_blank" style={{border: "1px solid rgba(0, 0, 0, 0.5)"}}>Գնել</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                </div>
                            </>
                    )
                }
            }}
        </ProductConsumer>
    )
}

const CustomSelect = styled.select`
    &:focus{
        box-shadow: none;
        border-color: rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
`;

const InputButton = styled.input`
    &:focus{
        box-shadow: none;
        border-color: rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
`;
