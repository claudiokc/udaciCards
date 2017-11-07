import { GET_ALL_DECK, CREATE_NEW_DECK } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case GET_ALL_DECK:
      return {
        ...state,
        ...action.deckList
      }

    case CREATE_NEW_DECK:
      return {
        ...state,
        [action.deck]: {
          title: action.deck,
          questions: []
        }
      }

    default:
      return state
  }
}

export default decks