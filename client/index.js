import React from 'react'
import { render } from 'react-dom'

import Stream from './src/components/Stream';
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('app')
  )
})

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
