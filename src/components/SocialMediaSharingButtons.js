import React from "react"
import styled from "styled-components"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const StyledSocialButton = styled.div`
  padding: 8px 16px;
  background-color: ${props => props.bgColor};
  color: white;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  & > a {
    color: white;
  }

  & > a:hover {
    text-decoration: none;
  }
`

const SocialButton = ({ url, bgColor, socialName }) => {
  return (
    <StyledSocialButton bgColor={bgColor}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {socialName}
      </a>
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
