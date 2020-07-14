import React from 'react';
import './Player.css';
import { connect } from 'react-redux';

const Player = ({ left, top, skin }) => {

  return(
    <img 
      src={skin} 
      alt="player" 
      className="Player" 
      style={{top: `${top}px`, left: `${left}px`}} 
    />
  );
};

const mapStateToProps = (state) => ({
  left : state.left,
  top: state.top,
  skin: state.player.skin
})

export default connect(mapStateToProps)(Player);