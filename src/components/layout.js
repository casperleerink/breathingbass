//See: https://www.gatsbyjs.org/docs/use-static-query/
import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import Menu from "./menu"
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../layout.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


const Layout = ({children}) => {
  const images = useStaticQuery(graphql`
    query BackgroundQuery {
      allFile(filter: {absolutePath: {regex: "/assets/background/"}}) {
        edges {
          node {
            relativePath
          }
        }
      }
    } 
  `)
  const backgroundImages = images.allFile.edges.map((item, index) => {
    const styleTop = Math.floor(Math.random() * 80) + "%";
    const styleLeft = Math.floor(Math.random() * 80) + "%";
    const styleSize = Math.floor(Math.random() * 5) + 15 + "%";
    // const styleSize = "20%";
    return (
      <img 
        src={`/assets/${item.node.relativePath}`} 
        style={{
          top: styleTop,
          left: styleLeft,
          width: styleSize,
          height: 'auto',
        }}
        alt="background instruments"
      />
    )
  });
  return (
    <div className="layout-container" >
      <Menu />
      <main className="main-content">
        <div className="background-images">
          {backgroundImages}
        </div>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
