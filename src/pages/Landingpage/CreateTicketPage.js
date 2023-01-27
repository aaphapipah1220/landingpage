import React from 'react';

import InputCreateTicket from '../../component/Landingpage/InputCreateTicket';

function CreateTicketPage() {

    return (
        <section className='container create__ticket__page-container'>
            <h4 className='create__ticket__page-text'>Lengkapi data dibawah ini</h4>
            <InputCreateTicket />
        </section>
    )
}

export default CreateTicketPage;
