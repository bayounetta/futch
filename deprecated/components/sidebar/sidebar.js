import { Link } from 'gatsby';
import PropTypes from "prop-types"
import React, { useState } from 'react';

import sidebarStyles from './sidebar.module.scss';

function Header ({ siteTitle }) {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav>
      <button onClick={() => toggleExpansion(!isExpanded)}>
        <svg width="18" height="15"><path d="M18 1.484c0 .82-.665 1.484-1.484 1.484H1.484a1.485 1.485 0 010-2.968h15.032C17.335 0 18 .665 18 1.484zm0 6.032C18 8.335 17.335 9 16.516 9H1.484a1.484 1.484 0 010-2.968h15.032A1.483 1.483 0 0118 7.516zm0 6c0 .819-.665 1.484-1.484 1.484H1.484a1.483 1.483 0 110-2.967h15.032A1.481 1.481 0 0118 13.516z"/></svg>
      </button>
      <div className={sidebarStyles.container} style={{ display: `${ isExpanded ? `block` : `none` }` }}>
        <ul>
          <li className={[sidebarStyles.div_one, sidebarStyles.title].join(' ')}>
          <Link to="/">
            <img src="/portrait.png" alt="a cute dog" />
          </Link>
          juniper wilde
          </li>
          <li className={sidebarStyles.div_two}>
            <Link to="/">
              <span role="img" aria-label="fleur de lis">⚜️</span>
              home
            </Link>
          </li>
          <li className={sidebarStyles.div_three}>
            <Link to="/love">
              <span role="img" aria-label="yellow heart">💛</span>
              love
            </Link>
          </li>
          <li className={sidebarStyles.div_four}>
            <Link to="/blog">
              <span role="img" aria-label="spiral notepad">🗒️</span>
              blog
            </Link>
          </li>
          <li className={sidebarStyles.div_five}>
            <Link to="/work">
              <span role="img" aria-label="hammer and pick">⚒️</span>
              work
            </Link>
          </li>
          <li className={sidebarStyles.div_six}>
            <Link to="/about">
              <span role="img" aria-label="woman technologist: light skin tone">👩🏻‍💻</span>
              about
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
