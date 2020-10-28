import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function store(initialState) {
  return createStore(rootReducer, initialState);
}