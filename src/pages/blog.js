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
      <p>
        Several posts showing our family's quarentine shenanigans.
      </p>
      <h2>Posts</h2>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.id} className={styles.post}>
            <p>
              <span>
                <strong>{edge.node.frontmatter.title}</strong>
              </span>
              {' - '}
              <span>
                {edge.node.frontmatter.date}
              </span>
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