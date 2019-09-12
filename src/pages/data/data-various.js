import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

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

const DataVarious = ({ data }) => {

  return (
    <Layout siteTitle="Data page" siteDescription="Pusat data dinas sosial">
      <StyledPaper>
        <Container flexDirection="column" spacing={32}>  
          <Item><Typography variant="h4">Data Petugas Pelayanan Pengawasan dan Pengendalian Sosial</Typography></Item>
          <Item><Img fluid={data.ImageOne.childImageSharp.fluid} /></Item>
          <Item><Img fluid={data.ImageTwo.childImageSharp.fluid} /></Item>
          <Item><Img fluid={data.ImageThree.childImageSharp.fluid} /></Item>
        </Container>
      </StyledPaper>
    </Layout>
  )
}

export default DataVarious

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "images/data-var-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "images/data-var-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "images/data-var-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
