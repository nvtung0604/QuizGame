import axios from "axios";
const getDataFromAPI = async () => {
    const response = axios.get(
        "https://opentdb.com/api.php?amount=1&type=multiple"
    );
    console.log((await response).data);
    return (await response).data;
};
export default getDataFromAPI;
