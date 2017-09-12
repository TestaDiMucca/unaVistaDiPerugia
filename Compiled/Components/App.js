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

    _this.state = { library: [], hideToolbar: false, selected: undefined };
    _this.timer = 1;
    _this.timeToHide = 5;

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
      }, 1000);
      // document.addEventListener("keydown", this.handleKeyboard.bind(this));
    }
  }, {
    key: 'loadLibrary',
    value: function loadLibrary(newData) {
      this.setState({ library: newData });
      this.setState({ selected: 0 });
      // console.log('selected', this.state.selected, 'in library', this.state.library);
    }
  }, {
    key: 'changeSelected',
    value: function changeSelected(direction) {
      var totalLoaded = this.state.library.length;
      if (direction === 'L') {
        if (this.state.selected > 0) {
          this.setState({ selected: this.state.selected - 1 });
        }
      } else {
        if (this.state.selected < totalLoaded - 1) {
          this.setState({ selected: this.state.selected + 1 });
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
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { id: 'container', onMouseMove: _.throttle(this.onMouseMove, 500), onKeyDown: function onKeyDown(e) {
            return _this3.handleKeyboard(e);
          } },
        React.createElement(
          'div',
          { id: 'displayBox' },
          React.createElement(Viewer, { image: this.state.library[this.state.selected] })
        ),
        React.createElement(
          'div',
          { id: 'toolBar' },
          React.createElement(ToolBar, { hide: this.state.hideToolbar, cb: this.loadLibrary.bind(this),
            changePic: this.changeSelected.bind(this) })
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJsaWJyYXJ5IiwiaGlkZVRvb2xiYXIiLCJzZWxlY3RlZCIsInVuZGVmaW5lZCIsInRpbWVyIiwidGltZVRvSGlkZSIsIm9uTW91c2VNb3ZlIiwiYmluZCIsImxvYWRMaWJyYXJ5Iiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsIm5ld0RhdGEiLCJkaXJlY3Rpb24iLCJ0b3RhbExvYWRlZCIsImxlbmd0aCIsImV2ZW50Iiwia2V5Q29kZSIsImNoYW5nZVNlbGVjdGVkIiwiXyIsInRocm90dGxlIiwiZSIsImhhbmRsZUtleWJvYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUVsQjtBQUZrQiwwR0FDWkEsS0FEWTs7QUFHbEIsVUFBS0MsS0FBTCxHQUFhLEVBQUNDLFNBQVMsRUFBVixFQUFjQyxhQUFhLEtBQTNCLEVBQWtDQyxVQUFVQyxTQUE1QyxFQUFiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLENBQWxCOztBQUVBO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFUa0I7QUFVbkI7Ozs7d0NBRW9CO0FBQUE7O0FBQ25CRSxrQkFBWSxZQUFNO0FBQ2hCLFlBQUksT0FBS0wsS0FBTCxLQUFlLE9BQUtDLFVBQXhCLEVBQW9DO0FBQ2xDLGlCQUFLSyxRQUFMLENBQWMsRUFBQ1QsYUFBYSxJQUFkLEVBQWQ7QUFDRCxTQUZELE1BRU8sSUFBSSxPQUFLRyxLQUFMLEdBQWEsT0FBS0MsVUFBdEIsRUFBa0M7QUFDdkMsaUJBQUtELEtBQUw7QUFDRDtBQUNGLE9BTkQsRUFNRyxJQU5IO0FBT0E7QUFDRDs7O2dDQUVZTyxPLEVBQVM7QUFDcEIsV0FBS0QsUUFBTCxDQUFjLEVBQUNWLFNBQVNXLE9BQVYsRUFBZDtBQUNBLFdBQUtELFFBQUwsQ0FBYyxFQUFDUixVQUFVLENBQVgsRUFBZDtBQUNBO0FBQ0Q7OzttQ0FFZVUsUyxFQUFXO0FBQ3pCLFVBQUlDLGNBQWMsS0FBS2QsS0FBTCxDQUFXQyxPQUFYLENBQW1CYyxNQUFyQztBQUNBLFVBQUlGLGNBQWMsR0FBbEIsRUFBdUI7QUFDckIsWUFBSSxLQUFLYixLQUFMLENBQVdHLFFBQVgsR0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsZUFBS1EsUUFBTCxDQUFjLEVBQUNSLFVBQVUsS0FBS0gsS0FBTCxDQUFXRyxRQUFYLEdBQXNCLENBQWpDLEVBQWQ7QUFDRDtBQUNGLE9BSkQsTUFJTztBQUNMLFlBQUksS0FBS0gsS0FBTCxDQUFXRyxRQUFYLEdBQXNCVyxjQUFjLENBQXhDLEVBQTJDO0FBQ3pDLGVBQUtILFFBQUwsQ0FBYyxFQUFDUixVQUFVLEtBQUtILEtBQUwsQ0FBV0csUUFBWCxHQUFzQixDQUFqQyxFQUFkO0FBQ0Q7QUFDRjtBQUVGOzs7a0NBRWM7QUFDYixVQUFJLEtBQUtILEtBQUwsQ0FBV0UsV0FBWCxLQUEyQixJQUEvQixFQUFxQztBQUNuQyxhQUFLUyxRQUFMLENBQWMsRUFBQ1QsYUFBYSxLQUFkLEVBQWQ7QUFDQSxhQUFLRyxLQUFMLEdBQWEsQ0FBYjtBQUNEO0FBQ0Y7OzttQ0FFZVcsSyxFQUFPO0FBQ3JCO0FBQ0EsVUFBSUEsTUFBTUMsT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN4QjtBQUNBLGFBQUtDLGNBQUwsQ0FBb0IsR0FBcEI7QUFDRCxPQUhELE1BR08sSUFBSUYsTUFBTUMsT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUMvQjtBQUNBLGFBQUtDLGNBQUwsQ0FBb0IsR0FBcEI7QUFDRDtBQUNGOzs7NkJBRVM7QUFBQTs7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLElBQUcsV0FBUixFQUFvQixhQUFhQyxFQUFFQyxRQUFGLENBQVcsS0FBS2IsV0FBaEIsRUFBNkIsR0FBN0IsQ0FBakMsRUFBb0UsV0FBVyxtQkFBQ2MsQ0FBRDtBQUFBLG1CQUFPLE9BQUtDLGNBQUwsQ0FBb0JELENBQXBCLENBQVA7QUFBQSxXQUEvRTtBQUNFO0FBQUE7QUFBQSxZQUFLLElBQUcsWUFBUjtBQUFxQiw4QkFBQyxNQUFELElBQVEsT0FBTyxLQUFLckIsS0FBTCxDQUFXQyxPQUFYLENBQW1CLEtBQUtELEtBQUwsQ0FBV0csUUFBOUIsQ0FBZjtBQUFyQixTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssSUFBRyxTQUFSO0FBQWtCLDhCQUFDLE9BQUQsSUFBUyxNQUFNLEtBQUtILEtBQUwsQ0FBV0UsV0FBMUIsRUFBdUMsSUFBSSxLQUFLTyxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUEzQztBQUNkLHVCQUFXLEtBQUtVLGNBQUwsQ0FBb0JWLElBQXBCLENBQXlCLElBQXpCLENBREc7QUFBbEI7QUFGRixPQURGO0FBT0Q7Ozs7RUF0RWVlLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIGF1dG9CaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7bGlicmFyeTogW10sIGhpZGVUb29sYmFyOiBmYWxzZSwgc2VsZWN0ZWQ6IHVuZGVmaW5lZH07XG4gICAgdGhpcy50aW1lciA9IDE7XG4gICAgdGhpcy50aW1lVG9IaWRlID0gNTtcblxuICAgIC8vQmluZGluZ3Mgc28gbWV0aG9kcyBhbHdheXMgY2FsbCBib3VuZCB0byBBcHAgaW5zdGFuY2VcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9hZExpYnJhcnkgPSB0aGlzLmxvYWRMaWJyYXJ5LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudGltZXIgPT09IHRoaXMudGltZVRvSGlkZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtoaWRlVG9vbGJhcjogdHJ1ZX0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbWVyIDwgdGhpcy50aW1lVG9IaWRlKSB7XG4gICAgICAgIHRoaXMudGltZXIrKztcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleWJvYXJkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgbG9hZExpYnJhcnkgKG5ld0RhdGEpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsaWJyYXJ5OiBuZXdEYXRhfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IDB9KTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0ZWQnLCB0aGlzLnN0YXRlLnNlbGVjdGVkLCAnaW4gbGlicmFyeScsIHRoaXMuc3RhdGUubGlicmFyeSk7XG4gIH1cblxuICBjaGFuZ2VTZWxlY3RlZCAoZGlyZWN0aW9uKSB7XG4gICAgdmFyIHRvdGFsTG9hZGVkID0gdGhpcy5zdGF0ZS5saWJyYXJ5Lmxlbmd0aDtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnTCcpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkID4gMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZCAtIDF9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWQgPCB0b3RhbExvYWRlZCAtIDEpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWQgKyAxfSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBvbk1vdXNlTW92ZSAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGlkZVRvb2xiYXIgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2hpZGVUb29sYmFyOiBmYWxzZX0pO1xuICAgICAgdGhpcy50aW1lciA9IDE7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5Ym9hcmQgKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0tleSBEb3duIScsIGV2ZW50KTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgIC8vTFxuICAgICAgdGhpcy5jaGFuZ2VTZWxlY3RlZCgnTCcpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgIC8vUlxuICAgICAgdGhpcy5jaGFuZ2VTZWxlY3RlZCgnUicpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBvbk1vdXNlTW92ZT17Xy50aHJvdHRsZSh0aGlzLm9uTW91c2VNb3ZlLCA1MDApfSBvbktleURvd249eyhlKSA9PiB0aGlzLmhhbmRsZUtleWJvYXJkKGUpfT5cbiAgICAgICAgPGRpdiBpZD1cImRpc3BsYXlCb3hcIj48Vmlld2VyIGltYWdlPXt0aGlzLnN0YXRlLmxpYnJhcnlbdGhpcy5zdGF0ZS5zZWxlY3RlZF19IC8+PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJ0b29sQmFyXCI+PFRvb2xCYXIgaGlkZT17dGhpcy5zdGF0ZS5oaWRlVG9vbGJhcn0gY2I9e3RoaXMubG9hZExpYnJhcnkuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIGNoYW5nZVBpYz17dGhpcy5jaGFuZ2VTZWxlY3RlZC5iaW5kKHRoaXMpfSAvPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19