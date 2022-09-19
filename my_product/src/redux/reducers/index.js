import { combineReducers } from 'redux';
import { characterFilter, characterGenFilter, characterPgNum, characterReducer, characterReducerInfo, characterSearch, selectedCharacterReducer } from './characterReducer';

const reducers = combineReducers({
    allCharacters: characterReducer,
    character : selectedCharacterReducer,
    characterInfo : characterReducerInfo,
    characterPgNum: characterPgNum,
    characterSearch:characterSearch,
    characterFilter: characterFilter,
    characterGenFilter:characterGenFilter
})

export default reducers;