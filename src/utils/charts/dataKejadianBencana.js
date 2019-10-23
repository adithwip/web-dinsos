import _ from "lodash"

const convertDataKejadianBencanaToChartData = (dataKejadianBencana, type) => {
  const dataKejadianBencanaGroupedByMonth = _.mapValues(_.groupBy(dataKejadianBencana, 'BULAN'), clist => clist.map(data => _.omit(data, 'make')))

  if (typeof type === 'string' && type === 'labels') {
    
    const dataKejadianBencanaGroupedKeys = _.keys(dataKejadianBencanaGroupedByMonth)
  
    const monthName = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    
    const monthNamesArr = []
    
  
    !!dataKejadianBencana && dataKejadianBencanaGroupedKeys.forEach(arr => {
      monthNamesArr.push(monthName[Number(arr) - 1])
    })
  
    return monthNamesArr

  }

  if (typeof type === 'string' && type === 'data') {
    const data = _.map(dataKejadianBencanaGroupedByMonth, (value, key) => value.length)

    return data
  }

  if (typeof type !== 'string' || type == null) {
    throw new Error('You should give type as second argument [labels || data]')
  }
}

export { convertDataKejadianBencanaToChartData }