import React, {useState} from 'react'
import './App.css';
import Cards from './componentes/cards';
import Banner from './componentes/banner';

function App() {

  const [personajes, setPersonajes] = useState([])

  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
  setPersonajes(data.results)
  })

  return (
    <div>
      <Banner/>
      <Cards personajes={personajes}/>
    </div>
  );
}

export default App;
