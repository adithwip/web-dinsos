const dataPkhArray = (type, dataFromState) => {
  let arr = []
  !!dataFromState &&
    dataFromState.forEach(data => {
      type === "area" && arr.push(data.wilayah)
      type === "total" && arr.push(data.total)
    })
  return arr
}

export { dataPkhArray }