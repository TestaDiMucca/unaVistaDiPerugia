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

  var handleChangeL = function handleChangeL() {
    props.changePic('L');
  };
  var handleChangeR = function handleChangeR() {
    props.changePic('R');
  };

  return React.createElement(
    'div',
    { className: findToggle() },
    React.createElement(
      'button',
      { id: 'leftRight', onClick: handleChangeL },
      '\u2190'
    ),
    React.createElement(
      'button',
      { id: 'rightButton', onClick: handleChangeR },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvVG9vbEJhci5qc3giXSwibmFtZXMiOlsiVG9vbEJhciIsInByb3BzIiwiaGFuZGxlRmlsZVNlbGVjdCIsImV2ZW50IiwiZmlsZUFycmF5IiwidGFyZ2V0IiwiZmlsZXMiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJjYiIsImZpbmRUb2dnbGUiLCJyZXN1bHQiLCJoaWRlIiwiaGFuZGxlQ2hhbmdlTCIsImNoYW5nZVBpYyIsImhhbmRsZUNoYW5nZVIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVSxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVzs7QUFFdkIsTUFBSUMsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBU0MsS0FBVCxFQUFnQjtBQUNyQyxRQUFJQyxZQUFZRCxNQUFNRSxNQUFOLENBQWFDLEtBQTdCOztBQUVBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxVQUFVSSxNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekNFLGNBQVFDLEdBQVIsQ0FBWU4sVUFBVUcsQ0FBVixFQUFhSSxJQUF6QjtBQUNEOztBQUVEVixVQUFNVyxFQUFOLENBQVNSLFNBQVQ7QUFDRCxHQVJEOztBQVVBLE1BQUlTLGFBQWEsU0FBYkEsVUFBYSxHQUFXO0FBQzFCLFFBQUlDLFNBQVMsRUFBYjtBQUNDYixVQUFNYyxJQUFOLEtBQWUsSUFBaEIsR0FBeUJELFNBQVMsZUFBbEMsR0FBc0RBLFNBQVMsYUFBL0Q7QUFDQSxXQUFPQSxNQUFQO0FBQ0QsR0FKRDs7QUFNQSxNQUFJRSxnQkFBZ0IsU0FBaEJBLGFBQWdCLEdBQVc7QUFDN0JmLFVBQU1nQixTQUFOLENBQWdCLEdBQWhCO0FBQ0QsR0FGRDtBQUdBLE1BQUlDLGdCQUFnQixTQUFoQkEsYUFBZ0IsR0FBVztBQUM3QmpCLFVBQU1nQixTQUFOLENBQWdCLEdBQWhCO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVdKLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFFBQVEsSUFBRyxXQUFYLEVBQXVCLFNBQVNHLGFBQWhDO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQVEsSUFBRyxhQUFYLEVBQXlCLFNBQVNFLGFBQWxDO0FBQUE7QUFBQSxLQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhGO0FBSUUsbUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsT0FBdEIsRUFBOEIsTUFBSyxhQUFuQyxFQUFpRCxjQUFqRCxFQUEwRCxVQUFVaEIsZ0JBQXBFLEdBSkY7QUFLRSxpQ0FBSyxXQUFVLFlBQWY7QUFMRixHQURGO0FBU0QsQ0FsQ0QiLCJmaWxlIjoiVG9vbEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBUb29sQmFyID0gKHByb3BzKSA9PiB7XG5cbiAgdmFyIGhhbmRsZUZpbGVTZWxlY3QgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBmaWxlQXJyYXkgPSBldmVudC50YXJnZXQuZmlsZXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2coZmlsZUFycmF5W2ldLm5hbWUpO1xuICAgIH1cblxuICAgIHByb3BzLmNiKGZpbGVBcnJheSk7XG4gIH07XG5cbiAgdmFyIGZpbmRUb2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgKHByb3BzLmhpZGUgPT09IHRydWUpID8gKHJlc3VsdCA9ICdoaWRkZW5Ub29sYmFyJykgOiAocmVzdWx0ID0gJ3Nob3dUb29sYmFyJyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlTCA9IGZ1bmN0aW9uKCkge1xuICAgIHByb3BzLmNoYW5nZVBpYygnTCcpO1xuICB9XG4gIHZhciBoYW5kbGVDaGFuZ2VSID0gZnVuY3Rpb24oKSB7XG4gICAgcHJvcHMuY2hhbmdlUGljKCdSJyk7ICAgIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17ZmluZFRvZ2dsZSgpfT5cbiAgICAgIDxidXR0b24gaWQ9XCJsZWZ0UmlnaHRcIiBvbkNsaWNrPXtoYW5kbGVDaGFuZ2VMfT4mIzg1OTI7PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGlkPVwicmlnaHRCdXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDaGFuZ2VSfT4mIzg1OTQ7PC9idXR0b24+XG4gICAgICA8c3Bhbj4mbmJzcDsmbmJzcDsmbmJzcDtMb2FkIEZpbGVzOjwvc3Bhbj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZXNcIiBuYW1lPVwiZmlsZUFycmF5W11cIiBtdWx0aXBsZSBvbkNoYW5nZT17aGFuZGxlRmlsZVNlbGVjdH0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNraW5nQm94XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19