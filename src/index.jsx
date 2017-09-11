import React from 'react'
import { render } from 'react-dom'
import createLogger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './rootReducer'
import * as M from './models'

/*const loggerMiddleware = createLogger()*/

const defaultState = {
    game: {
	player: null,
	npc: null,
	result: null,
	defaultMoves: [ ]
    },
    stats: {
	player: {
	    wins: 0,
	    losses: 0,
	    draws: 0,
	    history: [ ]
	},
	global: {
	    wins: 0,
            losses: 0,
            draws: 0
        }
    }
}

let store = createStore(reducer, defaultState/*, applyMiddleware(loggerMiddleware)*/)

render(<Provider store={store}><M.Base /></Provider>, document.getElementById('app'))
