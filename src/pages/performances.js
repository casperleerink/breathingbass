import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'



const PerformancesPage = ({data}) => {
    const performances = data.allMarkdownRemark.edges.map(({node}) => {
        return (
            <div className="performance-item">
                <Link to={node.fields.slug}>
                    <img src={node.frontmatter.mainImage} alt="" />
                    <div className="information">
                      <h3>{node.frontmatter.title}</h3>
                      <h5>{node.frontmatter.date}</h5>
                      <p>{node.excerpt}</p>
                    </div>
                </Link>
            </div>
        )
    }
    );
    return (
    <Layout>
        <SEO title="Performances" />
        <div className="performances-container">
            {performances}
        </div>    
    </Layout>
    )
}

export default PerformancesPage

export const performancePageQuery = graphql`
query PerformanceQuery {
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "performance-page"}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        excerpt(pruneLength: 300)
        frontmatter {
          title
          date(formatString: "LLL")
          mainImage
        }
      }
    }
  }
} 
`