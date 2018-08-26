import * as React from 'react'
import * as style from './Business.module.css'

export namespace IBusiness {
  export interface Props {}
}

export default class Business extends React.Component<IBusiness.Props> {
  constructor(props: IBusiness.Props, context?: any) {
    super(props, context)
  }

  public render() {
    return <div className={style.Business}>Business</div>
  }
}
