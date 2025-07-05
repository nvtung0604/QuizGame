// components/StartScreen.tsx
import { Button } from "antd";

interface Props {
    onStart: () => void;
}

const StartScreen = ({ onStart }: Props) => {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "#f0f2f5",
                padding: "20px",
                fontFamily: "'Poppins', sans-serif",
                textAlign: "center",
            }}
        >
            <h1
                style={{
                    fontSize: "clamp(28px, 6vw, 48px)",
                    color: "#1890ff",
                    marginBottom: "16px",
                    fontWeight: "600",
                }}
            >
                🎮 Quiz Challenge
            </h1>
            <p
                style={{
                    fontSize: "clamp(16px, 4vw, 20px)",
                    marginBottom: "32px",
                    maxWidth: "90%",
                    color: "#555",
                }}
            >
                General Knowledge Test - How Many Can You Answer?
            </p>
            <Button
                type="primary"
                size="large"
                style={{
                    padding: "12px 24px",
                    fontSize: "clamp(16px, 4vw, 20px)",
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "10px",
                }}
                onClick={onStart}
            >
                Start
            </Button>
        </div>
    );
};

export default StartScreen;
