import {createStore } from 'redux'
import counter from './ducks/counter'

export default createStore(counter)
// createStore wants all reducers that can impact our state
// Store keeps track of 2 things: (1) state and (2) reducers
