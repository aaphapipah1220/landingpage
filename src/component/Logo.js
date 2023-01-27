import React from 'react';

// import LOGO from '../images/logo.webp';
import LOGO from '../images/idpay-removebg-preview.png'

function Logo() {
    return (
        <section>
            <div className='landingpage__body-logo'>
                <img src={LOGO} alt='Image Logo' className='container brand-image' />
            </div>

            <div className='landingpage__body-text'>
                <h2>E-SERVICES CENTER</h2>
            </div>
        </section>
    )
}

export default Logo;
