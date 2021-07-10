import React from "react";
import { SvgXml } from "react-native-svg";

export default function IconWithDraw({ color = "#000", width = 50, height = 50, style }) {
    const src = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="451" y2="61"><stop offset="0" stop-color="#5558ff"/><stop offset="1" stop-color="#00c0ff"/></linearGradient><path d="m497 301h-76v-165c0-8.291-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15h-60c-8.291 0-15 6.709-15 15v15h-30v-15c0-8.291-6.709-15-15-15h-60c-8.291 0-15 6.709-15 15v45h-45c-8.291 0-15 6.709-15 15v165h-76c-8.291 0-15 6.709-15 15v60c0 8.291 6.709 15 15 15h36.728l-19.146 38.291c-3.706 7.412-.703 16.421 6.709 20.127 7.487 3.718 16.439.646 20.127-6.709l25.854-51.709h341.455l25.854 51.709c3.691 7.361 12.647 10.423 20.127 6.709 7.412-3.706 10.415-12.715 6.709-20.127l-19.145-38.291h36.728c8.291 0 15-6.709 15-15v-60c0-8.291-6.709-15-15-15zm-106-150v150h-30v-150zm-90-60h30v210h-30zm-30 30v180h-30v-180zm-90-30h30v210h-30zm-60 60h30v150h-30zm361 210h-452v-30h452z" fill="url(#SVGID_1_)"/></svg>`;
    const Icon = () => <SvgXml xml={src} width={width} height={height} />;
    return <Icon style={style} />;
}