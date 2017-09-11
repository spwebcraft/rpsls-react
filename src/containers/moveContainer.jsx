import React from 'react'
import { connect } from 'react-redux'
import { ajax } from 'jquery'
import * as A from '../actions'
import * as C from '../components'

const mapStateToProps = ( state, stateProps ) => {
    return {
	game: state.game
    }
}

const mapDispatchToProps = ( dispatch, dispatchProps ) => {
    return {
	refreshGlobal: () => {
	    setInterval(function(){ 
	        ajax({
        	    url: window.location.pathname+'game/history/global',
	            method: 'get',
        	    success: (data) => {
	                data = JSON.parse(data)
        	        dispatch(A.stats.defaultStats('global', data.stats))
	            }
        	})
	    }, 30000)
	},
	getMoves: () => {
	    ajax({
		url: window.location.pathname+'game/moves',
		method: 'get',
		success: (data) => {
		    dispatch(A.game.assignMoves(JSON.parse(data)))
		}
	    })
	},
	setMove: (value) => {
	    ajax({
		url: window.location.pathname+'game/throw',
		method: 'post',
		data: { throw: value },
		success: (data) => {
	    	    data = JSON.parse(data)
		    dispatch(A.game.setValue(data.player, data.npc, data.result))
		    switch(data.result)
 		    {
			case 'Win':
			    dispatch(A.stats.setStat('player','wins'))
			    break;
			case 'Lose':
			    dispatch(A.stats.setStat('player','losses'))
			    break;
			case 'Draw':
			    dispatch(A.stats.setStat('player','draws'))
			    break;
		    }
		    dispatch(A.stats.updateHistory(data))
		}
	    })
        }
    }
}

export const MoveContainer = connect(mapStateToProps, mapDispatchToProps)(C.MoveComponent)
