import React from "react";
import './styles/pagination.css'

export default function Pagination({prev, next, onPrevious, onNext}){

    function handlePrevious(){
        onPrevious()
    }

    function handleNext(){
        onNext()
    }

    return(
         <nav className="navigation">
            {prev ? <button className="prev" onClick={handlePrevious}>◂</button>:null}
            
            {next ? <button className="next" onClick={handleNext}>▸</button> : null}
         </nav>
    )
}