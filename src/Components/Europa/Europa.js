import React from "react"
import Europa_img from "../../Imagens/REGIOES/Europe.png"
import './Europa.css'

export default function Europa() {
    return (
        <>
            <div className="Europa">
                <figure>
                    <img id="Europa" src={Europa_img} align="center" alt="Europa" />
                </figure>
            </div>

        </>
    )
}