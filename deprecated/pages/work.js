import React from 'react';

import Layout from '../components/layout';

export default () => (
  <Layout>
    <h2>WHAT HAVE I DONE!</h2>
    <p  className="indentlessLine">
      Some examples of my work can be found in{' '}
      <a href="https://hg.mozilla.org/mozilla-central/log?rev=jewilde">
        Mozilla's Central Mercurial Repository
      </a>
    </p>
    <p  className="indentlessLine">
      I also work on Mozilla's{' '}
      <a href="https://github.com/mozilla-services/updatebot/">Updatebot</a> for
      third-party dependencies
    </p>
    <p  className="indentlessLine">
      The team I'm a part of{' '}
      <a href="https://twitter.com/attackndefense">tweets</a> and{' '}
      <a href="https://blog.mozilla.org/attack-and-defense/">blogs</a> about bug
      bounties and low-level specifics for security researchers
    </p>
    <p  className="indentlessLine">
      There's other bits of public and non-public code out there but you can
      find most of it{' '}
      <a href="https://www.github.com/metalcanine">on my GitHub profile</a>{' '}
      which should not be confused for my{' '}
      <a href="/RESUME_PUBLIC.pdf">résumé</a>
    </p>
  </Layout>
);
