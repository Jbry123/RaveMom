
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { DatePicker, version } from 'antd';
import 'antd/dist/antd.css';

const HomeView = React.createClass({

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