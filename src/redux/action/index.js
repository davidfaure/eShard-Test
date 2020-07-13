export const setDimension = (payload) => {
  return {
    type : 'SET_DIMENSION',
    payload, 
  }
}

export const leftArrow = () => {
  return {
    type: 'ARROW_LEFT'
  }
}

export const rightArrow = () => {
  return {
    type: 'ARROW_RIGHT'
  }
}

export const upArrow = () => {
  return {
    type: 'ARROW_UP'
  }
}

export const downArrow = () => {
  return {
    type: 'ARROW_DOWN'
  }
}

export const initialisePlayer = () => {
  return {
    type: 'INITIALIZE_PLAYER'
  }
}


