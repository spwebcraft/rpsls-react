import React from 'react'
import { map } from 'lodash'

export class HistoryComponent extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
	    <div className="row text-center">
                <div className="col-xs-12">
                    Recent Moves
		    <table className="table table-bordered">
			<thead>
			    <tr>
				<th>Player</th>
				<th>Result</th>
				<th>NPC</th>
			    </tr>
			</thead>
			<tbody>
			    {map(this.props.stats.player.history,(history,i)=>{
				if(i <= 9)
   				    return(
				    	<tr key={i}>
					    <td>{ history.player }</td>
					    <td>{ history.result }</td>
					    <td>{ history.npc }</td>
				    	</tr>
				    )
			    })}
			</tbody>
		    </table>
                </div>
            </div>
        )
    }
}
