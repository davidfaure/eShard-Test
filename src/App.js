import React from "react"

import Maze from "./Maze"
import generateMaze from "./generateMaze"

import "./App.css"
import DimensionChoice from "./components/DimensionChoice"
import { connect } from "react-redux"

// const maze = generateMaze()

function App( {dimension} ) {
  // console.log(maze)
  console.log(dimension.width)

  return (
    <div className="App">
    {dimension.width > 0 && dimension.height > 0 ? (
      <Maze />
    )
    :
    (
      <DimensionChoice />
    )
    }
    </div>
  )
}

const mapStateToProps = (state) => ({
  dimension: state.dimensions
});

export default connect(mapStateToProps)(App);
