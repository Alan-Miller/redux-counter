// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;



const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// Build actions we want reducer to do
export function increment(amt) {
  return {
    type: INCREMENT
    ,payload: amt
  }
}



// Pro tip: always put a property on initialState if you are going to use it. It helps you know what properties to look for
var initialState = {
  counter: 0
}

// In ES6, if we assign a value to what is passed in, it is the default value in case of null or undefined
function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return Object.assign({}, state, {counter: state.counter + action.payload})
  }
  return state;
}

export default reducer


// Reducers should be based on the shape of the date, not the visual appearance of the date
