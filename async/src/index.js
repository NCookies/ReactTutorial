import 'babel-polyfill';
// 브라우저에 맞게 코드를 변환
/*
Babel transpiles your code to something that browsers can understand,
but the resulting code uses features that may or may not work in every single browser.
For example Object.assign is not supported in all browsers,
so babel-polyfill fills the holes.
It's just a collection of polyfills that you would usually include anyway
to have support for legacy browsers.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
