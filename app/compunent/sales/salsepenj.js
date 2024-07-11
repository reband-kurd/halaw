import { AreaChart, Card, Flex, Switch, Title } from "@tremor/react";

const updatedData = [
    {
        date: "Jan 23",
        "Apple": 167,
        "Tesla": 145,
        "Amazon": 135,
    },
    {
        date: "Feb 23",
        "Apple": 125,
        "Tesla": 110,
        "Amazon": 155,
    },
    {
        date: "Mar 23",
        "Apple": 156,
        "Tesla": 149,
        "Amazon": 145,
    },
    {
        date: "Apr 23",
        "Apple": 165,
        "Tesla": 112,
        "Amazon": 125,
    },
    {
        date: "May 23",
        "Apple": 153,
        "Tesla": 138,
        "Amazon": 165,
    },
    {
        date: "Jun 23",
        "Apple": 124,
        "Tesla": 145,
        "Amazon": 175,
    },
    {
        date: "Jul 23",
        "Apple": 124,
        "Tesla": 145,
        "Amazon": 175,
    },
    {
        date: "Aug 23",
        "Apple": 124,
        "Tesla": 145,
        "Amazon": 175,
    },
    {
        date: "Sep 23",
        "Apple": 124,
        "Tesla": 145,
        "Amazon": 175,
    },
    {
        date: "Oct 23",
        "Apple": 124,
        "Tesla": 145,
        "Amazon": 175,
    },
    {
        date: "Nov 23",
        "Apple": 124,
        "Tesla": 145,
        "Amazon": 175,
    },
    {
        date: "Dec 23",
        "Apple": 124,
        "Tesla": 145,
        "Amazon": 175,
    },
    {
        date: "Jan 24",
        "Apple": 124,
        "Tesla": 145,
        "Amazon": 175,
    },
    {
        date: "Feb 24",
        "Apple": 124,
        "Tesla": 145,
        "Amazon": 175,
    },
    {
        date: "Mar 24",
        "Apple": 124,
        "Tesla": 145,
        "Amazon": 175,
    },
    {
        date: "Apr 24",
        "Apple": 124,
        "Tesla": 145,
        "Amazon": 175,
    },
];

function Selsepenj() {
    return (
        <Card className="w-full h-fit mx-auto p-0">
            <div className="p-6">
                <AreaChart
                    className="h-60 mt-4"
                    data={updatedData}
                    index="date"
                    categories={["Apple", "Tesla", "Amazon"]}
                    colors={["green", "violet", "indigo"]}
                    yAxisWidth={30}
                />
            </div>
        </Card>
    );
}
export default Selsepenj