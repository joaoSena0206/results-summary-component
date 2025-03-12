import "./App.css";
import Result from "./features/result";
import Summary from "./features/summary";

function App() {
    return (
        <>
            <Result score={76} />
            <Summary
                metricsData={{
                    reaction: 80,
                    memory: 92,
                    verbal: 61,
                    visual: 73,
                }}
            />
        </>
    );
}

export default App;
