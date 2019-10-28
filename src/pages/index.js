import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/Layout"
import Head from "@components/Head"
import Hero from "@components/Hero"
import Projects from "@components/Projects"
import PropTypes from "prop-types"
import { ParallaxProvider } from "react-scroll-parallax"

const IndexPage = ({ data }) => {
  return (
    <ParallaxProvider>
      <Layout>
        <Head title="Home" />
        <Hero data={data.hero.edges} />
        <Projects />
      </Layout>
    </ParallaxProvider>
  )
}
IndexPage.prototype = {
  data: PropTypes.object.isRequired,
}
export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            name
            title
            sub
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 700
                  quality: 90
                  traceSVG: { color: "#64ffda" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
