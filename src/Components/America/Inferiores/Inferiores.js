import React from "react"
import Inferiores_img from "../../../Imagens/AMERICAS/inferiores.jpg"
import './Inferiores.css'

export default function Inferiores() {
    return (
        <>
            <div className="Inferiores">
                <figure>
                    <img id="Inferiores" src={Inferiores_img} align="center" alt="Inferiores" />
                </figure>
            </div>
        </>
    )
}