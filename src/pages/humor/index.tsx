import * as React from 'react'
import { IPage } from '../../utils/page'
import { data as page1 } from './i-didnt-expect-a-fucking-rainforest'
import { ELinkListPrefixType, LinkList } from '../../common/link-list'

export const humorPages: IPage[] = [page1]

export namespace IHumor {
  export interface Props {
  }
}

export default class Humor extends React.Component<IHumor.Props> {
  public render() {
    return (
      <LinkList pages={humorPages} linkPrefix={ELinkListPrefixType.Humor}/>
    )
  }
}
