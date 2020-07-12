import React, {useRef, useEffect, useState} from "react"
import { leftArrow, rightArrow, upArrow, downArrow } from './redux/action';
import "./App.css"
import DimensionChoice from "./components/DimensionChoice"
import { connect } from "react-redux"
import BoardGame from "./components/BoardGame/BoardGame"

function App( { top, left, dimension, dispatch, maze } ) {

const [ready, setReady] = useState(false);
const maxWidth = 32 * dimension.width
const maxHeight = 32 * (dimension.height-1)

 const appRef = useRef(null)

 useEffect(() => {
   if(appRef.current) {
    appRef.current.focus();
   }
 }, [appRef])

  const handleKeyPress = (e) => {
    switch(e.key) {
      case 'ArrowDown':
        return top < maxWidth && dispatch(downArrow());
      case 'ArrowUp':
        return top > 32 && dispatch(upArrow());
      case 'ArrowRight':
        return left < maxHeight && dispatch(rightArrow());
      case 'ArrowLeft':
          return left > 0 && dispatch(leftArrow());
      default:
        return null;
    }
  }

  const handleReady = () => {
    if (dimension.width > 0 && dimension.height > 0) {
      setReady(true)
    }
  }

  return (
    <div 
      className="App" 
      ref={appRef} 
      onKeyDown={handleKeyPress} 
      onClick={handleReady}
      tabIndex="-1">
    {dimension.width > 0 && dimension.height > 0 ? (
      <>
      {!ready && <div>Cliquez pour commencer !</div>}
      <BoardGame />
      </>
    ):(<DimensionChoice />)
    }
    </div>
  )
}

const mapStateToProps = (state) => ({
  dimension: state.dimensions,
  top: state.top,
  left: state.left,
  maze: state.maze
});

export default connect(mapStateToProps)(App);
