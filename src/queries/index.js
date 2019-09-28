import { graphql } from 'gatsby'

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 3000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const fluidImageTraced = graphql`
  fragment fluidImageTraced on File {
    childImageSharp {
      fluid(maxWidth: 3000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`
