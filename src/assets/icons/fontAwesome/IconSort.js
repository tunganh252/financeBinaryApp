import React from "react";
import { SvgXml } from "react-native-svg";

export default function IconSort({ color = "#000", width = 50, height = 50, style }) {
    const src = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-sort fa-w-10 fa-3x"><path fill=${color} d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z" class=""></path></svg>`
    const Icon = () => <SvgXml xml={src} width={width} height={height} />;
    return <Icon style={style} />;
}