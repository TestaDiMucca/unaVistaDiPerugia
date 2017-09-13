class App extends React.Component {
  constructor (props) {
    super(props);
    // autoBind(this);
    this.state = {library: [],
      hideToolbar: false,
      selected: undefined,
      totalLoaded: undefined,
      slideshowRunning: false,
      slideshowTime: 3
    };
    this.timer = 1;
    this.timeToHide = 5;
    this.slideshowTimer = 0;

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
      if (this.state.slideshowRunning === true) {
        if (this.slideshowTimer >= this.state.slideshowTime) {
          this.slideshowTimer = 0;
          this.changeSelected('R');
        } else {
          this.slideshowTimer++;
          // console.log(this.slideshowTimer);
        }
      }
    }, 1000);
    document.addEventListener("keydown", this.handleKeyboard.bind(this));
  }

  loadLibrary (newData) {
    this.setState({library: newData});
    this.setState({totalLoaded: newData.length});
    this.setState({selected: 0});
    // console.log('selected', this.state.selected, 'in library', this.state.library);
  }

  changeSelected (direction) {
    if (this.state.selected === undefined) {
      return;
    }
    var totalLoaded = this.state.totalLoaded;
    if (direction === 'L') {
      if (this.state.selected > 0) {
        this.setState({selected: this.state.selected - 1});
      }
    } else {
      if (this.state.selected < totalLoaded - 1) {
        this.setState({selected: this.state.selected + 1});
      } else {
        this.setState({slideshowRunning: false});
      }
    }
  }

  adjustSlideshowState (toMod, value) {
    if (toMod === 'Time') {
      // console.log('set slideshow time to', value);
      this.setState({slideshowTime: value});
    } else if (toMod === 'Playing'){
      if (this.state.selected !== undefined) {
        this.setState({slideshowRunning: !this.state.slideshowRunning});
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
    } else if (event.keyCode === 32) {
      // console.log('space');
      this.adjustSlideshowState('Playing');
    }
  }

  getInfo() {
    var img = this.state.library[this.state.selected];
    if (img === undefined) {
      return '';
    } else {
      return [this.state.selected + 1, '/', this.state.totalLoaded, ':', escape(img.name)].join(' ');
    }
  }
  //onKeyDown={(e) => this.handleKeyboard(e)
  render () {
    return (
      <div id="container" onMouseMove={_.throttle(this.onMouseMove, 500)}>
        <div id="displayBox"><Viewer image={this.state.library[this.state.selected]} /></div>
        <div id="toolBar"><ToolBar hide={this.state.hideToolbar} cb={this.loadLibrary.bind(this)}
            changePic={this.changeSelected.bind(this)} getInfo={this.getInfo.bind(this)}
            changeSlideshowState={this.adjustSlideshowState.bind(this)}/></div>
      </div>
    );
  }
}
