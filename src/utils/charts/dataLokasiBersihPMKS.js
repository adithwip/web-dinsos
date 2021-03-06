import _ from "lodash"

const convertToDataPMKSGroupedByMonth = (dataBersihPMKS) => {
  const dataPMKSGroupedByMonth = _.mapValues(_.groupBy(dataBersihPMKS, 'bulan'), clist => clist.map(data => _.omit(data, 'make')))

  return dataPMKSGroupedByMonth
}

const getDataPMKSGroupByMonthNames = (dataBersihPMKS) => {
  if (dataBersihPMKS) {
    const dataPMKSGroupedByMonth = convertToDataPMKSGroupedByMonth(dataBersihPMKS)
    const dataPMKSGroupedKeys = _.keys(dataPMKSGroupedByMonth)
    const monthName = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    const monthNamesArr = []

    !!dataBersihPMKS && dataPMKSGroupedKeys.forEach(arr => {
      monthNamesArr.push(monthName[Number(arr) - 1])
    })
  
    return monthNamesArr
  }
}

const converDataPMKSToChartDataSetsByArea = (dataBersihPMKS) => {
  const dataPMKSGroupedByMonth = convertToDataPMKSGroupedByMonth(dataBersihPMKS)

  const totalJakutData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const totalJakselData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const totalJakpusData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const totalJaktimData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const totalJakbarData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const totalDinsosData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  _.map(dataPMKSGroupedByMonth, (value, key) => {
    const groupedByWilayah = _.mapValues(_.groupBy(value, 'wilayah'), clist => clist.map(data => _.omit(data, 'make')))

    _.map(groupedByWilayah, (value, key) => {
      value.forEach(val => {
        if (val.wilayah === 'Jakarta Selatan') {
          totalJakselData[val.bulan - 1] += val.jumlah
        }
        if (val.wilayah === 'Jakarta Barat') {
          totalJakbarData[val.bulan - 1] += val.jumlah
        }
        if (val.wilayah === 'Jakarta Timur') {
          totalJaktimData[val.bulan - 1] += val.jumlah
        }
        if (val.wilayah === 'Jakarta Utara') {
          totalJakutData[val.bulan - 1] += val.jumlah
        }
        if (val.wilayah === 'Jakarta Pusat') {
          totalJakpusData[val.bulan - 1] += val.jumlah
        }
        if (val.wilayah === 'Dinas Sosial') {
          totalDinsosData[val.bulan - 1] += val.jumlah
        }
      })
    })
  })

  return (
    [
      {
        type: 'bar',
        label: 'Dinas Sosial',
        backgroundColor: '#00171F',
        data: totalDinsosData
      },
      {
        type: 'bar',
        label: 'Jakarta Pusat',
        backgroundColor: '#D36582',
        data: totalJakpusData
      },
      {
        type: 'bar',
        label: 'Jakarta Utara',
        backgroundColor: '#3772FF',
        data: totalJakutData
      },
      {
        type: 'bar',
        label: 'Jakarta Barat',
        backgroundColor: '#2F4858',
        data: totalJakbarData
      },
      {
        type: 'bar',
        label: 'Jakarta Selatan',
        backgroundColor: '#246A73',
        data: totalJakselData
      },
      {
        type: 'bar',
        label: 'Jakarta Timur',
        backgroundColor: '#3A1772',
        data: totalJaktimData
      },
    ]
  )
}

export { getDataPMKSGroupByMonthNames, converDataPMKSToChartDataSetsByArea }