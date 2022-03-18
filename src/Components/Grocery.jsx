import {useState} from "react";
import GroceryInput from "./GroceryInput.jsx";
import GroceryList from "./GroceryList.jsx";
import {v4 as uuid} from "uuid";

const Grocery = () => {
    const [data, setData] = useState([]);

    const handleAdd = (title) => {
        const payload = {
            title,
            id: uuid()
        };
        setData([...data, payload]);
    };

    const handleDelete = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    }

    return (
        <div>
            <GroceryInput handleAdd={handleAdd}/>
            {
                data.map((item) => (
                    <GroceryList {...item} key={item.id} handleDelete={handleDelete}/>
                ))
            }
        </div>
    )
}

export default Grocery;