import _ from 'underscore';
import ReactDOM from 'react-dom';
import React from 'react';
import * as App from './Components/App.jsx';
// var react = require('react');
// var ReactDOM = require('react-dom');

if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
  console.log('detected File API support!');
  ReactDOM.render(<App />, document.getElementById("App"));
} else {
  alert('The File APIs are not fully supported in this browser. Images will not load.');
}



// $('$files').addEve
// setTimeout(() => {
//   // $('#ToolBar').hide(400);
//   hideToolbar = true;
// }, 5000);
