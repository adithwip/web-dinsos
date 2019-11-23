import React from "react"
import styled from "styled-components"

import Grid from "@material-ui/core/Grid"

const StyledSocialButton = styled.a`
  padding: 8px 16px;
  background-color: ${props => props.bgColor};
  color: white;
`

const SocialButton = ({ url, bgColor, socialName }) => {
  return (
    <StyledSocialButton href={url} bgColor={bgColor} target="_blank" rel="noopener noreferrer">
      {socialName}
    </StyledSocialButton>
  )
}

class SocialMediaSharingButton extends React.Component {
  render() {
    const url = window.location.href
    console.log("url", url)

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
    const twitterUrl = `https://twitter.com/home?status=${url}`
    return (
      <Grid container spacing={2} justify="flex-end">
        <Grid item>
          <SocialButton
            url={facebookUrl}
            socialName="Facebook"
            bgColor="#4267B2"
          />
        </Grid>
        <Grid item>
          <SocialButton
            url={twitterUrl}
            socialName="Twitter"
            bgColor="#1DA1F2"
          />
        </Grid>
      </Grid>
    )
  }
}

export default SocialMediaSharingButton