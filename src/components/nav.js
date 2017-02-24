import React from 'react';

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <div className="nav">
        <div className="nav-logo"></div>
        <a className="nav-link">
          {this.context.intl.formatMessage({id: 'nav_copyright_campaign'})}
        </a>
        <a className="nav-link">
          {this.context.intl.formatMessage({id: 'nav_more_resources'})}
        </a>
        <a className="nav-link">
          {this.context.intl.formatMessage({id: 'nav_get_involved'})}
        </a>
      </div>
    );
  }
});
