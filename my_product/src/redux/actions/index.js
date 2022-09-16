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

export const setCharactersPagination = (charactersPgNum) =>{
    return{
        type: ActionType.SET_CHARACTERS_PG_NUM,
        payload:charactersPgNum
    }
}
export const setCharactersPaginationOne = (charactersPgNumOne) =>{
    return{
        type: ActionType.SET_CHARACTERS_PG_NUM_ONE,
        payload:charactersPgNumOne
    }
}

export const setCharactersPaginationNext = (charactersPgNumNext) =>{
    return{
        type: ActionType.SET_CHARACTERS_PG_NEXT,
        payload:charactersPgNumNext
    }
}

export const setCharactersPaginationPrev = (charactersPgNumPrev) =>{
    return{
        type: ActionType.SET_CHARACTERS_PG_PREV,
        payload:charactersPgNumPrev
    }
}

export const setCharactersSearch = (characterSearch) =>{
    return{
        type: ActionType.SET_CHARACTERS_SEARCH,
        payload:characterSearch
    }
}