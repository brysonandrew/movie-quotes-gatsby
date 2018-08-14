import * as React from 'react'
import Link from 'gatsby-link'
import { HEADER_TEXT } from './header-text'
import * as style from './Header.module.css';

const Header = ({ siteTitle }) => (
  <div className={style.Header}>
    <div className={style.linkWrapper}>
      <h1 className={style.header}>
        <Link to="/" className={style.link}>
          {HEADER_TEXT}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
