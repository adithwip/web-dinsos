import React from "react"
import styled from "styled-components"
import axios from "axios"

import PusdatinLogo from "../images/icon.png"

const Wrapper = styled.div`
    width : 100%;
    position: relative;

    & div {        
        position: absolute;
        top: -12px;
        white-space: nowrap;
        line-height: 25px;
        animation: marquee 30s linear infinite;
        display: flex;
        align-items: baseline;
    }
    
    @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100% ); }
    }
`



class RunningText extends React.Component {
    state = { dataJson: null, error: false, loading: false }
  
    fetchData = () => {
      this.setState({ loading: true })
  
      axios
        .get(`http://siaplus.pusdatin-dinsos.jakarta.go.id/api/v1/cms/headlines`, {crossdomain: true})
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

    render() {
        const { dataJson } = this.state    
        let duration = this.props.duration || 30 ;
    
        return (
            <Wrapper>
                <div style={{ animationDuration:`${duration}s` }}>
                    {
                        !!dataJson && dataJson.map((data)=>{
                            return (
                                <span> {data.content} <img src={PusdatinLogo} width="18px" style={{ margin:"-3px 8px" }} /> </span> 
                            )
                        })                        
                    }
                </div>    
            </Wrapper>
        )

    }
}

export default RunningText