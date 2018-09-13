import * as React from 'react'
import {History} from 'history';
import { PATHS } from '../utils/page'
import * as style from './IndexPage.module.css'

type TProps = {
  history: History;
}

class IndexPage extends React.Component<TProps> {
  componentDidMount() {
    this.props.history.push(PATHS[0]);
  }
  public render() {
    return null
  }
}

export default IndexPage
