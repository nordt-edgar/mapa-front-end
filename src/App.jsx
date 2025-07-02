// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

// (Páginas)
function App() {
  return (
    <BrowserRouter basename="/mapa-front-end">
      <Header />
      <Nav />

      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/duda" element={<div>Sobre a Duda</div>} />
            <Route path="/podologia" element={<div>Podologia</div>} />
            <Route path="/estetica" element={<div>Estética Avançada</div>} />
            <Route path="/contato" element={<div>Contato</div>} />
          </Routes>
        </div>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App