/*
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="68"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>ANA</h5>
            <a href={this.docUrl('install_instructions.html', this.props.language)}>
              Download
            </a>
            <a href={this.docUrl('ana_users.html', this.props.language)}>
              Docs
            </a>
            <a href={this.props.config.baseUrl + 'blog'}>
            Blog
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a
              className="github-button"
              href="https://github.com/anadynamics/ANA2"


              data-icon="octicon-star"
              data-count-href="https://github.com/anadynamics/ANA2"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          {this.props.config.twitterUsername && (
          <div className="social">
          <a
              href={`https://twitter.com/${this.props.config.twitterUsername}`}
              className="twitter-follow-button">
              Follow @{this.props.config.twitterUsername}
          </a>
          </div>
          )}
          </div>
        </section>

        <section className="copyright">
         ANA is GPL licensed. Hacé lo q se te cante.
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
