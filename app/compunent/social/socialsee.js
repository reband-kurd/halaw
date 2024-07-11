import { AreaChart, BarChart, Card, Flex, Switch, Title } from "@tremor/react";

const chartdata = [
    {
        name: "X",
        "Number of threatened species": 2488,
    },
    {
        name: "Instagram",
        "Number of threatened species": 1445,
    },
    {
        name: "Facebook",
        "Number of threatened species": 743,
    },
    {
        name: "reedit",
        "Number of threatened species": 281,
    },
    {
        name: "Youtube",
        "Number of threatened species": 251,
    },
    {
        name: "TikTok",
        "Number of threatened species": 232,
    },
    {
        name: "Snapchat",
        "Number of threatened species": 98,
    },
];

const valueFormatter = (number) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

function Socialsee (){
    return(
        <div className="w-full  flex justify-center"><Card >
        <Title>Your income of this month</Title>
        <BarChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={["Number of threatened species"]}
            colors={["blue"]}
            valueFormatter={valueFormatter}
            yAxisWidth={60}
        />
    </Card></div>)
}
export default Socialsee