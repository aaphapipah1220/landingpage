import React from 'react';

import { getTicketNoToken } from '../../utils/api';
import { useHistory, withRouter } from 'react-router-dom';


class InputTicket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        };

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async onSubmitHandler(event) {
        event.preventDefault();
        const ticket = await getTicketNoToken(this.state.keyword)
        console.log(ticket.data);
        this.props.history.push({
            pathname: `/ticket-item-page`, state: {
                data: ticket.data
            }
        })
    }

    onKeywordChangeHandler(event) {
        const { value } = event.target;

        this.setState(() => {
            return {
                keyword: value
            };
        });
    }

    render() {
        return (
            <div className='landingpage__body'>
                    <div className='landingpage__body-ticket'>
                        <div className='landingpage__body-input'>
                            <form onSubmit={this.onSubmitHandler}>
                                <input 
                                    type='text'
                                    placeholder='Masukkan nomor tiket' 
                                    value={this.state.keyword}
                                    onChange={this.onKeywordChangeHandler} 
                                />
    
                                <button type='submit' className='btn'>
                                    Cek
                                </button>
                            </form>                          
                        </div>
                    </div>
                </div>
        )
    }
}

export default withRouter(InputTicket);
