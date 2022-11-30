import React from "react";
import { Link } from "react-router-dom";
import './styles/card.css'

export default function Card({id, name, image, status, species, location, gender}){
    return(
        <div className="wrap">
            <div className="card">
                <div className="front">
                    <span>
                        <img className='pj_img' src={image} alt={name}></img>
                        <p className="status">{status}</p>
                    </span>
                    <span>
                        <h3 className="name">{name}</h3>
                        <p align='left' className="location">Last known location: <p>{location.name}</p></p>
                    </span>
                </div>
                <div className="back">
                    <h3>{name}</h3>
                    <ul className="list">
                    <li>Specie: {species}</li>
                    <li>Gender: {gender}</li>
                    <li>Last known location: {location.name}</li>
                    </ul>
                    <Link to={`/${id}`}><button className='detailButton'>Detail</button></Link>
                </div>
            </div>
        </div>
    )
    
}