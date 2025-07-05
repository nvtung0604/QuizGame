import decodeHTML from "../helper/fix_entity";
import { Button, message, Modal, Spin } from "antd";

interface Props {
    correctAnswer: string;
    inCorrectAnswer: string[];
    loading: boolean;
    setNextQuestion: (value: boolean) => void;
    loadData: () => void;
    setCount: (value: number) => void;
    setScore: (value: any) => void;
}

const Answer = (props: Props) => {
    const {
        correctAnswer,
        inCorrectAnswer,
        loading,
        setNextQuestion,
        loadData,
        setCount,
        setScore,
    } = props;

    const mixAnswer = [...(inCorrectAnswer || []), correctAnswer].sort(
        () => Math.random() - 0.5
    );

    const choiceCorrect = (answer: string) => {
        if (answer === correctAnswer) {
            message.success("🎉 You answer correct!");
            setScore((prev: number) => prev + 1);
            setNextQuestion(true);
        } else {
            Modal.confirm({
                title: "❌ You wrong answer!",
                content: "Do you want try again?",
                okText: "Try again",
                cancelButtonProps: { style: { display: "none" } },
                onOk: () => {
                    setScore(0);
                    setCount(1);
                    loadData();
                },
            });
        }
    };

    return (
        <>
            {!loading ? (
                <div
                    style={{
                        width: "100%",
                        maxWidth: "600px",
                        margin: "0 auto",
                    }}
                >
                    <ul
                        style={{ listStyle: "none", padding: 0, width: "100%" }}
                    >
                        {mixAnswer.map((answer, index) => (
                            <li key={index} style={{ marginBottom: "16px" }}>
                                <Button
                                    type="default"
                                    size="large"
                                    block
                                    style={{
                                        width: "100%",
                                        minHeight: "48px",
                                        fontSize: "clamp(14px, 4vw, 18px)",
                                        fontWeight: 500,
                                        padding: "16px 20px",
                                        borderRadius: "10px",
                                        whiteSpace: "normal",
                                        lineHeight: 1.4,
                                        wordBreak: "break-word",
                                        background: "#f0f2f5",
                                        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                                    }}
                                    onClick={() => choiceCorrect(answer)}
                                >
                                    {decodeHTML(answer)}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <Spin size="large" />
                </div>
            )}
        </>
    );
};

export default Answer;
