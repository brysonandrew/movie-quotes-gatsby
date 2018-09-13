import * as React from 'react';
import Link from 'gatsby-link'
import { PATHS } from '../../utils/page'
import { ICONS } from '../icons'
import * as style from './ButtonNext.module.css';

export namespace IButtonNext {
  export interface Props {
    index: number;
  }
}

export function ButtonNext(props: IButtonNext.Props) {
  return (
    <Link className={style.ButtonNext} to={PATHS[props.index]}>
      <div className={style.circle}/>
      {ICONS.ArrowNext}
    </Link>
  );
}
