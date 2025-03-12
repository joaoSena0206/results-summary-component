import "./App.css";
import Result from "./features/result";
import Summary from "./features/summary";

function App() {
    return (
        <div className="lg:flex lg:h-screen lg:items-center lg:justify-center lg:bg-[#ECF2FF]">
            <div className="lg:flex lg:bg-white lg:rounded-4xl">
                <Result score={76} />
                <Summary
                    metricsData={{
                        reaction: 80,
                        memory: 92,
                        verbal: 61,
                        visual: 73,
                    }}
                />
            </div>
        </div>
    );
}

export default App;
