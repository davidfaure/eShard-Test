import React, { useReducer, useState } from 'react';
import * as images from "../../images";
import { connect } from 'react-redux';
import { setDimension, initialisePlayer } from '../../redux/action';
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
      heros: 'humain',
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

      switch (inputDim.heros) {
        case 'humain':
          inputDim.heros = images.player;
          break;
        case 'troll':
          inputDim.heros = images.troll;
          break;
        case 'centaur':
          inputDim.heros = images.centaur;
          break;
        case 'elf':
          inputDim.heros = images.elf; 
          break;
        case 'griffon':
          inputDim.heros = images.griffon; 
          break;
        case 'worm':
          inputDim.heros = images.worm; 
          break;
        case 'angel':
          inputDim.heros = images.angel; 
          break;
        case 'titan':
          inputDim.heros = images.titan; 
          break;
        default:
          inputDim.heros = images.player
      }
      dispatch(initialisePlayer({
        skin: inputDim.heros,
      }));

    }
  }

  console.log(inputDim)

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
        <div className="Choice">
          <label>Choix du héros :</label>
          <div className="Hero-Checkbox-Container">
            <div className="Hero-Checkbox">
              <div className="Hero-Checkbox-Label">
                <label>Humain</label>
              </div>
              <div className="Hero-Image">
                <div><img src={images.player} alt="humain" /></div>
                <input type="checkbox" name="heros" value="humain" onChange={handleChange}/>
              </div> 
            </div>
            <div className="Hero-Checkbox">
              <div className="Hero-Checkbox-Label">
                <label>Troll</label>
              </div>
              <div className="Hero-Image">
                <div><img src={images.troll} alt="troll" /></div>
                <input type="checkbox" name="heros" value="troll" onChange={handleChange}/>
              </div>
            </div>
            <div className="Hero-Checkbox">
              <div className="Hero-Checkbox-Label">
                <label>Centaure</label>
              </div>
              <div className="Hero-Image">
                <div><img src={images.centaur} alt="centaur" /></div>
                <input type="checkbox" name="heros" value="centaur" onChange={handleChange}/>
              </div>
            </div>
            <div className="Hero-Checkbox">
              <div className="Hero-Checkbox-Label">
                <label>Mage</label>
              </div>
              <div className="Hero-Image">
                <div><img src={images.elf} alt="elf" /></div>
                <input type="checkbox" name="heros" value="elf" onChange={handleChange}/>
              </div>
            </div>
            <div className="Hero-Checkbox">
              <div className="Hero-Checkbox-Label">
                <label>Griffon</label>
              </div>
              <div className="Hero-Image">
                <div><img src={images.griffon} alt="griffon" /></div>
                <input type="checkbox" name="heros" value="griffon" onChange={handleChange}/>
              </div>
            </div>
            <div className="Hero-Checkbox">
              <div className="Hero-Checkbox-Label">
                <label>Ver feu</label>
              </div>
              <div className="Hero-Image">
                <div><img src={images.worm} alt="worm" /></div>
                <input type="checkbox" name="heros" value="worm" onChange={handleChange}/>
              </div>
            </div>
            <div className="Hero-Checkbox">
              <div className="Hero-Checkbox-Label">
                <label>Ange</label>
              </div>
              <div className="Hero-Image">
                <div><img src={images.angel} alt="angel" /></div>
                <input type="checkbox" name="heros" value="angel" onChange={handleChange}/>
              </div>
            </div>
            <div className="Hero-Checkbox">
              <div className="Hero-Checkbox-Label">
                <label>Titan</label>
              </div>
              <div className="Hero-Image">
                <div><img src={images.titan} alt="titan" /></div>
                <input type="checkbox" name="heros" value="titan" onChange={handleChange}/>
              </div>
            </div>
          </div>
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