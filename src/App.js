import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Router from './Router';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Router/>
      </BrowserRouter>
    </>
  );
}

export default App;
