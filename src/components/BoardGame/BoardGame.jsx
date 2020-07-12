import React from 'react';
import Player from '../Player/Player';
import Maze from '../Maze/Maze';

const BoardGame = () => {
  return (
    <div className="BoardGame">
      <Player />
      <Maze />
    </div>
  );
}

export default BoardGame;