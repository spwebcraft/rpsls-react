import { combineReducers } from 'redux'

import { game, stats } from './reducers'

export const reducer = combineReducers({ game, stats })
