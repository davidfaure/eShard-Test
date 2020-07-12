import React from 'react';
import playerImg from '../../images/player.png';
import './Player.css';
import { connect } from 'react-redux';

const Player = ({ left, top }) => {

  return(
    <img 
      src={playerImg} 
      alt="player" 
      className="Player" 
      style={{top: `${top}px`, left: `${left}px`}} 
    />
  );
};

const mapStateToProps = (state) => ({
  left : state.left,
  top: state.top,
})

export default connect(mapStateToProps)(Player);