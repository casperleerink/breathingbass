import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Content, {HTMLContent} from "../components/Content"


export const PerformanceTemplate = ({content, contentComponent}) => {
  const PageContent = contentComponent || Content;
  return (
    <PageContent className={'content'} content={content} />
  )
}

const PerformancePage = ({data}) => {
  return (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <p>{data.markdownRemark.frontmatter.date}</p>
    <PerformanceTemplate contentComponent={HTMLContent} content={data.markdownRemark.html}/>
  </Layout>
  )
}

export default PerformancePage


export const performancePageQuery = graphql`
  query performancePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
          date(formatString: "LLL")
          title
      }
    }
  }
`