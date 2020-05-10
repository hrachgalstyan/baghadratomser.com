import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import cake1 from '../../assets/cake-1.jpg'
import Loading from '../Loading'
import {db} from '../../context/firebase'
// import paginate from '../../utils/helpers'
// import {items} from '../../context/data'

export default class Featured extends Component {
    state={
        product: [],
        loading: true,
    }

    componentDidMount(){
        // this.setState({
        //     loading: false
        // })
        // console.log(items);
        // console.log(this.state.product);
        // let sort = paginate(items);
        // console.log(sort);
        // this.setState({
        //     sorted: sort[this.state.page]
        // })
    }

    // componentDidMount(){
    //     db.collection('Բաղադրատոմսեր')
    //     .get()
    //     .then( snapshot => {
    //         const product = [];
    //         snapshot.forEach( doc => {
    //             const data = doc.data();
    //             product.push(data);
    //         })
    //         this.setState({
    //             products: product,
    //             loading: false
    //         })
    //     })
    //     .catch( error => console.log(error));
    // }
    render() {
        if(this.state.loading){
            return <Loading />
        }
        else{
            return (
                <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="single-post w-75 mx-auto text-center">
                                <h3 className="post-category font-weight-light p-3 text-center">Ցուցադրված։ 18</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-posts">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                    {this.state.sorted.map(item => {
                                        return (<div className="card border-0" key={item.id}>
                                            <img className="card-img-top" src={item.image} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="post-category font-weight-light text-center">{item.name}</h5>
                                            </div>
                                        </div>
                                        )
                                    })}
                            </div> */}
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-sm-8 col-md-4 col-lg-4 p-2 mx-auto">
                                <div className="card border-0">
                                    <img className="card-img-top" src={cake1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="post-category font-weight-light text-center">Ելակով տորթ</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col d-flex justify-content-center">
                            <div className="single-post w-75 mx-auto d-flex justify-content-center">
                            <ul className="pagination my-auto">
                                <li className="page-item">
                                <a className="page-link font-weight-light post-category" style={{color: "black"}} href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                </li>
                                <li className="page-item">
                                    <Link to='/recipes' className="page-link font-weight-light post-category" style={{color: "black"}}>
                                        1
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link to='/recipes' className="page-link font-weight-light post-category" style={{color: "black"}}>
                                        2
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link to='/recipes' className="page-link font-weight-light post-category" style={{color: "black"}}>
                                        3
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link to='/recipes' className="page-link font-weight-light post-category" style={{color: "black"}}>
                                        4
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link to='/recipes' className="page-link font-weight-light post-category" style={{color: "black"}}>
                                        5
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link to='/recipes' className="page-link font-weight-light post-category" style={{color: "black"}}>
                                        6
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <a className="page-link font-weight-light post-category" style={{color: "black"}} href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )
        }
    }
}

