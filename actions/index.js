import { getDecks, addCardToDeck, saveDeckTitle } from '../utils/api'

// action types
export const GET_ALL_DECK = 'GET_ALL_DECK'
export const CREATE_NEW_TITLE = 'CREATE_NEW_TITLE'
export const CREATE_NEW_CARD = 'CREATE_NEW_CARD'

// action creators
export const getAllDeck = deckList => ({ type: GET_ALL_DECK, deckList })
export const createNewTitle = title => ({ type: CREATE_NEW_TITLE, title })
export const createNewCard = (title, card) => ({ type: CREATE_NEW_CARD, title, card })

// apis call
export const fetchAllDeck = () => dispatch => {
  getDecks().then(res => {
    const deckList = JSON.parse(res)
    if (deckList !== null) {
      dispatch(getAllDeck(deckList))
    }
  })
}

export const addNewCard = (title, card) => dispatch => {
  addCardToDeck(title, card)
  dispatch(createNewCard(title, card))
}

export const createDeck = title => dispatch => {
  dispatch(createNewTitle(title))
  saveDeckTitle(title)
}