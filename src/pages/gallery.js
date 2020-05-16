import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './gallery.module.css'

export const query = graphql`
  query GalleryImages {
    allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            id
          }
          publicURL
        }
      }
    }
  }
`

const Gallery = ({ data }) => {
  return (
    <>
      <h1>Gallery</h1>
      <ul>
        {data.allFile.edges.map(edge => (
          <li
            key={edge.node.childImageSharp.id}
            className={styles.listItem}>
            <a href={edge.node.publicURL} target='_blank'>
              <Img fluid={edge.node.childImageSharp.fluid} />
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Gallery