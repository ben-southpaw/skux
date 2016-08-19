import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const tracks = [
  {
    title: 'Chill Track'
  },
  {
    title: 'Angry Track'
  }
];

ReactDOM.render(
  <Stream tracks={tracks} />,
  document.getElementById('app')
);
