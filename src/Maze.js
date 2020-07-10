import React from "react"
import generateMaze from "./generateMaze"

import * as images from "./images"
import "./Maze.css"
import { connect } from "react-redux"

function Maze({ maze }) {

  // const maze = generateMaze()
  return (
    <div className="Maze">
      {maze && maze.tiles.map(row => (
        <div className="Maze-row">
          {row.map(cell => (
            <img src={cell.passable ? images.floor : images.wall} alt="" />
          ))}
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  maze: state.maze,
})

export default connect(mapStateToProps)(Maze);
