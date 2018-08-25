import * as React from 'react'
import Link from 'gatsby-link'
import { toPath } from '../utils/transformation'
const RAD = 300
const FRACTION_OFFSET = 0.1
const OFFSET = {
  x: 300,
  y: 300,
}
import * as style from './IndexPage.module.css'
import { ICONS } from '../common/icons'

export const SOURCES: string[] = ['War', 'Business', 'Humor']

const IndexPage = () => (
  <div className={style.IndexPage}>
    {ICONS.Lion}
    <ul>
      {SOURCES.map((source: string, index: number) => {
        const length = SOURCES.length
        const fraction = index / length - 1 + FRACTION_OFFSET
        const left = Math.sin(fraction * Math.PI * 2) * RAD + OFFSET.x
        const top = Math.cos(fraction * Math.PI * 2) * RAD + OFFSET.y
        return (
          <li key={source} style={{ left, top }}>
            <Link to={toPath(source)}>{source}</Link>
          </li>
        )
      })}
    </ul>
  </div>
)

export default IndexPage
