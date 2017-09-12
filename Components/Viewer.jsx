var Viewer = (props) => {

  var getSource = function() {
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
  }


  return (
    <div className="boxView"><img id="selectedFile" src={getSource()}></img></div>
  );
};

/*
<div><div style={getSource()}></div></div>

*/
