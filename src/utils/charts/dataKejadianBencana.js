import _ from "lodash"

const randomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
    
    const dataKejadianBencanaGroupedByJenis = _.mapValues(_.groupBy(dataKejadianBencana, 'JENIS'), clist => clist.map(data => _.omit(data, 'make')))

    const labelBulan = _.keys(dataKejadianBencanaGroupedByMonth)

    const result = []
    const data2 = _.map(dataKejadianBencanaGroupedByJenis, (dataPerJenis, jenisBencana) => {
      const groupedByMonth = _.mapValues(_.groupBy(dataPerJenis, 'BULAN'), clist => clist.map(data => _.omit(data, 'make')))
      
      const jumlahKejadianBencanaByBulanBencana = []
      labelBulan.forEach( bulan => {
        jumlahKejadianBencanaByBulanBencana[bulan] = (groupedByMonth[bulan] === undefined ? 0 : (groupedByMonth[bulan].length > 0 ? groupedByMonth[bulan].length : 0))
      })

      result[jenisBencana] = jumlahKejadianBencanaByBulanBencana.slice(1)
    })

    const datasets = []
    for (let jenisBencana in result) {
      datasets.push({
        type: 'bar',
        label: jenisBencana,
        backgroundColor: randomColor(),
        data: result[jenisBencana]
      })
    }

    return datasets
  }

  if (typeof type !== 'string' || type == null) {
    throw new Error('You should give type as second argument [labels || data]')
  }
}

export { convertDataKejadianBencanaToChartData }