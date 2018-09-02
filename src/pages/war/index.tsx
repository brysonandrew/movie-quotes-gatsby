import * as React from 'react'
import { IPage } from '../../utils/page'
import { data as page1 } from './i-love-the-smell-of-napalm-in-the-morning'
import { data as page2 } from './i-watched-a-snail-crawl-along-the-edge'
import { ELinkListPrefixType, LinkList } from '../../common/link-list'

export const warPages: IPage[] = [page1, page2]

export namespace IWar {
  export interface Props {
  }
}

export default class War extends React.Component<IWar.Props> {
  public render() {
    return (
      <LinkList pages={warPages} linkPrefix={ELinkListPrefixType.War}/>
    )
  }
}
