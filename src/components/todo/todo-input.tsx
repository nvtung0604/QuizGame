import { useState } from "preact/hooks";

interface IValueInput {
    id: string;
    title: string;
}
interface IProps {
    addValueInput: (value: IValueInput) => void;
}
const TodoInput = (props: IProps) => {
    const [value, setValue] = useState<string>("");
    const { addValueInput } = props;
    const handleAddValue = () => {
        addValueInput({
            id: generateRandomId(),
            title: value,
        });
        setValue("");
    };
    const changeData = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setValue(target.value);
    };
    function generateRandomId(length = 8) {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    return (
        <>
            <div
                style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <input
                    style={{ padding: "5px 12px" }}
                    type="text"
                    placeholder={"Enter your task?"}
                    value={value}
                    onChange={changeData}
                />
                <button
                    style={{ padding: "5px 10px" }}
                    onClick={handleAddValue}
                >
                    Add
                </button>
            </div>
        </>
    );
};

export default TodoInput;
