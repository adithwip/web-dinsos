import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Doughnut } from "react-chartjs-2"

import Layout from "../../layouts/Layout"
import Container from "../../layouts/Container"
import Item from "../../layouts/Item"

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
        data: [820, 14265, 7830, 13633, 16757, 140464]
      }
    ]
  }

  return (
    <Layout noGrid siteTitle="Data page" siteDescription="Pusat data dinas sosial">
      <Container flexDirection="column">
        <Item>
          <Img
            // src={data.jakartaMap.childImageSharp.fixed.publicUrl}
            // alt=""
            usemap="#Map"
            fixed={data.jakartaMap.childImageSharp.fixed}
          />
          <map name="Map" id="Map">
            <area
              alt=""
              title=""
              href="#"
              shape="poly"
              coords="31,40,58,41,79,70,114,96,149,114,177,118,213,114,233,114,240,133,218,135,197,135,195,147,206,159,210,172,210,180,203,197,195,208,177,208,167,213,163,221,161,233,108,233,85,233,57,165,37,155,27,116"
            />
            <area
              alt=""
              title=""
              href="#"
              shape="poly"
              coords="234,98,221,86,199,90,198,103,170,110,111,83,77,44,81,34,156,52,208,63,332,39,433,38,466,35,471,116,442,139,383,139,389,165,275,124"
            />
            {/* [...] */}
          </map>
        </Item>
        <Item flex={1}>
          <Doughnut
            data={chartData}
          />
        </Item>
      </Container>
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
