import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import axios from "axios"
import { Doughnut, HorizontalBar } from "react-chartjs-2"

import { dataPkhArray, createDataForMaps } from "../../utils/functions"

import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

import Layout from "../../layouts/Layout"
import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

export const query = graphql`
  query {
    # allDataPkh {
    #   edges {
    #     node {
    #       wilayah
    #       total
    #       tahun
    #     }
    #   }
    # }

    jakartaMap: file(relativePath: { eq: "images/jakarta-maps-01.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const StyledPaper = styled(Paper)`
  padding: 32px 16px;
`

class DataPKH extends React.Component {
  state = {
    dataPkh: null,
    error: false,
    loading: false,
  }

  fetchDataPkh = () => {
    this.setState({ loading: true })
    axios
      .get(`https://rasetprojects.com/pusdatin/api/v1/opendata/summary/pkh`, {
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
    const { data } = this.props
    const { dataPkh, error, loading } = this.state
    const dataForMaps = createDataForMaps(dataPkh)

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
  
    const MapData = (
      <Item align="center">
        <div style={{ position: 'relative', width: 300, margin: '0 auto'}}>
          <Img
            alt="jakarta-map"
            fixed={data.jakartaMap.childImageSharp.fixed}
          />
          {!!dataForMaps && dataForMaps.map(data => (
            <div key={data.id} style={{ position: "absolute", top: data.top, left: data.left }}>
              <Chip color="primary" label={data.label} />
            </div>
          ))}
      </div>
        </Item>
    )
  
    const GraphData = (
      <>
        <Item flex={1}>
          <Doughnut
            data={chartDataDoughnut}
          />
        </Item>
        <Item flex={1}>
          <HorizontalBar
            data={chartDataBar}
          />
        </Item>
      </>
    )
  
    const TableData = (
      <Item>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{'Kabupaten/Kota'}</TableCell>
              <TableCell align="right">{'Jumlah KPM'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!dataPkh && dataPkh.map(data => (
              <TableRow key={data.total}>
                <TableCell>{data.wilayah}</TableCell>
                <TableCell align="right">{data.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Item>
    )
  
    return (
      <Layout siteTitle="Data page" siteDescription="Pusat data dinas sosial">
        <StyledPaper>
          {!!loading && <p>Fetching data from data source...</p>}
          {!loading && (
            <Container flexDirection="column" spacing={32}>  
              <Item><Typography variant="h4">Data Penerima PKH</Typography></Item>
              {MapData}
              {GraphData}
              {TableData}
            </Container>
          )}
          {!!error && <p>There is something wrong. Maybe check your connections or refresh...</p>}
        </StyledPaper>
      </Layout>
    )
  }
}

export default DataPKH
