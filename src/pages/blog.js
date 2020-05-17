import React from 'react'
import { graphql } from 'gatsby'
import styles from './blog.module.css'

export const query = graphql`
query AllBlogPosts {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        frontmatter {
          title
          slug
          date
        }
        excerpt
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
          <li key={edge.node.id} className={styles.post}>
            <p>
              {`${edge.node.frontmatter.title} - ${edge.node.frontmatter.date}`}
            </p>
            <p>
              {edge.node.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Blog