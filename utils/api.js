import { AsyncStorage } from 'react-native'

const MOBILE_FLASHCARDS_KEY = '@MobileFlashcards:key'

export function getDecks() {
  console.log('get decks')
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
}

export function getDeck(id) {
  console.log('get a deck', id)
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY).then(res => {
    const deckList = JSON.parse(res)
    const deck = deckList[id]
    return deck
  }, err => console.log('error', err))
}

export function saveDeckTitle(title) {
  console.log('save deck')
  const deck = JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  })


  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, deck)
}

export function addCardToDeck(title, card) {
  console.log('Adding cards to deck')
}

export function clearAll() {
  console.log('clear all')
  return AsyncStorage.clear()
}