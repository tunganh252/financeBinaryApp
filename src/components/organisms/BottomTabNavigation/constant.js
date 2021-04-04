import React from "react";

import IconMarket from "../../../assets/icons/fontAwesome/IconMarket";
import IconHome from "../../../assets/icons/fontAwesome/IconHome";
import IconTrade from "../../../assets/icons/fontAwesome/IconTrade";
import IconInvestment from "../../../assets/icons/fontAwesome/IconInvestment";
import IconFund from "../../../assets/icons/fontAwesome/IconFund";

import TestApp from "../../atoms/TestApp";
import Market from "../../templates/Market";
import Trade from "../../templates/Trade";
import Home from "../../templates/Home";
import Investment from "../../templates/Investment";
import Fund from "../../templates/Fund";
import FundAuthen from "../FundAuthen";

export const dataTabNavigation = [
    {
        name: "Market",
        isAuthenticate: false,
        component: Market,
        icon: ({ width, color, height }) => {
            return <IconMarket width={width} color={color} height={height} />;
        },
    },
    {
        name: "Trade",
        isAuthenticate: false,
        component: Trade,
        icon: ({ width, color, height }) => {
            return <IconTrade width={width} color={color} height={height} />;
        },
    },
    {
        name: "Home",
        isAuthenticate: false,
        component: TestApp,
        icon: ({ width, color, height }) => {
            return <IconHome width={width} color={color} height={height} />;
        },
    },
    {
        name: "Investment",
        isAuthenticate: false,
        component: Investment,
        icon: ({ width, color, height }) => {
            return <IconInvestment width={width} color={color} height={height} />;
        },
    },
    {
        name: "Fund",
        isAuthenticate: true,
        component: Fund,
        icon: ({ width, color, height }) => {
            return <IconFund width={width} color={color} height={height} />;
        },
    },
];