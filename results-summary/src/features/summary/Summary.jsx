import Metrics from "./components/Metrics";

export default function Summary({ metricsData }) {
    return (
        <section className="py-5 px-8">
            <h1 className="mb-5 font-bold text-[#2F3649]">Summary</h1>

            <Metrics
                metricsData={metricsData}
            />
        </section>
    );
}
