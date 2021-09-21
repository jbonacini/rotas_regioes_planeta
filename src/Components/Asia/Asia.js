import React from "react"
import Asia_img from "../../Imagens/REGIOES/Asia.png"
import './Asia.css'

export default function Asia() {
    return (
        <>
            <div className="Asia">
                <figure>
                    <img id="Asia" src={Asia_img} align="center" alt="Asia" />
                </figure>
            </div>
        </>
    )
}