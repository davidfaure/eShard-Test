import React from 'react';
import styled, { keyframes } from 'styled-components';
import { flipInY } from 'react-animations';
import Player from '../Player/Player';
import Maze from '../Maze/Maze';

const flipAnimation = keyframes`${flipInY}`;

const FlipDiv = styled.div`
  animation: 2s ${flipAnimation};
`;

const BoardGame = () => {
  return (
    <FlipDiv className="BoardGame">
      <Player />
      <Maze />
    </FlipDiv>
  );
}

export default BoardGame;