import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Programs from './programs/Programs'
import Finance from './finance/Financs'
import Contact from './contact/Contact'

const AllPagesRout = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="programs" element={<Programs/>}/>
        <Route path="finance" element={<Finance/>}/>
        <Route path="contact" element={<Contact/>}/>
    </Routes>
  )
}

export default AllPagesRout