import React from "react";
import { useState } from "react";

const Row = ({ children, spacing }) => {
    const childStyle = {
        marginRight: spacing
    };
    return (
        <div>
            {React.Children.map(children, (child, index) => {
                return (
                    <div style={{ border: "1px solid black", padding: 20 }}>
                        {React.cloneElement(child, { 
                            style: { 
                                ...child.props.style,
                                ...(index === 0 ? {} : childStyle)
                            } 
                        })}
                    </div>
                );
            })}
        </div>
    )
};

const RadioGroup = ({ onChange, selected, children }) => { 
    const RadioOptions = React.Children.map(children, (child) => { 
      return React.cloneElement(child, { 
        onChange, 
        checked: child.props.value === selected, 
      }); 
    }); 
    return <div className="RadioGroup">{RadioOptions}</div>; 
}; 
   
const RadioOption = ({ value, checked, onChange, children }) => { 
    return ( 
      <div className="RadioOption"> 
        <input 
          id={value} 
          type="radio" 
          name={value} 
          value={value} 
          checked={checked} 
          onChange={(e) => { 
            // icteki onChange burada setSelected fonksiyonunu çağırıyor. 
            onChange(e.target.value); 
          }} 
        /> 
        <label htmlFor={value}>{children}</label> 
      </div> 
    ); 
}; 

function LiveOrders() {
    const [selected, setSelected] = useState("");

    return (
        <div>
            <Row spacing={32}>
                <div>Order 1</div>
                <div>Order 2</div>
                <div>Order 3</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Row>
            <>
            <h2>How did you hear about Little Lemon?</h2>
            <RadioGroup onChange={setSelected} selected={selected}>
                <RadioOption value="social_media">Social Media</RadioOption>
                <RadioOption value="friends">Friends</RadioOption>
                <RadioOption value="advertising">Advertising</RadioOption>
                <RadioOption value="other">Other</RadioOption>
            </RadioGroup>
            <button disabled={!selected}>Submit</button>
            </>
        </div>

        
    )
}

export default LiveOrders;