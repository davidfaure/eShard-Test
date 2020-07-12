import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { setDimension } from '../redux/action';

const DimensionChoice = ({ dispatch }) => {

  const [inputDim, SetInputDim] = useReducer(
    (state, newState) => ({...state, ...newState }),
    {
      width: '',
      height: '',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetInputDim({ [name]: Number(value) });
  }

  const handleChoice = (e) => {
    e.preventDefault();
    dispatch(setDimension({
      width: inputDim.width, 
      height: inputDim.height
    }));
  }

  return(
    <div>
    <h1>Choisissez une taille de labyrinthe</h1>
      <form>
      <label>Hauteur</label>
        <input 
          type="text" 
          name="height" 
          value={inputDim.height} 
          onChange={handleChange} 
        />
      <label>Largeur</label>
        <input 
          type="text" 
          name="width" 
          value={inputDim.width} 
          onChange={handleChange}
        />
        <button type="submit" onClick={handleChoice} >Valider</button>
      </form>
    </div>
  );
}

export default connect()(DimensionChoice);