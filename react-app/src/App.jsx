import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Website from './components/pages/Website'
import Ishita from './components/pages/Ishita'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Gallery from './components/pages/Gallery'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Courses from './components/pages/Courses'
import Team from './components/pages/Team'
import Testimonial from './components/pages/Testimonial'
import Demo from './components/pages/Demo'
import Login1 from './components/pages/Login1'
import MasterLayout from './components/layout/MasterLayout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout></MasterLayout>}>

            <Route path="/website" element={<Website></Website>}></Route>
            <Route path="/ishita" element={<Ishita></Ishita>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/gallery" element={<Gallery></Gallery>}></Route>
            <Route path="/services" element={<Services></Services>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/courses" element={<Courses></Courses>}></Route>
            <Route path="/team" element={<Team></Team>}></Route>
            <Route path="/testimonial" element={<Testimonial></Testimonial>}></Route>
            <Route path="/demo" element={<Demo></Demo>}></Route>
            <Route path="/login1" element={<Login1></Login1>}></Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
