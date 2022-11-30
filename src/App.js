import React from 'react'
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './componentes/Home/Home';
import Banner from './componentes/banner';
import Footer from './componentes/footer';
import Detail from './componentes/Detail/Detail';

function App() {

  return (
    <div className='render'>
        <React.Fragment>
        <Route path="/" component={Banner} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:id' component={Detail} />
          </Switch>
          <Route path="/" component={Footer} />
        </React.Fragment>    
    </div>
  );
}

export default App;
