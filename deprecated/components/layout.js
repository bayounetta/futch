import React from 'react';

import Sidebar from './sidebar/sidebar';

export default ({ children }) => (
  <main>
    <Sidebar/>
    <section className="page">
      {children}
      <footer>
        <small>© juniper wilde 2019-2020</small>
      </footer>
    </section>
  </main>
)
