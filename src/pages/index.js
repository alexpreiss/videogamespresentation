import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import arrowLeft from "../images/arrow-left.png"
import arrowRight from "../images/arrow-right.png"

import "../css/responsive/index.css"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activePage: 1 }

    this.rightButtonClick = this.rightButtonClick.bind(this)
    this.leftButtonClick = this.leftButtonClick.bind(this)
  }

  pages = [
    <div className="-display-flex -justify-content-center -align-items-center">
      <Image
        className="journey-image-desktop -height-viewport -width-100"
        fluid={this.props.data.journey.childImageSharp.fluid}
      />
      <Image
        className="journey-image-mobile -height-100 -width-100"
        fluid={this.props.data.journeyMobile.childImageSharp.fluid}
      />
      <div className="-font-family-mansalva -position-absolute -font-size-heading -color-white">
        Video Games as Art
      </div>
    </div>,
    <div className="-display-flex -justify-content-center -align-items-center">
      {/* <Image
        className="-height-viewport -width-100"
        fluid={this.props.data.gta.childImageSharp.fluid}
      /> */}
      <div className="-font-family-mansalva -position-absolute -font-size-heading -color-black">
        Video games are held to lower regard than other forms of art, despite
        being just as effective at telling stories as books or movies. A common
        argument against video games is that they are violent and destructive
        for kids to play. This is a shallow analysis of video games as they are
        picking games on an extreme of the spectrum and generalizing all video
        games.
      </div>
    </div>,
    <div>page 3 hi ish</div>,
    <div>page 4 hi ish</div>,
    <div>page 5 hi ish</div>,
    <div>page 6 hi ish</div>,
    <div>page 7 hi ish</div>,
    <div>page 8 hi ish</div>,
  ]

  rightButtonClick() {
    if (this.state.activePage + 1 > this.pages.length) {
      this.setState({ activePage: 1 })
    } else {
      this.setState({ activePage: this.state.activePage + 1 })
    }
  }

  leftButtonClick() {
    if (this.state.activePage === 1) {
      this.setState({ activePage: this.pages.length })
    } else {
      this.setState({ activePage: this.state.activePage - 1 })
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Video Game Presentation" />
        <div className="-height-viewport">
          <div
            style={{
              zIndex: "2",
              bottom: "0",
              right: "0",
              left: "0",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
            className="-padding-bottom-1 -padding-top-1 -padding-right-2 -padding-left-2 -position-absolute -display-flex -justify-content-space-between"
          >
            <div onClick={this.leftButtonClick}>
              <img
                style={{ height: "15px", cursor: "pointer" }}
                src={arrowLeft}
              />
            </div>
            <div className="-color-white -font-family-hylian">
              {this.state.activePage} / {this.pages.length}
            </div>
            <div onClick={this.rightButtonClick}>
              <img
                style={{ height: "15px", cursor: "pointer" }}
                src={arrowRight}
              />
            </div>
          </div>
          {this.pages[this.state.activePage - 1]}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    journey: file(relativePath: { eq: "journey-image.jpg" }) {
      ...fluidImage
    }
    journeyMobile: file(relativePath: { eq: "journey-image-mobile.jpg" }) {
      ...fluidImage
    }
    gta: file(relativePath: { eq: "gta.jpg" }) {
      ...fluidImage
    }
  }
`
