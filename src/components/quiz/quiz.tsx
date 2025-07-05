import { useEffect, useState } from "preact/hooks";
import Answer from "./answer";
import Question from "./question";
import getDataFromAPI from "../../../service";
// quiz = question + answer

const Quiz = () => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [nextQuestion, setNextQuestion] = useState<boolean>(false);
    const [count, setCount] = useState<number>(1);
    const [score, setScore] = useState<number>(0);
    const loadData = async () => {
        try {
            setLoading(true);
            const result = await getDataFromAPI();
            setData(result.results);
            setLoading(false);
            setNextQuestion(false);
        } catch (error) {
            setTimeout(() => {
                loadData();
            }, 1000);
        }
    };
    useEffect(() => {
        loadData();
    }, []);
    const question: string = data[0]?.question;
    const correctAnswer: string = data[0]?.correct_answer;
    const inCorrectAnswer = data[0]?.incorrect_answers;
    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    padding: "40px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    backgroundColor: "#f0f2f5",
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <div
                    style={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        color: "#1890ff",
                        marginBottom: "20px",
                    }}
                >
                    Score: {score}
                </div>
                <Question
                    question={question}
                    loadData={loadData}
                    loading={loading}
                    nextQuestion={nextQuestion}
                    count={count}
                    setCount={setCount}
                />
                <Answer
                    correctAnswer={correctAnswer}
                    inCorrectAnswer={inCorrectAnswer}
                    loading={loading}
                    setNextQuestion={setNextQuestion}
                    loadData={loadData}
                    setCount={setCount}
                    setScore={setScore}
                />
            </div>
        </>
    );
};
export default Quiz;
