import React from 'react'
import { map } from 'lodash'

export class StatsComponent extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    componentWillMount()
    {
	this.props.pullStats()
    }

    render()
    {
        return(
                <div className="row text-right">
		    <div className="col-xs-12">
                        { this.props.name }
                        <ul className="list list-unstyled">
                            <li>Wins: { this.props.stats.wins }</li>
                            <li>Losses: { this.props.stats.losses }</li>
                            <li>Draws: { this.props.stats.draws }</li>
                        </ul>
                    </div>
		</div>
        )
    }
}
