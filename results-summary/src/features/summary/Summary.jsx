import Metrics from "./components/Metrics";

export default function Summary({ metricsData }) {
    return (
        <section className="md:flex md:flex-col md:items-center">
            <div className="py-5 px-8 max-w-[768px] w-full">
                <h1 className="mb-5 font-bold text-[#2F3649]">Summary</h1>

                <Metrics metricsData={metricsData} />

                <button className="bg-[#303B59] text-white w-full py-4 rounded-full mt-10 font-bold">
                    Continue
                </button>
            </div>
        </section>
    );
}
