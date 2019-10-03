import React from "react"
import Image from "gatsby-image"
import { zoomIn, slideInUp } from "react-animations"
import Radium from "radium"

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

export class SlideOne extends React.Component {
  render() {
    return (
      <div
        style={styles.zoomIn}
        className="-display-flex -justify-content-center -align-items-center"
      >
        <Image
          className="journey-image-desktop -height-viewport -width-100"
          fluid={this.props.desktop}
        />
        <Image
          className="journey-image-mobile -height-100 -width-100"
          fluid={this.props.mobile}
        />
        <div className="-font-family-mansalva -position-absolute -font-size-sub-heading -color-white">
          Video Games as Art
        </div>
      </div>
    )
  }
}
export class SlideTwo extends React.Component {
  render() {
    return (
      <div
        style={styles.slideInUp}
        className="-padding-3 -flex-direction-column -display-flex -justify-content-center -align-items-center"
      >
        <Image className="-width-100" fluid={this.props.src} />

        <div className="-font-size-sub-heading -margin-top-3">
          Video games are held to lower regard than other forms of art, despite
          being just as effective at telling stories. A common argument against
          video games is that they are too violent and destructive for kids to
          play. While this can be true in cases such as{" "}
          <span className="-font-family-gta">Grand Theft Auto</span> or
          <span className="-font-family-cod"> Call of Duty</span>, this is a
          shallow analysis as it cherry-picks games on the extreme of the video
          game spectrum.
        </div>
      </div>
    )
  }
}
export class SlideThree extends React.Component {
  render() {
    return (
      <div
        style={styles.slideInUp}
        className="-padding-3 -flex-direction-column -display-flex -justify-content-center -align-items-center"
      >
        <Image className="-width-100" fluid={this.props.src} />

        <div className="-font-size-sub-heading -margin-top-3">
          Generalizing video games in such a way is unfair. If this same logic
          was applied to books and movies, an argument could be made that
          multiple books such as <i> Lord of the Flies </i> and the entire
          action/horror movie genres are equally as destructive. Games are often
          created with deeper intent and focusing on these games reveals many
          great games that could be considered pieces of art. Just as there are
          a plethora of amazing, meaningful books and movies available to read
          or watch, with some exceptions, there are plenty of video games that
          tell great stories.
        </div>
      </div>
    )
  }
}
export class SlideFour extends React.Component {
  render() {
    return (
      <div
        style={styles.slideInUp}
        className="-display-flex -justify-content-center -align-items-center"
      >
        {/* <Image
          className="-height-viewport -width-100"
          fluid={this.props.data.gta.childImageSharp.fluid}
        /> */}
        <div className="-font-size-sub-heading">
          Videogames actually have an advantage in storytelling through their
          user-interaction. User-interaction in video games is the player's
          ability to interact with the digital world, generally by controlling a
          character. In textual forms of art, the story can only be experienced
          through one dimension, their imagination. This is expanded upon in
          movies, videos, and live performances, where visuals and sound help
          deepen the storytelling experience. Video games add another dimension
          of storytelling with user-interaction. The games{" "}
          <span className="-font-family-journey">Journey</span> and{" "}
          <i>Loneliness</i> are able to use game mechanics to tell a rich story
          without any dialogue.
        </div>
      </div>
    )
  }
}
export class SlideFive extends React.Component {
  render() {
    return (
      <div
        style={styles.zoomIn}
        className="-display-flex -justify-content-center -align-items-center"
      >
        {/* <Image
                className="-height-viewport -width-100"
                fluid={this.props.data.gta.childImageSharp.fluid}
              /> */}
        <div className="-font-size-sub-heading">
          Instead of explicitly being told a story, these games' worlds react to
          the player's actions in order to communicate a story. These are called
          the games <i>mechanics</i>. A very simplistic example of this is the
          game
          <i>Loneliness</i>. In <i>Loneliness</i> the player is a black square.
          They move around in a space. As they move through the space they may
          encounter other squares. If the player is to move towards any of these
          squares, they will "run" and fade away. This is the entirety of the
          game, but it is still able to tell a story. The player of the game
          projects their own meaning onto these simple game mechanics and
          interactions with the world.
        </div>
      </div>
    )
  }
}
export class SlideSix extends React.Component {
  render() {
    return (
      <div
        style={styles.slideInUp}
        className="-display-flex -justify-content-center -align-items-center"
      >
        {/* <Image
                  className="-height-viewport -width-100"
                  fluid={this.props.data.gta.childImageSharp.fluid}
                /> */}
        <div className="-font-size-sub-heading">
          Using mechanics in a much less simplistic way, breathtaking works of
          art can be made. A good example is the game <i>Journey</i>.{" "}
          <i>Journey</i> is a video game with no dialogue or narrator, that
          still manages to tell a strong story. It also has amazing visuals, a
          fantastic score, in fact it was the first videogame ever nominated for
          a Grammy. It follows The Hero's Journey, a common story model used in
          many great myths and stories. It is able to do this mainly through
          game mechanics with some supplemental cutscenes. It takes simple,
          natural game mechanics and tells the player about the world through
          them. Experiencing reactions to their actions can make the user feel
          much more connected to the story as they are experiencing the cause
          and effect. These reactions are governed by the game's mechanics and
          rules.
        </div>
      </div>
    )
  }
}
export class SlideSeven extends React.Component {
  render() {
    return (
      <div
        style={styles.slideInUp}
        className="-display-flex -justify-content-center -align-items-center"
      >
        {/* <Image
                  className="-height-viewport -width-100"
                  fluid={this.props.data.gta.childImageSharp.fluid}
                /> */}
        <div className="-font-size-sub-heading">
          There are plently of games just like Journey and Loneliness which are
          specifically created with the intent of communicating a higher meaning
          or story. There are also games that aren't created with that intent
          however, but they are not necessarily destructive either. Instead
          these games could be equated to games such as basketball or chess,
          created with the intent of making the player think critically or
          develop motor and teamwork skills in order to compete. Examples of
          these games are Counter-Strike which is equated the basketball or
          Magic the Gathering / Hearthstone and Civilization which can be
          equated to chess.
        </div>
      </div>
    )
  }
}
