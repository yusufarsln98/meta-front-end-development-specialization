import React from "react";

const initialState = {
    count: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return initialState;
        default:
            return state;
    }
}

function UseReducerHook() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <div style={{padding: '40px'}}>
            <h1>useReducer Hook Exercise</h1>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}

export default UseReducerHook
