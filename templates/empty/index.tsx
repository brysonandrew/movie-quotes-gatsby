import * as React from 'react';
import * as style from './Empty.css';

export namespace IEmpty {
  export interface Props {}
}

export class Empty extends React.Component<IEmpty.Props> {
  constructor(props: IEmpty.Props, context?: any) {
    super(props, context);
  }

  public render() {
    return <div className={style.Empty}>Empty template page</div>;
  }
}
