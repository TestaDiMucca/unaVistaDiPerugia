'use strict';

var ToolBar = function ToolBar(props) {

  var handleFileSelect = function handleFileSelect(event) {
    var fileArray = event.target.files;

    for (var i = 0; i < fileArray.length; i++) {
      console.log(fileArray[i].name);
    }
  };

  var findToggle = function findToggle() {
    var result = '';
    props.hide === true ? result = 'hiddenToolbar' : result = 'showToolbar';
    return result;
  };

  return React.createElement(
    'div',
    { className: findToggle() },
    React.createElement(
      'button',
      { id: 'leftRight' },
      '\u2190'
    ),
    React.createElement(
      'button',
      { id: 'rightButton' },
      '\u2192'
    ),
    React.createElement('input', { type: 'file', id: 'files', name: 'fileArray[]', multiple: true, onChange: handleFileSelect })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvVG9vbEJhci5qc3giXSwibmFtZXMiOlsiVG9vbEJhciIsInByb3BzIiwiaGFuZGxlRmlsZVNlbGVjdCIsImV2ZW50IiwiZmlsZUFycmF5IiwidGFyZ2V0IiwiZmlsZXMiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJmaW5kVG9nZ2xlIiwicmVzdWx0IiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXOztBQUV2QixNQUFJQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFTQyxLQUFULEVBQWdCO0FBQ3JDLFFBQUlDLFlBQVlELE1BQU1FLE1BQU4sQ0FBYUMsS0FBN0I7O0FBRUEsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILFVBQVVJLE1BQTlCLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6Q0UsY0FBUUMsR0FBUixDQUFZTixVQUFVRyxDQUFWLEVBQWFJLElBQXpCO0FBQ0Q7QUFDRixHQU5EOztBQVFBLE1BQUlDLGFBQWEsU0FBYkEsVUFBYSxHQUFXO0FBQzFCLFFBQUlDLFNBQVMsRUFBYjtBQUNDWixVQUFNYSxJQUFOLEtBQWUsSUFBaEIsR0FBeUJELFNBQVMsZUFBbEMsR0FBc0RBLFNBQVMsYUFBL0Q7QUFDQSxXQUFPQSxNQUFQO0FBQ0QsR0FKRDs7QUFNQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVdELFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFFBQVEsSUFBRyxXQUFYO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQVEsSUFBRyxhQUFYO0FBQUE7QUFBQSxLQUZGO0FBR0UsbUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsT0FBdEIsRUFBOEIsTUFBSyxhQUFuQyxFQUFpRCxjQUFqRCxFQUEwRCxVQUFVVixnQkFBcEU7QUFIRixHQURGO0FBT0QsQ0F2QkQiLCJmaWxlIjoiVG9vbEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBUb29sQmFyID0gKHByb3BzKSA9PiB7XG5cbiAgdmFyIGhhbmRsZUZpbGVTZWxlY3QgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBmaWxlQXJyYXkgPSBldmVudC50YXJnZXQuZmlsZXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2coZmlsZUFycmF5W2ldLm5hbWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZmluZFRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAocHJvcHMuaGlkZSA9PT0gdHJ1ZSkgPyAocmVzdWx0ID0gJ2hpZGRlblRvb2xiYXInKSA6IChyZXN1bHQgPSAnc2hvd1Rvb2xiYXInKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2ZpbmRUb2dnbGUoKX0+XG4gICAgICA8YnV0dG9uIGlkPVwibGVmdFJpZ2h0XCI+JiM4NTkyOzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBpZD1cInJpZ2h0QnV0dG9uXCI+JiM4NTk0OzwvYnV0dG9uPlxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlc1wiIG5hbWU9XCJmaWxlQXJyYXlbXVwiIG11bHRpcGxlIG9uQ2hhbmdlPXtoYW5kbGVGaWxlU2VsZWN0fS8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19