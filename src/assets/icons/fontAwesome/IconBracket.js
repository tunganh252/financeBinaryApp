import React from 'react'
import { SvgXml } from 'react-native-svg'

export default function IconBracket({ color = '#000', width = 50, height = 50, style }) {
  const src = `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="brackets" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-brackets fa-w-14 fa-3x"><path fill=${color} d="M120 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h72a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H48a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h72a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8zm280 0h-72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h72a16 16 0 0 1 16 16v352a16 16 0 0 1-16 16h-72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h72a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" class=""></path></svg>`
  const Icon = () => <SvgXml xml={src} width={width} height={height} />
  return <Icon style={style} />
}
