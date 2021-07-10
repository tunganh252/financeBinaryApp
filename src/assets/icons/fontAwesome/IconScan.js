import React from 'react'
import { SvgXml } from 'react-native-svg'

export default function IconScan({ color = '#000', width = 50, height = 50, style }) {
  const src = `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="barcode-read" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-barcode-read fa-w-20 fa-3x"><path fill=${color} d="M248 128h-16c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm-64 0h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm-40 336H48v-96c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zM16 160h16c8.8 0 16-7.2 16-16V48h96c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v128c0 8.8 7.2 16 16 16zm496 216V136c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8zM312 128h-16c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm312 224h-16c-8.8 0-16 7.2-16 16v96h-96c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16zm0-352H496c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h96v96c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16zM408 128h-48c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8z" class=""></path></svg>`
  const Icon = () => <SvgXml xml={src} width={width} height={height} style={style} fill={color} />
  return <Icon />
}