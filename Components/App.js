import ToolBar from "ToolBar";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {library: [], hideToolbar: false};
    // console.log(this.state.hideToolbar);
  }

  componentDidMount () {
    // setTimeout(() => {
    //   this.setState({hideToolbar: true});
    //   console.log('tried to hide toolbar');
    // }, 6000);
  }

  onMouseMove () {
    console.log('Mouse is moving');
  }

  render () {
    return (
      <div id="container" onMouseMove={_.throttle(this.onMouseMove, 500)}>
        <div id="displayBox">Here is the REACT App</div>
        <div id="toolBar"><ToolBar hide={this.state.hideToolbar} /></div>
      </div>
    );
  }
}
