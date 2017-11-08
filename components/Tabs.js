import { TabNavigator, StackNavigator } from 'react-navigation'
import { blue, white } from '../helpers/colors'
import DeckListView from './DeckList'
import AddDeckView from './AddDeck'
import SoloDeckView from './SoloDeckView'
import NewCardView from './NewCardView'
import QuizView from './QuizView'
import { FontAwesome } from '@expo/vector-icons'

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckListView,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon:({ blue }) => (
          <FontAwesome name="sticky-note-o" size={30} color={blue} />
        )
      }
    },
    AddDeck: {
      screen: AddDeckView,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon:({ blue }) => (
          <FontAwesome name="calendar-plus-o " size={30} color={blue} />
        )
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
      ...headerStackStyle,
      headerTitle: `${navigation.state.params.id}`
    })
  },
  NewCardView: {
    screen: NewCardView,
    navigationOptions: ({ navigation }) => ({
      ...headerStackStyle,
      headerTitle: 'Add Card'
    })
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({ navigation }) => ({
      ...headerStackStyle,
      headerTitle: 'Quiz'
    })
  }
})

const headerStackStyle = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: blue
  },
  headerTitleStyle: {
    width: 500
  }
}

export default MainNavigator