const { default: generateMaze } = require("../../generateMaze");

// import { generateMaze } from '../../generateMaze';

const initialState = {
  dimensions: {
    width: '',
    height: '',
  },
  maze: null,
  isLoading: false,
  isEntrance: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DIMENSION':
      return {
        ...state,
        dimensions : {
          width: action.payload.width,
          height: action.payload.height,
        },
        isLoading: true,
        maze: generateMaze({width: action.payload.width, height: action.payload.height}),
      };
    default:
      return state;
  }
}

export default reducer;