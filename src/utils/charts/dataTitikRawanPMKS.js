const convertDataTitikPMKStoChartData = (dataFromState, type) => {
  let arr = []
  !!dataFromState &&
    dataFromState.forEach(data => {
      type === "labels" && arr.push(data.wilayah)
      type === "data" && arr.push(data.total)
    })
  return arr
}

export { convertDataTitikPMKStoChartData }