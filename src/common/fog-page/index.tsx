import * as React from 'react'
import * as style from './FogPage.module.css'
import { Fog } from '../fog'
import { defined } from '../../utils/evaluation'

export namespace IFogPage {
  export interface Props {
    imageProps: any
    quote: string
    fogLevel?: number // 1 (no fog) - 10 (only fog), default = 7.5
  }
}

export function FogPage(props: IFogPage.Props) {
  const { imageProps, quote, fogLevel } = props
  return (
    <div className={style.FogPage}>
      <Fog />
      <img
        style={{ opacity: defined(fogLevel) ? 1 - fogLevel * 0.1 : 0.25 }}
        {...imageProps}
      />
      <p>{quote}</p>
    </div>
  )
}
