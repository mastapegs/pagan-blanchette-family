import React from 'react'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  return (
    <>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <section dangerouslySetInnerHTML={{
        __html: data.markdownRemark.html
      }}></section>
    </>
  )
}

export default BlogTemplate