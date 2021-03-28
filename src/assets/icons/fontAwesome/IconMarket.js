import React from "react";
import { SvgXml } from "react-native-svg";

export default function IconMarket({ color = "#000", width = "50px", height = "50px" }) {
    const src = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="poll" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-poll fa-w-14 fa-3x"><path fill=${color} d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM160 368c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V240c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v128zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V144c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v224zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v64z" class=""></path></svg>`
    const Icon = () => <SvgXml xml={src} width={width} height={height} />;
    return <Icon />;
}