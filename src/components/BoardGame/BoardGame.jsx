import React from 'react';
import styled, { keyframes } from 'styled-components';
import { flipInY, tada } from 'react-animations';
import Player from '../Player/Player';
import Maze from '../Maze/Maze';
import { connect } from 'react-redux';
import './BoardGame.css';

const flipAnimation = keyframes`${flipInY}`;
const tadaAnimation = keyframes`${tada}`;

const FlipDiv = styled.div`
  animation: 2s ${flipAnimation};
`;

const TadaDiv = styled.div`
  animation: 2s ${tadaAnimation};
`;

const BoardGame = ({ hasWin }) => {
  return (
    <>
      <FlipDiv className="BoardGame">
        <Player />
        <Maze />
      </FlipDiv>
      <div
        className={
          hasWin ? 'Modal-Background' : 'Modal-Background Hide-Modal'
        }
      >
        <TadaDiv className="ModalTricky-Container">
          <div className="Modal-Container">
            <h1>FÉLICITATIONS !...</h1>
            <h2>
              Vous avez trouvé la sortie du labyrinthe !
            </h2>
            <button type="button" onClick={() => window.location.reload()}>
              Recommencez
            </button>
          </div>
        </TadaDiv>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  hasWin: state.hasWon,
})

export default connect(mapStateToProps)(BoardGame);