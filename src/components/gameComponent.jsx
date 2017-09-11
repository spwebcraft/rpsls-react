import React from 'react'
import { map } from 'lodash'

export class GameComponent extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
	    <div className="row text-center">
		<div className="col-sm-3 col-sm-offset-2">
		    <div className="row">
			<div className="col-xs-12">
			    <b>Player Move</b>
			</div>
		    </div>
		    <div className="row">
			<div className="col-xs-12">
			    { this.props.game.player }
			</div>
		    </div>
		</div>
		<div className="col-sm-2">
                    <div className="row">
                        <div className="col-xs-12">
                            <b>Result</b>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            { this.props.game.result }
                        </div>
                    </div>
                </div>
		<div className="col-sm-3">
		    <div className="row">
                        <div className="col-xs-12">
                            <b>NPC Move</b>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            { this.props.game.npc }
                        </div>
                    </div>
		</div>
	    </div>
        )
    }
}
