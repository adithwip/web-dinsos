import React from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"

import ChartCard from "../ChartCard"
import { Chart } from "@bit/primefaces.primereact.chart"
import { convertDataPKHtoChartData } from "../../utils/charts/dataPKH"

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

    const chartDataBar = {
      labels: convertDataPKHtoChartData(dataPkh, "labels"),
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#C42021',
          borderColor: '#C42021',
          borderWidth: 1,
          hoverBackgroundColor: '#C42021',
          hoverBorderColor: '#C42021',
          data: convertDataPKHtoChartData(dataPkh, "data")
        }
      ]
    };
    

    return (
      <ChartCard title="Data Penerima PKH" to="data/data-pkh">
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
        >
          <Container flexDirection="column" spacing={16}>

            <Item flex={1}>
              <Chart
                type="bar"
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