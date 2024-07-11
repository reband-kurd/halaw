import { BarChart, Card, Title } from "@tremor/react";

const chartdata5 = [
    {
        date: "Jan 23",
        Running: 167,
    },
    {
        date: "Feb 23",
        Running: 125,
    },
    {
        date: "Mar 23",
        Running: 156,
    },
    {
        date: "Apr 23",
        Running: 165,
    },
    {
        date: "May 23",
        Running: 153,
    },
    {
        date: "Jun 23",
        Running: 124,
    },
    {
        date: "Jul 23",
        Running: 164,
    },
    {
        date: "Aug 23",
        Running: 123,
    },
    {
        date: "Sep 23",
        Running: 132,
    },
];

const customTooltip = ({ payload, active }) => {
    if (!active || !payload) return null;
    return (
        <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
            {payload.map((category, idx) => (
                <div key={idx} className="flex flex-1 space-x-2.5">
                    <div className={`w-1 flex flex-col bg-${category.color}-500 rounded`} />
                    <div className="space-y-1">
                        <p className="text-tremor-content">{category.dataKey}</p>
                        <p className="font-medium text-tremor-content-emphasis">{category.value} bpm</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

function Naxhaypemj(){
    return (
        <>
            <Card>
                <Title>Average BPM</Title>
                <BarChart
                    className="h-72 mt-4"
                    data={chartdata5}
                    index="date"
                    categories={["Running"]}
                    colors={["blue"]}
                    yAxisWidth={30}
                    customTooltip={customTooltip}
                />
            </Card>
        </>
    );
}
export default Naxhaypemj