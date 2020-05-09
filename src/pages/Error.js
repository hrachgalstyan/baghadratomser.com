import React from "react";
import {Link} from 'react-router-dom'

export default function Error() {
  return (
    <div className="d-block text-center my-5 py-2 py-sm-5">
        <h1 className="post-category font-weight-light text-center pt-5" style={{fontSize: "80px"}}>404</h1>
        <h3 className="post-category font-weight-light text-center">not found</h3>
        <Link to='/' className="btn btn-outline-secondary load-more my-2">
            Վերադառնալ
        </Link>
    </div>
  )
}