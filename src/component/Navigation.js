import React from "react";

function Navigation({ logout }) {
    return (
        <nav>
            <ul>
                <li>
                    <button onClick={logout} className='btn'>Logout</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
