import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
query AllBlogPosts {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          slug
          date
        }
        id
      }
    }
  }
}
`

const Blog = ({ data }) => {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.id}>
            {`${edge.node.frontmatter.title} - ${edge.node.frontmatter.date}`}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Blog