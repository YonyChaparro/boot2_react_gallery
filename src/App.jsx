//import { useState } from 'react'
import './App.css';
import { Foto1 } from './components/Foto1';
import { Foto2 } from './components/Foto2';
import { Foto3 } from './components/Foto3';
import { Foto4 } from './components/Foto4';
import { Foto5 } from './components/Foto5';
import { Foto6 } from './components/Foto6';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/foto1" element={<Foto1 />}/>
          <Route path="/foto2" element={<Foto2 />}/>
          <Route path="/foto3" element={<Foto3 />}/>
          <Route path="/foto4" element={<Foto4 />}/>
          <Route path="/foto5" element={<Foto5 />}/>
          <Route path="/foto6" element={<Foto6 />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
