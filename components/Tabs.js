import { TabNavigator } from 'react-navigation'
import { blue, white } from '../helpers/colors'
import DeckListView from './DeckList'
import AddDeckView from './AddDeck'

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckListView,
      navigationOptions: {
        tabBarLabel: 'Decks'
      }
    },
    AddDeck: {
      screen: AddDeckView,
      navigationOptions: {
        tabBarLabel: 'Add Deck'
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 56,
        backgroundColor: blue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

export default Tabs