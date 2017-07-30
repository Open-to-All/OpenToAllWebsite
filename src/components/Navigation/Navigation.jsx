import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import ToolbarActions from '../ToolbarActions/ToolbarActions';
import Footer from '../Footer/Footer';
import GetNavList from './NavList';
import AccessMapIcon from '../AccessMapIcon';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    const { children, config, LocalTitle } = this.props;
    const footerLinks = (LocalTitle !== 'About');
    return (
      <NavigationDrawer
        drawerTitle={config.siteTitle}
        toolbarTitle={[
        <a href='https://app.accessmap.io'>
          <AccessMapIcon
            style={{ marginTop: 16, marginBottom: 16 }}
            secondary='#aeea00'
            width={150}
            primary='#fff'
            backgroundTransparent
            className='accessmap-toolbar-icon'
          />
        </a>,
          LocalTitle
        ]}
        contentClassName="main-content"
        navItems={GetNavList(config)}
        toolbarActions={<ToolbarActions config={config} />}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
      >
        <div className="main-container">
          {children}
        </div>
        <Footer userLinks={footerLinks} />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
