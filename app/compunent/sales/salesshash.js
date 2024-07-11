import { AreaChart, Card, Title } from "@tremor/react";

const chartdata3 = [
    {
        date: "Jan 23",
        "Price": 1.67,
    },
    {
        date: "Feb 23",
        "Price": 1.25,
    },
    {
        date: "Mar 23",
        "Price": 1.56,
    },
    {
        date: "Apr 23",
        "Price": 1.65,
    },
    {
        date: "May 23",
        "Price": 1.53,
    },
    {
        date: "Jun 23",
        "Price": 1.24,
    },
    {
        date: "Jul 23",
        "Price": 1.64,
    },
    {
        date: "Aug 23",
        "Price": 1.23,
    },
    {
        date: "Sep 23",
        "Price": 1.32,
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
                        <p className="font-medium text-tremor-content-emphasis">{category.value} dollar</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

function Salseshash () {
    return (
        <>
            <Card>
                <Title>Average Stock Market Price changes</Title>
                <AreaChart
                    className="h-60 mt-4"
                    data={chartdata3}
                    index="date"
                    categories={["Price"]}
                    colors={["green"]}
                    yAxisWidth={30}
                    customTooltip={customTooltip}
                />
            </Card>
        </>
    );
}
export default Salseshash