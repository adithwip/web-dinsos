const axios = require('axios')
const crypto = require('crypto')

const API_URI = 'https://api.chucknorris.io/jokes/random'

exports.sourceNodes = async ({boundActionCreators}) => {
  const {createNode} = boundActionCreators
  const result = await axios.get(API_URI)

  console.log("result data", result.data)

  await createNode({
    children: [],
    id: result.data.id.toString(),
    icon_url: result.data.icon_url,
    url: result.data.url,
    value: result.data.value,
    parent: null,
    internal: {
      type: 'Joke',
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(result.data))
        .digest(`hex`),
    },
  })
}