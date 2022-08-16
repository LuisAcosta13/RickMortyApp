import React, {useState} from 'react'
import './App.css';
import Cards from './componentes/cards';
import Banner from './componentes/banner';

function App() {

  const [personajes, setPersonajes] = useState([])

  function showThemAll(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
    setPersonajes(data.results)
    })
  }

  function hide(id){
    var elem = document.getElementById(id)
    elem.style.display = 'none'
  }

  function active(){
    setTimeout(function(){
      hide('button'); showThemAll()
    }, 1000)
  }

  return (
    <div className='render'>
      <Banner/>
      <div id='button'>
      <button type='button'  onClick={() => active()}>INGRESAR</button>
      </div>
      <Cards personajes={personajes}/>
    </div>
  );
}

export default App;
