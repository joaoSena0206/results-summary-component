import MetricCard from "./MetricCard";

export default function Metrics({ metricsData }) {
    return (
        <div class="flex flex-col space-y-5">
            <MetricCard
                icon="reaction"
                metricName="Reaction"
                score={metricsData.reaction}
            />
            <MetricCard
                icon="memory"
                metricName="Memory"
                score={metricsData.memory}
            />
            <MetricCard
                icon="verbal"
                metricName="Verbal"
                score={metricsData.verbal}
            />
            <MetricCard
                icon="visual"
                metricName="Visual"
                score={metricsData.visual}
            />
        </div>
    );
}
