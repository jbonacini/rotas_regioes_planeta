import React from "react";
import { Link } from "react-router-dom";
import '../Header/Header.css'
// import { BrowserRouter } from 'react-router-dom'

 
export default function AmericaHeader() {
    return (
        <>
            <header className="menu2"> 
            <nav className="navMenu2">
                <ul>
                    <li><a href="/"> Voltar</a></li>
                    <li><Link to="/America_do_norte"> America do norte</Link></li>
                    <li><Link to="/America_central"> America central</Link></li>
                    <li><Link to="/America_do_sul"> America do sul</Link></li>
                    <li><Link to="/Equador"> Equador</Link></li>
                    <li><Link to="/Inferiores"> Inferiores</Link></li>
                </ul>

            </nav>

            </header>
        </>
    )
}
