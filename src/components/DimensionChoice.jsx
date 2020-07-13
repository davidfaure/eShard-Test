import React, { useReducer, useState } from 'react';
import { connect } from 'react-redux';
import { setDimension, initialisePlayer } from '../redux/action';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import './DimensionChoice.css';

const zoomAnimation = keyframes`${zoomIn}`;

const ZoomDiv = styled.div`
  animation: 1s ${zoomAnimation};
`;

const DimensionChoice = ({ dispatch }) => {

  const [inputDim, SetInputDim] = useReducer(
    (state, newState) => ({...state, ...newState }),
    {
      width: 10,
      height: 10,
    }
  );

  const [error, SetError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetInputDim({ [name]: (value) });
  }

  const handleChoice = (e) => {
    e.preventDefault();
    if (inputDim.width === '' || 
        isNaN(inputDim.width) || 
        inputDim.height === '' || 
        isNaN(inputDim.height) ||
        inputDim.width < 10 ||
        inputDim.height < 10 
        ) {
      SetError(true);
    } else {
      dispatch(setDimension({
        width: inputDim.width, 
        height: inputDim.height
      }));
      dispatch(initialisePlayer());
    }
  }

  return(
    <ZoomDiv className="DimensionChoice">
    <h2>Choisissez une taille de labyrinthe</h2>
      <form>
        <div className="Hauteur">
          <label>Hauteur (10 mini) :</label>
            <input 
              type="number" 
              name="height" 
              value={inputDim.height}
              min="10"
              onChange={handleChange} 
            />
        </div>
        <div className="Largeur">
        <label>Largeur (10 mini) :</label>
          <input 
            type="number" 
            name="width" 
            value={inputDim.width} 
            min="10"
            onChange={handleChange}
          />
        </div>
        {error && 
        <span className="error">Veuillez entrer un chiffre supérieur ou égal à 10</span>}
        <div className="Submit">
          <button type="submit" onClick={handleChoice} >Valider</button>
        </div>
      </form>
    </ZoomDiv>
  );
}

export default connect()(DimensionChoice);