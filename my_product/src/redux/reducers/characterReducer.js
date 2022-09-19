import { ActionType } from "../constants";

const initialState ={
    characters:[]
}
 const initialInfoState={
    charactersInfo:[]
}
const initialPaginationState={
    characterspgnation:1
}
const initialCharState={
    characterSearch:""
}
const initialFilterState={
    characterFilter:""
}
const initialGenFilterState={
    characterGenFilter:""
}



export const characterReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionType.SET_CHARACTERS:
            return {...state, characters:payload }
        case ActionType.PER_PAGE_CHARACTERS:
            return {...state, characters:payload }
        case ActionType.FILTER_CHARACTERS:
            return {...state, characters:payload }
        default:
            return state
    }
}

export const characterPgNum = (state = initialPaginationState, {type, payload}) =>{
    switch(type){
        case ActionType.SET_CHARACTERS_PG_NUM:
            return {...state, characterspgnation:initialPaginationState }
        case ActionType.SET_CHARACTERS_PG_NEXT:
            return {...state, characterspgnation:payload + 1 }
            case ActionType.SET_CHARACTERS_PG_PREV:
                return {...state, characterspgnation:state.characterspgnation - 1 }
            case ActionType.SET_CHARACTERS_PG_NUM_ONE:
                return {...state, characterspgnation: payload }

        default:
            return state
    }
}

export const characterSearch = (state = initialCharState, {type, payload}) =>{
    switch(type){
        case ActionType.SET_CHARACTERS_SEARCH:
            return {...state, characterSearch:payload }
        default:
            return state
    }
}

export const characterFilter = (state = initialFilterState, {type, payload}) =>{
    switch(type){
        case ActionType.SET_CHARACTERS_FILTER:
            return {...state, characterFilter:payload }
        default:
            return state
    }
}

export const characterGenFilter = (state = initialGenFilterState, {type, payload}) =>{
    switch(type){
        case ActionType.SET_CHARACTERS_GEN_FILTER:
            return {...state, characterGenFilter:payload }
        default:
            return state
    }
}


export const selectedCharacterReducer = (state = {}, {type, payload}) =>{
    switch(type){
        case ActionType.SELECTED_CHARACTER:
            return {...state, ...payload }
        default:
            return state
    }

}

export const characterReducerInfo = (state = initialInfoState, {type, payload}) =>{
    switch(type){
        case ActionType.SET_CHARACTERS_INFO:
            return {...state, charactersInfo:payload }
        default:
            return state
    }

}