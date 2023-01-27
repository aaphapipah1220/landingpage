import React from 'react';

import LoginInput from '../../component/Login/LoginInput';

import { login } from '../../utils/api';

function LoginAdminPage() {

    async function onLogin({username, password}) {
        const { error, data } = await login({ username, password });

        if (!error) {
            sessionStorage.setItem('accessToken', data.token);
            window.location.replace('/dashboard')
        }
    }

    return (
        <section className='login__page'>
            <h4 className='login__page-text'>Masukkan password dan username!</h4>
            <LoginInput login={onLogin} />
        </section>
    );
}

export default LoginAdminPage;
