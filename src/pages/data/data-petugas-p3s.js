import React from "react"
import styled from "styled-components"

import Paper from "@material-ui/core/Paper"
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

const createData = (name, role) => {
  return { name, role }
}

const rowsData = [
  createData('Achmad Alif Syihabuddin', 'Petugas P3S'),
  createData('Pebri Andika', 'Petugas P3S'),
  createData('Bagas Sulaksono', 'Petugas P3S'),
  createData('Candra Iriantono', 'Petugas P3S'),
  createData('Ahmad Nurasura Fahmi', 'Petugas P3S'),
  createData('Rachmat Prabowo', 'Petugas P3S'),
  createData('Hana Triaputri', 'Petugas P3S'),
  createData('Pandu Winarto', 'Petugas P3S'),
  createData('Sari Rahmadhani', 'Petugas P3S'),
  createData('Wahyu Julisman', 'Petugas P3S'),
  createData('Risma Triwahyuni', 'Petugas P3S'),
  createData('Putri Zahria Arfah', 'Petugas P3S'),
  createData('Muhammad Daud Gustaman', 'Petugas P3S'),
  createData('Tri Widodo Yuwono', 'Petugas P3S'),
  createData('Mahendra Bagus Prasetya', 'Petugas P3S'),
  createData('Muhammad Rizky Zarkasih', 'Petugas P3S'),
  createData('Ivan Ananda Putra', 'Petugas P3S'),
  createData('Rahmat Setiawan', 'Petugas P3S'),
  createData('Muhammada Ridwan Fakhriy', 'Petugas P3S'),
  createData('Amalia Mardhia Ersa', 'Petugas P3S'),
]

const DataP3S = () => {

  const TableData = (
    <Item>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{'Nama PJLP'}</TableCell>
            <TableCell align="right">{'Jabatan/Jenis Pekerjaan'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map(row => (
            <TableRow>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
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
          <Item><Typography variant="h4">Data Petugas Pelayanan Pengawasan dan Pengendalian Sosial</Typography></Item>
          {TableData}
        </Container>
      </StyledPaper>
    </Layout>
  )
}

export default DataP3S
