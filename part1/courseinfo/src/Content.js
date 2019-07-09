import React from "react"
import Part from "./Part"

const Content = ({ parts }) => (
  <div>
    <Part data={parts[0]} />
    <Part data={parts[1]} />
    <Part data={parts[2]} />
  </div>
)

export default Content
