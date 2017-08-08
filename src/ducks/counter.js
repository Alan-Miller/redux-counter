// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  CONSTANTS
    - const variables return errors, whereas strings don't
    - ALL CAPS is the convention for const 
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Action Builders
    - return objects
    - need type, and any other info necessary
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
export function increment(amt) {
  return {
    type: INCREMENT,
    amt
  }
}
export function decrement(amt) {
  return {
    type: DECREMENT,
    amt
  }
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  initialState
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let initialState = {
  currentValue: 0
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  reducer
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
export default function counter(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      let incrementedAmt = state.currentValue + action.amt;
      console.log(state.currentValue)
      return Object.assign({}, state, {currentValue: incrementedAmt});
    case DECREMENT:
      let decrementedAmt= state.currentValue - action.amt;
      return Object.assign({}, state, {currentValue: decrementedAmt});
    default:
      return state;
  }
}

