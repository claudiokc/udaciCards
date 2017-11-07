export const GET_ALL_DECK = 'GET_ALL_DECK'
export const CREATE_NEW_DECK = 'CREATE_NEW_DECK'

export function getAllDeck(deckList) {
  return {
    type: GET_ALL_DECK,
    deckList
  }
}

export function createNewDeck(deck) {
  return {
    type: CREATE_NEW_DECK,
    deck
  }
}