import * as React from 'react'
import * as style from './ImageLoader.module.css'

export namespace IImageLoader {
  export interface Props {
    src: string
    alt: string
  }
  export interface State {
    loadStatus: ELoadStatus
  }
}

export enum ELoadStatus {
  Loading = 'Loading',
  Loaded = 'Loaded',
  Error = 'Error',
}

export class ImageLoader extends React.Component<
  IImageLoader.Props,
  IImageLoader.State
> {
  constructor(props: IImageLoader.Props, context?: any) {
    super(props, context)
    this.state = {
      loadStatus: ELoadStatus.Loading,
    }
  }

  private handleLoad = () => {
    this.setState({
      loadStatus: ELoadStatus.Loaded,
    })
  }

  private handleError = () => {
    this.setState({
      loadStatus: ELoadStatus.Error,
    })
  }

  public render() {
    return (
      <img
        className={`${style.ImageLoader} ${style[this.state.loadStatus]}`}
        {...this.props}
        onLoad={this.handleLoad}
        onError={this.handleError}
      />
    )
  }
}
