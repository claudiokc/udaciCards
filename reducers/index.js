import { GET_ALL_DECK, CREATE_NEW_TITLE, CREATE_NEW_CARD } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case GET_ALL_DECK:
      return {
        ...state,
        ...action.deckList
      }

    case CREATE_NEW_TITLE:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }

    case CREATE_NEW_CARD:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [...state[action.title].questions, action.card]
        }
      }

    default:
      return state
  }
}

export default decks