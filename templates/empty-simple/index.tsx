import * as React from 'react';
import * as style from './EmptySimple.css';

export namespace IEmptySimple {
  export interface Props {}
}

export function EmptySimple(props: IEmptySimple.Props) {
  return <div />;
}
