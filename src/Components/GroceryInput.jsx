import {useState} from "react";

const GroceryInput = ({handleAdd}) => {
    const [title, setTitle] = useState("");
    return (
        <div>
            <input placeholder="Add Groceries" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={() => {
                handleAdd(title);
                setTitle("");
            }}>Add</button>
        </div>
    )
}

export default GroceryInput;