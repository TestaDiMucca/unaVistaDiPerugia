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

  var handleTimeSelect = function handleTimeSelect(e) {
    props.changeSlideshowState('Time', e.target.value);
  };

  var handleStartSlideshow = function handleStartSlideshow() {
    props.changeSlideshowState('Playing');
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
      '\xA0\xA0\xA0Slideshow:'
    ),
    React.createElement(
      'select',
      { defaultValue: '3', onChange: handleTimeSelect },
      React.createElement(
        'option',
        { value: '1' },
        '1'
      ),
      React.createElement(
        'option',
        { value: '2' },
        '2'
      ),
      React.createElement(
        'option',
        { value: '3' },
        '3'
      ),
      React.createElement(
        'option',
        { value: '5' },
        '5'
      ),
      React.createElement(
        'option',
        { value: '7' },
        '7'
      ),
      React.createElement(
        'option',
        { value: '10' },
        '10'
      )
    ),
    React.createElement(
      'button',
      { id: 'rightButton', onClick: handleStartSlideshow },
      '\u21AA'
    ),
    React.createElement(
      'span',
      null,
      '\xA0\xA0\xA0Load Files:'
    ),
    React.createElement('input', { type: 'file', id: 'files', name: 'fileArray[]', multiple: true, onChange: handleFileSelect }),
    React.createElement('div', { className: 'backingBox' }),
    React.createElement(
      'div',
      { className: 'information' },
      props.getInfo()
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvVG9vbEJhci5qc3giXSwibmFtZXMiOlsiVG9vbEJhciIsInByb3BzIiwiaGFuZGxlRmlsZVNlbGVjdCIsImV2ZW50IiwiZmlsZUFycmF5IiwidGFyZ2V0IiwiZmlsZXMiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJjYiIsImZpbmRUb2dnbGUiLCJyZXN1bHQiLCJoaWRlIiwiaGFuZGxlQ2hhbmdlTCIsImNoYW5nZVBpYyIsImhhbmRsZUNoYW5nZVIiLCJoYW5kbGVUaW1lU2VsZWN0IiwiZSIsImNoYW5nZVNsaWRlc2hvd1N0YXRlIiwidmFsdWUiLCJoYW5kbGVTdGFydFNsaWRlc2hvdyIsImdldEluZm8iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVSxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVzs7QUFFdkIsTUFBSUMsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBU0MsS0FBVCxFQUFnQjtBQUNyQyxRQUFJQyxZQUFZRCxNQUFNRSxNQUFOLENBQWFDLEtBQTdCOztBQUVBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxVQUFVSSxNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekNFLGNBQVFDLEdBQVIsQ0FBWU4sVUFBVUcsQ0FBVixFQUFhSSxJQUF6QjtBQUNEOztBQUVEVixVQUFNVyxFQUFOLENBQVNSLFNBQVQ7QUFDRCxHQVJEOztBQVVBLE1BQUlTLGFBQWEsU0FBYkEsVUFBYSxHQUFXO0FBQzFCLFFBQUlDLFNBQVMsRUFBYjtBQUNDYixVQUFNYyxJQUFOLEtBQWUsSUFBaEIsR0FBeUJELFNBQVMsZUFBbEMsR0FBc0RBLFNBQVMsYUFBL0Q7QUFDQSxXQUFPQSxNQUFQO0FBQ0QsR0FKRDs7QUFNQSxNQUFJRSxnQkFBZ0IsU0FBaEJBLGFBQWdCLEdBQVc7QUFDN0JmLFVBQU1nQixTQUFOLENBQWdCLEdBQWhCO0FBQ0QsR0FGRDtBQUdBLE1BQUlDLGdCQUFnQixTQUFoQkEsYUFBZ0IsR0FBVztBQUM3QmpCLFVBQU1nQixTQUFOLENBQWdCLEdBQWhCO0FBQ0QsR0FGRDs7QUFJQSxNQUFJRSxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFTQyxDQUFULEVBQVk7QUFDakNuQixVQUFNb0Isb0JBQU4sQ0FBMkIsTUFBM0IsRUFBbUNELEVBQUVmLE1BQUYsQ0FBU2lCLEtBQTVDO0FBQ0QsR0FGRDs7QUFJQSxNQUFJQyx1QkFBdUIsU0FBdkJBLG9CQUF1QixHQUFXO0FBQ3BDdEIsVUFBTW9CLG9CQUFOLENBQTJCLFNBQTNCO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVdSLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFFBQVEsSUFBRyxXQUFYLEVBQXVCLFNBQVNHLGFBQWhDO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQVEsSUFBRyxhQUFYLEVBQXlCLFNBQVNFLGFBQWxDO0FBQUE7QUFBQSxLQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhGO0FBSUU7QUFBQTtBQUFBLFFBQVEsY0FBYSxHQUFyQixFQUF5QixVQUFVQyxnQkFBbkM7QUFDRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BRkY7QUFHRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BSEY7QUFJRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BSkY7QUFLRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BTEY7QUFNRTtBQUFBO0FBQUEsVUFBUSxPQUFNLElBQWQ7QUFBQTtBQUFBO0FBTkYsS0FKRjtBQVlFO0FBQUE7QUFBQSxRQUFRLElBQUcsYUFBWCxFQUF5QixTQUFTSSxvQkFBbEM7QUFBQTtBQUFBLEtBWkY7QUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYkY7QUFjRSxtQ0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxPQUF0QixFQUE4QixNQUFLLGFBQW5DLEVBQWlELGNBQWpELEVBQTBELFVBQVVyQixnQkFBcEUsR0FkRjtBQWVFLGlDQUFLLFdBQVUsWUFBZixHQWZGO0FBZ0JFO0FBQUE7QUFBQSxRQUFLLFdBQVUsYUFBZjtBQUE4QkQsWUFBTXVCLE9BQU47QUFBOUI7QUFoQkYsR0FERjtBQW9CRCxDQXJERCIsImZpbGUiOiJUb29sQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRvb2xCYXIgPSAocHJvcHMpID0+IHtcblxuICB2YXIgaGFuZGxlRmlsZVNlbGVjdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGZpbGVBcnJheSA9IGV2ZW50LnRhcmdldC5maWxlcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zb2xlLmxvZyhmaWxlQXJyYXlbaV0ubmFtZSk7XG4gICAgfVxuXG4gICAgcHJvcHMuY2IoZmlsZUFycmF5KTtcbiAgfTtcblxuICB2YXIgZmluZFRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAocHJvcHMuaGlkZSA9PT0gdHJ1ZSkgPyAocmVzdWx0ID0gJ2hpZGRlblRvb2xiYXInKSA6IChyZXN1bHQgPSAnc2hvd1Rvb2xiYXInKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBoYW5kbGVDaGFuZ2VMID0gZnVuY3Rpb24oKSB7XG4gICAgcHJvcHMuY2hhbmdlUGljKCdMJyk7XG4gIH07XG4gIHZhciBoYW5kbGVDaGFuZ2VSID0gZnVuY3Rpb24oKSB7XG4gICAgcHJvcHMuY2hhbmdlUGljKCdSJyk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVRpbWVTZWxlY3QgPSBmdW5jdGlvbihlKSB7XG4gICAgcHJvcHMuY2hhbmdlU2xpZGVzaG93U3RhdGUoJ1RpbWUnLCBlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVN0YXJ0U2xpZGVzaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgcHJvcHMuY2hhbmdlU2xpZGVzaG93U3RhdGUoJ1BsYXlpbmcnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtmaW5kVG9nZ2xlKCl9PlxuICAgICAgPGJ1dHRvbiBpZD1cImxlZnRSaWdodFwiIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZUx9PiYjODU5Mjs8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gaWQ9XCJyaWdodEJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZVJ9PiYjODU5NDs8L2J1dHRvbj5cbiAgICAgIDxzcGFuPiZuYnNwOyZuYnNwOyZuYnNwO1NsaWRlc2hvdzo8L3NwYW4+XG4gICAgICA8c2VsZWN0IGRlZmF1bHRWYWx1ZT0nMycgb25DaGFuZ2U9e2hhbmRsZVRpbWVTZWxlY3R9PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPScxJz4xPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9JzInPjI8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMyc+Mzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPSc1Jz41PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9JzcnPjc8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTAnPjEwPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxidXR0b24gaWQ9XCJyaWdodEJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVN0YXJ0U2xpZGVzaG93fT4mIzg2MTg7PC9idXR0b24+XG4gICAgICA8c3Bhbj4mbmJzcDsmbmJzcDsmbmJzcDtMb2FkIEZpbGVzOjwvc3Bhbj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZXNcIiBuYW1lPVwiZmlsZUFycmF5W11cIiBtdWx0aXBsZSBvbkNoYW5nZT17aGFuZGxlRmlsZVNlbGVjdH0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNraW5nQm94XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9ybWF0aW9uXCI+e3Byb3BzLmdldEluZm8oKX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=