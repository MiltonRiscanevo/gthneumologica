import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import HiringForm from '../form_hiring/HiringForm'
import Novedades from "../form_novedades/Novedades"

const Navbar = () => {
  return (
    <Router>
        <Link to="/novedades">Novedades</Link>
        <Link to="/novedades">Creacion Usuarios</Link>
        <Link to="/contratacion">Contratacion</Link>

        <Routes>
            <Route path='/novedades' element={<Novedades/>}/>
            <Route path='/contratacion' element={<HiringForm/>}/>
        </Routes>
    </Router>
  )
}

export default Navbar