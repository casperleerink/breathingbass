import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Content, {HTMLContent} from "../components/Content"


const AboutTemplate = ({content, contentComponent}) => {
  const PageContent = contentComponent || Content;
  return (
    <PageContent className={'content'} content={content} />
  )
}

const AboutPage = ({data}) => {
  
  
  return (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <AboutTemplate contentComponent={HTMLContent} content={data.markdownRemark.html}/>
  </Layout>
  )
}

export default AboutPage


export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`