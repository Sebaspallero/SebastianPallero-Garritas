import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
      <React.Fragment>
        <NavBar/>
        <Hero/>
        <ItemListContainer/>
      </React.Fragment>


  );
}

export default App;
