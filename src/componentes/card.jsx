import React from "react";
import './styles/card.css'

export default function Card({name, image, status, species, location, gender}){
    return(
        <div className="wrap">
        <div className="card">
            <div className="front">
            
                <img className='pj_img' src={image} alt={name}></img>
                <h3 className="name">{name}</h3>
                
                <p className="status">{status}</p>
            </div>
            <div className="back">
                <h3>{name}</h3>
                <ul className="list">
                <li>Specie: {species}</li>
                <li>Gender: {gender}</li>
                <li>Last known location: {location.name}</li>
                </ul>
            </div>
        </div>
        </div>
    )
    
}