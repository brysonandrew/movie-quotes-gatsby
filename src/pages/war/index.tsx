import * as React from 'react';
import * as style from './War.module.css';

export namespace IWar {
  export interface Props {}
}

export default class Business extends React.Component<IWar.Props> {
  constructor(props: IWar.Props, context?: any) {
    super(props, context);
  }

  public render() {
    return <div className={style.War}>War</div>;
  }
}
