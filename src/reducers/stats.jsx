import update from 'react-addons-update'

export const stats = (state = [], action) => {
    switch(action.type){
	case 'DEFAULT_STATS':
	    return update(state,{
		[action.parent]: {
		    wins: {
			$set: action.wins
		    },
		    losses: {
			$set: action.losses
		    },
		    draws: {
			$set: action.draws
		    }
		}
	    })
	case 'DEFAULT_HISTORY':
	    return update(state,{
		player: {
		    history: {
			$push: action.value	
		    }
		}
	    })
	case 'UPDATE_HISTORY':
	    state.player.history.unshift(action.value)
	    return update(state,{
		player: {
		    history: {
			$set: state.player.history
		    }
		}
	    })
	case 'SET_STAT':
	    return update(state,{
		[action.parent]: {
		    [action.name]: {
			$set: state[action.parent][action.name] + 1
		    }
		}
	    })
        default:
            return state
    }
}
