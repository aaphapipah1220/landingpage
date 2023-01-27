import React from 'react';
// import dari RestAPI / BackEnd

function TicketItem({ noTicket, createdAt, customer, guaranteeDate, status }) {
    return (
        <div className='ticket__item'>
            <h2 className='ticket__item-number'>
                Tiket : {noTicket}
            </h2>
            <p className='ticket__item-date'>
                Ticket Date : {createdAt}
            </p>
            <p className='ticket__item-number'>
                Customer : {customer}
            </p>
            <p className='ticket__item-guaranteeDate'>
                Guarantee Date : {guaranteeDate}
            </p>
            <h2 className='ticket__item-status'>
                Status : {status}
            </h2>
        </div>
    );
}

export default TicketItem;
