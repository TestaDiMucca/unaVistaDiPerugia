"use strict";

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
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        // console.log('tick...');
        if (_this2.timer === _this2.timeToHide) {
          _this2.setState({ hideToolbar: true });
        } else if (_this2.timer < _this2.timeToHide) {
          _this2.timer++;
        }
      }, 1000);
    }
  }, {
    key: "loadLibrary",
    value: function loadLibrary(newData) {
      // console.log(this);
      this.setState({ library: newData });
      this.setState({ selected: newData[0] });
      // console.log('Set file library', typeof this.state.library);
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove() {
      // console.log('Mouse is moving');
      if (this.state.hideToolbar === true) {
        this.setState({ hideToolbar: false });
        this.timer = 1;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "container", onMouseMove: _.throttle(this.onMouseMove, 500) },
        React.createElement(
          "div",
          { id: "displayBox" },
          React.createElement(Viewer, { image: this.state.selected })
        ),
        React.createElement(
          "div",
          { id: "toolBar" },
          React.createElement(ToolBar, { hide: this.state.hideToolbar, cb: this.loadLibrary.bind(this) })
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJsaWJyYXJ5IiwiaGlkZVRvb2xiYXIiLCJzZWxlY3RlZCIsInVuZGVmaW5lZCIsInRpbWVyIiwidGltZVRvSGlkZSIsIm9uTW91c2VNb3ZlIiwiYmluZCIsImxvYWRMaWJyYXJ5Iiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsIm5ld0RhdGEiLCJfIiwidGhyb3R0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBRWxCO0FBRmtCLDBHQUNaQSxLQURZOztBQUdsQixVQUFLQyxLQUFMLEdBQWEsRUFBQ0MsU0FBUyxFQUFWLEVBQWNDLGFBQWEsS0FBM0IsRUFBa0NDLFVBQVVDLFNBQTVDLEVBQWI7QUFDQSxVQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7O0FBRUE7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQVRrQjtBQVVuQjs7Ozt3Q0FFb0I7QUFBQTs7QUFDbkJFLGtCQUFZLFlBQU07QUFDaEI7QUFDQSxZQUFJLE9BQUtMLEtBQUwsS0FBZSxPQUFLQyxVQUF4QixFQUFvQztBQUNsQyxpQkFBS0ssUUFBTCxDQUFjLEVBQUNULGFBQWEsSUFBZCxFQUFkO0FBQ0QsU0FGRCxNQUVPLElBQUksT0FBS0csS0FBTCxHQUFhLE9BQUtDLFVBQXRCLEVBQWtDO0FBQ3ZDLGlCQUFLRCxLQUFMO0FBQ0Q7QUFDRixPQVBELEVBT0csSUFQSDtBQVNEOzs7Z0NBRVlPLE8sRUFBUztBQUNwQjtBQUNBLFdBQUtELFFBQUwsQ0FBYyxFQUFDVixTQUFTVyxPQUFWLEVBQWQ7QUFDQSxXQUFLRCxRQUFMLENBQWMsRUFBQ1IsVUFBVVMsUUFBUSxDQUFSLENBQVgsRUFBZDtBQUNBO0FBQ0Q7OztrQ0FFYztBQUNiO0FBQ0EsVUFBSSxLQUFLWixLQUFMLENBQVdFLFdBQVgsS0FBMkIsSUFBL0IsRUFBcUM7QUFDbkMsYUFBS1MsUUFBTCxDQUFjLEVBQUNULGFBQWEsS0FBZCxFQUFkO0FBQ0EsYUFBS0csS0FBTCxHQUFhLENBQWI7QUFDRDtBQUNGOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLElBQUcsV0FBUixFQUFvQixhQUFhUSxFQUFFQyxRQUFGLENBQVcsS0FBS1AsV0FBaEIsRUFBNkIsR0FBN0IsQ0FBakM7QUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFlBQVI7QUFBcUIsOEJBQUMsTUFBRCxJQUFRLE9BQU8sS0FBS1AsS0FBTCxDQUFXRyxRQUExQjtBQUFyQixTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssSUFBRyxTQUFSO0FBQWtCLDhCQUFDLE9BQUQsSUFBUyxNQUFNLEtBQUtILEtBQUwsQ0FBV0UsV0FBMUIsRUFBdUMsSUFBSSxLQUFLTyxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUEzQztBQUFsQjtBQUZGLE9BREY7QUFNRDs7OztFQS9DZU8sTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gYXV0b0JpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtsaWJyYXJ5OiBbXSwgaGlkZVRvb2xiYXI6IGZhbHNlLCBzZWxlY3RlZDogdW5kZWZpbmVkfTtcbiAgICB0aGlzLnRpbWVyID0gMTtcbiAgICB0aGlzLnRpbWVUb0hpZGUgPSA1O1xuXG4gICAgLy9CaW5kaW5ncyBzbyBtZXRob2RzIGFsd2F5cyBjYWxsIGJvdW5kIHRvIEFwcCBpbnN0YW5jZVxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2FkTGlicmFyeSA9IHRoaXMubG9hZExpYnJhcnkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndGljay4uLicpO1xuICAgICAgaWYgKHRoaXMudGltZXIgPT09IHRoaXMudGltZVRvSGlkZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtoaWRlVG9vbGJhcjogdHJ1ZX0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbWVyIDwgdGhpcy50aW1lVG9IaWRlKSB7XG4gICAgICAgIHRoaXMudGltZXIrKztcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgbG9hZExpYnJhcnkgKG5ld0RhdGEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICB0aGlzLnNldFN0YXRlKHtsaWJyYXJ5OiBuZXdEYXRhfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IG5ld0RhdGFbMF19KTtcbiAgICAvLyBjb25zb2xlLmxvZygnU2V0IGZpbGUgbGlicmFyeScsIHR5cGVvZiB0aGlzLnN0YXRlLmxpYnJhcnkpO1xuICB9XG5cbiAgb25Nb3VzZU1vdmUgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdNb3VzZSBpcyBtb3ZpbmcnKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5oaWRlVG9vbGJhciA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aGlkZVRvb2xiYXI6IGZhbHNlfSk7XG4gICAgICB0aGlzLnRpbWVyID0gMTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgb25Nb3VzZU1vdmU9e18udGhyb3R0bGUodGhpcy5vbk1vdXNlTW92ZSwgNTAwKX0+XG4gICAgICAgIDxkaXYgaWQ9XCJkaXNwbGF5Qm94XCI+PFZpZXdlciBpbWFnZT17dGhpcy5zdGF0ZS5zZWxlY3RlZH0gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInRvb2xCYXJcIj48VG9vbEJhciBoaWRlPXt0aGlzLnN0YXRlLmhpZGVUb29sYmFyfSBjYj17dGhpcy5sb2FkTGlicmFyeS5iaW5kKHRoaXMpfSAvPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19