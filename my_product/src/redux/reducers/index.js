import { combineReducers } from 'redux';
import { characterPgNum, characterReducer, characterReducerInfo, characterSearch, selectedCharacterReducer } from './characterReducer';

const reducers = combineReducers({
    allCharacters: characterReducer,
    character : selectedCharacterReducer,
    characterInfo : characterReducerInfo,
    characterPgNum: characterPgNum,
    characterSearch:characterSearch,
})

export default reducers;