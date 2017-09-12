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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvVmlld2VyLmpzeCJdLCJuYW1lcyI6WyJWaWV3ZXIiLCJwcm9wcyIsImdldFNvdXJjZSIsImltYWdlIiwiaW1nU3JjIiwic3BhbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInVuZGVmaW5lZCIsInR5cGUiLCJtYXRjaCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZURpc3BsYXlBcmVhIiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVzs7QUFFdEIsTUFBSUMsWUFBWSxTQUFaQSxTQUFZLEdBQVc7QUFDekIsUUFBSUMsUUFBUUYsTUFBTUUsS0FBbEI7QUFDQSxRQUFJQyxTQUFTLFNBQWI7QUFDQSxRQUFJQyxPQUFPQyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQSxRQUFJSixVQUFVSyxTQUFkLEVBQXlCO0FBQ3ZCSixlQUFTLHVCQUFUO0FBQ0EsYUFBT0EsTUFBUDtBQUNELEtBSEQsTUFHTztBQUNMLFVBQUlILE1BQU1FLEtBQU4sQ0FBWU0sSUFBWixDQUFpQkMsS0FBakIsQ0FBdUIsU0FBdkIsQ0FBSixFQUF1Qzs7QUFHckMsWUFBSUMsU0FBUyxJQUFJQyxVQUFKLEVBQWI7O0FBRUFELGVBQU9FLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVk7QUFDMUMsY0FBSUMsa0JBQWtCUixTQUFTUyxjQUFULENBQXdCLGNBQXhCLENBQXRCO0FBQ0FELDBCQUFnQkUsR0FBaEIsR0FBc0JMLE9BQU9NLE1BQTdCO0FBQ0QsU0FIRCxFQUdHLEtBSEg7O0FBS0FOLGVBQU9PLGFBQVAsQ0FBcUJqQixNQUFNRSxLQUEzQjtBQUNELE9BWEQsTUFXTztBQUNMZ0IsY0FBTSw2Q0FBTjtBQUNEO0FBRUY7QUFDRixHQXhCRDs7QUEyQkEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLFNBQWY7QUFBeUIsaUNBQUssSUFBRyxjQUFSLEVBQXVCLEtBQUtqQixXQUE1QjtBQUF6QixHQURGO0FBR0QsQ0FoQ0Q7O0FBa0NBIiwiZmlsZSI6IlZpZXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBWaWV3ZXIgPSAocHJvcHMpID0+IHtcblxuICB2YXIgZ2V0U291cmNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGltYWdlID0gcHJvcHMuaW1hZ2U7XG4gICAgdmFyIGltZ1NyYyA9ICdkZWZhdWx0JztcbiAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpZiAoaW1hZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaW1nU3JjID0gXCJDb21wb25lbnRzL1ZpZXdlci5qcGdcIjtcbiAgICAgIHJldHVybiBpbWdTcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9wcy5pbWFnZS50eXBlLm1hdGNoKCdpbWFnZS4qJykpIHtcblxuXG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGZpbGVEaXNwbGF5QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZEZpbGUnKTtcbiAgICAgICAgICBmaWxlRGlzcGxheUFyZWEuc3JjID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHByb3BzLmltYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdOb24taW1hZ2Ugb3IgdW5zdXBwb3J0ZWQgaW1hZ2UgZmlsZSBsb2FkZWQhJyk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3hWaWV3XCI+PGltZyBpZD1cInNlbGVjdGVkRmlsZVwiIHNyYz17Z2V0U291cmNlKCl9PjwvaW1nPjwvZGl2PlxuICApO1xufTtcblxuLypcbjxkaXY+PGRpdiBzdHlsZT17Z2V0U291cmNlKCl9PjwvZGl2PjwvZGl2PlxuXG4qL1xuIl19