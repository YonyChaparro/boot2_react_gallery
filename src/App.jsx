//import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Foto1 } from './components/Foto1';
import { Foto2 } from './components/Foto2';
import { Foto3 } from './components/Foto3';
import { Foto4 } from './components/Foto4';
import { Foto5 } from './components/Foto5';
import { Foto6 } from './components/Foto6';
import { Navigation } from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
      <>
      <h1 id="title" className='text-center my-3'>PROYECTO GALERÍA</h1>
      </>
        <div id='main-img-container' className='container'>
        <Routes>
          <Route path="/foto1" element={<Foto1 className='image-size'/>}/>
          <Route path="/foto2" element={<Foto2 className='image-size'/>}/>
          <Route path="/foto3" element={<Foto3 className='image-size'/>}/>
          <Route path="/foto4" element={<Foto4 className='image-size'/>}/>
          <Route path="/foto5" element={<Foto5 className='image-size'/>}/>
          <Route path="/foto6" element={<Foto6 className='image-size'/>}/>
        </Routes>
        </div>
        <div className='container'>
        <Navigation/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
