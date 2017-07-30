import React from 'react';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <p style={{margin: 100, textAlign: 'center'}}>
          If you are seeing this page, the site is misconfigured! Go to <a href="https://app.accessmap.io">the app</a>.
        </p>
      </div>
    );
  }
}

export default Index;
