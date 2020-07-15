import React, {useRef, useEffect, useState} from "react";
import { leftArrow, rightArrow, upArrow, downArrow } from './redux/action';
import "./App.css";
import DimensionChoice from "./components/DimensionChoice/DimensionChoice";
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import { connect } from "react-redux";
import BoardGame from "./components/BoardGame/BoardGame";

const zoomAnimation = keyframes`${zoomIn}`;

const ZoomDiv = styled.div`
  animation: 1s ${zoomAnimation};
`;

function App( { top, left, dimension, dispatch } ) {

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
      {!ready && <ZoomDiv className="start-game">Cliquez pour commencer !</ZoomDiv>}
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
});

export default connect(mapStateToProps)(App);
