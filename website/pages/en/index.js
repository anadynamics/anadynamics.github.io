/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) { return siteConfig.baseUrl + 'img/' + img; }

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
  }

class Button extends React.Component {
  render() {
    return (<div className = "pluginWrapper buttonWrapper">
            <a className = "button" href = {this.props.href} target = {
                 this.props.target}>{this.props.children}</a>
      </div>);
  }
}

Button.defaultProps = {
  target : '_self',
};

const SplashContainer = props => (
    <div className = "homeContainer"><div className = "homeSplashFade">
    <div className = "wrapper homeWrapper">{props.children}</div>
    </div>
    </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
    </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
    </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (<SplashContainer>
            <Logo img_src =
             {
               imgUrl('favicon.png')
             } />
        <div className="inner">
          <ProjectTitle />
            </div>
      </SplashContainer>);
  }
  }

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={
  props.layout} />
  </Container>
);

    const Features = props =>
        (<Block layout =
              "fourColumn">{[{
          content : 'Made for long molecular dynamics trajectories.',
          image : imgUrl('cpp_logo.png'),
          imageAlign : 'top',
          title : 'Fast',
        },
                             {
                               content : 'Easy manual cavity definition.',
                               image : imgUrl('1hvr_apo_ch.png'),
                               imageAlign : 'top',
                               title : 'Targeted',
                             },
                             {
                               content : 'Even easier.',
                               image : imgUrl('gui_cut.png'),
                               imageAlign : 'top',
                               title : 'GUI available',
                             },
                             {
                               content :
                                   'Perform Non-Delaunay Dynamics analysis.',
                               image : imgUrl('abstract_fig_cut.png'),
                               imageAlign : 'top',
                               title : 'Supports NDD',
                             },
    ]}</Block>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'On the [Docs](http://localhost:3000/test-site/docs/ana_users.html) section.',
        image: imgUrl('config_example.png'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>);

    const TryOut = props => (<Block id = "try">{[{
      content : '[Download](https://github.com/lionixevolve/ana/releases) now.',
      image : imgUrl('tetra_vdw_filled.png'),
      imageAlign : 'left',
      title : 'Try it Out',
    },
    ]}</Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'As seen on \"Protein Fluctuations and Cavity Changes Relationship\" by Barletta & Fernandez-Alberti. Check [this](http://localhost:3000/test-site/blog/2016/03/11/blog-post.html) example on the blog.',
        image: imgUrl('abstract_fig.png'),
        imageAlign: 'right',
        title: 'Non-Delaunay Dynamics',
      },
    ]}
  </Block>);

    const Showcase = props => {
      if ((siteConfig.users || []).length === 0) {
        return null;
        }
      const showcase = siteConfig.users.filter(user => { return user.pinned; })
                           .map((user, i) => {
                             return (<a href = {user.infoLink} key = {i}>
                                     <img src = {user.image} title = {
                                       user.caption
                                     } />
        </a>);
                           });

      return null;
    };

    class Index extends React.Component {
      render() {
        let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={
      language} />
        <div className="mainContainer">
          <Features />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={
      language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
