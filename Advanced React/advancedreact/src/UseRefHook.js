import React from 'react';

function UseRefHook() {
    const [name, setName] = React.useState("");
    // renderCount, prevName can be used as useState
    const renderCount = React.useRef(1);
    const inputRef = React.useRef();
    const prevName = React.useRef("");

    React.useEffect(() => {
        renderCount.current = renderCount.current + 1;
        prevName.current = name;
    }, [name]);

    function focus() {
        inputRef.current.focus();
    }

    return (
        <div style={{padding: '40px'}}>
            <h1>useRef Hook Exercise</h1>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name} and it used to be {prevName.current}</div>
            <div>I rendered {renderCount.current} times</div>
            <button onClick={focus}>Focus</button>
        </div>
    );
}

export default UseRefHook