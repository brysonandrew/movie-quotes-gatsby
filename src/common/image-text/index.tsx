import * as React from 'react'
import { defined } from '../../utils/evaluation'
import { PATHS } from '../../utils/page'
import { ButtonNext } from '../button-next'
import { WordFragment } from '../word-fragment'
import { SourceLanguage } from '../source-language'
import { TargetLanguage } from '../target-language'
import * as style from './ImageText.module.css'

export namespace IImageText {
  export interface Props {
    path: string
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
    <WordFragment
      key={`subSentence-${index}`}
      index={index}
      indexSelected={this.state.indexSelected}
      subSentence={subSentence}
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
    />
  )

  private randomIndex() {
    let i = Math.floor(Math.random() * PATHS.length);
    while (this.props.path === PATHS[i]) {
      this.randomIndex();
      i = Math.floor(Math.random() * PATHS.length);
    }
    return i;
  }

  private renderQuotes(type: ELanguage) {
    return this.props.quote
      .reduce((a, c) => this.splitLanguageSentence(a, c, type), [])
      .map(this.makeSentence)
  }

  public render() {
    const { quote, path, ...imageProps } = this.props
    const i = this.randomIndex();
    return (
      <div className={style.ImageText}>
        <TargetLanguage>
          {this.renderQuotes(ELanguage.Polish)}
        </TargetLanguage>
        <SourceLanguage imageProps={imageProps}>
          {this.renderQuotes(ELanguage.English)}
        </SourceLanguage>
        <ButtonNext index={i}/>
      </div>
    )
  }
}
