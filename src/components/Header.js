import React from 'react';
import Tappable from 'react-tappable';

const Header = React.createClass({

  render() {
    return (
      <div style={{ background: "#000100", color: "green" }}>
      <p style={{ color: "green" }}>
        RaveMom version: 1 <br/>
        "keeping you safe from dusk till dawn"
      </p>
    </div>
    );
  },
});

module.exports = Header;
