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
          }
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
          <li className={styles.listItem}>
            <Img fluid={edge.node.childImageSharp.fluid} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Gallery