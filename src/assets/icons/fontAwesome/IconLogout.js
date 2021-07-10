import React from 'react'
import { SvgXml } from 'react-native-svg'

export default function IconCog({ color = '#000', width = 50, height = 50, style }) {
  const src = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 209.486 209.486" style="enable-background:new 0 0 209.486 209.486;" xml:space="preserve"><g><path d="M206.85,98.379l-40.333-40.333c-3.514-3.515-9.213-3.515-12.728,0c-3.515,3.515-3.515,9.213,0,12.728l24.969,24.97h-39.785   v-86c0-4.971-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v190c0,4.971,4.029,9,9,9h120.973c4.971,0,9-4.029,9-9v-86h39.785l-24.969,24.97   c-3.515,3.515-3.515,9.213,0,12.728c1.757,1.758,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l40.333-40.333   C210.365,107.592,210.365,101.894,206.85,98.379z M120.973,190.743H18v-172h102.973v77H52.712c-4.971,0-9,4.029-9,9s4.029,9,9,9   h68.261V190.743z"/></g></svg>`
  const Icon = () => <SvgXml xml={src} width={width} height={height} style={style} fill={color} />
  return <Icon />
}
