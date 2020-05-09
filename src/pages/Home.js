import React from "react";
import {Link} from 'react-router-dom'
import Carousel from '../components/Home/Carousel'
import Featured from '../components/Home/Featured'

export default function Home() {
    return (
        <>
        <Carousel />
        <Featured />
        </>
    )
}
