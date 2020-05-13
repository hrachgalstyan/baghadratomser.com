import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import telegram from '../assets/telegram.svg'

export default function Footer() {
    return (
        <footer className="p-4 w-100 text-center d-flex align-items-center bg-light mt-5" style={{minHeight: '300px'}}>
            <div className="container-sm">
                <nav className="navbar navbar-expand-sm navbar-light justify-content-center text-center border-bottom w-50 mx-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link a">կապ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/confidentiality' className="nav-link a">գաղտնիություն</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/FAQ' className="nav-link a">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link a">գլխավոր</Link>
                            </li>
                        </ul>
                </nav>
                <div className="row d-flex justify-content-center align-items-center">
                    <h6 className="post-category font-weight-light pt-4">Հետևեք մեզ սոցցանցերում</h6>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                        <a href="https://www.facebook.com/bagahdratomser/" className="p-2 a" target="_blank">
                            <img src={facebook} width="32px" height="32px" />
                        </a>
                        <a href="https://www.instagram.com/baghadratomser/" className="p-2 a" target="_blank">
                            <img src={instagram} width="32px" height="32px" />
                        </a>
                        <a href="https://t.me/baghadratomser" className="p-2 a" target="_blank">
                            <img src={telegram} width="32px" height="32px" />
                        </a>
                </div>
                {/* <nav className="navbar navbar-light justify-content-center text-center">
                        <ul className="navbar-nav d-flex flex-nowrap">
                            <li className="nav-item">
                                <a href="https://www.instagram.com/baghadratomser/" className="nav-link a" target="_blank">
                                    <img src={facebook} width="32px" height="32px" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.instagram.com/baghadratomser/" className="nav-link a" target="_blank">
                                    <img src={instagram} width="32px" height="32px" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.instagram.com/baghadratomser/" className="nav-link a" target="_blank">
                                    <img src={telegram} width="32px" height="32px" />
                                </a>
                            </li>
                        </ul>
                </nav> */}
                
            </div>
        </footer>
    )
}
