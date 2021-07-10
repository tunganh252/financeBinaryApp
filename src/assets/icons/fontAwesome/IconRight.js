import React from "react";
import { SvgCss } from "react-native-svg";

export default function IconBack({
  color = "#000",
  width = 50,
  height = 50,
  style,
}) {
  const src = `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-7x"><path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" class=""></path></svg>`;
  const Icon = () => (
    <SvgCss
      xml={src}
      width={width}
      height={height}
      style={style}
      fill={color}
    />
  );
  return <Icon />;
}