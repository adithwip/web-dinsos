const createDataForMaps = dataFromState => {
  const dataForMaps = []
  let objectId = 0
  !!dataFromState &&
    dataFromState.forEach(data => {
      objectId++
      switch (data.wilayah) {
        case "Kabupaten Kepulauan Seribu":
          dataForMaps.push({
            id: objectId,
            top: "1%",
            left: "37%",
            label: data.total,
          })
          break
        case "Kota Jakarta Utara":
          dataForMaps.push({
            id: objectId,
            top: "30%",
            left: "15%",
            label: data.total,
          })
          break
        case "Kota Jakarta Pusat":
          dataForMaps.push({
            id: objectId,
            top: "15%",
            left: "68%",
            label: data.total,
          })
          break
        case "Kota Jakarta Selatan":
          dataForMaps.push({
            id: objectId,
            top: "31%",
            left: "44%",
            label: data.total,
          })
          break
        case "Kota Jakarta Timur":
          dataForMaps.push({
            id: objectId,
            top: "58%",
            left: "33%",
            label: data.total,
          })
          break
        case "Kota Jakarta Barat":
          dataForMaps.push({
            id: objectId,
            top: "42%",
            left: "67%",
            label: data.total,
          })
          break
        default:
          dataForMaps.push({})
      }
    })
  return dataForMaps
}
const shuffleArray = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export { createDataForMaps, shuffleArray }
