import React from "react";
import './styles/card.css'

export default function Card({name, image, status, species}){
    return(
        <div className="card">
            
            <img className='pj_img' src={image} alt={name}></img>
            <h3 className="name">{name}</h3>
            <p className="specie">{species}</p>
            <p className="status">{status}</p>
        </div>
    )
    
}