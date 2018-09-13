import * as React from 'react'
import Link from 'gatsby-link'
import * as classNames from 'classnames'
import { ImageLoader } from '../../common';
import { defined } from '../../utils/evaluation'
import { ICONS } from '../icons'
import * as style from './ImageText.module.css'
import { PATHS } from '../../utils/page'

export namespace IImageText {
  export interface Props {
    src: string
    alt: string
    quote: ILanguages[]
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
    const { quote, ...imageProps } = this.props
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
        <Link className={style.prev} to={PATHS[0]}>
          {ICONS.ArrowBack}
        </Link>
        <Link className={style.next} to={PATHS[1]}>
          {ICONS.ArrowNext}
        </Link>
      </div>
    )
  }
}
