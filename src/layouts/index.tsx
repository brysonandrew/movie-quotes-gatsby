import * as React from 'react'
import Helmet from 'react-helmet'
import * as style from './Layouts.module.css'
import './index.css'

export namespace ILayout {
  export interface Props {
    children: () => any
  }
}

function Layout(props: ILayout.Props) {
  return (
    <div>
      <Helmet
        title="Lion Tongue"
        meta={[
          { name: 'description', content: 'War quotes' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div className={style.content}>{props.children()}</div>
    </div>
  )
}

export default Layout
