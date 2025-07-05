import { useState } from "preact/hooks";
import TodoInput from "./todo-input";
import TodoList from "./todo-list";

interface IValueInput {
    id: string;
    title: string;
}
const Todo = () => {
    const [valueInput, setValueInput] = useState<IValueInput[]>([]);
    const addValueInput = (newValue: IValueInput) => {
        setValueInput([...valueInput, newValue]);
    };
    const handleDelete = (id: string) => {
        const newValue = valueInput.filter((item) => item.id != id);
        setValueInput(newValue);
    };
    return (
        <>
            <div
                style={{
                    width: "350px",
                    borderRadius: "10px",
                    border: "2px solid red",
                    height: "350px",
                    margin: "50px auto",
                }}
            >
                <TodoInput addValueInput={addValueInput} />
                <TodoList valueInput={valueInput} handleDelete={handleDelete} />
            </div>
        </>
    );
};

export default Todo;
