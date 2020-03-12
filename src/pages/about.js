import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'

const AboutPage = ({data}) => {
    const performances = data.allMarkdownRemark.edges.map(({node}) => {
        return (
            <div className="biography">
                <Link to={node.fields.slug}>
                    <img src={node.frontmatter.mainImage} alt="" />
                    <div className="information">
                      <h5>{node.frontmatter.title}</h5>
                    </div>
                </Link>
            </div>
        )
    }
    );
    return (
    <Layout>
        <SEO title="Biographies" />
        <div className="biographies-container">
            {performances}
        </div>    
    </Layout>
    )
}

export default AboutPage

export const aboutPageQuery = graphql`
query AboutQuery {
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "about-page"}}}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          mainImage
        }
      }
    }
  }
} 
`