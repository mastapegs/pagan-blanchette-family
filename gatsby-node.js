exports.createPages = async ({ graphql, actions: { createPage } }) => {

  const query = await graphql(`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  }
  `)

  query.data.allMarkdownRemark.edges.map(edge => {
    createPage({
      path: edge.node.frontmatter.slug,
      component: require.resolve('./src/components/blog-post-template.js'),
      context: {
        id: edge.node.id
      }
    })
  })

}