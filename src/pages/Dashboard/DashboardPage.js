import React from "react";

import Content from '../../component/Content';
import Navigation from "../../component/Navigation";


function DashboardPage() {

    function onLogout() {
        sessionStorage.clear();
        window.location.replace('/login');
    }   
    

        return (
            <section>
                <Navigation logout={onLogout} />
                <Content />
            </section>
        )
    }


export default DashboardPage;
