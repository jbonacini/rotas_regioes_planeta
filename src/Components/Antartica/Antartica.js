import React from "react"
import Antartica_img from "../../Imagens/REGIOES/Antartica.png"
import './Antartica.css'

export default function Antartica() {
    return (
        <>
            <div className="Antartica">
            <figure>
                    <img id="Antartica" src={Antartica_img} align="center" alt="Antartica" />
                </figure>
            </div>
        </>
    )
}