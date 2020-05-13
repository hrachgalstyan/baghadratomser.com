import React from 'react'
import {Link} from 'react-router-dom'
import cake1 from '../../assets/cake-1.jpg'
import Loading from '../Loading'
import Product from './Product'
import {db} from '../../context/firebase'
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import banner3 from '../../assets/banner-3.jpg'
import banner4 from '../../assets/banner-4.jpg'
// import paginate from '../../utils/helpers'
// import {items} from '../../context/data'

import { RecipesConsumer } from '../../context/recipes'

export default function Featured() {
    return (
        <RecipesConsumer>
            {value => {
                const {featured, loading} = value;
                if(loading){
                    return <Loading />
                }
                else{
                    return (
                        <>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="single-post w-75 mx-auto text-center">
                                            <h3 className="post-category font-weight-light pb-2 text-center">Ցուցադրված։ {featured.length}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-posts mx-auto">
                                <div className="container">
                                    <div className="row px-3">
                                        {featured.length === 0 ? (
                                        <div className="mx-auto">Ձեր հարցմամբ արդյունքներ չեն գտնվել:</div> ) : (
                                            loading ? <Loading /> : 
                                            featured.map(product => (
                                                <Product key={product.path} product={product} />
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            }}
        </RecipesConsumer>
    )
}