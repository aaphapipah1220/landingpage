import React from 'react';
import { useRef } from 'react';

import emailjs from 'emailjs-com';


const InputCreateTicket = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lmpwq3g', 'template_imfokg1', form.current, '7RakILCW1_Kp8M7yn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  
      e.target.reset()
    };

    return (
        <section className='input__create-ticket'>
            <form ref={form} onSubmit={sendEmail}>

                <input id='name' type='text' name='name' placeholder='Nama lengkap' required />

                <input id='email' type='email' name='email' placeholder='Email' required />

                <input id='number' type='number' name='number' placeholder='Nomor Telpon atau WhatsApp' required />

                <input id='company' type='text' name='company' placeholder='Nama Perusahaan' required />

                <textarea id='message' name='message' rows='9' placeholder='Pesan atau keluhan yang dihadapi' required></textarea>

                <button type='submit' className='btn'>
                    Create Ticket
                </button>
            </form>  
        </section>
    )
}

export default InputCreateTicket;
