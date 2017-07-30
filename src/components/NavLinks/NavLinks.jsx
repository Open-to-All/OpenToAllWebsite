import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import DropdownButton from '../DropdownButton/DropdownButton.jsx';
import './NavLinks.scss';

class NavLinks extends Component {
  getLinkElements() {
    const { navLinks } = this.props.config;
    const { labeled } = this.props;
    return navLinks.map(link => {
      if (link.children) {
        return (
          <DropdownButton label={link.label}>
            {link.children}
          </DropdownButton>
        );
      } else {
        return (
          <Button
            icon={!labeled}
            flat={labeled}
            key={link.label}
            iconClassName={link.iconClassName}
            href={link.url}
          >
            {labeled ? link.label : ''}
          </Button>
        );
      }
    });
  }

  render() {
    const { navLinks } = this.props.config;
    if (!navLinks) {
      return null;
    }
   return (
      <div className="nav-links">
        {
          this.getLinkElements()
        }
      </div>
    );
  }
}

export default NavLinks;
