import * as React from 'react';
import * as style from './Humor.module.css';

export namespace IHumor {
  export interface Props {}
}

export default class Humor extends React.Component<IHumor.Props> {
  constructor(props: IHumor.Props, context?: any) {
    super(props, context);
  }

  public render() {
    return <div className={style.Humor}>Humor</div>;
  }
}
