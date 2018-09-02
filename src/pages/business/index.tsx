import * as React from 'react'
import { IPage } from '../../utils/page'
import { data as page1 } from './im-gonna-make-him-an-offer/data'
import { ELinkListPrefixType, LinkList } from '../../common/link-list'

export const businessPages: IPage[] = [page1]

export namespace IBusiness {
  export interface Props {
  }
}

export default class Business extends React.Component<IBusiness.Props> {
  public render() {
    return (
      <LinkList pages={businessPages} linkPrefix={ELinkListPrefixType.Business}/>
    )
  }
}
