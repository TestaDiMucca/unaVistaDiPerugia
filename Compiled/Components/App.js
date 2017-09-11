"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { library: [], hideToolbar: false };
    // console.log(this.state.hideToolbar);
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // setTimeout(() => {
      //   this.setState({hideToolbar: true});
      //   console.log('tried to hide toolbar');
      // }, 6000);
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove() {
      console.log('Mouse is moving');
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
          "Here is the REACT App"
        ),
        React.createElement(
          "div",
          { id: "toolBar" },
          React.createElement(ToolBar, { hide: this.state.hideToolbar })
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJsaWJyYXJ5IiwiaGlkZVRvb2xiYXIiLCJjb25zb2xlIiwibG9nIiwiXyIsInRocm90dGxlIiwib25Nb3VzZU1vdmUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsMEdBQ1pBLEtBRFk7O0FBRWxCLFVBQUtDLEtBQUwsR0FBYSxFQUFDQyxTQUFTLEVBQVYsRUFBY0MsYUFBYSxLQUEzQixFQUFiO0FBQ0E7QUFIa0I7QUFJbkI7Ozs7d0NBRW9CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7OztrQ0FFYztBQUNiQyxjQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxJQUFHLFdBQVIsRUFBb0IsYUFBYUMsRUFBRUMsUUFBRixDQUFXLEtBQUtDLFdBQWhCLEVBQTZCLEdBQTdCLENBQWpDO0FBQ0U7QUFBQTtBQUFBLFlBQUssSUFBRyxZQUFSO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssSUFBRyxTQUFSO0FBQWtCLDhCQUFDLE9BQUQsSUFBUyxNQUFNLEtBQUtQLEtBQUwsQ0FBV0UsV0FBMUI7QUFBbEI7QUFGRixPQURGO0FBTUQ7Ozs7RUF6QmVNLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7bGlicmFyeTogW10sIGhpZGVUb29sYmFyOiBmYWxzZX07XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5oaWRlVG9vbGJhcik7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHtoaWRlVG9vbGJhcjogdHJ1ZX0pO1xuICAgIC8vICAgY29uc29sZS5sb2coJ3RyaWVkIHRvIGhpZGUgdG9vbGJhcicpO1xuICAgIC8vIH0sIDYwMDApO1xuICB9XG5cbiAgb25Nb3VzZU1vdmUgKCkge1xuICAgIGNvbnNvbGUubG9nKCdNb3VzZSBpcyBtb3ZpbmcnKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBvbk1vdXNlTW92ZT17Xy50aHJvdHRsZSh0aGlzLm9uTW91c2VNb3ZlLCA1MDApfT5cbiAgICAgICAgPGRpdiBpZD1cImRpc3BsYXlCb3hcIj5IZXJlIGlzIHRoZSBSRUFDVCBBcHA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInRvb2xCYXJcIj48VG9vbEJhciBoaWRlPXt0aGlzLnN0YXRlLmhpZGVUb29sYmFyfSAvPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19