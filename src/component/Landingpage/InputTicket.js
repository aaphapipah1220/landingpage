import React from 'react';
import { getTicketNoToken } from '../../utils/api';

class InputTicket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        };

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        console.log(getTicketNoToken(this.state.keyword));
        window.location.replace('/ticket-item-page');
    }

    onKeywordChangeHandler(event) {
        const { value } = event.target;
        console.log(this.state.keyword);

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

export default InputTicket;
