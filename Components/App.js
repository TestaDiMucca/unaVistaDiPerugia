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
      if (this.timer === this.timeToHide) {
        this.setState({hideToolbar: true});
      } else if (this.timer < this.timeToHide) {
        this.timer++;
      }
    }, 1000);
    // document.addEventListener("keydown", this.handleKeyboard.bind(this));
  }

  loadLibrary (newData) {
    this.setState({library: newData});
    this.setState({selected: 0});
    // console.log('selected', this.state.selected, 'in library', this.state.library);
  }

  changeSelected (direction) {
    var totalLoaded = this.state.library.length;
    if (direction === 'L') {
      if (this.state.selected > 0) {
        this.setState({selected: this.state.selected - 1});
      }
    } else {
      if (this.state.selected < totalLoaded - 1) {
        this.setState({selected: this.state.selected + 1});
      }
    }

  }

  onMouseMove () {
    if (this.state.hideToolbar === true) {
      this.setState({hideToolbar: false});
      this.timer = 1;
    }
  }

  handleKeyboard (event) {
    // console.log('Key Down!', event);
    if (event.keyCode === 37) {
      //L
      this.changeSelected('L');
    } else if (event.keyCode === 39) {
      //R
      this.changeSelected('R');
    }
  }

  render () {
    return (
      <div id="container" onMouseMove={_.throttle(this.onMouseMove, 500)} onKeyDown={(e) => this.handleKeyboard(e)}>
        <div id="displayBox"><Viewer image={this.state.library[this.state.selected]} /></div>
        <div id="toolBar"><ToolBar hide={this.state.hideToolbar} cb={this.loadLibrary.bind(this)}
            changePic={this.changeSelected.bind(this)} /></div>
      </div>
    );
  }
}
