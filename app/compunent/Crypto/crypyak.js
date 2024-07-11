import { LineChart, Card, Flex, Switch, Title } from "@tremor/react";
import { useState } from "react";
import {black} from "next/dist/lib/picocolors";

const chartdata3 = [
    {
        date: "Jan 23",
        "Bitcoin": 167,
        "Ethereum": 145,
        "Tether": 135,
        "Binance Coin": 115,
        "Solana": 150,
        "XSL": 150,
    },
    {
        date: "Feb 23",
        "Bitcoin": 125,
        "Ethereum": 110,
        "Tether": 155,
        "Binance Coin": 85,
        "Solana": 180,
        "XSL": 180,
    },
    {
        date: "Mar 23",
        "Bitcoin": 156,
        "Ethereum": 149,
        "Tether": 145,
        "Binance Coin": 90,
        "Solana": 130,
        "XSL": 130,
    },
    {
        date: "Apr 23",
        "Bitcoin": 165,
        "Ethereum": 112,
        "Tether": 125,
        "Binance Coin": 105,
        "Solana": 170,
        "XSL": 170,
    },
    {
        date: "May 23",
        "Bitcoin": 153,
        "Ethereum": 138,
        "Tether": 165,
        "Binance Coin": 100,
        "Solana": 110,
        "XSL": 110,
    },
    {
        date: "Jun 23",
        "Bitcoin": 124,
        "Ethereum": 145,
        "Tether": 175,
        "Binance Coin": 75,
        "Solana": 140,
        "XSL": 140,
    },
    {
        date: "Jul 23",
        "Bitcoin": 135,
        "Ethereum": 120,
        "Tether": 185,
        "Binance Coin": 95,
        "Solana": 160,
        "XSL": 160,
    },
    {
        date: "Aug 23",
        "Bitcoin": 145,
        "Ethereum": 130,
        "Tether": 195,
        "Binance Coin": 105,
        "Solana": 150,
        "XSL": 150,
    },
    {
        date: "Sep 23",
        "Bitcoin": 155,
        "Ethereum": 140,
        "Tether": 205,
        "Binance Coin": 115,
        "Solana": 140,
        "XSL": 140,
    },
    // More data points...
    {
        date: "Oct 23",
        "Bitcoin": 160,
        "Ethereum": 150,
        "Tether": 200,
        "Binance Coin": 120,
        "Solana": 130,
        "XSL": 130,
    },
    {
        date: "Nov 23",
        "Bitcoin": 170,
        "Ethereum": 160,
        "Tether": 190,
        "Binance Coin": 130,
        "Solana": 120,
        "XSL": 120,
    },
    {
        date: "Dec 23",
        "Bitcoin": 180,
        "Ethereum": 170,
        "Tether": 180,
        "Binance Coin": 140,
        "Solana": 110,
        "XSL": 110,
    },
    // You can continue adding more data points as needed...
];


function Cryptoyak (){
    const [value, setValue] = useState(true);
    return (
        <Card className="w-full mx-auto p-0">
            <div className="p-6">
                <LineChart
                    className="h-72 mt-4"
                    data={chartdata3}
                    index="date"
                    categories={[
                        "Bitcoin",
                        "Ethereum",
                        "Tether",
                        "Binance Coin",
                        "Solana",
                        "XSL"
                    ]}
                    colors={["neutral", "indigo", "rose", "orange", "emerald","black"]}
                    yAxisWidth={30}
                    enableLegendSlider={!value}
                />
            </div>

        </Card>
    );
}
export default Cryptoyak