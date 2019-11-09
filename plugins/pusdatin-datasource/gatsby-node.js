const axios = require('axios')
const crypto = require('crypto')

// const API_URI = 'https://api.chucknorris.io/jokes/random'
const API_URI = 'https://rasetprojects.com/pusdatin/api/v1/cms/news'
// const PKH_API_URI = 'https://rasetprojects.com/pusdatin/sample/json/1.data_penerima_pkh.json'

exports.sourceNodes = async ({boundActionCreators}) => {
  const {createNode} = boundActionCreators
  const result = await axios.get(API_URI)

  // console.log("result data", result.data)

  await result.data.data.forEach(el => {
      createNode({
        children: [],
        id: el.id.toString(),
        title: el.title,
        created_at: el.created_at,
        content: el.content,
        category: el.category,
        parent: null,
        internal: {
          type: 'PusdatinNews',
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(el))
            .digest(`hex`),
        }
      })  
    });
}

// exports.sourceNodes = async ({boundActionCreators}) => {
//   const {createNode} = boundActionCreators
//   const result = await axios.get(PKH_API_URI)

//   console.log("result data ====", result.data.data)

//   await result.data.data.forEach(el => {
//       createNode({
//         children: [],
//         id: el.wilayah.toString(),
//         wilayah: el.wilayah.toString(),
//         total: Number(el.total),
//         tahun: Number(el.total),
//         parent: null,
//         internal: {
//           type: 'DataPKH',
//           contentDigest: crypto
//             .createHash(`md5`)
//             .update(JSON.stringify(el))
//             .digest(`hex`),
//         }
//       })  
//     });
// }