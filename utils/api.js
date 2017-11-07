import { AsyncStorage } from 'react-native'

const MOBILE_FLASHCARDS_KEY = '@MobileFlashcards:key'

export function getDecks() {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY).then()
}

export function getDeck(id) {}

export function saveDeckTitle(title) {
  const deck = JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  })
  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, deck)
}

export function addCardToDeck(title, card) {}