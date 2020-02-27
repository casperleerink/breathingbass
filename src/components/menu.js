import React, { useState } from "react"
// import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Dropdown from "./dropdown"


const Menu = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleToggle = () => {
    setMenuExpanded(!menuExpanded);
  };
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      stills: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "\/still/"}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      moves: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "\/move/"}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
    
  `)
  const stillDropdownItems = data.stills.edges.map((item) =>
      <div className="dropdown-menu-item">
        <Link to={`${item.node.fields.slug}`} activeClassName="link-active">
          {item.node.frontmatter.title}
        </Link>
      </div>
  );
  const moveDropdownItems = data.moves.edges.map((item) => 
    <div className="dropdown-menu-item">
      <Link to={`${item.node.fields.slug}`} activeClassName="link-active">
        {item.node.frontmatter.title}
      </Link>
    </div>
  );
  return (
    <header className="header">
      <div className="title">
        <h1><Link to="/">Xinyue Liu</Link></h1>
      </div>
      <FontAwesomeIcon icon= {faBars} size= '2x' onClick={handleToggle} className="bars"/>
      <div className={`menu-items ${menuExpanded ? "expanded": ""}`} >
        <Dropdown buttonContent="Move">
          {moveDropdownItems}
        </Dropdown>
        <Dropdown buttonContent="Still">
          {stillDropdownItems}
        </Dropdown>
        <Dropdown buttonContent="A Collection of Writings">
          <div className="dropdown-menu-item"><Link to="/ichf">I Came First</Link></div>
          <div className="dropdown-menu-item"><Link to="/ichf">I Came Second!</Link></div>
        </Dropdown>
        <div className="menu-item"><Link to="/about" activeClassName="link-active">Lookt at me</Link></div>
        <div className="menu-item"><Link to="/move" activeClassName="link-active">Contact</Link></div>
      </div>
      
    </header>
  )
}



export default Menu
