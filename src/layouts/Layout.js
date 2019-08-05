import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import PageContainer from "./PageContainer"
import Container from "./Container"
import Item from "./Item"

import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({
  siteTitle,
  siteDescription,
  siteType,
  siteUrl,
  siteImage,
  children,
  noPageContainer,
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
      <title>{`Adith Widya Pradipta - ${siteTitle}`}</title>
      <link rel="canonical" href="https://naughty-booth-62a601.netlify.com/" />
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
    </Helmet>
    <Header />
    {!noPageContainer && (
      <PageContainer mobileFirst>
        <Container flexDirection="column">
          <Item>{children}</Item>
        </Container>
      </PageContainer>
    )}
    {noPageContainer && (
      <Container flexDirection="column">
        <Item>{children}</Item>
      </Container>
    )}
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  noPageContainer: PropTypes.bool,
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
  siteType: PropTypes.string,
  siteImage: PropTypes.string,
  siteUrl: PropTypes.string,
  children: PropTypes.element.isRequired,
}

Layout.defaultProps = {
  noPageContainer: false,
}

export default Layout
