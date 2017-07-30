import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import NavLinks from '../NavLinks/NavLinks';
import './ToolbarActions.scss';

class ToolbarActions extends Component {
  render() {
    const { config } = this.props;
    return (
      <div className="toolbar-actions">
        <div className="navlinks-container">
          <NavLinks config={config} labeled={true} />
        </div>
      </div>
    );
  }
}

export default ToolbarActions;
