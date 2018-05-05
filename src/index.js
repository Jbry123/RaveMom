import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';


import Header from './components/Header';
import Content from './components/Content';

import HomeView from './components/HomeView';
import FooterView from './components/FooterView';

const App = React.createClass({
  getInitialState() {
    //return StepStore.getState();
    return {
      animationName: 'push',
    }
  },
  componentWillMount() {
    // Lifecycle function that is triggered just before a component mounts
  },
  componentWillUnmount() {
    // Lifecycle function that is triggered just before a component unmounts
  },
  render() {
    return (
            <div>
            <Header></Header>
            <Content></Content>
            <FooterView></FooterView>
      </div>
    );
  },  
});

ReactDOM.render(<App />, document.getElementById('app'));
