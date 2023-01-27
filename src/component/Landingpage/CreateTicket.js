import React from 'react';
import { Link } from 'react-router-dom';

function CreateTicket() {
    return (
        <div className='landingpage__body-no-ticket'>
            <h5>
                Belum memiliki tiket? <Link to='/create-ticket-visitor'> CREATE TICKET </Link> 
            </h5>
        </div>
    )
}

export default CreateTicket;
