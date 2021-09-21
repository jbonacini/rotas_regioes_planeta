import React from "react"
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/america"> America </Link></li>
                    <li><Link to="/"> Asia </Link></li>
                    <li><Link to="/oceania"> Oceania </Link></li>
                    <li><Link to="/antartica">  Antartica </Link></li>
                    <li><Link to="/europa"> Europa </Link></li>
                </ul>
            </nav>
        </header>
    )
}