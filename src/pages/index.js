import React from "react"
import { graphql } from "gatsby"
import Swipe from "react-easy-swipe"
import { StyleRoot } from "radium"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  SlideOne,
  SlideTwo,
  SlideThree,
  SlideFour,
  SlideFive,
  SlideSix,
  SlideSeven,
} from "../components/slides"

import arrowLeft from "../images/arrow-left.png"
import arrowRight from "../images/arrow-right.png"

import "../css/responsive/index.css"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activePage: 1 }

    this.rightButtonClick = this.rightButtonClick.bind(this)
    this.leftButtonClick = this.leftButtonClick.bind(this)
    this.onSwipeMove = this.onSwipeMove.bind(this)
  }

  pages = [
    <SlideOne
      desktop={this.props.data.journey.childImageSharp.fluid}
      mobile={this.props.data.journeyMobile.childImageSharp.fluid}
    />,
    <SlideTwo src={this.props.data.gaben.childImageSharp.fluid} />,
    <SlideThree src={this.props.data.burningBooks.childImageSharp.fluid} />,
    <SlideFour />,
    <SlideFive />,
    <SlideSix />,
    <SlideSeven />,
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

  onSwipeMove(position, event) {
    position.x > 50 && this.rightButtonClick()
    position.x < -50 && this.leftButtonClick()
  }

  render() {
    return (
      <Layout>
        <SEO title="Video Game Presentation" />
        <div className="-height-viewport">
          <div
            style={{
              zIndex: "2",
            }}
            className="-position-fixed -display-flex -justify-content-space-between -align-items-center -directions-0"
          >
            <div className=" -width-100 -padding-bottom-1 -padding-top-1 -padding-right-2 -padding-left-2 -display-flex -justify-content-space-between">
              <div onClick={this.leftButtonClick}>
                <img
                  style={{ height: "15px", cursor: "pointer" }}
                  src={arrowLeft}
                  className="nav-arrow"
                />
              </div>

              <div onClick={this.rightButtonClick}>
                <img
                  style={{ height: "15px", cursor: "pointer" }}
                  src={arrowRight}
                  className="nav-arrow"
                />
              </div>
            </div>
          </div>
          <Swipe onSwipeMove={this.onSwipeMove}>
            <StyleRoot>
              <div>{this.pages[this.state.activePage - 1]}</div>
            </StyleRoot>
          </Swipe>
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
    gaben: file(relativePath: { eq: "gaben.jpg" }) {
      ...fluidImage
    }
    burningBooks: file(relativePath: { eq: "burning-books.jpg" }) {
      ...fluidImage
    }
  }
`
