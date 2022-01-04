import React from "react"
import ReactDOM from "react-dom"
import Router from "./router/router"
import "./styles/common.css"

const reactRootNode = document.getElementById("react-root")

ReactDOM.render(
  <React.Fragment>
    <Router />
  </React.Fragment>,
  reactRootNode,
)
