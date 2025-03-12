export default function MetricCard({ icon, metricName, score }) {
    let icons = import.meta.glob(`../icons/icon-*.svg`, { eager: true });
    let colors = {
        reaction: "text-[#D07475]",
        memory: "text-[#FFCA6D]",
        verbal: "text-[#5AB6A1]",
        visual: "text-[#4C55BE]",
    };
    let bgColors = {
        reaction: "bg-[#FFF6F7]",
        memory: "bg-[#FFFAF4]",
        verbal: "bg-[#F2FDF9]",
        visual: "bg-[#F4F4FE]",
    };

    return (
        <div
            className={`flex justify-between ${bgColors[icon]} px-3 py-5 rounded-lg`}>
            <div className="flex space-x-3">
                <img
                    src={icons[`../icons/icon-${icon}.svg`].default}
                    alt={metricName}
                />
                <p className={`font-bold ${colors[icon]}`}>{metricName}</p>
            </div>

            <div className="flex">
                <p className="text-[#353947] font-bold mr-2">{score}</p>
                <p className="text-[#A39DA7] font-bold mr-2">/</p>
                <p className="text-[#A39DA7] font-bold">100</p>
            </div>
        </div>
    );
}
