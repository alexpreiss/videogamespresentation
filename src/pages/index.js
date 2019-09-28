import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/responsive/index.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Video Game Presentation" />
    <div className="-display-flex -height-viewport -justify-content-center -align-items-center">
      <Image
        className="journey-image-desktop -height-100 -width-100"
        fluid={data.journey.childImageSharp.fluid}
      />
      <Image
        className="journey-image-mobile -height-100 -width-100"
        fluid={data.journeyMobile.childImageSharp.fluid}
      />
      <div className="-font-family-mansalva -position-absolute -font-size-heading -color-white">
        Video Games as Art
      </div>
    </div>
    <div className="-display-flex -font-size-body -font-family-journey -height-viewport">
      Video games are held to lower regard than other forms of art, despite
      being just as effective at telling stories as books or movies. A common
      argument against video games is that they are violent and destructive for
      kids to play. This is a shallow analysis of video games as they are
      picking games on an extreme of the spectrum and generalizing all video
      games.
    </div>
  </Layout>
)

export const query = graphql`
  query {
    journey: file(relativePath: { eq: "journey-image.jpg" }) {
      ...fluidImage
    }
    journeyMobile: file(relativePath: { eq: "journey-image-mobile.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
