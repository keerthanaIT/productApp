import { ActionType } from "../constants"

export const setCharacters = (characters) =>{
    return{
        type: ActionType.SET_CHARACTERS,
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
