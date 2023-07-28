import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Info from './components/Info';
import Footer from "./components/Footer";

function App() {

  const [town, setTown]= useState("");

  function setName(name){
    setTown(name);
  }

  return (
    <>

    <Router>
      <Routes>

        <Route path="/" element={<Home getName={setName}  />} />
        <Route path="/info" element={ <Info town={town} /> } />

      </Routes>

      <Footer />
    </Router>

    </>
  );
}


export default App;
