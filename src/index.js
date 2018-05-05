import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

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
            <HomeView></HomeView>
            <FooterView></FooterView>
      </div>
    );
  },  
});

ReactDOM.render(<App />, document.getElementById('app'));
