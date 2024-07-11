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
        Performance: 1000,
        "Benchmark": 1300,
    },
    {
        month: "Apr 21",
        Performance: 1780,
        "Benchmark": 3500,
    },
    {
        month: "May 21",
        Performance: 3890,
        "Benchmark": 2890,
    },
    {
        month: "Jun 21",
        Performance: 1390,
        "Benchmark": 1000,
    },
    {
        month: "Jul 21",
        Performance: 2490,
        "Benchmark": 2000,
    },
];

function Salsesee() {
    return (
        <Card className="max-w-lg flex items-center justify-between mx-auto px-4 py-3.5">
            <div className="flex items-center space-x-2.5">
                <Title>TSLA</Title>
                <Text className="hidden sm:block">
                    Tesla.Inc</Text>
            </div>
            <SparkAreaChart
                data={chartdata}
                categories={["Performance"]}
                index={"month"}
                colors={["emerald"]}
                className="h-10 w-36"
            />
            <div className="flex items-center space-x-2.5">
                <span className="font-medium rounded text-gray-700">120.26</span>
                <span className="px-2 py-1 text-sm font-medium rounded text-white bg-emerald-500">+1.22%</span>
            </div>
        </Card>
    );
}
export default Salsesee