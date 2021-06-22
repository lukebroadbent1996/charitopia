import '../styles/account.css';
import React from 'react';

const Account = ({ user }) => {
    return(
        <div id = "account_page_background">
            <h1>Account Details</h1>
            <p className="account_text">username: {user.name}</p>
            <p className="account_text">email: {user.email}</p>
        </div>
    )
}

export default Account;