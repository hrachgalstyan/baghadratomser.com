import React, {Component} from "react";
import {Link} from 'react-router-dom'
import Loading from '../components/Loading'
import Carousel from '../components/Home/Carousel'
import Featured from '../components/Home/Featured'

export default class Home extends Component {
    state={
        loading: true
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading: false
            })
        }, 1000);
    }
    render() {
        if(this.state.loading){
            return <Loading />
        }
        else{
            return(
                <>
                <Carousel />
                <Featured />
                </>
            )
        }
    }
}

