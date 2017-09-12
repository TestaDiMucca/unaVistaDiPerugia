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
  }
  var handleChangeR = function() {
    props.changePic('R');    
  }

  return (
    <div className={findToggle()}>
      <button id="leftRight" onClick={handleChangeL}>&#8592;</button>
      <button id="rightButton" onClick={handleChangeR}>&#8594;</button>
      <span>&nbsp;&nbsp;&nbsp;Load Files:</span>
      <input type="file" id="files" name="fileArray[]" multiple onChange={handleFileSelect}/>
      <div className="backingBox"></div>
    </div>
  );
};
