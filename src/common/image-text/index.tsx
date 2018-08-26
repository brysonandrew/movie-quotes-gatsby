import * as React from 'react'
import * as classNames from 'classnames'
import Link from 'gatsby-link'
import { ImageLoader } from '../../common/image-loader'
import { ICONS } from '../../common/icons'
import { defined } from '../../utils/evaluation'
import * as style from './War.module.css'
import { toPath } from '../../utils/transformation'

export namespace IImageText {
  export interface Props {
    src: string;
    alt: string;
    quote: ILanguages[];
    backPath: string;
    nextPath: string;
  }
  export interface State {
    indexSelected: number
  }
}

export interface ILanguages {
  en: string;
  pl: string;
}

export enum ELanguage {
  English = 'en',
  Polish = 'pl',
}

export default class ImageText extends React.Component<IImageText.Props, IImageText.State> {
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
        [style.indexSelected]: index === this.state.indexSelected
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
      <div className={style.War}>
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
        <Link className={style.back} to={this.props.backPath}>{ICONS.ArrowBack}</Link>
        <Link className={style.next} to={this.props.nextPath}>{ICONS.ArrowNext}</Link>
      </div>
    )
  }
}
