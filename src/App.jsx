import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { slides } from './data/carousel.json'
import { reviews } from './data/reviews.json'
import './App.css'
import LandingPage from './container/LandingPage/LandingPage'
import AboutUs from './container/AboutUs/AboutUs'
import Bmi from './container/Bmi/Bmi'
import ContactUs from './container/ContactUs/ContactUs'
import Gallery from './container/Gallery/Gallery'
import OurPrograms from './container/OurPrograms/OurPrograms'
import Testimonials from './container/Testimonials/Testimonials'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<div>
            <LandingPage />
            <AboutUs data={ slides }/>
            <Testimonials data={ reviews }/>
            <Gallery />
            <OurPrograms />
            <Bmi />
            <ContactUs />
          </div>} />
          
          <Route path='*' element={<><h1>404 Page Not Found</h1></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;