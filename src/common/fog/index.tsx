import * as React from 'react'
import * as style from './Fog.module.css'
import { Main } from './main'

export class Fog extends React.Component<{}> {
  public componentDidMount() {
    new Main({
      selector: '#fog',
      particle: 'http://asista.pl/f/fog-particle.png',
      density: 80,
    })
  }

  public render() {
    return (
      <div className={style.Fog}>
        <canvas id="fog" />
      </div>
    )
  }
}
