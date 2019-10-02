import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Radium, { StyleRoot } from "radium"
import { zoomIn, slideInUp } from "react-animations"
import Swipe from "react-easy-swipe"

import Layout from "../components/layout"
import SEO from "../components/seo"

import arrowLeft from "../images/arrow-left.png"
import arrowRight from "../images/arrow-right.png"

import "../css/responsive/index.css"

const styles = {
  zoomIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(zoomIn, "zoomIn"),
  },
  slideInUp: {
    animation: "x 1s",
    animationName: Radium.keyframes(slideInUp, "slideInUp"),
  },
}

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activePage: 1 }

    this.rightButtonClick = this.rightButtonClick.bind(this)
    this.leftButtonClick = this.leftButtonClick.bind(this)
    this.onSwipeMove = this.onSwipeMove.bind(this)
  }

  pages = [
    <div
      style={styles.zoomIn}
      className="-display-flex -justify-content-center -align-items-center"
    >
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
    <div
      style={styles.slideInUp}
      className="-display-flex -justify-content-center -align-items-center"
    >
      {/* <Image
        className="-height-viewport -width-100"
        fluid={this.props.data.gta.childImageSharp.fluid}
      /> */}
      <div className="-font-size-heading">
        Video games are held to lower regard than other forms of art, despite
        being just as effective at telling stories as books or movies. A common
        argument against video games is that they are violent and destructive
        for kids to play. While this can be true in cases such as Grand Theft
        Auto or Call of Duty, this is a shallow analysis, cherrypicking games on
        the extreme of the spectrum.
      </div>
    </div>,
    <div
      style={styles.zoomIn}
      className="-display-flex -justify-content-center -align-items-center"
    >
      {/* <Image
        className="-height-viewport -width-100"
        fluid={this.props.data.gta.childImageSharp.fluid}
      /> */}
      <div className="-font-size-heading">
        Generalizing video games in such a way is unfair. If this same logic was
        applied to books and movies, the argument could be made that many books
        such as Lord of the Flies and the entire action/horror movie genre are
        equally as destructive. Focusing instead on games created with greater
        intent, reveals many great pieces of art. Just as there is a plethora of
        amazing, meaningful books and movies available to read or watch, despite
        some odd fruit, their are plenty of video games that tell great stories.
      </div>
    </div>,
    <div
      style={styles.slideInUp}
      className="-display-flex -justify-content-center -align-items-center"
    >
      {/* <Image
        className="-height-viewport -width-100"
        fluid={this.props.data.gta.childImageSharp.fluid}
      /> */}
      <div className="-font-size-heading">
        Videogames actually have an advantage in telling a story:
        User-interaction. In writing, people can only experience the story
        through one dimension, their imagination. This is expanded upon in
        movies, videos, and live performances, with visuals and sound. Video
        games add another dimension of story telling in user-interaction. This
        user interaction can tell a story in a very different way. The games
        Journey and Loneliness are able to use game mechanics to tell a very
        rich story without any dialogue.
      </div>
    </div>,
    <div
      style={styles.zoomIn}
      className="-display-flex -justify-content-center -align-items-center"
    >
      {/* <Image
            className="-height-viewport -width-100"
            fluid={this.props.data.gta.childImageSharp.fluid}
          /> */}
      <div className="-font-size-heading">
        Instead of explicitly being told a story, the world's reactions to your
        actions show you the story. These are called the games mechanics. A very
        simplistic example of this is the game Loneliness. In Lonliness you are
        a black square. You can move around in a space. As you move through the
        space you may encounter other squares. If the player is to move towards
        any of these squares, they will "run" and fade away. This is the
        entirety of the game, but it is still able to tell a story. The player
        of the game projects their own meaning onto these simple game mechanics
        and interactions with the world.
      </div>
    </div>,
    <div
      style={styles.slideInUp}
      className="-display-flex -justify-content-center -align-items-center"
    >
      {/* <Image
                className="-height-viewport -width-100"
                fluid={this.props.data.gta.childImageSharp.fluid}
              /> */}
      <div className="-font-size-heading">
        Using mechanics in a much less simplistic way, breathtaking works of art
        can be made. Like Journey. Journey is a video game with no dialogue, but
        a strong story no narrator. It also has amazing visuals, a fantastic
        score. In fact in follows the heros journey, a common archetype(I think
        this is the word not sure though) used in many great myths and stories.
        It is able to do mainly through game mechanics with some supplemental
        cutscenes. It takes simple, natural game mechanics and tells the player
        about the world with them.
      </div>
    </div>,
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
            className="-position-absolute -display-flex -justify-content-space-between -align-items-center -directions-0"
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
            <StyleRoot>{this.pages[this.state.activePage - 1]}</StyleRoot>
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
  }
`
