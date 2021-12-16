import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer';

function App() {
  return (
      <React.Fragment>
        <NavBar/>
        <Hero/>
        <ItemListContainer/>
        <Footer/>
      </React.Fragment>


  );
}

export default App;
