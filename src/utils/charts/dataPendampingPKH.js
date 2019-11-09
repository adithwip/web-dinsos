import _ from "lodash"

const convertDataPendampingPKHToChartData = (dataJson, type) => {
    const dataPendampingGroupedByWilayah = _.mapValues(_.groupBy(dataJson, 'wilayah'), clist => clist.map(data => _.omit(data, 'make')))

    if (typeof type === 'string' && type === 'labels') {    
        const fields = _.keys(dataPendampingGroupedByWilayah)
        let cleanFields = []
        fields.forEach(wilayah => {
            cleanFields.push(wilayah.replace("DKI JAKARTA - ", ""))
        })
        return cleanFields
    }

    if (typeof type === 'string' && type === 'data') {
        const data = _.map(dataPendampingGroupedByWilayah, (value, key) => value.length)

        let colorList = ["red","blue","yellow","green","cyan","black","white"];
        
        let listJabatan = []
        _.map(dataPendampingGroupedByWilayah, (daftarPKHWilayah, key) => {
            const groupByJabatan = _.mapValues(_.groupBy(daftarPKHWilayah, 'jabatan'), clist => clist.map(data => _.omit(data, 'make')))
            listJabatan = _.union(listJabatan, _.keys(groupByJabatan))
        })

        let listData = []
        listJabatan.forEach( jabatan => {
            let tempCount = []
            _.map(dataPendampingGroupedByWilayah, (daftarPKHWilayah, wilayah) => {
                const groupByJabatan = _.mapValues(_.groupBy(daftarPKHWilayah, 'jabatan'), clist => clist.map(data => _.omit(data, 'make')))
                let count = 0;
                _.map(groupByJabatan, (value, jabatanTemp) => {
                    if (jabatanTemp == jabatan) {
                        count = value.length
                    }
                })
                tempCount.push(count)
            })

            listData.push(
                {
                    label : jabatan,
                    backgroundColor: colorList.shift(),
                    data : tempCount
                }
            )
        })

        return listData
    }

    if (typeof type !== 'string' || type == null) {
        throw new Error('You should give type as second argument [labels || data]')
    }
}

export { convertDataPendampingPKHToChartData }