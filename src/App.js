import React from 'react'
import Navbar from './components/HomePage/Navbar'
import SearchBox from './components/HomePage/SearchBox'
import Card from './components/HomePage/Card'
import Team from './components/HomePage/Team'
import Specialisation from './components/HomePage/Specialisation'
import Patient from './components/HomePage/Patient'
import Family from './components/HomePage/Family'
import Footer from './components/HomePage/Footer'
import Blog from './components/HomePage/Blog'
const App = () => {
  return (
    <>
    <Navbar />
    <SearchBox /> 
    <Card />
    <Specialisation />
    <Team />
    <Patient />
    <Blog />
    <Family />
    <Footer/>
    </>
    
  )
}

export default App