import * as React from 'react'
import Link from 'gatsby-link'
import * as classNames from 'classnames'
import { ImageLoader } from '../../common/image-loader'
import { defined } from '../../utils/evaluation'
import { nextPath, prevPath } from '../../utils/page'
import { ICONS } from '../icons'
import * as style from './ImageText.module.css'

export namespace IImageText {
  export interface Props {
    name: string
    path: string
    src: string
    alt: string
    quote: ILanguages[]
    sourceKey: string;
  }
  export interface State {
    indexSelected: number
  }
}

export interface ILanguages {
  en: string
  pl: string
}

export enum ELanguage {
  English = 'en',
  Polish = 'pl',
}

export class ImageText extends React.Component<
  IImageText.Props,
  IImageText.State
> {
  constructor(props: IImageText.Props, context?: any) {
    super(props, context)
    this.state = {
      indexSelected: -1,
    }
  }

  private handleMouseEnter = (indexSelected: number) => {
    this.setState({ indexSelected })
  }

  private handleMouseLeave = () => {
    this.setState({ indexSelected: -1 })
  }

  private splitLanguageSentence = (a, c, language: ELanguage) => {
    if (defined(a)) {
      a.push(c[language])
      return a
    }
  }

  private makeSentence = (subSentence, index) => (
    <div
      key={`subSentence-${index}`}
      className={classNames(style.subSentence, {
        [style.indexSelected]: index === this.state.indexSelected,
      })}
      onMouseEnter={() => this.handleMouseEnter(index)}
      onMouseLeave={this.handleMouseLeave}
    >
      {subSentence}
    </div>
  )

  public render() {
    const { quote, name, path, sourceKey, ...imageProps } = this.props
    return (
      <div className={style.ImageText}>
        <ImageLoader {...imageProps} />
        <div className={style.quotes}>
          <div className={style.english}>
            {quote
              .reduce(
                (a, c) => this.splitLanguageSentence(a, c, ELanguage.English),
                []
              )
              .map(this.makeSentence)}
          </div>
          <div className={style.polish}>
            {quote
              .reduce(
                (a, c) => this.splitLanguageSentence(a, c, ELanguage.Polish),
                []
              )
              .map(this.makeSentence)}
          </div>
        </div>
        <Link className={style.prev} to={prevPath(name, sourceKey)}>
          {ICONS.ArrowBack}
        </Link>
        <Link className={style.next} to={nextPath(name, sourceKey)}>
          {ICONS.ArrowNext}
        </Link>
      </div>
    )
  }
}
