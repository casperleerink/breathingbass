import React, { useState } from "react"
// import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
        <div className="menu-item"><Link to="/" activeClassName="link-active">Breathing Bass</Link></div>
        <div className="menu-item"><Link to="/about" activeClassName="link-active">Who are we?</Link></div>
        <div className="menu-item"><Link to="/" activeClassName="link-active">Performances</Link></div>
      </div>
      
    </header>
  )
}



export default Menu
