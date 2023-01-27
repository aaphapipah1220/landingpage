import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../component/Logo';
import TiketInput from '../../component/Landingpage/InputTicket';
import CreateTicket from '../../component/Landingpage/CreateTicket';
import FiturWhatsapp from '../../component/Landingpage/FiturWhatsapp';

class LandingPage extends React.Component {

    render() {
        return (
            <section className='landingpage' >
                <Link to="/login" className='login-admin'>Login</Link>
                
                <div className='container landingpage__container'>
                    <Logo />
                    <TiketInput />
                    <CreateTicket />
                    <FiturWhatsapp />
                </div>
            </section>
        )
    }
}

export default LandingPage;
