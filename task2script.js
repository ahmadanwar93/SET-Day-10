var container = document.getElementById("container");
var layerZero = document.getElementById("layerZero");
var layerOne = document.getElementById("layerOne");
var layerTwo = document.getElementById("layerTwo");
var layerThree = document.getElementById("layerThree");
var layerFour = document.getElementById("layerFour");
var layerFive = document.getElementById("layerFive");

var containerPosition = {h: 600, w: 1000};
var layerZeroPosition = {h: 300, w: 2500, x: 0, y: 0};
var layerOnePosition = {h: 500, w: 2500, x: 0, y: 0};
var layerTwoPosition = {h: 300, w: 2500, x: 0, y: 0};
var layerThreePosition = {h: 300, w: 2500, x: 0, y: 0};
var layerFourPosition = {h: 300, w: 2500, x: 0, y: 0};
var layerFivePosition = {h: 300, w: 2500, x: 0, y: 0};

window.addEventListener("mousemove", scrollMouseLeftRight);

function scrollMouseLeftRight(evt){
    // console.log(evt);
    // again, need to reset the zero position
    var mousePositionReset = {x:evt.pageX - container.offsetLeft, y: evt.pageY - container.offsetTop };


    // console.log(mousePositionReset);

    // change the layer zero position
    layerZeroPosition.x = -0.02*mousePositionReset.x + containerPosition.w/2 - layerZeroPosition.w/2;
    layerZero.style.left = layerZeroPosition.x + "px";
    // console.log(layerSixPosition.x);
    
    // layer one
    layerOnePosition.x = -0.05*mousePositionReset.x + containerPosition.w/2 - layerOnePosition.w/2;
    layerOne.style.left = layerOnePosition.x + "px";

    // layer two
    layerTwoPosition.x = -0.12*mousePositionReset.x + containerPosition.w/2 - layerTwoPosition.w/2;
    layerTwo.style.left = layerTwoPosition.x + "px";
    
    // layer three
    layerThreePosition.x = -0.09*mousePositionReset.x + containerPosition.w/2 - layerThreePosition.w/2;
    layerThree.style.left = layerThreePosition.x + "px";

    // layer four
    layerFourPosition.x = -0.3*mousePositionReset.x + containerPosition.w/2 - layerFourPosition.w/2;
    layerFour.style.left = layerFourPosition.x + "px";

    // layer five
    layerFivePosition.x = -0.5*mousePositionReset.x + containerPosition.w/2 - layerFivePosition.w/2;
    layerFive.style.left = layerFivePosition.x + "px";

    
}