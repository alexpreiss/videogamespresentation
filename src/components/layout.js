import React from "react"
import PropTypes from "prop-types"

import "../css/utility.css"
import "../css/responsive/utility.css"
import "../css/global.css"
import "../css/fonts.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
