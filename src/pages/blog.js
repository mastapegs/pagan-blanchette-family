import React from 'react'
import { graphql, Link } from 'gatsby'
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
      <hr className={styles.hr} />
      <h2>Posts</h2>
      <section>
        {data.allMarkdownRemark.edges.map(edge => (
          <article key={edge.node.id} className={styles.post}>
            <p>
              <span>
                <Link to={`blog/${edge.node.frontmatter.slug}`}>
                  <strong>{edge.node.frontmatter.title}</strong>
                </Link>
              </span>
              {' - '}
              <span>
                {edge.node.frontmatter.date}
              </span>
            </p>
            <p>
              {edge.node.excerpt}
            </p>
          </article>
        ))}
      </section>
    </>
  )
}

export default Blog