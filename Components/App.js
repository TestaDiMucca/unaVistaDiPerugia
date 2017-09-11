class App extends React.Component {
  constructor (props) {
    super(props);
    // autoBind(this);
    this.state = {library: [], hideToolbar: false, selected: undefined};
    this.timer = 1;
    this.timeToHide = 5;

    //Bindings so methods always call bound to App instance
    this.onMouseMove = this.onMouseMove.bind(this);
    this.loadLibrary = this.loadLibrary.bind(this);
  }

  componentDidMount () {
    setInterval(() => {
      // console.log('tick...');
      if (this.timer === this.timeToHide) {
        this.setState({hideToolbar: true});
      } else if (this.timer < this.timeToHide) {
        this.timer++;
      }
    }, 1000);

  }

  loadLibrary (newData) {
    // console.log(this);
    this.setState({library: newData});
    this.setState({selected: newData[0]});
    // console.log('Set file library', typeof this.state.library);
  }

  onMouseMove () {
    // console.log('Mouse is moving');
    if (this.state.hideToolbar === true) {
      this.setState({hideToolbar: false});
      this.timer = 1;
    }
  }

  render () {
    return (
      <div id="container" onMouseMove={_.throttle(this.onMouseMove, 500)}>
        <div id="displayBox"><Viewer image={this.state.selected} /></div>
        <div id="toolBar"><ToolBar hide={this.state.hideToolbar} cb={this.loadLibrary.bind(this)} /></div>
      </div>
    );
  }
}
