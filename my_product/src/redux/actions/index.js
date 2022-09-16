import { ActionType } from "../constants"

export const setCharacters = (characters) =>{
    return{
        type: ActionType.SET_CHARACTERS,
        payload:characters
    }
}

export const filterCharacters = (characters) =>{
    return{
        type: ActionType.FILTER_CHARACTERS,
        payload:characters
    }
}

export const setPerPageCharacters = (characters) =>{
    return{
        type: ActionType.PER_PAGE_CHARACTERS,
        payload:characters
    }
}

export const selectedCharacter = (character) =>{
    return{
        type: ActionType.SELECTED_CHARACTER,
        payload:character
    }
}

export const setCharactersInfo = (charactersInfo) =>{
    return{
        type: ActionType.SET_CHARACTERS_INFO,
        payload:charactersInfo
    }
}
