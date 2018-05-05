import React from 'react';
import Tappable from 'react-tappable';

import '../css/hello.css';

const Header = React.createClass({

  render() {
    return (
      <div style={{ margin: 24 }}>
      <p style={{ marginBottom: 24 }}>
        Current antd version: 2 <br/>
        You can change antd version on the left panel (Dependencies section).
      </p>
      <DatePicker defaultValue={moment()} />   
    </div>
    );
  },
});

module.exports = HomeView;
