import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../../ChartCard"
import Chart from "../../Chart"
import TotalChartData from "../../TotalChartData"

import Container from "../../../layouts/Container"
import Item from "../../../layouts/Item"

class FMOTMByWilayahChart extends React.Component {
  state = {
    dataJson: null,
    error: false,
    loading: false,
  }

  fetchDataAPI = () => {
    this.setState({ loading: true })
    axios
    //   .get(api, { crossdomain: true })
      .get(`https://api.myjson.com/bins/16hccq`, { crossdomain: true })
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
            type === "kabupaten" && arr.push(data.kabupaten)
            type === "total" && arr.push(data.total)
        })

        return arr
    }

    const randomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    const chartDataBar = {
        labels: extractData('kabupaten', dataJson),
        datasets: [
          {
            label: 'Fakir Miskin / Orang Tidak Mampu',
            backgroundColor: [randomColor(), randomColor(),randomColor(),randomColor(),randomColor(),randomColor()],
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
      <ChartCard title="FMOTM Berdasarkan Wilayah">
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

export default FMOTMByWilayahChart