import _ from "lodash"

const convertDataJandaPerintisKemerdekaanToChartData = (dataJson, type, semester) => {
    const filterBySemester = _.filter(dataJson, ['semester', semester]);
    const dataPendampingGroupedByWilayah = _.mapValues(_.groupBy(filterBySemester, 'wilayah'), clist => clist.map(data => _.omit(data, 'make')))
    
    if (typeof type === 'string' && type === 'labels') {    
        const fields = _.keys(dataPendampingGroupedByWilayah)
        return fields
    }

    if (typeof type === 'string' && type === 'data') {
        const data = _.map(dataPendampingGroupedByWilayah, (value, key) => value.length)
        return data
    }

    if (typeof type !== 'string' || type == null) {
        throw new Error('You should give type as second argument [labels || data]')
    }
}

export { convertDataJandaPerintisKemerdekaanToChartData }