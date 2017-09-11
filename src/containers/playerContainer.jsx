import React from 'react'
import { connect } from 'react-redux'
import { ajax } from 'jquery' 
import * as A from '../actions'
import * as C from '../components'

const mapStateToProps = ( state, stateProps ) => {
    return {
	name: 'Player Stats',
	stats: state.stats.player
    }
}

const mapDispatchToProps = ( dispatch, dispatchProps ) => {
    return {
	pullStats: () => {
	    ajax({
		url: window.location.pathname+'game/history/player',
		method: 'get',
		success: (data) => {
		    data = JSON.parse(data)
		    dispatch(A.stats.defaultStats('player',data.stats))
		    dispatch(A.stats.defaultHistory(data.history))
		}
	    })
	}
    }
}

export const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(C.StatsComponent)
