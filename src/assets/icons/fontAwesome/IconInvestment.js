import React from "react";
import { SvgXml } from "react-native-svg";

export default function IconInvestment({ color = "#000", width = "50px", height = "50px" }) {
    const src = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="usd-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-usd-square fa-w-14 fa-3x"><path fill=${color} d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM248 384v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16.2c-16.5-.6-32.6-5.8-46.4-15.1-8.7-5.9-10-18.1-2.3-25.2l12-11.3c5.4-5.1 13.3-5.4 19.7-1.6 6.1 3.6 12.9 5.4 19.9 5.4h45c11.3 0 20.5-10.5 20.5-23.4 0-10.6-6.3-19.9-15.2-22.7L181 268c-29-8.8-49.2-37-49.2-68.6 0-39.3 30.6-71.3 68.2-71.4v-16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16.2c16.5.6 32.6 5.8 46.4 15.1 8.7 5.9 10 18.1 2.3 25.2l-12 11.3c-5.4 5.1-13.3 5.4-19.7 1.6-6.1-3.6-12.9-5.4-19.9-5.4h-45c-11.3 0-20.5 10.5-20.5 23.4 0 10.6 6.3 19.9 15.2 22.7l72 21.9c29 8.8 49.2 37 49.2 68.6.2 39.3-30.4 71.2-68 71.4z" class=""></path></svg>`;
    const Icon = () => <SvgXml xml={src} width={width} height={height} />;
    return <Icon />;
}