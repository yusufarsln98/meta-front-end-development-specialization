import {React, useRef, useState } from "react";

function ControlledInputs() {
    const UncontrolledForm = () => { 
        return ( 
          <div> 
            <input type="text" /> 
          </div> 
        ); 
       };
    
    const ControlledForm = () => { 
        const inputRef = useRef(null); 
       
        const handleSubmit = (e) => { 
          const inputValue = inputRef.current.value; 
            alert(inputValue);
            // Prevents the page from reloading
            e.preventDefault();
        } 
        return ( 
          <form onSubmit={handleSubmit}> 
            <input ref={inputRef} type="text" /> 
          </form> 
        ); 
    }; 

    const Form = () => { 
        const [value, setValue] = useState(""); 
       
        const handleChange = (e) => { 
          setValue(e.target.value) 
          console.log(value);
        } 

        const handleSubmit = (e) => {
            e.preventDefault();
            alert(value);
        }
       
        return ( 
          <form onSubmit={handleSubmit}> 
            <input 
              value={value}
              // Show input inside the form
              placeholder = "Enter your name"          
              onChange={handleChange}
              type="text" 
            /> 
          </form> 
        ); 
       };

    // A Form that can be submitted
    const Form2 = () => {
        const [name, setName] = useState("");
        
        const handleSubmit = (e) => {
            e.preventDefault();
            setName("");
            console.log("form submitted");
            alert(name);
        };

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="Field">
                            <label htmlFor="name">Name:</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <button disabled = {!name} type="submit">
                            Submit
                        </button>
                    </fieldset>
                </form>
            </div>
        )
    }

    // Feedback form
    const FeedbackForm = () => {
        const [score, setScore] = useState("10");
        const [comment, setComment] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            alert(`Score: ${score}, Comment: ${comment}`);
        };

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <h2>Feedback Form</h2>
                        <div className="Field">
                            <label>Score: {score} 🌟 </label>
                            <input 
                                type="range"
                                min="0"
                                max="10"
                                value={score}
                                onChange={(e) => setScore(e.target.value)}
                            />
                        </div>
                        <div className="Field">
                            <label htmlFor="comment">Comment</label>
                            <textarea 
                                type="text" 
                                name="comment" 
                                id="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)} 
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }

    return (
        <div>
            <h1>Controlled Inputs</h1>
            <div>
                <p>This is an uncontrolled form</p>
                <UncontrolledForm />
                <p>This a controlled form</p>
                <ControlledForm />

                <p>This is a controlled form with state</p>
                <Form />

                <p>This is a controlled form with state and a submit button</p>
                <Form2 />

                <p>This is a feedback form</p>
                <FeedbackForm />
            </div>
        </div>
    );
}

export default ControlledInputs