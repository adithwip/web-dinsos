import _ from "lodash"

const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const convertDataFakirMiskinMandiriToChartData = (dataJson, type) => {
    const groupBySemester = _.mapValues(_.groupBy(dataJson, 'semester'), clist => clist.map(data => _.omit(data, 'make')))

    if (typeof type === 'string' && type === 'labels') {    
        const labels = _.keys(_.mapValues(_.groupBy(dataJson, 'wilayah'), clist => clist.map(data => _.omit(data, 'make'))))
        return labels
    }

    if (typeof type === 'string' && type === 'data') {        
        const datasets = []
        _.map(groupBySemester, (dataPerSemester, semester) => {
            const groupByWilayah = _.mapValues(_.groupBy(dataPerSemester, 'wilayah'), clist => clist.map(data => _.omit(data, 'make')))
            
            const dataKUBE  = []
            const dataUEP   = []
            const dataPKH   = []
            _.map(groupByWilayah, (dataPerWilayah, wilayah) => {
                dataKUBE.push(dataPerWilayah[0].kube)
                dataUEP.push(dataPerWilayah[0].uep)
                dataPKH.push(dataPerWilayah[0].pkh)
            });

            datasets.push({
                type: 'bar',
                label: 'UEP',
                stack : semester,
                backgroundColor: randomColor(),
                data: dataUEP
            })
            datasets.push({
                type: 'bar',
                label: 'KUBE',
                stack : semester,
                backgroundColor: randomColor(),
                data: dataKUBE
            })
            datasets.push({
                type: 'bar',
                label: 'Wirausaha PKH',
                stack : semester,
                backgroundColor: randomColor(),
                data: dataPKH
            })

        })

        return datasets
    }

    if (typeof type !== 'string' || type == null) {
        throw new Error('You should give type as second argument [labels || data]')
    }
}

export { convertDataFakirMiskinMandiriToChartData }