'use strict';

var ToolBar = function ToolBar(props) {

  var handleFileSelect = function handleFileSelect(event) {
    var fileArray = event.target.files;

    for (var i = 0; i < fileArray.length; i++) {
      console.log(fileArray[i].name);
    }

    props.cb(fileArray);
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
    React.createElement(
      'span',
      null,
      '\xA0\xA0\xA0Load Files:'
    ),
    React.createElement('input', { type: 'file', id: 'files', name: 'fileArray[]', multiple: true, onChange: handleFileSelect }),
    React.createElement('div', { className: 'backingBox' })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvVG9vbEJhci5qc3giXSwibmFtZXMiOlsiVG9vbEJhciIsInByb3BzIiwiaGFuZGxlRmlsZVNlbGVjdCIsImV2ZW50IiwiZmlsZUFycmF5IiwidGFyZ2V0IiwiZmlsZXMiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJjYiIsImZpbmRUb2dnbGUiLCJyZXN1bHQiLCJoaWRlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7O0FBRXZCLE1BQUlDLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQVNDLEtBQVQsRUFBZ0I7QUFDckMsUUFBSUMsWUFBWUQsTUFBTUUsTUFBTixDQUFhQyxLQUE3Qjs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsVUFBVUksTUFBOUIsRUFBc0NELEdBQXRDLEVBQTJDO0FBQ3pDRSxjQUFRQyxHQUFSLENBQVlOLFVBQVVHLENBQVYsRUFBYUksSUFBekI7QUFDRDs7QUFFRFYsVUFBTVcsRUFBTixDQUFTUixTQUFUO0FBQ0QsR0FSRDs7QUFVQSxNQUFJUyxhQUFhLFNBQWJBLFVBQWEsR0FBVztBQUMxQixRQUFJQyxTQUFTLEVBQWI7QUFDQ2IsVUFBTWMsSUFBTixLQUFlLElBQWhCLEdBQXlCRCxTQUFTLGVBQWxDLEdBQXNEQSxTQUFTLGFBQS9EO0FBQ0EsV0FBT0EsTUFBUDtBQUNELEdBSkQ7O0FBTUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFXRCxZQUFoQjtBQUNFO0FBQUE7QUFBQSxRQUFRLElBQUcsV0FBWDtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFRLElBQUcsYUFBWDtBQUFBO0FBQUEsS0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIRjtBQUlFLG1DQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLE9BQXRCLEVBQThCLE1BQUssYUFBbkMsRUFBaUQsY0FBakQsRUFBMEQsVUFBVVgsZ0JBQXBFLEdBSkY7QUFLRSxpQ0FBSyxXQUFVLFlBQWY7QUFMRixHQURGO0FBU0QsQ0EzQkQiLCJmaWxlIjoiVG9vbEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBUb29sQmFyID0gKHByb3BzKSA9PiB7XG5cbiAgdmFyIGhhbmRsZUZpbGVTZWxlY3QgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBmaWxlQXJyYXkgPSBldmVudC50YXJnZXQuZmlsZXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2coZmlsZUFycmF5W2ldLm5hbWUpO1xuICAgIH1cblxuICAgIHByb3BzLmNiKGZpbGVBcnJheSk7XG4gIH07XG5cbiAgdmFyIGZpbmRUb2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgKHByb3BzLmhpZGUgPT09IHRydWUpID8gKHJlc3VsdCA9ICdoaWRkZW5Ub29sYmFyJykgOiAocmVzdWx0ID0gJ3Nob3dUb29sYmFyJyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtmaW5kVG9nZ2xlKCl9PlxuICAgICAgPGJ1dHRvbiBpZD1cImxlZnRSaWdodFwiPiYjODU5Mjs8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gaWQ9XCJyaWdodEJ1dHRvblwiPiYjODU5NDs8L2J1dHRvbj5cbiAgICAgIDxzcGFuPiZuYnNwOyZuYnNwOyZuYnNwO0xvYWQgRmlsZXM6PC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlc1wiIG5hbWU9XCJmaWxlQXJyYXlbXVwiIG11bHRpcGxlIG9uQ2hhbmdlPXtoYW5kbGVGaWxlU2VsZWN0fS8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tpbmdCb3hcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=