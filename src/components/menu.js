import React, { useState } from "react"
// import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'

// import Dropdown from "./dropdown"


const Menu = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleToggle = () => {
    setMenuExpanded(!menuExpanded);
  };
  return (
    <header className="header">
      <FontAwesomeIcon icon= {faBars} onClick={handleToggle} className="bars"/> 
      <div className={`menu-items ${menuExpanded ? "expanded": ""}`}>
        <div className="menu-item">
          <Link to="/" activeClassName="link-active">
            <img src="/assets/logo_BB.jpg" alt="Logo and home"></img>
          </Link>
        </div>
        <div className="menu-item"><Link to="/about" activeClassName="link-active">Breathing Members</Link></div>
        <div className="menu-item"><Link to="/performances" activeClassName="link-active">Performances</Link></div>
        <div className="menu-icon">
          <a href="https://www.facebook.com/BreathingBassSFU/"><FontAwesomeIcon icon= {faFacebook}/></a>
        </div>
        <div className="menu-icon">
          <a href="https://www.instagram.com/breathingbass/"><FontAwesomeIcon icon= {faInstagramSquare}/></a>
        </div>
        <div className="menu-icon">
          <a href="https://twitter.com/BassBreathing"><FontAwesomeIcon icon= {faTwitter}/></a>
        </div>
      </div>
      
    </header>
  )
}



export default Menu
