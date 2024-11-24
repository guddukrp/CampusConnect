import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const Navbar = () => {

  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-250} duration={500} >Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500} >About us</Link></li>
            <li><Link to='hero' smooth={true} offset={-250} duration={500} >Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500} ><button className='btn'>Contact us</button></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
