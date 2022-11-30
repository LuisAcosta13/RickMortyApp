import React from "react";
import Cards from '../cards'
import Pagination from '../pagination'
import './Home.css'

export default function Home(){
    const initialUrl = 'https://rickandmortyapi.com/api/character/?page='
    const [personajes, setPersonajes] = React.useState([])
    const [info, setInfo] = React.useState({})

    function apiCall(url){
        fetch(url)
        .then(response => response.json())
        .then(data => {
        setPersonajes(data.results)
        setInfo(data.info)
        })
    }

    function onPrevious(){
        apiCall(info.prev)
    }
    
    function onNext(){
        apiCall(info.next)
    }

    React.useEffect(() => {
        apiCall(initialUrl)
    },[])

    return(
        <div className="container">
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
            <Cards personajes={personajes}/>
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        </div>
    )    
}