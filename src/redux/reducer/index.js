import playerImg from '../../images/player.png';
const { default: generateMaze } = require("../../generateMaze");

const initialState = {
  dimensions: {
    width: '',
    height: '',
  },
  maze: null,
  isLoading: false,
  top: 32,
  left: 0,
  player: {
    skin: playerImg,
    step: 32,
    position: []
  }
}


const reducer = (state = initialState, action) => {

  const GoingRight = () => {

      const row = state.player.position[0];
      const column = state.player.position[1];

      if (state.maze.tiles[row][column + 1].passable) {
        const newPosition = [state.player.position[0], (state.player.position[1] + 1)];
        return newPosition
      } else {
        return [state.player.position[0], state.player.position[1]]
      }
  }

  const MoveRight = () => {

    const row = state.player.position[0];
    const column = state.player.position[1];

    if (state.maze.tiles[row][column + 1].passable) {
      const newPosition = state.left + state.player.step;
      return newPosition;
    } else {
      return state.left
    }
  }

  const GoingLeft = () => {

    const row = state.player.position[0];
    const column = state.player.position[1];

    if (state.maze.tiles[row][column - 1].passable) {
      const newPosition = [state.player.position[0], (state.player.position[1] - 1)];
      return newPosition
    } else {
      return [state.player.position[0], state.player.position[1]]
    }

}

  const MoveLeft = () => {

    const row = state.player.position[0];
    const column = state.player.position[1];

    if (state.maze.tiles[row][column - 1].passable) {
      const newPosition = state.left - state.player.step;
      return newPosition
    } else {
      return state.left
    }
  }

  const GoingDown = () => {

    const row = state.player.position[0];
    const column = state.player.position[1];

    if (state.maze.tiles[row + 1][column].passable) {
        const newPosition = [(state.player.position[0] + 1), state.player.position[1]];
        return newPosition;
    } else {
      return [state.player.position[0], state.player.position[1]]
    }
  }

  const MoveDown = () => {
    const row = state.player.position[0];
    const column = state.player.position[1];

    if (state.maze.tiles[row + 1][column].passable) {
      const newPosition = state.top + state.player.step;
      return newPosition
    } else {
      return state.top
    }
  }


  const GoingUp = () => {
    const row = state.player.position[0];
    const column = state.player.position[1];

    if (state.maze.tiles[row - 1][column].passable) {
      const newPosition = [(state.player.position[0] - 1), state.player.position[1]];
      return newPosition;
    } else {
      return [state.player.position[0], state.player.position[1]]
    }
  }

  const MoveUp = () => {
    const row = state.player.position[0];
    const column = state.player.position[1];

    if (state.maze.tiles[row - 1][column].passable) {
      const newPosition = state.top - state.player.step;
      return newPosition
    } else {
      return state.top
    }
  }

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
    case 'INITIALIZE_PLAYER':
      return {
        ...state,
        player: {
          ...state.player,
          position: [0, 0]
        }
      }
    case 'ARROW_LEFT':
      return {
        ...state,
        left : MoveLeft(),
        player: {
          ...state.player,
          position: GoingLeft(),
        }
      }
    case 'ARROW_RIGHT':
      return {
        ...state,
        left : MoveRight(),
        player: {
          ...state.player,
          position: GoingRight(),
        }
      }
    case 'ARROW_UP':
      return {
        ...state,
        top : MoveUp(),
        player: {
          ...state.player,
          position: GoingUp(),
        }
      }
    case 'ARROW_DOWN':
      return {
        ...state,
        top : MoveDown(),
        player: {
          ...state.player,
          position: GoingDown(),
        }
      }
    default:
      return state;
  }
}

export default reducer;