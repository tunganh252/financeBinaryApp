import React from "react";
import { SvgXml } from "react-native-svg";

export default function IconTrade({ color = "#000", width = 50, height = 50, style }) {
    const src = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exchange" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-exchange fa-w-16 fa-3x"><path fill=${color} d="M0 168v-16c0-13.255 10.745-24 24-24h381.97l-30.467-27.728c-9.815-9.289-10.03-24.846-.474-34.402l10.84-10.84c9.373-9.373 24.568-9.373 33.941 0l82.817 82.343c12.497 12.497 12.497 32.758 0 45.255l-82.817 82.343c-9.373 9.373-24.569 9.373-33.941 0l-10.84-10.84c-9.556-9.556-9.341-25.114.474-34.402L405.97 192H24c-13.255 0-24-10.745-24-24zm488 152H106.03l30.467-27.728c9.815-9.289 10.03-24.846.474-34.402l-10.84-10.84c-9.373-9.373-24.568-9.373-33.941 0L9.373 329.373c-12.497 12.497-12.497 32.758 0 45.255l82.817 82.343c9.373 9.373 24.569 9.373 33.941 0l10.84-10.84c9.556-9.556 9.341-25.113-.474-34.402L106.03 384H488c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z" class=""></path></svg>`
    const Icon = () => <SvgXml xml={src} width={width} height={height} />;
    return <Icon style={style} />;
}