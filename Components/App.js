class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {library: []};
  }

  render () {
    return (
      <div id="container">
        <div id="displayBox">Here is the REACT App</div>
        <div id="toolBar"><ToolBar /></div>
      </div>
    );
  }
}
