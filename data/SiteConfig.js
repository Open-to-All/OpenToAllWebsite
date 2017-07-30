module.exports = {
  siteTitle: 'AccessMap', // Site title.
  siteTitleAlt: 'AccessMap', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://accessmap.io', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links.
  siteDescription: 'Pedestrian routing with accessibility in mind', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteGATrackingID: 'UA-47311644-4', // Tracking code ID for google analytics.
  postDefaultCategoryID: 'AccessMap', // Default category for posts.
  navLinks: [
    {
      label: 'Blog',
      url: '/blog'
    },
    {
      label: 'About',
      url: '/about',
      children: [
        {
          label: 'Team',
          url: '/about/team'
        },
        {
          label: 'Donate',
          url: '/about/donate'
        },
      ]
    },
  ],
  userName: 'AccessMap', // Username to display in the author segment.
  userTwitter: 'AccessMapSea', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Seattle, WA', // User location to display in the author segment.
  userAvatar: '/logos/logo-512.png', // User avatar to display in the author segment.
  userDescription: "",
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/AccessMap',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/AccessMapSea',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:info@accessmap.io',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2017. AccessMap', // Copyright string for the footer of the website and RSS feed.
};
