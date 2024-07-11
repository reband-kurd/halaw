import { Card, SparkAreaChart, SparkBarChart, SparkLineChart, Text, Title } from "@tremor/react";

export const chartdata = [
    {
        month: "Jan 21",
        Performance: 4000,
        "Benchmark": 3000,
    },
    {
        month: "Feb 21",
        Performance: 3000,
        "Benchmark": 2000,
    },
    {
        month: "Mar 21",
        Performance: 2000,
        "Benchmark": 1700,
    },
    {
        month: "Apr 21",
        Performance: 2780,
        "Benchmark": 2500,
    },
    {
        month: "May 21",
        Performance: 1890,
        "Benchmark": 1890,
    },
    {
        month: "Jun 21",
        Performance: 2390,
        "Benchmark": 2000,
    },
    {
        month: "Jul 21",
        Performance: 3490,
        "Benchmark": 3000,
    },
];

function Salsedw() {
    return (
        <Card className="w-full flex items-center justify-between mx-auto px-4 py-3.5">
            <div className="flex items-center space-x-2.5">
                <Title>AAPL</Title>
                <Text className="hidden sm:block">Apple Inc.</Text>
            </div>
            <SparkAreaChart
                data={chartdata}
                categories={["Performance"]}
                index={"month"}
                colors={["emerald"]}
                className="h-10 w-36"
            />
            <div className="flex items-center space-x-2.5">
                <span className="font-medium rounded text-gray-700">179.26</span>
                <span className="px-2 py-1 text-sm font-medium rounded text-white bg-emerald-500">+1.72%</span>
            </div>
        </Card>
    );
}
export default Salsedw