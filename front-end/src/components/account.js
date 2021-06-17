import '../styles/account.css';
import React from 'react';

const Account = () => {
    return(
        <div id = "account_page_background">
            <h1>Account Details</h1>
            <p className="account_text">user ID: 34987345834</p>
            <p className="account_text">username: USERNAME</p>
            <p className="account_text">email: something@gmail.com</p>
        </div>
    )
}

export default Account;