import React from "react"
import SubMenu from "./SubMenusAmerica.js"
import America_img from "../../Imagens/REGIOES/Americas.png"
import { BrowserRouter } from 'react-router-dom'


import './America.css'

export default function America() {
    return (
        <>
        <BrowserRouter basename="/america">
            <SubMenu/>
        </BrowserRouter>
        <div className="America">
            <figure>
                <img id="America" src={America_img} align="center" alt="America" />
            </figure>
        </div>
            
        </>
    )
}