import React from "react"
import Part from "./Part"

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(item => (
        <Part key={item.id} data={item} />
      ))}
    </div>
  )
}

export default Content
