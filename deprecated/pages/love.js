import React from 'react';

import Layout from '../components/layout';

export default () => (
  <Layout>
    <h2>A list of people and projects very dear to my heart.</h2>
    <p className="indentlessLine">
      <a href="https://www.mozilla.org">Mozilla</a> is committed to an internet
      that includes all the peoples of the earth and makes browsers, apps, code
      and tools to fulfill that mission.
    </p>
    <p className="indentlessLine">
      <a href="https://www.raicestexas.org/">RAICES</a> promotes justice by
      providing free and low-cost legal services to underserved immigrant
      children, families, and refugees.
    </p>
    <p className="indentlessLine">
      <a href="http://hattiesburgpride.com/">The Spectrum Center</a> has been a
      resource and an advocate for the LGBTQ+ community in and around
      Hattiesburg, Mississippi.
    </p>
    <p className="indentlessLine">
      <a href="https://www.lagd.network/">Louisiana Game Developers</a> is an
      organization dedicated to fostering and promoting the game development
      community in Louisiana. They were there when I needed them most and I love
      em' to bits.
    </p>
    <p className="indentlessLine">
      <a href="https://www.includecpp.org/">IncludeCpp</a> is a global,
      inclusive, and diverse community for developers interested in C++.
    </p>
  </Layout>
);
