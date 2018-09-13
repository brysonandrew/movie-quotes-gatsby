import * as React from 'react';
import * as style from './TargetLanguage.module.css';

export namespace ITargetLanguage {
  export interface Props {
    children: JSX.Element[]
  }
}

export function TargetLanguage(props: ITargetLanguage.Props) {
  return (
    <div className={style.TargetLanguage}>
      <div className="language">
        {props.children}
      </div>
    </div>
  );
}
