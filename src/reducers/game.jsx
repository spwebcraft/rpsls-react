import update from 'react-addons-update'

export const game = (state = [], action) => {
    switch(action.type){
	case 'DEFAULT_MOVES':
	    return update(state,{
		defaultMoves: {
	            $set: action.value
                }
            })
	case 'SET_VALUE':
	    return update(state,{
		player: {
                    $set: action.player
                },
		npc: {
                    $set: action.npc
		},
		result: {
 		    $set: action.result
		}
	    })
        default:
            return state
    }
}
