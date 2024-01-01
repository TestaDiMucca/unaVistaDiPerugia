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

      var viewerBox = document.getElementById('displayBox');
      viewerBox.addEventListener('dragover', this.handleDragOver, false);
      viewerBox.addEventListener('drop', this.handleDrop.bind(this), false);
    }

    //Handlers, callbacks vvv

  }, {
    key: 'loadLibrary',
    value: function loadLibrary(newData) {
      // console.log(newData);
      this.setState({ library: newData });
      this.setState({ totalLoaded: newData.length });
      this.setState({ selected: 0 });
      // console.log('selected', this.state.selected, 'in library', this.state.library);
    }
  }, {
    key: 'handleDrop',
    value: function handleDrop(event) {
      // console.log('drop');
      event.stopPropagation();
      event.preventDefault();
      var fileArray = event.dataTransfer.files;

      this.loadLibrary(fileArray);
    }
  }, {
    key: 'handleDragOver',
    value: function handleDragOver(event) {
      // console.log('dragover');
      event.stopPropagation();
      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
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
            changeSlideshowState: this.adjustSlideshowState.bind(this), playing: this.state.slideshowRunning })
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJsaWJyYXJ5IiwiaGlkZVRvb2xiYXIiLCJzZWxlY3RlZCIsInVuZGVmaW5lZCIsInRvdGFsTG9hZGVkIiwic2xpZGVzaG93UnVubmluZyIsInNsaWRlc2hvd1RpbWUiLCJ0aW1lciIsInRpbWVUb0hpZGUiLCJzbGlkZXNob3dUaW1lciIsIm9uTW91c2VNb3ZlIiwiYmluZCIsImxvYWRMaWJyYXJ5Iiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsImNoYW5nZVNlbGVjdGVkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5Ym9hcmQiLCJ2aWV3ZXJCb3giLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZURyYWdPdmVyIiwiaGFuZGxlRHJvcCIsIm5ld0RhdGEiLCJsZW5ndGgiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiZmlsZUFycmF5IiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJkcm9wRWZmZWN0IiwiZGlyZWN0aW9uIiwidG9Nb2QiLCJ2YWx1ZSIsImtleUNvZGUiLCJhZGp1c3RTbGlkZXNob3dTdGF0ZSIsImltZyIsImVzY2FwZSIsIm5hbWUiLCJqb2luIiwiXyIsInRocm90dGxlIiwiZ2V0SW5mbyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFFbEI7QUFGa0IsMEdBQ1pBLEtBRFk7O0FBR2xCLFVBQUtDLEtBQUwsR0FBYSxFQUFDQyxTQUFTLEVBQVY7QUFDWEMsbUJBQWEsS0FERjtBQUVYQyxnQkFBVUMsU0FGQztBQUdYQyxtQkFBYUQsU0FIRjtBQUlYRSx3QkFBa0IsS0FKUDtBQUtYQyxxQkFBZTtBQUxKLEtBQWI7QUFPQSxVQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUtDLFVB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QUExQixFQUErQixLQUFLSCxLQUFMLENBQVdLLFdBQTFDLEVBQXVELEdBQXZELEVBQTREa0MsT0FBT0QsSUFBSUUsSUFBWCxDQUE1RCxFQUE4RUMsSUFBOUUsQ0FBbUYsR0FBbkYsQ0FBUDtBQUNEO0FBQ0Y7QUFDRDs7Ozs2QkFDVTtBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssSUFBRyxXQUFSLEVBQW9CLGFBQWFDLEVBQUVDLFFBQUYsQ0FBVyxLQUFLaEMsV0FBaEIsRUFBNkIsR0FBN0IsQ0FBakM7QUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFlBQVI7QUFBcUIsOEJBQUMsTUFBRCxJQUFRLE9BQU8sS0FBS1gsS0FBTCxDQUFXQyxPQUFYLENBQW1CLEtBQUtELEtBQUwsQ0FBV0csUUFBOUIsQ0FBZjtBQUFyQixTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssSUFBRyxTQUFSO0FBQWtCLDhCQUFDLE9BQUQsSUFBUyxNQUFNLEtBQUtILEtBQUwsQ0FBV0UsV0FBMUIsRUFBdUMsSUFBSSxLQUFLVyxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUEzQztBQUNkLHVCQUFXLEtBQUtJLGNBQUwsQ0FBb0JKLElBQXBCLENBQXlCLElBQXpCLENBREcsRUFDNkIsU0FBUyxLQUFLZ0MsT0FBTCxDQUFhaEMsSUFBYixDQUFrQixJQUFsQixDQUR0QztBQUVkLGtDQUFzQixLQUFLeUIsb0JBQUwsQ0FBMEJ6QixJQUExQixDQUErQixJQUEvQixDQUZSLEVBRThDLFNBQVMsS0FBS1osS0FBTCxDQUFXTSxnQkFGbEU7QUFBbEI7QUFGRixPQURGO0FBUUQ7Ozs7RUEzSWV1QyxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyBhdXRvQmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge2xpYnJhcnk6IFtdLFxuICAgICAgaGlkZVRvb2xiYXI6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWQ6IHVuZGVmaW5lZCxcbiAgICAgIHRvdGFsTG9hZGVkOiB1bmRlZmluZWQsXG4gICAgICBzbGlkZXNob3dSdW5uaW5nOiBmYWxzZSxcbiAgICAgIHNsaWRlc2hvd1RpbWU6IDNcbiAgICB9O1xuICAgIHRoaXMudGltZXIgPSAxO1xuICAgIHRoaXMudGltZVRvSGlkZSA9IDU7XG4gICAgdGhpcy5zbGlkZXNob3dUaW1lciA9IDA7XG5cbiAgICAvL0JpbmRpbmdzIHNvIG1ldGhvZHMgYWx3YXlzIGNhbGwgYm91bmQgdG8gQXBwIGluc3RhbmNlXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRMaWJyYXJ5ID0gdGhpcy5sb2FkTGlicmFyeS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRpbWVyID09PSB0aGlzLnRpbWVUb0hpZGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGlkZVRvb2xiYXI6IHRydWV9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aW1lciA8IHRoaXMudGltZVRvSGlkZSkge1xuICAgICAgICB0aGlzLnRpbWVyKys7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zbGlkZXNob3dSdW5uaW5nID09PSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLnNsaWRlc2hvd1RpbWVyID49IHRoaXMuc3RhdGUuc2xpZGVzaG93VGltZSkge1xuICAgICAgICAgIHRoaXMuc2xpZGVzaG93VGltZXIgPSAwO1xuICAgICAgICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWQoJ1InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNsaWRlc2hvd1RpbWVyKys7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zbGlkZXNob3dUaW1lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5Ym9hcmQuYmluZCh0aGlzKSk7XG5cbiAgICB2YXIgdmlld2VyQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXlCb3gnKTtcbiAgICB2aWV3ZXJCb3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmhhbmRsZURyYWdPdmVyLCBmYWxzZSk7XG4gICAgdmlld2VyQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmhhbmRsZURyb3AuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAgLy9IYW5kbGVycywgY2FsbGJhY2tzIHZ2dlxuXG4gIGxvYWRMaWJyYXJ5IChuZXdEYXRhKSB7XG4gICAgLy8gY29uc29sZS5sb2cobmV3RGF0YSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlicmFyeTogbmV3RGF0YX0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe3RvdGFsTG9hZGVkOiBuZXdEYXRhLmxlbmd0aH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkOiAwfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdGVkJywgdGhpcy5zdGF0ZS5zZWxlY3RlZCwgJ2luIGxpYnJhcnknLCB0aGlzLnN0YXRlLmxpYnJhcnkpO1xuICB9XG5cbiAgaGFuZGxlRHJvcCAoZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZHJvcCcpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGZpbGVBcnJheSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcblxuICAgIHRoaXMubG9hZExpYnJhcnkoZmlsZUFycmF5KTtcbiAgfVxuXG4gIGhhbmRsZURyYWdPdmVyIChldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdkcmFnb3ZlcicpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7IC8vIEV4cGxpY2l0bHkgc2hvdyB0aGlzIGlzIGEgY29weS5cbiAgfVxuXG4gIGNoYW5nZVNlbGVjdGVkIChkaXJlY3Rpb24pIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0b3RhbExvYWRlZCA9IHRoaXMuc3RhdGUudG90YWxMb2FkZWQ7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ0wnKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWQgLSAxfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkIDwgdG90YWxMb2FkZWQgLSAxKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkOiB0aGlzLnN0YXRlLnNlbGVjdGVkICsgMX0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2xpZGVzaG93UnVubmluZzogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGp1c3RTbGlkZXNob3dTdGF0ZSAodG9Nb2QsIHZhbHVlKSB7XG4gICAgaWYgKHRvTW9kID09PSAnVGltZScpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXQgc2xpZGVzaG93IHRpbWUgdG8nLCB2YWx1ZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzbGlkZXNob3dUaW1lOiB2YWx1ZX0pO1xuICAgIH0gZWxzZSBpZiAodG9Nb2QgPT09ICdQbGF5aW5nJyl7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NsaWRlc2hvd1J1bm5pbmc6ICF0aGlzLnN0YXRlLnNsaWRlc2hvd1J1bm5pbmd9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZSAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGlkZVRvb2xiYXIgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2hpZGVUb29sYmFyOiBmYWxzZX0pO1xuICAgICAgdGhpcy50aW1lciA9IDE7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5Ym9hcmQgKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0tleSBEb3duIScsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgIC8vTFxuICAgICAgdGhpcy5jaGFuZ2VTZWxlY3RlZCgnTCcpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgIC8vUlxuICAgICAgdGhpcy5jaGFuZ2VTZWxlY3RlZCgnUicpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzcGFjZScpO1xuICAgICAgdGhpcy5hZGp1c3RTbGlkZXNob3dTdGF0ZSgnUGxheWluZycpO1xuICAgIH1cbiAgfVxuXG4gIGdldEluZm8oKSB7XG4gICAgdmFyIGltZyA9IHRoaXMuc3RhdGUubGlicmFyeVt0aGlzLnN0YXRlLnNlbGVjdGVkXTtcbiAgICBpZiAoaW1nID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFt0aGlzLnN0YXRlLnNlbGVjdGVkICsgMSwgJy8nLCB0aGlzLnN0YXRlLnRvdGFsTG9hZGVkLCAnOicsIGVzY2FwZShpbWcubmFtZSldLmpvaW4oJyAnKTtcbiAgICB9XG4gIH1cbiAgLy9vbktleURvd249eyhlKSA9PiB0aGlzLmhhbmRsZUtleWJvYXJkKGUpXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBvbk1vdXNlTW92ZT17Xy50aHJvdHRsZSh0aGlzLm9uTW91c2VNb3ZlLCA1MDApfT5cbiAgICAgICAgPGRpdiBpZD1cImRpc3BsYXlCb3hcIj48Vmlld2VyIGltYWdlPXt0aGlzLnN0YXRlLmxpYnJhcnlbdGhpcy5zdGF0ZS5zZWxlY3RlZF19IC8+PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJ0b29sQmFyXCI+PFRvb2xCYXIgaGlkZT17dGhpcy5zdGF0ZS5oaWRlVG9vbGJhcn0gY2I9e3RoaXMubG9hZExpYnJhcnkuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIGNoYW5nZVBpYz17dGhpcy5jaGFuZ2VTZWxlY3RlZC5iaW5kKHRoaXMpfSBnZXRJbmZvPXt0aGlzLmdldEluZm8uYmluZCh0aGlzKX1cbiAgICAgICAgICAgIGNoYW5nZVNsaWRlc2hvd1N0YXRlPXt0aGlzLmFkanVzdFNsaWRlc2hvd1N0YXRlLmJpbmQodGhpcyl9IHBsYXlpbmc9e3RoaXMuc3RhdGUuc2xpZGVzaG93UnVubmluZ30vPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19