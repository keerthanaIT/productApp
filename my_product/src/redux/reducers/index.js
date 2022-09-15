import { combineReducers } from 'redux';
import { characterReducer, characterReducerInfo, selectedCharacterReducer } from './characterReducer';

const reducers = combineReducers({
    allCharacters: characterReducer,
    character : selectedCharacterReducer,
    characterInfo : characterReducerInfo,
})

export default reducers;