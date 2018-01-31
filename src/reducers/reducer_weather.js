import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case FETCH_WEATHER:
    // state.concat([action.payload.data]); creates a new state array instead of mutating like .push would
      return [action.payload.data, ...state ];

  }
  return state;
}