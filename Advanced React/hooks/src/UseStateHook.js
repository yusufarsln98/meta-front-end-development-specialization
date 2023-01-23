import React, { useState } from "react";
function UseStateHook() {
    // Array destructuring review
    // const arr = [1, 2, 3];
    // const [a, b, c] = arr;
    // console.log(a, b, c);
    // Output: 1 2 3

    const [restaurantName, setRestaurantName] = useState("Pizzeria");
    
    const updateRetaurantName = () => {
        setRestaurantName(
            restaurantName === "Pizzeria" ? "Burger Joint" : "Pizzeria"
        );
    }


    // Another example - Not recommended
    // const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
    // console.log(greeting, setGreeting); 
    
    // function updateGreeting() { 
    //     setGreeting( greeting.greet === "Hello, World" ? { greet: "Hello, Universe" } : { greet: "Hello, World" } );
    // } 
    
    // Improved version 
    const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
    console.log(greeting, setGreeting); 
   
    function updateGreeting() { 
      const newGreeting = {...greeting}; 
      newGreeting.greet = greeting.greet === "Hello, World" ? "Hello, Universe" : "Hello, World";
      setGreeting(newGreeting); 
    }


    //  ----------------------------------------------------------------------------
    // Another example, goal form
    const [allGoals, updateAllGoals] = useState([]);

    function addGoal(goal) {
        updateAllGoals([...allGoals, goal]);
    }

    function GoalForm(props) {
        const [formData, setFormData] = useState({ goal: "", by: "" });

        function changeHandler(e) {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }

        function submitHandler(e) {
            e.preventDefault();
            props.onAdd(formData);
            setFormData({ goal: "", by: "" });
        }

        return (
            <>
                <h1>My Little Lemon Goal</h1>
                <form onSubmit={submitHandler}> 
                    <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
                    <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
                    <button type="submit">Submit Goal</button>
                </form>
            </>
        );
    }

    function ListOfGoals(props) {
        return (
            <ul>
                {props.goals.map((goal) => (
                    <li key={goal.goal}>
                        <span>My goal is to {goal.goal}, by {goal.by}</span>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            <h2>useState() hook excersice</h2>

            <p>Restaurant name: {restaurantName}</p>
            <button onClick={updateRetaurantName}>CLICK ME</button>
            
            <p>{greeting.greet}</p>
            <button onClick={updateGreeting}>CLICK ME</button>

            <GoalForm onAdd={addGoal} />
            <ListOfGoals goals={allGoals} />

            
        </div>
    );
}

export default UseStateHook
