import React from 'react';

import {IoLogoWhatsapp} from 'react-icons/io'

function FiturWhatsapp() {
    return (
        <div className='landingpage__fitur-chat'>
            <a href='https://api.whatsapp.com/send/?phone=+6285775564845&text=Mohon+tuliskan+nama+lengkap+,+nama+perusahaan+dan+pesan&type=phone_number&app_absent=0' className='whatsApp-logo'><IoLogoWhatsapp /></a>
        </div>
    )
}

export default FiturWhatsapp;
