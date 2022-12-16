import React from "react";

const LoggedInUser = () => {
    return (
        <p>Hello <span className="Username"></span></p>
    );
}

const Header = () => {
    return (
        <header>
            <h2>Blog App</h2>
            <LoggedInUser />
        </header>
    );
}

const Page = () => {
    return (
        <div>
            <h2>What is lorem ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod, nisl nec tincidunt lacinia, nunc est ultrices
                nunc, vel tincidunt ante nisl eu ante. Nullam euismod, nisl nec
                tincidunt lacinia, nunc est ultrices nunc, vel tincidunt ante
                nisl eu ante. Nullam euismod, nisl nec tincidunt lacinia, nunc
                est ultrices nunc, vel tincidunt ante nisl eu ante. Nullam
                euismod, nisl nec tincidunt lacinia, nunc est ultrices nunc,
                vel tincidunt ante nisl eu ante. Nullam euismod, nisl nec
                tincidunt lacinia, nunc est ultrices nunc, vel tincidunt ante
                nisl eu ante. Nullam euismod, nisl nec tincidunt lacinia, nunc
                est ultrices nunc, vel tincidunt ante nisl eu ante.
            </p>
            <p>Written by </p>
        </div>
    );
}

function ContextAPI() {
    return (
        <div>
            <h1>Context API Practice</h1>
            <Header />
            <Page />
        </div>
    );
}
export default ContextAPI
