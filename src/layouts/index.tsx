import * as React from 'react'
import Helmet from 'react-helmet'
import * as style from './Layouts.module.css'
import { History } from 'history'
import './index.css'

export namespace ILayout {
  export interface Props {
    history: History
    children: () => any
    data: any
  }
}

class Layout extends React.Component<ILayout.Props> {
  public componentDidMount() {
    // this.props.history.push('/wiedzmin');
  }
  public render() {
    const { children, data } = this.props
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'War quotes' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        {/*<Header siteTitle={data.site.siteMetadata.title} />*/}
        <div className={style.content}>{children()}</div>
      </div>
    )
  }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
