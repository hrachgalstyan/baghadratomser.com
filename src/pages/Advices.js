import React, { Component } from 'react'
import Loading from '../components/Loading'

export default class Advices extends Component {
    state={
        loading: true
    }
    render() {
        if(this.state.loading){
            return (
                <>
                <h3 className="post-category font-weight-light p-3 text-center">Խորհուրդներ</h3>
                <Loading />
                </>
            )
        }
        else{
            return <h1>Advices</h1>
        }
    }
}
