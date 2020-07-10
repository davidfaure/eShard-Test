const { default: generateMaze } = require("../../generateMaze");

export const setDimension = (payload) => {
  return {
    type : 'SET_DIMENSION',
    payload, 
  }
}



