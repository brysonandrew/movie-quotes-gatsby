import * as React from 'react';
import * as style from './SourceLanguage.module.css';
import { ImageLoader } from '../image-loader'

export namespace ISourceLanguage {
  export interface Props {
    imageProps: React.ImgHTMLAttributes<HTMLImageElement>;
    children: JSX.Element[]
  }
}

export function SourceLanguage(props: ISourceLanguage.Props) {
  return (
    <div className={style.SourceLanguage}>
      <ImageLoader {...props.imageProps} />
      <div className={style.mask}/>
      <div className={style.corner}/>
      <div className="language">
        {props.children}
      </div>
    </div>
  );
}
