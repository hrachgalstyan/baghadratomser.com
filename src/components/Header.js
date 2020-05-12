import React, { Component } from 'react'
import styled from 'styled-components'
import '../index.scss'
import {Link} from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa'
import $ from 'jquery'

export default function Header() {

    function handleHide(){
        const navbar = document.getElementById('navbarSupportedContent');
        navbar.classList.remove('show');
    }
    return (
        <HeaderButton>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to='/' className="navbar-brand navbar-nav title font-weight-light" onClick={handleHide}>bagahdratomser</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="navbar-toggler">
                        <span><FaAlignRight style={{fontSize: "24px"}} /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto text-left">
                            <li className="nav-item pl-2">
                                <Link to='/recipes' className="nav-link" onClick={handleHide} >ԲԱՂԱԴՐԱՏՈՄՍԵՐ</Link>
                            </li>
                            <li className="nav-item pl-2">
                                <Link to='/advices' className="nav-link" onClick={handleHide}>ԽՈՐՀՈՒՐԴՆԵՐ</Link>
                            </li>
                            <li className="nav-item pl-2">
                                <Link to='/shop' className="nav-link" onClick={handleHide}>ԽԱՆՈՒԹ</Link>
                            </li>
                            <li className="nav-item pl-2">
                                <Link to='/about' className="nav-link" onClick={handleHide}>ՄԵՐ ՄԱՍԻՆ</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </HeaderButton>
    );
}

const HeaderButton = styled.header`
    .title{
        font-size: 32px;
        @media screen and (max-width: 375px){
            font-size: 28px;
        }
        @media screen and (max-width: 320px){
            font-size: 24px;
        }
    }
`;