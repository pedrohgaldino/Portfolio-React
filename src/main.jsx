import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Portfolio from './pages/Portfolio'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio-React/"> 
      <nav style={{ padding: '20px', background: '#f4f4f4', marginBottom: '20px' }}>
        <Link to="/">Página Inicial</Link> | 
        <Link to="/sobre"> Sobre</Link> | 
        <Link to="/portfolio"> Portfólio</Link>
      </nav>

      <div style={{ padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)