import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { testReducer } from './test'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'test',
  ],
}

const rootReducer = combineReducers({
  test: testReducer,
  
})

export default persistReducer(persistConfig, rootReducer)
