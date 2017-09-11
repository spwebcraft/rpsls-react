import React from 'react'
import { connect } from 'react-redux'
import { ajax } from 'jquery'
import * as A from '../actions'
import * as C from '../components'

const mapStateToProps = ( state, stateProps ) => {
    return {
	name: 'Global Stats',
	stats: state.stats.global
    }
}

const mapDispatchToProps = ( dispatch, dispatchProps ) => {
    return {
	pullStats: () => {
            ajax({
                url: window.location.pathname+'game/history/global',
                method: 'get',
                success: (data) => {
		    data = JSON.parse(data)
                    dispatch(A.stats.defaultStats('global', data.stats))
                }
            })
        }
    }
}

export const GlobalContainer = connect(mapStateToProps, mapDispatchToProps)(C.StatsComponent)
