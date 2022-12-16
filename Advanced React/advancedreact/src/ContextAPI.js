import React from "react";
import { UserProvider, useUser } from "./UserContext";

const LoggedInUser = () => {
    const { user } = useUser();
    return (
        <p>Hello <span className="Username">{user.name}</span></p>
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
    const { user } = useUser();
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
            <p>Written by {user.name}</p>
        </div>
    );
}

function ContextAPI() {
    return (
        <UserProvider>
            <div>
                <h1>Context API Practice</h1>
                <Header />
                <Page />
            </div>
        </UserProvider>
    );
}
export default ContextAPI
