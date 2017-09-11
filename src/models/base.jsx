import React from 'react'
import * as C from '../containers'

export const Base = () =>  
    <div className="container">
        <div className="row">
	    <div className="col-sm-9">
		<C.GameContainer />
		<hr />
	    	<C.MoveContainer />
		<hr />
	    </div>
	    <div className="col-sm-3">
		<C.GlobalContainer />
		<hr />
		<C.PlayerContainer />
		<hr />
		<C.HistoryContainer />
	    </div>
	</div>
    </div>
