import React, {useState} from 'react'
import './App.css';
import Cards from './componentes/cards';
import Banner from './componentes/banner';
import Footer from './componentes/footer';
import Pagination from './componentes/pagination';

function App() {

  const initialUrl = 'https://rickandmortyapi.com/api/character/?page='
  
  const [personajes, setPersonajes] = useState([])
  const [info, setInfo] = useState({})


  function showThem(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
    setPersonajes(data.results)
    setInfo(data.info)
    })
  }

  function hide(id){
    var elem = document.getElementById(id)
    elem.style.display = 'none'
  }

  function active(){
    setTimeout(function(){
      hide('button'); showThem(initialUrl)
    }, 1000)
  }

  function onPrevious(){
    showThem(info.prev)
  }

  function onNext(){
    showThem(info.next)
  }

  return (
    <div className='render'>
      <Banner/>
      <div id='button'>
      <button className='button' type='button'  onClick={() => active()}>ACCESS</button>
      </div>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      <Cards personajes={personajes}/>
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      <Footer/>
    </div>
  );
}

export default App;
