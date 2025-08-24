import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import CategoryPage from './pages/CategoryPage'
import FloatingContactIcons from './components/Others/FloatingContactIcons'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
    </Routes>
    <FloatingContactIcons />
    </BrowserRouter>
  )
}

export default App
