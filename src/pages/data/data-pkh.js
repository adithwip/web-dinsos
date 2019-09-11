import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Doughnut, HorizontalBar } from "react-chartjs-2"

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

const StyledPaper = styled(Paper)`
  padding: 32px 16px;
`

const createData = (name, value) => {
  return { name, value }
}

const rowsData = [
  createData('Kab. Kepulauan Seribu', 820),
  createData('Kab. Jakarta Utara', 14265),
  createData('Kab. Jakarta Pusat', 7830),
  createData('Kab. Jakarta Selatan', 13633),
  createData('Kab. Jakarta Timur', 16757),
  createData('Kab. Jakarta Barat', 14064),
]

const DataPKH = ({ data }) => {
  const chartData = {
    labels: ['Kab. Kepulauan Seribu', 'Jakarta Utara', 'Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Barat'],
    datasets: [
      {
        label: 'Jumlah Penerima PKH Tahun 2019',
        backgroundColor: [
        '#36A2EB',
        '#FF6384',
        '#FFCE56',
        '#36A2EB',
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
        data: [820, 14265, 7830, 13633, 16757, 14064]
      }
    ]
  }

  const chartData2 = {
    labels: ['Kab. Kepulauan Seribu', 'Jakarta Utara', 'Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Barat'],
    datasets: [
      {
        label: 'Jumlah Penerima PKH Tahun 2019',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [820, 14265, 7830, 13633, 16757, 14064]
      }
    ]
  }

  const MapData = (
    <Item align="center">
      <div style={{ position: 'relative', width: 300, margin: '0 auto'}}>
        <Img
          // src={data.jakartaMap.childImageSharp.fixed.publicUrl}
          // alt=""
          usemap="#Map"
          fixed={data.jakartaMap.childImageSharp.fixed}
        />
        <div style={{ position: "absolute", top: '30%', left: '15%' }}>
          <Chip color="primary" label={14064} />
        </div>
        <div style={{ position: "absolute", top: '15%', left: '70%' }}>
          <Chip color="primary" label={14265} />
        </div>
        <div style={{ position: "absolute", top: '22%', left: '45%' }}>
          <Chip color="primary" label={7830} />
        </div>
        <div style={{ position: "absolute", top: '65%', left: '35%' }}>
          <Chip color="primary" label={13633} />
        </div>
        <div style={{ position: "absolute", top: '40%', left: '65%' }}>
          <Chip color="primary" label={16757} />
        </div>
    </div>
      </Item>
  )

  const GraphData = (
    <>
      <Item flex={1}>
        <Doughnut
          data={chartData}
        />
      </Item>
      <Item flex={1}>
        <HorizontalBar
          data={chartData2}
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
          {rowsData.map(row => (
            <TableRow>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Item>
  )

  return (
    <Layout siteTitle="Data page" siteDescription="Pusat data dinas sosial">
      <StyledPaper>
        <Container flexDirection="column" spacing={32}>  
          <Item><Typography variant="h4">Data Penerima PKH</Typography></Item>
          {MapData}
          {GraphData}
          {TableData}
        </Container>
      </StyledPaper>
    </Layout>
  )
}

export default DataPKH

export const query = graphql`
  query {
    jakartaMap: file(relativePath: { eq: "images/jakarta-maps.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
