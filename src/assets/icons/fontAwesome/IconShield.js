import React from "react";
import { SvgXml } from "react-native-svg";

export default function IconShield({ color = "#000", width = 50, height = 50, style }) {
    const src = `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shield-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-shield-alt fa-w-16 fa-7x"><path d="M256 409.6V100l-142.9 59.5c8.4 116.2 65.2 202.6 142.9 250.1zM466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256 464C158.5 423.4 64 297.3 64 128l192-80 192 80c0 173.8-98.4 297-192 336z" class=""></path></svg>`
    const Icon = () => <SvgXml xml={src} width={width} height={height} style={style} fill={color} />;
    return <Icon />;
}