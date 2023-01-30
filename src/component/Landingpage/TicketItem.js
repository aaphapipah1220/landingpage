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
                        <li key={item.id}>
                            <p>noTicket: {item.noTicket}</p>
                        </li>
                    ))}
                </div>
            )
        }
    }

                   

export default TicketItem;
