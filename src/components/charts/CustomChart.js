import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"

import Chart from "../Chart"
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { convertDataPKHtoChartData } from "../../utils/charts/dataPKH"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

Chart.plugins.unregister(ChartDataLabels);

class CustomChart extends React.Component {
  state = {
    dataPkh: null,
    error: false,
    loading: false,
  }

  fetchDataPkh = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.myjson.com/bins/1g0h31`, {
        crossdomain: true,
      })
      .then(result => {
        const { data } = result.data
        this.setState({
          loading: false,
          dataPkh: data,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  componentDidMount() {
    // this.fetchDataPkh()
    this.setState({
      loading: false, 
      dataPkh : [
        {"wilayah":"Kabupaten Kepulauan Seribu","total":181,"tahun":2019},
        {"wilayah":"Kota Jakarta Utara","total":6890,"tahun":2019},
        {"wilayah":"Kota Jakarta Pusat","total":4071,"tahun":2019},
        {"wilayah":"Kota Jakarta Selatan","total":11169,"tahun":2019},
        {"wilayah":"Kota Jakarta Timur","total":6047,"tahun":2019},
        {"wilayah":"Kota Jakarta Barat","total":3506,"tahun":2019}
      ]
    })
  }

  render() {
    const { dataPkh,  } = this.state
  
    const chartDataBar = {
      labels: convertDataPKHtoChartData(dataPkh, 'labels'),
      datasets: [
        {
          label: 'FMOTM',
          backgroundColor: ['red','yellow','magenta','blue','green','cyan'],
          data: convertDataPKHtoChartData(dataPkh, 'data')
        }
      ]
    }

    const customOptions = {
      legend : { 
        display: false,
      },
      scales : {
        xAxes:[{
          ticks: {
            fontColor: "white"
          }
        }],
        yAxes:[{
          ticks: {
            fontColor: "white"
          }
        }]
      }
    }

    return (
      /*<ChartCard title="Sebaran FMOTM berdasarkan Wilayah">*/
      <ChartCard title={this.props.title}>
        <Grid
          style={{ height: "100%", backgroundColor: "#418189", borderColor: "#fff" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16} >
            <Item flex={1}>
              <Chart type="bar" data={chartDataBar} options={ customOptions } />
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default CustomChart