import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { searchReducer } from './search'
import { fetchReducer } from './fetch'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'search','fetch'
  ],
}

const rootReducer = combineReducers({
  search: searchReducer,
  fetch: fetchReducer,
  
})

export default persistReducer(persistConfig, rootReducer)
