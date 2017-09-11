export const setStat = ( parent, name, value ) => {
    return {
	type: 'SET_STAT',
	parent: parent,
	name: name,
	value: value
    }
}

export const defaultStats = (parent, stats) => {
    return {
	type: 'DEFAULT_STATS',
	parent: parent,
	wins: stats.wins,
	losses: stats.losses,
	draws: stats.draws
    }
}

export const defaultHistory = ( history ) => {
    return {
	type: 'DEFAULT_HISTORY',
 	value: history
    }
}

export const updateHistory = ( value ) => {
    return {
	type: 'UPDATE_HISTORY',
	value: value
    }
}
