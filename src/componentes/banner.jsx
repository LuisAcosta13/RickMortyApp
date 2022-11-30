import React from "react";
import { Link } from "react-router-dom";
import './styles/banner.css'

export default function Banner(){
    return (
        <div className="logoContainer">
            <Link to='/'><img className="logo" src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' alt='logo'/></Link>   
        </div>
    )
}