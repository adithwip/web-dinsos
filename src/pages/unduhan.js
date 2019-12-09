import React from "react"
import axios from "axios"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../layouts/Layout"

import KontakSection from "../components/KontakSection"
import Footer from "../components/Footer"
import PopularNews from "../components/PopularNews"

import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import SearchForm from "../components/SearchForm"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDownload
} from "@fortawesome/free-solid-svg-icons"

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledGrid = styled(Grid)`
  margin: 64px auto;
  width: 100%;

  @media (max-width: 767px) {
    margin: 16px auto;
    width: 100%;
  }

  th:first-child, td:first-child {
    padding-left: 16px;
  }
`

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
// const useStyles = makeStyles({
//     root: {
//       width: '100%',
//       overflowX: 'auto',
//     },
//     table: {
//       minWidth: 700,
//     },
//     button: {
//       margin: theme.spacing(1),
//     },
// });

class UnduhanPage extends React.Component {
  state = { dataJson: null, error: false, loading: false }

  fetchData = () => {
    this.setState({ loading: true })

    const queryString = require("query-string")
    const parsed = queryString.parse(this.props.location.search)

    axios
      .get(
        `http://104.43.9.40:8089/api/v1/cms/downloads?perpage=10&page=${parsed.page}`,
        {
          crossdomain: true,
        }
      )
      .then(result => {
        const { data } = result
        this.setState({ dataJson: data, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false, error: error })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  buttonGroup(start, end, current = 1) {
    let endPage = current + 4 < end ? current + 4 : end

    let startPage = current
    startPage = endPage - startPage < 5 ? endPage - 4 : startPage
    startPage = startPage < 0 ? 1 : startPage

    const key = "page"

    const list = []
    for (let i = startPage; i <= endPage; i++) {
      if (i == current) {
        list.push(
          <Button id={i} variant="contained" color="primary">
            {i}
          </Button>
        )
      } else {
        list.push(
          <Button id={i} href={`?${key}=${i}`}>
            {i}
          </Button>
        )
      }
    }

    /* first & prev navigation */
    if (current > 1) {
      const prev = start - 1 < 1 ? 1 : start - 1
      list.unshift(
        <Button id="prev" href={`?${key}=${prev}`}>
          &lt;
        </Button>
      )
      list.unshift(
        <Button id="first" href={`?${key}=1`}>
          &lt;&lt;
        </Button>
      )
    }

    /* next & last navigation */
    if (current < end) {
      const next = start + 1 > end ? end : start + 1
      list.push(
        <Button id="next" href={`?${key}=${next}`}>
          &gt;
        </Button>
      )
      list.push(
        <Button id="last" href={`?${key}=${end}`}>
          &gt;&gt;
        </Button>
      )
    }

    return list
  }

  

  render() {
    const { dataJson } = this.state
    
    function download(e, id) {
        e.preventDefault();
        let downloadUrl = `http://104.43.9.40:8089/api/v1/cms/download/${id}`;
        console.log('Download File : '+ downloadUrl);
        window.open(downloadUrl);
      }

    return (
      <Wrapper>
        <Layout
          noGrid
          siteTitle="Unduhan"
          siteDescription="Unduhan Pusat Data dan Informasi Jaminan Sosial, Dinas Sosial Provinsi DKI Jakarta"
        >
          <StyledGrid
            container
            justify="center"
            alignContent="center"
            spacing={2}
            style={{ marginTop: "0px", minHeight: "500px" }}
          >
            <Grid item xs={12}>
              <h1>Unduhan</h1>
            </Grid>

            <Grid item xs={12}>
              <p>
                Berikut adalah berkas digital yang dapat Anda unduh dalam Situs Pusdatin Jamsos Provinsi DKI Jakartaa
              </p>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={8}>

                    <Table aria-label="customized table" style={{ width:"100%" }}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Nama</StyledTableCell>
                                <StyledTableCell>Keterangan</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {!!dataJson && dataJson.data.map(data => {
                            console.log(data)
                            return (                                   
                                <StyledTableRow key={data.id}>
                                    <StyledTableCell component="th" scope="row">{data.name}</StyledTableCell>
                                    <StyledTableCell align="left">{data.description}</StyledTableCell>
                                    <StyledTableCell align="center">                                        
                                        <Button
                                            variant="contained"
                                            color="default"
                                            onClick={ (e) => download(e, data.id) }
                                        >
                                            <FontAwesomeIcon icon={faDownload} /> &nbsp; Unduh
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            )
                        })}
                        </TableBody>
                    </Table>
                  

                  <Grid
                    item
                    container
                    xs={12}
                    style={{ marginTop: "1rem" }}
                    justify="center"
                    >
                    <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                        variant="outlined"
                    >
                        {!!dataJson &&
                        this.buttonGroup(
                            dataJson.current_page,
                            dataJson.last_page,
                            dataJson.current_page
                        )}
                    </ButtonGroup>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <SearchForm />
                  <h3>Berita Populer</h3>
                  <PopularNews />
                </Grid>
              </Grid>
            </Grid>
          </StyledGrid>
        </Layout>
        <KontakSection id="kontak" />
        <Footer background="#0A369D" color="#9E9E9E" />
      </Wrapper>
    )
  }
}

export default UnduhanPage
