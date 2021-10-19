import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { searchReducer } from './search'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'search',
  ],
}

const rootReducer = combineReducers({
  search: searchReducer,
  
})

export default persistReducer(persistConfig, rootReducer)
