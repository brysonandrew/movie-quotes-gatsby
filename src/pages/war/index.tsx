import * as React from 'react'
import Link from 'gatsby-link'
import { IPage } from '../../utils/page'
import * as style from './War.module.css'
import { ILoveTheSmellPage } from './i-love-the-smell-of-napalm-in-the-morning'
import { IWatchedAPage } from './i-watched-a-snail-crawl-along-the-edge'

export const pages: IPage[] = [ILoveTheSmellPage, IWatchedAPage]

export namespace IWar {
  export interface Props {
    history: History
  }
}

export default class War extends React.Component<IWar.Props> {
  public render() {
    return (
      <div className={style.War}>
        <ul>
          {pages.map((page: IPage) => (
            <li key={page.name}>
              <Link to={`/war/${page.path}`}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
