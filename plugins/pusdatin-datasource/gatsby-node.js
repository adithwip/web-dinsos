const axios = require('axios')
const crypto = require('crypto')

// const API_URI = 'https://api.chucknorris.io/jokes/random'
// const API_URI = 'https://rasetprojects.com/pusdatin/api/v1/cms/news'
const NEWS_API_URL = 'http://siaplus.pusdatin-dinsos.jakarta.go.id/api/v1/cms/news'
// const PKH_API_URI = 'https://rasetprojects.com/pusdatin/sample/json/1.data_penerima_pkh.json'

//TODO
// alimshare note: 
// Lim, ini tempat buat fetch API yang bakalan dikonek ke GraphQL
// Beda cara sama yang chart, kalo yang ini build-time fetch
// Kalo yang chart itu client-side fetch
// Karena di berita kita gak perlu ada pake query string sebagai url param
// Makanya kita bisa pake source-plugin ini
// Sumber refensi bisa dibaca di sini https://www.wildsmithstudio.com/blog/using-remote-resources-with-gatsby/

exports.sourceNodes = async ({boundActionCreators}) => {
  const {createNode} = boundActionCreators
  const result = await axios.get(NEWS_API_URL)

  console.log("result data", result.data)
  // Cara liat log ini,
  // Waktu npm run develop, bakal muncul di terminal/cmd

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