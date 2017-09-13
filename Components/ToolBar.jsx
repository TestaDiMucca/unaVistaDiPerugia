var ToolBar = (props) => {

  var handleFileSelect = function(event) {
    var fileArray = event.target.files;

    for (var i = 0; i < fileArray.length; i++) {
      console.log(fileArray[i].name);
    }

    props.cb(fileArray);
  };

  var findToggle = function() {
    var result = '';
    (props.hide === true) ? (result = 'hiddenToolbar') : (result = 'showToolbar');
    return result;
  };

  var handleChangeL = function() {
    props.changePic('L');
  };
  var handleChangeR = function() {
    props.changePic('R');
  };

  var handleTimeSelect = function(e) {
    props.changeSlideshowState('Time', e.target.value);
  };

  var handleStartSlideshow = function() {
    props.changeSlideshowState('Playing');
  };

  return (
    <div className={findToggle()}>
      <button id="leftRight" onClick={handleChangeL}>&#8592;</button>
      <button id="rightButton" onClick={handleChangeR}>&#8594;</button>
      <span>&nbsp;&nbsp;&nbsp;Slideshow:</span>
      <select defaultValue='3' onChange={handleTimeSelect}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='5'>5</option>
        <option value='7'>7</option>
        <option value='10'>10</option>
      </select>
      <button id="rightButton" onClick={handleStartSlideshow}>&#8618;</button>
      <span>&nbsp;&nbsp;&nbsp;Load Files:</span>
      <input type="file" id="files" name="fileArray[]" multiple onChange={handleFileSelect}/>
      <div className="backingBox"></div>
      <div className="information">{props.getInfo()}</div>
    </div>
  );
};
