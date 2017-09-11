export const setValue = ( player, npc, result ) => {
    return {
	type: 'SET_VALUE',
	player: player,
	npc: npc,
	result: result
    }
}

export const assignMoves = ( moves ) => {
    return {
	type: 'DEFAULT_MOVES',
	value: moves
    }
}
