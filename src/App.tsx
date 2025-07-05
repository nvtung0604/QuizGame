// App.tsx
import { useState } from "preact/hooks";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/quiz/quiz";

const App = () => {
    const [started, setStarted] = useState(false);

    return (
        <>
            {!started ? (
                <StartScreen onStart={() => setStarted(true)} />
            ) : (
                <Quiz setStarted={setStarted} />
            )}
        </>
    );
};

export default App;
