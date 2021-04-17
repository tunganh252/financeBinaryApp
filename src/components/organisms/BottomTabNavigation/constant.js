import React from "react";

import IconMarket from "../../../assets/icons/fontAwesome/IconMarket";
import IconHome from "../../../assets/icons/fontAwesome/IconHome";
import IconTrade from "../../../assets/icons/fontAwesome/IconTrade";
import IconInvestment from "../../../assets/icons/fontAwesome/IconInvestment";
import IconWallet from "../../../assets/icons/fontAwesome/IconWallet";

import TestApp from "../../atoms/TestApp";
import Market from "../../templates/Market";
import Trade from "../../templates/Trade";
import Home from "../../templates/Home";
import Investment from "../../templates/Investment";
import WalletAuthen from "../WalletAuthen";

export const dataTabNavigation = [
    {
        name: "Home",
        isAuthenticate: false,
        component: TestApp,
        icon: ({ width, color, height }) => {
            return <IconHome width={width} color={color} height={height} />;
        },
    },
    {
        name: "Market",
        isAuthenticate: false,
        component: Market,
        icon: ({ width, color, height }) => {
            return <IconMarket width={width} color={color} height={height} />;
        },
    },
    // {
    //     name: "Trade",
    //     isAuthenticate: false,
    //     component: Trade,
    //     icon: ({ width, color, height }) => {
    //         return <IconTrade width={width} color={color} height={height} />;
    //     },
    // },
    // {
    //     name: "Investment",
    //     isAuthenticate: false,
    //     component: Investment,
    //     icon: ({ width, color, height }) => {
    //         return <IconInvestment width={width} color={color} height={height} />;
    //     },
    // },
    {
        name: "Wallet",
        isAuthenticate: true,
        component: WalletAuthen,
        icon: ({ width, color, height }) => {
            return <IconWallet width={width} color={color} height={height} />;
        },
    },
    {
        name: "Logout",
        isAuthenticate: true,
        component: Home,
        icon: ({ width, color, height }) => {
            return <IconHome width={width} color={color} height={height} />;
        },
    },
];