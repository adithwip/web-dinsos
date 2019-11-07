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
    // console.log('Semester', groupBySemester)

    if (typeof type === 'string' && type === 'labels') {    
        const labels = _.keys(_.mapValues(_.groupBy(dataJson, 'wilayah'), clist => clist.map(data => _.omit(data, 'make'))))
        // return ['Jakarta Pusat', 'Jakarta Utara', 'Jakarta Barat', 'Jakarta Selatan', 'Jakarta Timur', 'Kepulauan Seribu']
        return labels
    }

    if (typeof type === 'string' && type === 'data') {        
        const labels = _.keys(groupBySemester)

        const datasets = []
        _.map(groupBySemester, (dataPerSemester, semester) => {
            const groupByWilayah = _.mapValues(_.groupBy(dataPerSemester, 'wilayah'), clist => clist.map(data => _.omit(data, 'make')))
            // console.log(semester, groupByWilayah)
            
            const dataKUBE  = []
            const dataUEP   = []
            const dataPKH   = []
            _.map(groupByWilayah, (dataPerWilayah, wilayah) => {
                console.log(wilayah, dataPerWilayah)
            //     const objWilayah = groupByWilayah[labelWilayah]
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

        // console.log(datasets)
        return datasets

        // return [
        //     {
        //       type: 'bar',
        //       label: 'UEP',
        //       stack : '1',
        //       backgroundColor: '#66BB6A',
        //       data: [50, 25, 12, 10]
        //     },
        //     {
        //       type: 'bar',
        //       label: 'KUBE',
        //       stack : '1',
        //       backgroundColor: '#FFCA28',
        //       data: [21, , 24]
        //     },
        //     {
        //       type: 'bar',
        //       label: 'Wirausaha PKH',
        //       stack : '1',
        //       backgroundColor: '#FFCA28',
        //       data: [21, , 24]
        //     },
        //     {
        //       type: 'bar',
        //       label: 'UEP',
        //       stack : '2',
        //       backgroundColor: '#66BB6A',
        //       data: [41, 52, 24]
        //     },
        //     {
        //       type: 'bar',
        //       label: 'KUBE',
        //       stack : '2',
        //       backgroundColor: '#666888',
        //       data: [30, 25, 100]
        //     },
        //     {
        //       type: 'bar',
        //       label: 'Wirausaha PKH',
        //       stack : '2',
        //       backgroundColor: '#ff7f90',
        //       data: [30, 25, 100]
        //     }
        //   ]
    }

    if (typeof type !== 'string' || type == null) {
        throw new Error('You should give type as second argument [labels || data]')
    }
}

export { convertDataFakirMiskinMandiriToChartData }