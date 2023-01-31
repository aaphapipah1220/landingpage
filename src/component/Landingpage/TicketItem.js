import React from 'react';
import { getTicketNoToken } from '../../utils/api';

class TicketItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: getTicketNoToken(),
        };
    }
    

        render() {
            return (
                <div>
                    {this.state.data.map((item) => (
                        <ul key={item.id}>
                            <li>noTicket: {item.noTicket}</li>
                        </ul>
                    ))}
                </div>
            )
        }
    }

                   

export default TicketItem;
