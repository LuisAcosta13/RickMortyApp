import React from "react";
import Card from "./card";
import './styles/cards.css'

export default function Cards({personajes}){
    return(
        <div className="table">
            {personajes.map(p => 
                <Card 
                id={p.id} 
                origin={p.origin} 
                name={p.name} 
                image={p.image} 
                species={p.species} 
                status={p.status} 
                gender={p.gender} 
                location={p.location}/>
            )}
        </div>
    )
}