var size = 0;
var placement = 'point';

var style_CCB_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'HGWT_CNKI\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("名称") !== null && resolution > 0 && resolution < 14) {
        labelText = String(feature.get("名称"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450, 450],
                  scale: 0.042222222222222223,
                  anchor: [225.0, 225.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/CCB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
