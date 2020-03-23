import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../../ChartCard"
import Chart from "../../Chart"
import TotalChartData from "../../TotalChartData"

import Container from "../../../layouts/Container"
import Item from "../../../layouts/Item"

class FMOTMByBantuanChart extends React.Component {
  state = {
    dataJson: null,
    error: false,
    loading: false,
  }

  fetchDataAPI = () => {
    this.setState({ loading: true })
    axios
    //   .get(api,  { crossdomain: true })
      .get(`https://api.myjson.com/bins/oohd6`, { crossdomain: true })
      .then(result => {
        const { data } = result.data
        this.setState({
          loading: false,
          dataJson: data,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  componentDidMount() {
    this.fetchDataAPI()
  }

  render() {
    const { dataJson } = this.state

    const extractData = (type, dataFromState) => {
        let arr = []
        !!dataFromState && dataFromState.forEach(data => {
            type === "keterangan" && arr.push(data.keterangan)
            type === "total" && arr.push(data.total)
        })

        return arr
    }
    
    const chartDataBar = {
        labels: extractData('keterangan', dataJson),
        datasets: [
          {
            label: 'Penerima Bantuan',
            backgroundColor: ['#324376','#E7EBC5','#646881','#C6D8FF','#0C0910 ','#F9DC5C'],
            data: extractData('total', dataJson)
          }
        ]
      }
  
      const customOptions = {
        legend : { display: false },
        scales : {
          xAxes:[{
            ticks: { fontColor: "rgb(25,25,25)" }
          }],
          yAxes:[{
            ticks: { fontColor: "rgb(25,25,25)" }
          }]
        },
        plugins: {
          datalabels: {
              formatter: function(value, context) {
                  return value > 0 ? value : "";
              },
              color: 'black',
              anchor: 'end',
              align: 'end',
              labels: {
                  title: {
                      font: {
                          weight: 'bold'
                      }
                  },
                  value: {
                      color: 'black'
                  }
              }
          }
        },
      }

    return (
      <ChartCard title="FMOTM Berdasarkan Jenis Bantuan">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>
            <Item flex={1}>
              <Chart type="horizontalBar" data={chartDataBar} options={ customOptions } />
            </Item>
            <Item flex={1}>
              <TotalChartData data={extractData('total', dataJson)} />
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default FMOTMByBantuanChart