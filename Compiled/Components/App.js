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

    _this.state = { library: [] };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "container" },
        React.createElement(
          "div",
          { id: "displayBox" },
          "Here is the REACT App"
        ),
        React.createElement(
          "div",
          { id: "toolBar" },
          React.createElement(ToolBar, null)
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJsaWJyYXJ5IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBHQUNaQSxLQURZOztBQUVsQixVQUFLQyxLQUFMLEdBQWEsRUFBQ0MsU0FBUyxFQUFWLEVBQWI7QUFGa0I7QUFHbkI7Ozs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLElBQUcsV0FBUjtBQUNFO0FBQUE7QUFBQSxZQUFLLElBQUcsWUFBUjtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLElBQUcsU0FBUjtBQUFrQiw4QkFBQyxPQUFEO0FBQWxCO0FBRkYsT0FERjtBQU1EOzs7O0VBYmVDLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7bGlicmFyeTogW119O1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGlkPVwiZGlzcGxheUJveFwiPkhlcmUgaXMgdGhlIFJFQUNUIEFwcDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwidG9vbEJhclwiPjxUb29sQmFyIC8+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=