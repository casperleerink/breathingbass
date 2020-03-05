import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Content, {HTMLContent} from "../components/Content"


export const IndexTemplate = ({content, contentComponent}) => {
  const PageContent = contentComponent || Content;
  return (
    <PageContent className={'content'} content={content} />
  )
}


const IndexPage = ({data}) => {
  
  
  return (
  <Layout>
    <SEO title="Home" />
    <IndexTemplate contentComponent={HTMLContent} content={data.markdownRemark.html}/>
  </Layout>
  )
}

export default IndexPage


export const aboutPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`