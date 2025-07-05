import { useEffect, useState } from "preact/hooks";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import decodeHTML from "../helper/fix_entity";
interface Props {
    question: string;
    loadData: () => void;
    loading: boolean;
    nextQuestion: boolean;
    count: number;
    setCount: (value: any) => void;
}

const Question = (props: Props) => {
    const { question, loadData, loading, nextQuestion, count, setCount } =
        props;
    useEffect(() => {
        if (nextQuestion) {
            setCount((prev: number) => prev + 1);
            loadData();
        }
    }, [nextQuestion]);

    return (
        <div>
            {loading || !question ? (
                <div></div>
            ) : (
                <h1
                    style={{
                        maxWidth: "800px",
                        textAlign: "center",
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        fontSize: "24px",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                        fontWeight: "600",
                    }}
                >
                    Question {count}: {decodeHTML(question)}
                </h1>
            )}
        </div>
    );
};
export default Question;
