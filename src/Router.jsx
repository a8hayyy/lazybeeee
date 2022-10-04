import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home/Home"
import Fruit from './Pages/Category/Fruit/Fruit';
import Vegetable from './Pages/Category/Vegetable/Vegetable';
import Products from './Pages/Products/Products';
import Shops from './Pages/Shops/Shops'
import Biryani from './Pages/Biryani/Biryani'
import Shop1 from './Pages/Biryani/BiryaniShops/Shop1/Shop1'
import Shop2 from './Pages/Biryani/BiryaniShops/Shop2/Shop2'
import Shop3 from './Pages/Biryani/BiryaniShops/Shop3/Shop3'
import Snack from './Pages/Category/Snack/Snack';
import Cigarette from './Pages/Category/Cigarette/Cigarette';
import Drinks from './Pages/Category/Drinks/Drinks';

function Router() {
  return (
    <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/fruit" element={<Fruit/>} exact/>
          <Route path="/vegetable" element={<Vegetable/>} exact/>
          <Route path="/snack" element={<Snack/>} exact/>
          <Route path="/cigarette" element={<Cigarette/>} exact/>
          <Route path="/drinks" element={<Drinks/>} exact/>
          <Route path="/products" element={<Products/>} exact/>
          <Route path="/shops" element={<Shops/>} exact/>
          <Route path='/shops/biryani' element={<Biryani/>} exact/>
          <Route path='/shops/biryani/1' element={<Shop1/>} exact/>
          <Route path='/shops/biryani/2' element={<Shop2/>} exact/>
          <Route path='/shops/biryani/3' element={<Shop3/>} exact/>
    </Routes>
  )
}

export default Router