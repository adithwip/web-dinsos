import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import "../styles/index.css"

import PageContainer from "./PageContainer"
import Container from "./Container"
import Item from "./Item"

import Header from "../components/Header"

const Layout = ({
  siteTitle,
  siteDescription,
  siteType,
  siteUrl,
  siteImage,
  children,
  noPageContainer,
  noGrid,
  mobileFirst,
  mobileView,
  noMargin,
}) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:type" content={siteType || "website"} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content="Blog image" />
      {siteUrl && <meta property="og:url" content={siteUrl} />}
      <meta name="Description" content={siteDescription} />
      <title>{`Pusdatin Dinsos Provinsi DKI Jakarta - ${siteTitle}`}</title>
      <link rel="canonical" href="https://pusdatin-dinsos-dev.netlify.com" />
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"
      />
      <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
    </Helmet>
    <Header />
    {!noPageContainer && !noGrid && (
      <PageContainer
        mobileFirst={mobileFirst}
        mobileView={mobileView}
        noMargin={noMargin}
      >
        <Container flexDirection="column">
          <Item>{children}</Item>
        </Container>
      </PageContainer>
    )}
    {noPageContainer && !noGrid && (
      <Container flexDirection="column">
        <Item>{children}</Item>
      </Container>
    )}
    {noGrid && (
      <PageContainer mobileFirst={mobileFirst} noMargin={noMargin}>
        {children}
      </PageContainer>
    )}

    {/* <Footer /> */}
  </React.Fragment>
)

Layout.propTypes = {
  noPageContainer: PropTypes.bool,
  noGrid: PropTypes.bool,
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
  siteType: PropTypes.string,
  siteImage: PropTypes.string,
  siteUrl: PropTypes.string,
  children: PropTypes.any,
  mobileView: PropTypes.any,
  mobileView: PropTypes.any,
  noMargin: PropTypes.any,
}

Layout.defaultProps = {
  noPageContainer: false,
  noGrid: false,
  mobileFirst: false,
  mobileView: false,
  noMargin: false,
}

export default Layout
