import React from "react";
function UseEffectHook() {
    const [toggle, setToggle] = React.useState(false);
    const [user, setUser] = React.useState(null);

    const clickHandler = () => {
        setToggle(!toggle);
    };

    React.useEffect(() => {
        document.title = toggle ? "Welcome to Little Lemon Restaurant" : "React App";
    }, [toggle]); // Instead of rendering the component again, it will only run the useEffect function
                  // and will be called only when the toggle state changes
    // Fetch random user
    React.useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then((response) => response.json())
            .then((data) => {setUser(data.results[0].name.first + " " + data.results[0].name.last)});
    }, [toggle]);

    const CryptoCurrency = () => {
        const [btcData, setBtcData] = React.useState({});

        React.useEffect(() => {
            fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
                .then((response) => response.json())
                .then((jsonData) => setBtcData(jsonData.bpi.USD))
                .catch((error) => console.log(error));
        }, []);

        return (
            <>
                <h1>Current BTC/USD</h1>
                <p>Code: {btcData.code}</p>
                <p>Symbol: {btcData.symbol}</p>
                <p>Rate: {btcData.rate}</p>
                <p>Description: {btcData.description}</p>
                <p>Rate Float: {btcData.rate_float}</p>
            </>
        );
    };

    return (
        <div style={{padding: '40px'}}>
            <h1>useEffect Hook Exercise</h1>
            <button onClick={clickHandler}> Toggle Message </button>
            {(<p>{user}</p>)}
            {toggle && <p> Welcome to Little Lemon Restaurant </p>}
            {<CryptoCurrency />}
        </div>
    );
}

export default UseEffectHook
