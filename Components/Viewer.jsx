var Viewer = (props) => {

  var getSource = function() {
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
  }


  return (
    <div className="boxView"><img src={getSource()}></img></div>
  );
};

/*
<div><div style={getSource()}></div></div>

*/
