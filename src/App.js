import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Fruit from './Pages/Fruit/Fruit';
import Vegetable from './Pages/Vegetable/Vegetable';
import Food from './Pages/Food/Food';
import Products from './Pages/Products/Products';
import Shops from './Pages/Shops/Shops'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/fruit" element={<Fruit/>} exact/>
          <Route path="/vegetable" element={<Vegetable/>} exact/>
          <Route path="/food" element={<Food/>} exact/>
          <Route path="/products" element={<Products/>} exact/>
          <Route path="/shops" element={<Shops/>} exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
