import React from "react"
import styled from "styled-components"
import axios from "axios"

const Wrapper = styled.div`
    width : 100%;
    position: relative;

    & div {        
        position: absolute;
        top: -10px;
        white-space: nowrap;
        line-height: 25px;
        animation: marquee 30s linear infinite;
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
        .get(`http://104.43.9.40:8089/api/v1/cms/headlines`, {crossdomain: true})
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
                                <span> {data.content} &#9900; </span>
                            )
                        })                        
                    }
                </div>    
            </Wrapper>
        )

    }
}

export default RunningText