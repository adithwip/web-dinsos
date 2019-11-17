import React from "react"
import { graphql } from "gatsby"
import styled, { css } from "styled-components"

import Paper from "@material-ui/core/Paper"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from "@material-ui/core/Table"
import Typography from "@material-ui/core/Typography"
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

const StyledTabPanel = styled.div`
  width: 100%;
  ${props => (props.value !== props.index) && css`
      display: none;
  `}
`

const createData = (location, district) => {
  return { location, district }
}

const southDkiData = [
  createData('Depan kampus budi luhur', 'Pesanggrahan'),
  createData('Lamer Perdatam Ulujami', 'Pesanggrahan'),
  createData('Pertigaan Kesehatan', 'Pesanggrahan'),
  createData('Taman Ayodia', 'Kebayoran Baru'),
  createData('Taman Hangtuah', 'Kebayoran Baru'),
  createData('Senopati', 'Kebayoran Baru'),
]

const northDkiData = [
  createData('Lamer Perdatam Ulujami', 'Cilincing'),
  createData('Depan kampus budi luhur', 'Cilincing'),
  createData('Taman Ayodia', 'Koja'),
  createData('Senopati', 'Koja'),
  createData('Taman Hangtuah', 'Koja'),
  createData('Pertigaan Kesehatan', 'Cilincing'),
]

const westDkiData = [
  createData('Pertigaan Kesehatan', 'Taman Sari'),
  createData('Lamer Perdatam Ulujami', 'Taman Sari'),
  createData('Taman Ayodia', 'Kalideres'),
  createData('Senopati', 'Kalideres'),
  createData('Taman Hangtuah', 'Kalideres'),
  createData('Depan kampus budi luhur', 'Taman Sari'),
]

const centralDkiData = [
  createData('Senopati', 'Senen'),
  createData('Pertigaan Kesehatan', 'Tanah Abang'),
  createData('Lamer Perdatam Ulujami', 'Tanah Abang'),
  createData('Depan kampus budi luhur', 'Tanah Abang'),
  createData('Taman Hangtuah', 'Senen'),
  createData('Taman Ayodia', 'Senen'),
]

const eastDkiData = [
  createData('Senopati', 'Jatinegara'),
  createData('Depan kampus budi luhur', 'Kramat Jati'),
  createData('Pertigaan Kesehatan', 'Kramat Jati'),
  createData('Taman Ayodia', 'Jatinegara'),
  createData('Lamer Perdatam Ulujami', 'Kramat Jati'),
  createData('Taman Hangtuah', 'Jatinegara'),
]

export default function DataPMKS () {
  const [value, setValue] = React.useState(0)
  
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const TableData = (rowsData) => (
    <Item>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{'Lokasi'}</TableCell>
            <TableCell align="right">{'Kecamatan'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map(row => (
            <TableRow>
              <TableCell>{row.location}</TableCell>
              <TableCell align="right">{row.district}</TableCell>
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
          <Item><Typography variant="h4">Lokasi Strategis Rawan PMKS</Typography></Item>
          <Item>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Jakarta Selatan" />
                <Tab label="Jakarta Utara" />
                <Tab label="Jakarta Barat" />
                <Tab label="Jakarta Pusat" />
                <Tab label="Jakarta Timur" />
              </Tabs>
            </AppBar>
            <StyledTabPanel value={value} index={0} >
              {TableData(southDkiData)}
            </StyledTabPanel>
            <StyledTabPanel value={value} index={1} >
              {TableData(northDkiData)}
            </StyledTabPanel>
            <StyledTabPanel value={value} index={2} >
              {TableData(westDkiData)}
            </StyledTabPanel>
            <StyledTabPanel value={value} index={3} >
              {TableData(centralDkiData)}
            </StyledTabPanel>
            <StyledTabPanel value={value} index={4} >
              {TableData(eastDkiData)}
            </StyledTabPanel>
          </Item>

        </Container>
      </StyledPaper>
    </Layout>
  )
}
