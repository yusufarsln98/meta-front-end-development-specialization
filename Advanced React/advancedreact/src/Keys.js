import React from "react";
import {useState} from "react";

function Keys() {

    const ToDo = (props) => (
        <tr>
            <td>
                <label>{props.id}</label>
            </td>
            <td>
                <input />
            </td>
            <td>
                <label>{props.createdAt}</label>
            </td>
        </tr>
    )

    const [todos, setTodos] = useState([{
        id: 'todo1',
        createdAt: '18:00'
    }, {
        id: 'todo2',
        createdAt: '20:30'}
    ]);

    const reverseOrder = () => {
        // Reverse is mutative so we need to create a copy of the array
        setTodos([...todos].reverse());
    }

    return (
        <div>
            <h1>Key usage</h1>
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {todos.map((todo) => (
                        <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
                    ))}
                </tbody>
            </table>
        </div>

    );
}
export default Keys
