import React from 'react'
import {Link} from 'react-router-dom'
import {RecipesConsumer} from '../../context/recipes'

export default function Product({product}) {
    return (
        <RecipesConsumer>
            {value => {
                return (
                    <div className="col-9 col-sm-6 col-md-4 col-lg-3 p-2 mx-auto">
                        <Link to={`/recipes:id=${product.path}`} className="link text-decoration-none" style={{color: 'rgba(0, 0, 0, 0.7'}}>
                        <div className="card">
                            <img className="card-img-top" src={product.image} alt="Card image cap" />
                            <div className="card-body">
                                <p className="post-category font-weight-light text-center">{product.title}</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                )
            }}
        </RecipesConsumer>
    )
}
