var ToolBar = (props) => {

  var handleFileSelect = function(event) {
    var fileArray = event.target.files;

    for (var i = 0; i < fileArray.length; i++) {
      console.log(fileArray[i].name);
    }
  };

  var findToggle = function() {
    var result = '';
    (props.hide === true) ? (result = 'hiddenToolbar') : (result = 'showToolbar');
    return result;
  };

  return (
    <div className={findToggle()}>
      <button id="leftRight">&#8592;</button>
      <button id="rightButton">&#8594;</button>
      <input type="file" id="files" name="fileArray[]" multiple onChange={handleFileSelect}/>
    </div>
  );
};
