import * as React from 'react'
import * as classNames from 'classnames'
import * as style from './WordFragment.module.css'

export namespace IWordFragment {
  export interface Props {
    index: number
    indexSelected: number
    subSentence: string
    onMouseEnter: (index: number) => void
    onMouseLeave: () => void
  }
}

export function WordFragment(props: IWordFragment.Props) {
  const { index, indexSelected, subSentence, onMouseEnter, onMouseLeave } = props;
  return (
    <div
      className={classNames(style.WordFragment, {
        [style.indexSelected]: index === indexSelected,
      })}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      {subSentence}
      <div className={style.underline}/>
    </div>
  );
}
