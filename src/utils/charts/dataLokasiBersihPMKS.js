import _ from "lodash"

const convertDataBersihPMKSToChartData = (dataBersihPMKS, type) => {
  const dataPMKSGroupedByType = _.mapValues(_.groupBy(dataBersihPMKS, 'jenis_pmks'), clist => clist.map(data => _.omit(data, 'make')))

  if (typeof type === 'string' && type === 'labels') {
    const dataPMKSGroupedKeys = _.keys(dataPMKSGroupedByType)

    console.log('labels', dataPMKSGroupedKeys)
    console.log('data', dataPMKSGroupedByType)
    return dataPMKSGroupedKeys
  }

  // if (typeof type === 'string' && type === 'month') {
  //   const dataMonth = _.map(dataPMKSGroupedByType, (value, key) => {
  //     value
  //   })
  // }
}

export { convertDataBersihPMKSToChartData }