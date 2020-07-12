import React from "react"
import * as images from "./images"
import "./Maze.css"
import { connect } from "react-redux"

function Maze({ maze }) {

  const getImg = (cell) => {
    if (cell.isEntrance) {
      return images.stairsUp
    }
    return cell.passable ? images.floor : images.wall

  }

  console.log(maze);
  return (
    <div className="Maze">
      {maze && maze.tiles.map(row => (
        <div className="Maze-row">
          {row.map((cell, index) => (
            <img key={index} src={getImg(cell)} alt="" />
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
