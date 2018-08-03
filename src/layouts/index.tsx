import * as React from 'react'
import Helmet from 'react-helmet'
import * as style from './Layouts.module.css';

import Index from '../common/header/index'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'War quotes' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Index siteTitle={data.site.siteMetadata.title} />
    <div className={style.content}>
      {children()}
    </div>
  </div>
)

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
