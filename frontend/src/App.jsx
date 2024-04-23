import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Music_meditate from './pages/Music_meditate';
import Events from './pages/Events';
import Travels from './pages/Travels';
// import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/music" element={<Music_meditate/>}/>
        <Route exact path="/events" element={<Events/>}/>
        <Route exact path="/travels" element={<Travels/>}/>
      </Routes>
    </BrowserRouter>
  );
}
