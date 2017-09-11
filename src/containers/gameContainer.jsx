import React from 'react'
import { connect } from 'react-redux'
import * as A from '../actions'
import * as C from '../components'

const mapStateToProps = ( state, stateProps ) => {
    return {
	game: state.game
    }
}

const mapDispatchToProps = ( dispatch, dispatchProps ) => {
    return {}
}

export const GameContainer = connect(mapStateToProps, mapDispatchToProps)(C.GameComponent)
