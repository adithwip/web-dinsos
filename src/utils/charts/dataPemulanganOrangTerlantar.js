import _ from "lodash"

const convertDataPemulanganToChartData = (dataPemulangan, type) => {
  const dataPemulanganGroupedByMonth = _.mapValues(_.groupBy(dataPemulangan, 'bulan'), clist => clist.map(data => _.omit(data, 'make')))

  if (typeof type === 'string' && type === 'labels') {
    
    const dataPemulanganGroupedKeys = _.keys(dataPemulanganGroupedByMonth)
  
    const monthName = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    
    const monthNamesArr = []
    
  
    !!dataPemulangan && dataPemulanganGroupedKeys.forEach(arr => {
      monthNamesArr.push(monthName[Number(arr) - 1])
    })
  
    return monthNamesArr

  }

  if (typeof type === 'string' && type === 'data') {
    const data = _.map(dataPemulanganGroupedByMonth, (value, key) => value.length)

    return data
  }

  if (typeof type !== 'string' || type == null) {
    throw new Error('You should give type as second argument [labels || data]')
  }
}

export { convertDataPemulanganToChartData }