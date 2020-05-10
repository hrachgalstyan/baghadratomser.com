import React, {Component} from 'react'
import styled from 'styled-components'
import Loading from '../components/Loading'
import Carousel from '../components/Shop/Carousel'
import {db} from '../context/firebase'

export default class Shop extends Component {
    state={
        products: [],
        types: [],
        loading: true
    }

    componentDidMount(){
        db.collection('Խանութ')
        .get()
        .then( snapshot => {
            const product = [];
            snapshot.forEach( doc => {
                const data = doc.data();
                product.push(data);
            })
            this.setState({
                products: product,
                loading: false
            })
        })
        .catch( error => console.log(error));
    }


    render() {
        if(this.state.loading){
            return (
                <>
                <h3 className="post-category font-weight-light p-3 text-center">Խանութ</h3>
                <Loading />
                </>
            )
        }
        else{
            return (
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
                    <div className="grid-posts">
                        <div className="container">
                            <div className="row d-flex justify-context-center">
                            <div className="col-9 col-sm-8 col-md-6 col-lg-6 my-2 mx-auto">
                                <CustomSelect className="custom-select" name="ingredients" id="ingredients">
                                    <option>Տեսակ</option>
                                    <option>Տեսակ 1</option>
                                    <option>Տեսակ 2</option>
                                    <option>Տեսակ 3</option>
                                    <option>Տեսակ 4</option>
                                </CustomSelect>
                            </div>
                            <div className="col-9 col-sm-8 col-md-6 col-lg-6 my-2 mx-auto">
                                <CustomSelect className="custom-select" name="ingredients" id="ingredients">
                                    <option>Գին</option>
                                    <option>Գին 1</option>
                                    <option>Գին 2</option>
                                    <option>Գին 3</option>
                                    <option>Գին 4</option>
                                </CustomSelect>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="single-post w-75 mx-auto text-center">
                                    <h3 className="post-category font-weight-light p-3 text-center">Ցուցադրված։ 17</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-posts">
                        <div className="container">
                            <div className="row">
                                    {this.state.products.map(item => {
                                        const {title, image, price, url} = item;
                                        return (
                                            <div className="col-9 col-sm-6 col-md-4 col-lg-4 p-2 mx-auto" key={item.id}>
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
    }
}


const CustomSelect = styled.select`
    &:focus{
        box-shadow: none;
        border-color: rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
`;