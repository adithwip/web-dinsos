import React from "react"
import axios from "axios"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"

const StyleContainer = styled(Grid)`
  padding: 32px;
  background-color: #f6f6f6;
`

const StyledCard = styled(Card)`
  padding: 16px 24px;
  text-align: center;
  background-color: #f9f5ff;
  height: 100px;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #d7d8de;
    text-decoration: none;
  }
`

class GaleriAplikasi extends React.Component {
    state = { dataJson: null, error: false, loading: false }

    fetchData = () => {
      this.setState({ loading: true })
      axios
        .get(`http://104.43.9.40:8089/api/v1/cms/links?type=aplikasi`, {
          crossdomain: true,
        })
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

    render () {
        const { dataJson } = this.state

        return (
            <StyleContainer container id="aplikasi" spacing={3}>
                <Grid container xs={12} spacing={3}>
                    {!!dataJson &&                         
                        (dataJson.data).map(aplikasi => {
                            return (
                                <Grid container item xs={12} sm={6} md={3} lg={2} >
                                    <a href={ aplikasi.url } target="_blank" style={{ width:"100%", height:"100%" }}>
                                        <StyledCard>
                                            <Typography variant="body2">{ aplikasi.title }</Typography>
                                        </StyledCard>
                                    </a>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </StyleContainer>
        )
    }

}

export default GaleriAplikasi