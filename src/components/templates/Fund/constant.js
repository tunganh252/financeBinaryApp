import IconDeposit from "../../../assets/icons/fontAwesome/IconDeposit";
import IconWithDraw from "../../../assets/icons/fontAwesome/IconWithDraw";
import IconTransfer from "../../../assets/icons/fontAwesome/IconTransfer";
import IconHistory from "../../../assets/icons/fontAwesome/IconHistory";
import IconRecord from "../../../assets/icons/fontAwesome/IconRecord";
import { COLORS } from "../../../constant";


export const arrSelectBtn = [
    {
        name: "Deposit",
        icon: IconDeposit,
        colorIcon: COLORS.white,
        sizeIcon: 24,
        backgroundColor: {
            isLinear: true,
            color: ["#f3402c", "#f5af19"],
        },
    },
    {
        name: "Withdraw",
        icon: IconWithDraw,
        colorIcon: COLORS.white,
        sizeIcon: 23,

        backgroundColor: {
            isLinear: true,
            color: ["#f7971e", "#ffd200"],
        },
    },
    {
        name: "Transfer",
        icon: IconTransfer,
        colorIcon: COLORS.white,
        sizeIcon: 24,
        backgroundColor: {
            isLinear: true,
            // color: ["#fdc830", "#f37335"],
            color: ["#ff5f6d", "#ffc371"],
        },
    },
    {
        name: "History",
        icon: IconHistory,
        colorIcon: COLORS.primary,
        sizeIcon: 22,
        backgroundColor: {
            isLinear: false,
            color: "#ededed",
        },
    },
    {
        name: "Record",
        icon: IconRecord,
        colorIcon: COLORS.primary,
        sizeIcon: 18,
        backgroundColor: {
            isLinear: false,
            color: "#ededed",
            // color: COLORS.gray,
        },
    },
];

export const dataTabFundPage = [
    {
        name: "Trading account",
        key: "tradingAccount",
    },
    {
        name: "ETF account",
        key: "etfAccount",
    },
    {
        name: "Investment account",
        key: "investmentAccount",
    },
    {
        name: "Game account",
        key: "gameAccount",
    },
];