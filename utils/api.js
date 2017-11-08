import { AsyncStorage } from 'react-native'

export const MOBILE_FLASHCARDS_KEY = '@MobileFlashcards:key'

export function getDecks() {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
}

export function getDeck(id) {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY).then(
    res => {
      const deckList = JSON.parse(res)
      const deck = deckList[id]
      return deck
    },
    err => console.log('error', err)
  )
}

export function saveDeckTitle(title) {
  const deck = JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  })

  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, deck)
}

export function addCardToDeck(title, card) {
  getDeck(title).then(res => {
    let newCard = {
      [title]: {
        questions: res.questions.concat(card)
      }
    }
    return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, JSON.stringify(newCard))
  })
}