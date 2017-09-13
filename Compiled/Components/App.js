'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    // autoBind(this);
    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { library: [],
      hideToolbar: false,
      selected: undefined,
      totalLoaded: undefined,
      slideshowRunning: false,
      slideshowTime: 3
    };
    _this.timer = 1;
    _this.timeToHide = 5;
    _this.slideshowTimer = 0;

    //Bindings so methods always call bound to App instance
    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.loadLibrary = _this.loadLibrary.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        if (_this2.timer === _this2.timeToHide) {
          _this2.setState({ hideToolbar: true });
        } else if (_this2.timer < _this2.timeToHide) {
          _this2.timer++;
        }
        if (_this2.state.slideshowRunning === true) {
          if (_this2.slideshowTimer >= _this2.state.slideshowTime) {
            _this2.slideshowTimer = 0;
            _this2.changeSelected('R');
          } else {
            _this2.slideshowTimer++;
            // console.log(this.slideshowTimer);
          }
        }
      }, 1000);
      document.addEventListener("keydown", this.handleKeyboard.bind(this));
    }
  }, {
    key: 'loadLibrary',
    value: function loadLibrary(newData) {
      this.setState({ library: newData });
      this.setState({ totalLoaded: newData.length });
      this.setState({ selected: 0 });
      // console.log('selected', this.state.selected, 'in library', this.state.library);
    }
  }, {
    key: 'changeSelected',
    value: function changeSelected(direction) {
      if (this.state.selected === undefined) {
        return;
      }
      var totalLoaded = this.state.totalLoaded;
      if (direction === 'L') {
        if (this.state.selected > 0) {
          this.setState({ selected: this.state.selected - 1 });
        }
      } else {
        if (this.state.selected < totalLoaded - 1) {
          this.setState({ selected: this.state.selected + 1 });
        } else {
          this.setState({ slideshowRunning: false });
        }
      }
    }
  }, {
    key: 'adjustSlideshowState',
    value: function adjustSlideshowState(toMod, value) {
      if (toMod === 'Time') {
        // console.log('set slideshow time to', value);
        this.setState({ slideshowTime: value });
      } else if (toMod === 'Playing') {
        if (this.state.selected !== undefined) {
          this.setState({ slideshowRunning: !this.state.slideshowRunning });
        }
      }
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove() {
      if (this.state.hideToolbar === true) {
        this.setState({ hideToolbar: false });
        this.timer = 1;
      }
    }
  }, {
    key: 'handleKeyboard',
    value: function handleKeyboard(event) {
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
  }, {
    key: 'getInfo',
    value: function getInfo() {
      var img = this.state.library[this.state.selected];
      if (img === undefined) {
        return '';
      } else {
        return [this.state.selected + 1, '/', this.state.totalLoaded, ':', escape(img.name)].join(' ');
      }
    }
    //onKeyDown={(e) => this.handleKeyboard(e)

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'container', onMouseMove: _.throttle(this.onMouseMove, 500) },
        React.createElement(
          'div',
          { id: 'displayBox' },
          React.createElement(Viewer, { image: this.state.library[this.state.selected] })
        ),
        React.createElement(
          'div',
          { id: 'toolBar' },
          React.createElement(ToolBar, { hide: this.state.hideToolbar, cb: this.loadLibrary.bind(this),
            changePic: this.changeSelected.bind(this), getInfo: this.getInfo.bind(this),
            changeSlideshowState: this.adjustSlideshowState.bind(this) })
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJsaWJyYXJ5IiwiaGlkZVRvb2xiYXIiLCJzZWxlY3RlZCIsInVuZGVmaW5lZCIsInRvdGFsTG9hZGVkIiwic2xpZGVzaG93UnVubmluZyIsInNsaWRlc2hvd1RpbWUiLCJ0aW1lciIsInRpbWVUb0hpZGUiLCJzbGlkZXNob3dUaW1lciIsIm9uTW91c2VNb3ZlIiwiYmluZCIsImxvYWRMaWJyYXJ5Iiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsImNoYW5nZVNlbGVjdGVkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5Ym9hcmQiLCJuZXdEYXRhIiwibGVuZ3RoIiwiZGlyZWN0aW9uIiwidG9Nb2QiLCJ2YWx1ZSIsImV2ZW50Iiwia2V5Q29kZSIsImFkanVzdFNsaWRlc2hvd1N0YXRlIiwiaW1nIiwiZXNjYXBlIiwibmFtZSIsImpvaW4iLCJfIiwidGhyb3R0bGUiLCJnZXRJbmZvIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUVsQjtBQUZrQiwwR0FDWkEsS0FEWTs7QUFHbEIsVUFBS0MsS0FBTCxHQUFhLEVBQUNDLFNBQVMsRUFBVjtBQUNYQyxtQkFBYSxLQURGO0FBRVhDLGdCQUFVQyxTQUZDO0FBR1hDLG1CQUFhRCxTQUhGO0FBSVhFLHdCQUFrQixLQUpQO0FBS1hDLHFCQUFlO0FBTEosS0FBYjtBQU9BLFVBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsQ0FBdEI7O0FBRUE7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJ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QUwsQ0FBMEJmLElBQTFCLENBQStCLElBQS9CLENBRlI7QUFBbEI7QUFGRixPQURGO0FBUUQ7Ozs7RUFuSGV1QixNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyBhdXRvQmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge2xpYnJhcnk6IFtdLFxuICAgICAgaGlkZVRvb2xiYXI6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWQ6IHVuZGVmaW5lZCxcbiAgICAgIHRvdGFsTG9hZGVkOiB1bmRlZmluZWQsXG4gICAgICBzbGlkZXNob3dSdW5uaW5nOiBmYWxzZSxcbiAgICAgIHNsaWRlc2hvd1RpbWU6IDNcbiAgICB9O1xuICAgIHRoaXMudGltZXIgPSAxO1xuICAgIHRoaXMudGltZVRvSGlkZSA9IDU7XG4gICAgdGhpcy5zbGlkZXNob3dUaW1lciA9IDA7XG5cbiAgICAvL0JpbmRpbmdzIHNvIG1ldGhvZHMgYWx3YXlzIGNhbGwgYm91bmQgdG8gQXBwIGluc3RhbmNlXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRMaWJyYXJ5ID0gdGhpcy5sb2FkTGlicmFyeS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRpbWVyID09PSB0aGlzLnRpbWVUb0hpZGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGlkZVRvb2xiYXI6IHRydWV9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aW1lciA8IHRoaXMudGltZVRvSGlkZSkge1xuICAgICAgICB0aGlzLnRpbWVyKys7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zbGlkZXNob3dSdW5uaW5nID09PSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLnNsaWRlc2hvd1RpbWVyID49IHRoaXMuc3RhdGUuc2xpZGVzaG93VGltZSkge1xuICAgICAgICAgIHRoaXMuc2xpZGVzaG93VGltZXIgPSAwO1xuICAgICAgICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWQoJ1InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNsaWRlc2hvd1RpbWVyKys7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zbGlkZXNob3dUaW1lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleWJvYXJkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgbG9hZExpYnJhcnkgKG5ld0RhdGEpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsaWJyYXJ5OiBuZXdEYXRhfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dG90YWxMb2FkZWQ6IG5ld0RhdGEubGVuZ3RofSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IDB9KTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0ZWQnLCB0aGlzLnN0YXRlLnNlbGVjdGVkLCAnaW4gbGlicmFyeScsIHRoaXMuc3RhdGUubGlicmFyeSk7XG4gIH1cblxuICBjaGFuZ2VTZWxlY3RlZCAoZGlyZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdG90YWxMb2FkZWQgPSB0aGlzLnN0YXRlLnRvdGFsTG9hZGVkO1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdMJykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWQgPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkOiB0aGlzLnN0YXRlLnNlbGVjdGVkIC0gMX0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZCA8IHRvdGFsTG9hZGVkIC0gMSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZCArIDF9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NsaWRlc2hvd1J1bm5pbmc6IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRqdXN0U2xpZGVzaG93U3RhdGUgKHRvTW9kLCB2YWx1ZSkge1xuICAgIGlmICh0b01vZCA9PT0gJ1RpbWUnKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0IHNsaWRlc2hvdyB0aW1lIHRvJywgdmFsdWUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2xpZGVzaG93VGltZTogdmFsdWV9KTtcbiAgICB9IGVsc2UgaWYgKHRvTW9kID09PSAnUGxheWluZycpe1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzbGlkZXNob3dSdW5uaW5nOiAhdGhpcy5zdGF0ZS5zbGlkZXNob3dSdW5uaW5nfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUgKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmhpZGVUb29sYmFyID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtoaWRlVG9vbGJhcjogZmFsc2V9KTtcbiAgICAgIHRoaXMudGltZXIgPSAxO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleWJvYXJkIChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdLZXkgRG93biEnLCBldmVudCk7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAvL0xcbiAgICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWQoJ0wnKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAvL1JcbiAgICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWQoJ1InKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3BhY2UnKTtcbiAgICAgIHRoaXMuYWRqdXN0U2xpZGVzaG93U3RhdGUoJ1BsYXlpbmcnKTtcbiAgICB9XG4gIH1cblxuICBnZXRJbmZvKCkge1xuICAgIHZhciBpbWcgPSB0aGlzLnN0YXRlLmxpYnJhcnlbdGhpcy5zdGF0ZS5zZWxlY3RlZF07XG4gICAgaWYgKGltZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbdGhpcy5zdGF0ZS5zZWxlY3RlZCArIDEsICcvJywgdGhpcy5zdGF0ZS50b3RhbExvYWRlZCwgJzonLCBlc2NhcGUoaW1nLm5hbWUpXS5qb2luKCcgJyk7XG4gICAgfVxuICB9XG4gIC8vb25LZXlEb3duPXsoZSkgPT4gdGhpcy5oYW5kbGVLZXlib2FyZChlKVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgb25Nb3VzZU1vdmU9e18udGhyb3R0bGUodGhpcy5vbk1vdXNlTW92ZSwgNTAwKX0+XG4gICAgICAgIDxkaXYgaWQ9XCJkaXNwbGF5Qm94XCI+PFZpZXdlciBpbWFnZT17dGhpcy5zdGF0ZS5saWJyYXJ5W3RoaXMuc3RhdGUuc2VsZWN0ZWRdfSAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwidG9vbEJhclwiPjxUb29sQmFyIGhpZGU9e3RoaXMuc3RhdGUuaGlkZVRvb2xiYXJ9IGNiPXt0aGlzLmxvYWRMaWJyYXJ5LmJpbmQodGhpcyl9XG4gICAgICAgICAgICBjaGFuZ2VQaWM9e3RoaXMuY2hhbmdlU2VsZWN0ZWQuYmluZCh0aGlzKX0gZ2V0SW5mbz17dGhpcy5nZXRJbmZvLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBjaGFuZ2VTbGlkZXNob3dTdGF0ZT17dGhpcy5hZGp1c3RTbGlkZXNob3dTdGF0ZS5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=