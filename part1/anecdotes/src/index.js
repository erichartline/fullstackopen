import React, { useState } from "react"
import ReactDOM from "react-dom"

const App = ({ anecdotes }) => {
  const voteList = new Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(voteList)
  const [mostVotesIndex, setMostVotesIndex] = useState(0)

  const handleAnecdoteClick = () => {
    const random = Math.floor(Math.random() * (anecdotes.length - 1))
    setSelected(random)
  }

  const handleVoteClick = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
    if (votesCopy[selected] > votes[mostVotesIndex]) {
      setMostVotesIndex(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <div>
        <button onClick={handleVoteClick}>vote</button>
        <button onClick={handleAnecdoteClick}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotesIndex]}</p>
      <p>has {votes[mostVotesIndex]} votes</p>
    </div>
  )
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"))
