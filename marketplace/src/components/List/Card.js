import React from 'react';
import { CardContainer} from './styled';

export default class Card extends React.Component {

    render() {
        console.log(this.props.jobs)
        const jobs = this.props.jobs.map((job) => {
            return <div>
                <p>Serviço: {job.title}</p>
                <p>Preço: R${job.price}</p>
                <hr/>
                <button value={job.id} onClick={this.props.deleteJob}>Delete</button>
            </div>

        })
        return (
            <CardContainer>
                <p>Card</p>
                <hr/>
                {jobs}
            </CardContainer>
        )
    }
}