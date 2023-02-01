import React from 'react';
import { getTicketNoToken } from '../../utils/api';


function TicketItem({noTicket, status }) {
    return (
        <div>
            <ul>
                <li>tiket: {getTicketNoToken (noTicket)}</li>
                <li>status: {getTicketNoToken (status)}</li>
            </ul>
        </div>
    )
}

                   

export default TicketItem;
