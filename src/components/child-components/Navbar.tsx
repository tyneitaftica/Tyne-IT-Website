import tyneLogo from '../../assets/img/tyne.ico'
import { NavLink } from 'react-router-dom'
import { Fade as Hamburger } from "hamburger-react"
import { useState } from 'react'
import { MobileNav } from './MobileNav'
import { DeskNav } from './DeskNav'
export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <NavLink to="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename"><img src={tyneLogo} alt="tyneIT Logo" /></h1>
        </NavLink>

        <nav id="navmenu" className="navmenu">
          <DeskNav/>
          <div className='d-xl-none'>
        <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            direction="right"
            size={28}
            color="#666"
            
          />
        </div>
        </nav>
        <MobileNav isMenuOpen={isMenuOpen}/>

        <a className="btn-getstarted" href="#about">Get Started</a>
      </div>
    </header>
  )
}
