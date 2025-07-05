interface IProps {
    valueInput: {
        id: string;
        title: string;
    }[];
    handleDelete: (id: string) => void;
}

const TodoList = (props: IProps) => {
    const { valueInput, handleDelete } = props;
    return (
        <>
            <ul style={{ marginLeft: "10px" }}>
                {valueInput?.map((item) => (
                    <li key={item.id}>
                        {item.id} : {item.title}
                        <button
                            onClick={() => {
                                handleDelete(item.id);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;
