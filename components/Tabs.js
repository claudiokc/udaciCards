import { TabNavigator, StackNavigator } from 'react-navigation'
import { blue, white } from '../helpers/colors'
import DeckListView from './DeckList'
import AddDeckView from './AddDeck'
import SoloDeckView from './SoloDeckView'
import NewCardView from './NewCardView'

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

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  SoloDeckView: {
    screen: SoloDeckView,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      },
      headerTitle: `${navigation.state.params.id}`,
      headerTitleStyle: {
        width: 500
      }
    })
  },
  NewCardView: {
    screen: NewCardView,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      },
      headerTitle: 'Add Card',
      headerTitleStyle: {
        width: 500
      }
    })
  }
})

export default MainNavigator