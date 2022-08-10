import React from "react";
import Card from "./card";
import './styles/cards.css'

export default function Cards({personajes}){
    return(
        <div>
            {personajes.map(p => <Card name={p.name} image={p.image} species={p.species} status={p.status}/>)}
        </div>
    )
}