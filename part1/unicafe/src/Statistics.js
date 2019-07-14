import React from "react"
import Statistic from "./Statistic"

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const avg = (good - bad) / total
  const positive = (good / total) * 100

  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={avg} />
          <Statistic text="positive" value={positive + "%"} />
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
