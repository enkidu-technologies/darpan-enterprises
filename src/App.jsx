import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import MyNavbar from './components/navbar'
import Footer from './components/footer';
// Pages
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
        <MyNavbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App