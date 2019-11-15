const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.fields.slug,
//         component: path.resolve(`./src/templates/Post.js`),
//         context: {
//           // Data passed to context is available
//           // in page queries as GraphQL variables.
//           slug: node.fields.slug,
//         },
//       })
//     })
//   })
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allPusdatinNews {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allPusdatinNews.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/Post.js`),
        context: {
          slug: node.slug
        }
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}