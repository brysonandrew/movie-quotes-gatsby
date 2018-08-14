import * as React from 'react'
import Link from 'gatsby-link'
import { toPath } from '../utils/transformation'
import * as style from './IndexPage.module.css';

export const SOURCES: string[] = [
  'Malik Montana',
  'Ogniem i Mieczem',
  'Rynstok',
  'Wiedzmin',
  'Winged Hussars'
];

const IndexPage = () => (
  <div className={style.IndexPage}>
    <ul>
      {SOURCES.map((source: string) => (
        <li key={source}>
          <Link to={toPath(source)}>{source}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default IndexPage
