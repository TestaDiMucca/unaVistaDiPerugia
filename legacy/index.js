if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
  // alert('detected File API support!');
  ReactDOM.render(<App />, document.getElementById("App"));
} else {
  alert('The File APIs are not fully supported in this browser.');
}
