import React from 'react'
import { map } from 'lodash'

export class MoveComponent extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    componentWillMount()
    {
	this.props.getMoves()
	this.props.refreshGlobal()
    }

    render()
    {
        return(
                <div className="row">
		    <div className="col-xs-6 col-xs-offset-3 text-center">
			<div className="row">
			    <div className="col-xs-12">
				Pick Your Move
			    </div>
			</div>
			<div className="row">
			    <div className="col-xs-12">
				{map(this.props.game.defaultMoves,(move,i)=>{
				    return(
					<button onClick={()=>this.props.setMove(move)} className="btn btn-default form-control" key={i}>{move}</button>
				    )
				})}
			    </div>
			</div>
		    </div>
		</div>
        )
    }
}
