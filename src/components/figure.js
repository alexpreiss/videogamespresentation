import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import "../css/components/figure.css"

export default class Figure extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    body: PropTypes.array,
    alt: PropTypes.string,
    fluid: PropTypes.object,
    headingIsH1: PropTypes.bool,
  }

  static defaultPropTypes = {
    headingIsH1: false,
  }

  render() {
    return (
      <section className="figure">
        <div className="figure-content -padding-top-3 -padding-bottom-3">
          {this.props.heading && this.props.subHeading ? (
            <>
              {this.props.headingIsH1 ? (
                <h1 className="-color-orange -text-align-center  -font-weight-600 -content-fit-figure -font-size-heading">
                  {this.props.heading}
                </h1>
              ) : (
                <div className="-color-orange -text-align-center  -font-weight-600 -content-fit-figure -font-size-heading">
                  {this.props.heading}
                </div>
              )}
              <div className="-margin-top-2 -font-weight-600 -color-black -text-align-center -font-size-sub-heading -content-fit-figure">
                {this.props.subHeading}
              </div>

              {this.props.body.map(content => (
                <div
                  key={Math.random()}
                  className="-font-size-body -text-align-left -margin-top-3 -color-grey -content-fit-figure "
                >
                  {content}
                </div>
              ))}
            </>
          ) : (
            <>
              <div className=" -font-weight-600 -color-orange -text-align-center -font-size-sub-heading -content-fit-figure">
                {this.props.subHeading}
              </div>
              {this.props.body.map(content => (
                <div
                  key={Math.random()}
                  className="-font-size-body -text-align-left -margin-top-3 -color-black -content-fit-figure "
                >
                  {content}
                </div>
              ))}
            </>
          )}
        </div>
        <div className="figure-img-container">
          <Img
            className="figure-img"
            fluid={this.props.fluid}
            alt={this.props.alt}
          />
        </div>
      </section>
    )
  }
}
