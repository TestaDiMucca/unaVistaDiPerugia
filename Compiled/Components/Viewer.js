'use strict';

var Viewer = function Viewer(props) {

  var getSource = function getSource() {
    var image = props.image;
    var imgSrc = 'default';
    var span = document.createElement('span');
    if (image === undefined) {
      imgSrc = "Components/Viewer.jpg";
      return imgSrc;
    } else {
      if (props.image.type.match('image.*')) {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
          var fileDisplayArea = document.getElementById('selectedFile');
          fileDisplayArea.src = reader.result;
        }, false);
        reader.readAsDataURL(props.image);
      } else {
        alert('Non-image or unsupported image file loaded!');
      }
    }
  };
  return React.createElement(
    'div',
    { className: 'boxView' },
    React.createElement('img', { id: 'selectedFile', src: getSource() })
  );
};

/*
<div><div style={getSource()}></div></div>

*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvVmlld2VyLmpzeCJdLCJuYW1lcyI6WyJWaWV3ZXIiLCJwcm9wcyIsImdldFNvdXJjZSIsImltYWdlIiwiaW1nU3JjIiwic3BhbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInVuZGVmaW5lZCIsInR5cGUiLCJtYXRjaCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZURpc3BsYXlBcmVhIiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVzs7QUFFdEIsTUFBSUMsWUFBWSxTQUFaQSxTQUFZLEdBQVc7QUFDekIsUUFBSUMsUUFBUUYsTUFBTUUsS0FBbEI7QUFDQSxRQUFJQyxTQUFTLFNBQWI7QUFDQSxRQUFJQyxPQUFPQyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQSxRQUFJSixVQUFVSyxTQUFkLEVBQXlCO0FBQ3ZCSixlQUFTLHVCQUFUO0FBQ0EsYUFBT0EsTUFBUDtBQUNELEtBSEQsTUFHTztBQUNMLFVBQUlILE1BQU1FLEtBQU4sQ0FBWU0sSUFBWixDQUFpQkMsS0FBakIsQ0FBdUIsU0FBdkIsQ0FBSixFQUF1QztBQUNyQyxZQUFJQyxTQUFTLElBQUlDLFVBQUosRUFBYjtBQUNBRCxlQUFPRSxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0FBQzFDLGNBQUlDLGtCQUFrQlIsU0FBU1MsY0FBVCxDQUF3QixjQUF4QixDQUF0QjtBQUNBRCwwQkFBZ0JFLEdBQWhCLEdBQXNCTCxPQUFPTSxNQUE3QjtBQUNELFNBSEQsRUFHRyxLQUhIO0FBSUFOLGVBQU9PLGFBQVAsQ0FBcUJqQixNQUFNRSxLQUEzQjtBQUNELE9BUEQsTUFPTztBQUNMZ0IsY0FBTSw2Q0FBTjtBQUNEO0FBQ0Y7QUFDRixHQW5CRDtBQW9CQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsU0FBZjtBQUF5QixpQ0FBSyxJQUFHLGNBQVIsRUFBdUIsS0FBS2pCLFdBQTVCO0FBQXpCLEdBREY7QUFHRCxDQXpCRDs7QUEyQkEiLCJmaWxlIjoiVmlld2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFZpZXdlciA9IChwcm9wcykgPT4ge1xuXG4gIHZhciBnZXRTb3VyY2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW1hZ2UgPSBwcm9wcy5pbWFnZTtcbiAgICB2YXIgaW1nU3JjID0gJ2RlZmF1bHQnO1xuICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGlmIChpbWFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbWdTcmMgPSBcIkNvbXBvbmVudHMvVmlld2VyLmpwZ1wiO1xuICAgICAgcmV0dXJuIGltZ1NyYztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb3BzLmltYWdlLnR5cGUubWF0Y2goJ2ltYWdlLionKSkge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZmlsZURpc3BsYXlBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkRmlsZScpO1xuICAgICAgICAgIGZpbGVEaXNwbGF5QXJlYS5zcmMgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHByb3BzLmltYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdOb24taW1hZ2Ugb3IgdW5zdXBwb3J0ZWQgaW1hZ2UgZmlsZSBsb2FkZWQhJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3hWaWV3XCI+PGltZyBpZD1cInNlbGVjdGVkRmlsZVwiIHNyYz17Z2V0U291cmNlKCl9PjwvaW1nPjwvZGl2PlxuICApO1xufTtcblxuLypcbjxkaXY+PGRpdiBzdHlsZT17Z2V0U291cmNlKCl9PjwvZGl2PjwvZGl2PlxuXG4qL1xuIl19