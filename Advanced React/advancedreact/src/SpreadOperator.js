import React from "react";

// Spread Operator example

const LoginButton = ({ type, children, ...buttonProps }) => {
    console.log(buttonProps);
    return (
        <button
            type ="secondary"
            {...buttonProps}
            
            onClick={() => alert("Login")}
        >
            {children}
        </button>
    );
};

function SpreadOperator() {
    return (
        <div>
            <header>Little Lemon Restaurant</header>
            <button
                type="primary"
                onClick={() => alert("Sign Up")}
            >
                Sign Up
            </button>
            <LoginButton type="secondary" onClick={() => alert("Yeeeeeeey!")}>Login</LoginButton>
            
        </div>
    );
}

export default SpreadOperator;