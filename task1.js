var layerZero = document.getElementById("layerZero");
var layerOne = document.getElementById("layerOne");
var layerTwo = document.getElementById("layerTwo");
var layerThree = document.getElementById("layerThree");
var layerFour = document.getElementById("layerFour");
var layerFive = document.getElementById("layerFive");
var layerSix = document.getElementById("layerSix");

var containerPosition = {h: 600, w: 1000};
var layerZeroPosition = {h: 600, w: 2000, x: 0, y: 0};
var layerOnePosition = {h: 600, w: 2000, x: 0, y: 0};
var layerTwoPosition = {h: 600, w: 2000, x: 0, y: 0};
var layerThreePosition = {h: 600, w: 2000, x: 0, y: 0};
var layerFourPosition = {h: 600, w: 2000, x: 0, y: 0};
var layerFivePosition = {h: 600, w: 2000, x: 0, y: 0};
var layerSixPosition = {h: 600, w: 2000, x: 0, y: 0};

window.addEventListener("mousemove", scrollMouse);

function scrollMouse(evt){
    // console.log(evt);
    // reset the absolute zero position so that it coincide with the top left of the container
    // console.log(container.offsetLeft); // offset left is 16

    var mousePosition = {x: evt.pageX - container.offsetLeft, y: evt.pageY - container.offsetTop};
    // console.log(mousePosition);

    // change the layer zero position
    layerZeroPosition.x = -0.01*mousePosition.x + containerPosition.w/2 - layerZeroPosition.w/2;
    layerZero.style.left = layerZeroPosition.x + "px";
    // console.log(layerSixPosition.x);
    
    // layer one
    layerOnePosition.x = -0.1*mousePosition.x + containerPosition.w/2 - layerOnePosition.w/2;
    layerOne.style.left = layerOnePosition.x + "px";

    // layer two
    layerTwoPosition.x = -0.2*mousePosition.x + containerPosition.w/2 - layerTwoPosition.w/2;
    layerTwo.style.left = layerTwoPosition.x + "px";
    
    // layer three
    layerThreePosition.x = -0.4*mousePosition.x + containerPosition.w/2 - layerThreePosition.w/2;
    layerThree.style.left = layerThreePosition.x + "px";

    // layer four
    layerFourPosition.x = -0.6*mousePosition.x + containerPosition.w/2 - layerFourPosition.w/2;
    layerFour.style.left = layerFourPosition.x + "px";

    // layer five
    layerFivePosition.x = -0.8*mousePosition.x + containerPosition.w/2 - layerFivePosition.w/2;
    layerFive.style.left = layerFivePosition.x + "px";

    // layer six
    layerSixPosition.x = -0.9*mousePosition.x+ containerPosition.w/2 - layerSixPosition.w/2;
    layerSix.style.left = layerSixPosition.x + "px";

}