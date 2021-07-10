import React from 'react'
import { SvgXml } from 'react-native-svg'

export default function IconSwitch({ color = '#000', width = 50, height = 50, style }) {
  const src = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-sort-alt fa-w-12 fa-3x"><path fill=${color} d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm203.29-219.31l-80-96a16 16 0 0 0-22.62 0l-80 96C186.65 142.74 193.78 160 208 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.19 0 21.36-17.24 11.29-27.31z" class=""></path></svg>`
  const Icon = () => <SvgXml xml={src} width={width} height={height} style={style} fill={color} />
  return <Icon />
}
