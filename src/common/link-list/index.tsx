import * as React from 'react'
import Link from 'gatsby-link'
import * as style from './LinkList.module.css'
import { IPage } from '../../utils/page'

export enum ELinkListPrefixType {
  War = '/war/',
  Business = '/business/',
  Humor = '/humor/'
}

export namespace ILinkList {
  export interface Props {
    pages: IPage[]
    linkPrefix: ELinkListPrefixType
  }
}

export function LinkList(props: ILinkList.Props) {
  return (
    <div className={style.LinkList}>
      <ul>
        {props.pages.map((page: IPage) => (
          <li key={page.name}>
            <Link to={`${props.linkPrefix}${page.path}`}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
