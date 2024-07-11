import { BarChart, Card, Title } from "@tremor/react";

const newData = [
    {
        name: "Topic 1",
        "Bitcoin": 890,
        "Ethereum": 338,
        "Ripple": 538,
        "Litecoin": 396,
        "Cardano": 138,
        "Polkadot": 436,
    },
    {
        name: "Topic 2",
        "Bitcoin": 289,
        "Ethereum": 233,
        "Ripple": 253,
        "Litecoin": 333,
        "Cardano": 133,
        "Polkadot": 533,
    },
    {
        name: "Topic 3",
        "Bitcoin": 380,
        "Ethereum": 535,
        "Ripple": 352,
        "Litecoin": 718,
        "Cardano": 539,
        "Polkadot": 234,
    },
    {
        name: "Topic 4",
        "Bitcoin": 90,
        "Ethereum": 98,
        "Ripple": 28,
        "Litecoin": 33,
        "Cardano": 61,
        "Polkadot": 53,
    },
    // Additional data points...
    {
        name: "Topic 5",
        "Bitcoin": 432,
        "Ethereum": 312,
        "Ripple": 287,
        "Litecoin": 244,
        "Cardano": 189,
        "Polkadot": 406,
    },
    {
        name: "Topic 6",
        "Bitcoin": 624,
        "Ethereum": 431,
        "Ripple": 382,
        "Litecoin": 514,
        "Cardano": 297,
        "Polkadot": 518,
    },
    {
        name: "Topic 7",
        "Bitcoin": 176,
        "Ethereum": 289,
        "Ripple": 215,
        "Litecoin": 198,
        "Cardano": 162,
        "Polkadot": 300,
    },
];

const valueFormatter = (number) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

function Crydww(){ return(<Card>
    <Title>Writing Contest: Entries</Title>
    <BarChart
        className="mt-6"
        data={newData}
        index="name"
        categories={["Bitcoin", "Ethereum", "Ripple", "Litecoin", "Cardano", "Polkadot"]}
        colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
        valueFormatter={valueFormatter}
        yAxisWidth={48}
    />
</Card>)}
export default Crydww