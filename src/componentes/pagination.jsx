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
         <nav>
            {prev ? <button className="prev" onClick={handlePrevious}>Previous</button>:null}
            
            {next ? <button className="next" onClick={handleNext}>Next</button> : null}
         </nav>
    )
}