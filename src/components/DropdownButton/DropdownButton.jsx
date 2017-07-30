import React, { Component } from 'react';
import { ListItem } from 'react-md/lib/Lists';
import Button from 'react-md/lib/Buttons';
import { MenuButton } from 'react-md/lib/Menus';
import './DropdownButton.scss';


class DropdownButton extends Component {
  render() {
    const menuItems = this.props.children.map(d =>
      <ListItem>
        <a
          href={d.url}
        >
          {d.label}
        </a>
      </ListItem>
    );
    return (
      <MenuButton
        id={`${this.props.label}-menu`}
        label={this.props.label}
        flat
      >
        {menuItems}
      </MenuButton>
    );
  }
}

export default DropdownButton;
