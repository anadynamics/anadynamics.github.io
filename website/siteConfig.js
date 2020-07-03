/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    baseUrl: '/' /* base url for your project */,
    caption: 'User1',
    image: 'img/oss_logo.png',
    infoLink: 'https://github.com/pgbarletta',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Analysis of Null Areas' /* title for your website */,
  tagline: 'Volume and flexibility calculation for protein cavities',
  url: 'https://ana.run' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'anadynamics',
  headerLinks: [
    {doc: 'install_instructions', label: 'Download'},
    {doc: 'ana_users', label: 'Docs'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/favicon.png',
  footerIcon: 'img/favicon.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#000080',
    secondaryColor: '#FFFF00',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'GPL License' +
    new Date().getFullYear() +
    ' hacé lo q se te cante',
  organizationName: 'anadynamics',
  // projectName: 'anadynamics.github.io',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js', '../js/disqus.js'],
  // Twitter
  twitter: 'true',
  twitterUsername: 'gpbarletta',
  twitterImage: 'img/favicon.png',
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/anadynamics/anadynamics.github.io',
};

module.exports = siteConfig;
