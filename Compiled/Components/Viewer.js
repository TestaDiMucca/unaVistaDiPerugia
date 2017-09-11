"use strict";

var Viewer = function Viewer(props) {

  var getSource = function getSource() {
    var image = props.image;
    var imgPath;
    if (image === undefined) {
      imgPath = "Components/Viewer.jpg";
    } else {
      var reader = new FileReader();
    }
    // return {backgroundImage: `url("${imgPath}")`};
    // return {backgroundImage: `url("${imgPath}")`, backgroundSize: 'auto 100%',
    // height: '100%', position: 'absolute', width: '100%', };
    return imgPath;
  };

  return React.createElement(
    "div",
    { className: "boxView" },
    React.createElement("img", { src: getSource() })
  );
};

/*
<div><div style={getSource()}></div></div>

*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvVmlld2VyLmpzeCJdLCJuYW1lcyI6WyJWaWV3ZXIiLCJwcm9wcyIsImdldFNvdXJjZSIsImltYWdlIiwiaW1nUGF0aCIsInVuZGVmaW5lZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVzs7QUFFdEIsTUFBSUMsWUFBWSxTQUFaQSxTQUFZLEdBQVc7QUFDekIsUUFBSUMsUUFBUUYsTUFBTUUsS0FBbEI7QUFDQSxRQUFJQyxPQUFKO0FBQ0EsUUFBSUQsVUFBVUUsU0FBZCxFQUF5QjtBQUN2QkQsZ0JBQVUsdUJBQVY7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJRSxTQUFTLElBQUlDLFVBQUosRUFBYjtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsV0FBT0gsT0FBUDtBQUNELEdBWkQ7O0FBZUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLFNBQWY7QUFBeUIsaUNBQUssS0FBS0YsV0FBVjtBQUF6QixHQURGO0FBR0QsQ0FwQkQ7O0FBc0JBIiwiZmlsZSI6IlZpZXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBWaWV3ZXIgPSAocHJvcHMpID0+IHtcblxuICB2YXIgZ2V0U291cmNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGltYWdlID0gcHJvcHMuaW1hZ2U7XG4gICAgdmFyIGltZ1BhdGg7XG4gICAgaWYgKGltYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGltZ1BhdGggPSBcIkNvbXBvbmVudHMvVmlld2VyLmpwZ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIHtiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2ltZ1BhdGh9XCIpYH07XG4gICAgLy8gcmV0dXJuIHtiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2ltZ1BhdGh9XCIpYCwgYmFja2dyb3VuZFNpemU6ICdhdXRvIDEwMCUnLFxuICAgIC8vIGhlaWdodDogJzEwMCUnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6ICcxMDAlJywgfTtcbiAgICByZXR1cm4gaW1nUGF0aDtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFZpZXdcIj48aW1nIHNyYz17Z2V0U291cmNlKCl9PjwvaW1nPjwvZGl2PlxuICApO1xufTtcblxuLypcbjxkaXY+PGRpdiBzdHlsZT17Z2V0U291cmNlKCl9PjwvZGl2PjwvZGl2PlxuXG4qL1xuIl19