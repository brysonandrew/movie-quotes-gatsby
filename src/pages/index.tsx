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
import { warPages } from './war'
import { IPage } from '../utils/page'
import { businessPages } from './business'

interface ISource {
  name: string;
  pages: IPage[];
}

export const SOURCES: ISource[] = [
  {
    name: 'War',
    pages: warPages
  },
  {
    name: 'Business',
    pages: businessPages
  },
  {
    name: 'Humor',
    pages: null // humorPages
  }
]

export const SOURCES_DICT = SOURCES.reduce((a: {}, c: ISource) => {
  a[c.name] = c.pages;
  return a;
}, {});

const IndexPage = () => (
  <div className={style.IndexPage}>
    {ICONS.Lion}
    <ul>
      {SOURCES.map((source: ISource, index: number) => {
        const length = SOURCES.length
        const fraction = index / length - 1 + FRACTION_OFFSET
        const left = Math.sin(fraction * Math.PI * 2) * RAD + OFFSET.x
        const top = Math.cos(fraction * Math.PI * 2) * RAD + OFFSET.y
        return (
          <li key={source.name} style={{ left, top }}>
            <Link to={toPath(source.name)}>{source.name}</Link>
          </li>
        )
      })}
    </ul>
  </div>
)

export default IndexPage
