import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const reducer = persistReducer(
  persistConfig,
  combineReducers(createStore(state => state))
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    reducer,
    undefined,
    composeEnhancers(applyMiddleware(logger, thunk))
  )

  const persistor = persistStore(store)

  return { store, persistor, }
}
