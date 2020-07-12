const { default: generateMaze } = require("../../generateMaze");

// import { generateMaze } from '../../generateMaze';

const initialState = {
  dimensions: {
    width: '',
    height: '',
  },
  maze: null,
  isLoading: false,
  top: 32,
  left: 0
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
    case 'ARROW_LEFT':
      return {
        ...state,
        left : state.left - 32
      }
    case 'ARROW_RIGHT':
      return {
        ...state,
        left : state.left + 32
      }
    case 'ARROW_UP':
      return {
        ...state,
        top : state.top - 32
      }
    case 'ARROW_DOWN':
      return {
        ...state,
        top : state.top + 32
      }
    default:
      return state;
  }
}

export default reducer;