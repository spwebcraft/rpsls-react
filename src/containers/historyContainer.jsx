import React from 'react'
import { connect } from 'react-redux'
import * as A from '../actions'
import * as C from '../components'

const mapStateToProps = ( state, stateProps ) => {
    return {
	stats: state.stats
    }
}

const mapDispatchToProps = ( dispatch, dispatchProps ) => {
    return {}
}

export const HistoryContainer = connect(mapStateToProps, mapDispatchToProps)(C.HistoryComponent)
