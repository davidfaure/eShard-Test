import React from "react"
import * as images from "../../images"
import "./Maze.css"
import { connect } from "react-redux"

function Maze({ maze }) {

  const getImg = (cell) => {
    if (cell.isEntrance) {
      return images.stairsUp
    }
    if (cell.isExit) {
      return images.stairsDown
    }
    return cell.passable ? images.floor : images.wall
  }

  const passable = maze.tiles.map(element => element.filter(element2 => Object.values(element2).includes("Floor")));
  console.log(passable.map(element => element));

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
