import React from "react"
import Equador_img from "../../../Imagens/AMERICAS/equador.png"
import './Equador.css'

export default function Equador() {
    return (
        <>
            {/* <Title texto="Seção da Missão!" /> */}
            <div className="Equador">
                
                <figure>
                    <img id="Equador" src={Equador_img} align="center" alt="Equador" />
                </figure>
            </div>
        </>
    )
}