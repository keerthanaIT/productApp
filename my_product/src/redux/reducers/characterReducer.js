import { ActionType } from "../constants";

const initialState ={
    characters:[]
}
 const initialInfoState={
    charactersInfo:[]
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