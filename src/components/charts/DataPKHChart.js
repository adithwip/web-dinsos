import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"
import { Doughnut, HorizontalBar } from "react-chartjs-2"
import { dataPkhArray } from "../../utils/charts/dataPKHChart"

import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

class DataPKHChart extends React.Component {
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
    this.fetchDataPkh()
  }

  render() {
    const { dataPkh, error, loading } = this.state

    const chartDataDoughnut = {
      labels: dataPkhArray('area', dataPkh),
      datasets: [
        {
          label: 'Jumlah Penerima PKH Tahun 2019',
          backgroundColor: [
          '#1572E8',
          '#F03A47',
          '#F0A202',
          '#06D6A0',
          '#FFCE56',
          '#36A2EB',
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#36A2EB',
          '#FFCE56',
          '#FFCE56',
          '#FF6384',
          ],
          data: dataPkhArray('total', dataPkh)
        }
      ]
    }
  
    const chartDataBar = {
      labels: dataPkhArray('area', dataPkh),
      datasets: [
        {
          label: 'Jumlah Penerima PKH Tahun 2019',
          backgroundColor: 'rgba(255,199,132,0.2)',
          borderColor: 'rgba(255,199,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: dataPkhArray('total', dataPkh)
        }
      ]
    }

    return (
      <ChartCard title="Data Penerima PKH" to="data/data-pkh">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>
            {/* <Item flex={1}>
              <Doughnut
                data={chartDataDoughnut}
              />
            </Item> */}
            <Item flex={1}>
              <HorizontalBar
                data={chartDataBar}
              />
            </Item>
          </Container>
        </Grid>
      </ChartCard>
    )
  }
}

export default DataPKHChart