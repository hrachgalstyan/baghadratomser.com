import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="p-4 w-100 text-center">
            <div className="container-sm">
                <nav className="navbar navbar-expand-sm navbar-light justify-content-center text-center">
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
            </div>
        </footer>
    )
}
