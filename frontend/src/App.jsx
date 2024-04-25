import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Music_meditate from './pages/Music_meditate';
import Events from './pages/Events';
import Travels from './pages/Travels';
import Shop from './pages/Shop';
import Register from './pages/Register';
import Events_detailed from './pages/Events_detailed';
// import './App.css';
import OrderPage from './pages/OrderPage';
import My_cart from './pages/My_cart';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/music" element={<Music_meditate/>}/>
        <Route exact path="/events" element={<Events/>}/>
        <Route exact path="/events_detailed/:id" element={<Events_detailed />}/>
        <Route exact path="/travels" element={<Travels/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/order" element={<OrderPage />} />
        <Route exact path="/cart" element={<My_cart/>} />
      </Routes>
    </BrowserRouter>
  );
}
