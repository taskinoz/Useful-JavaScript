/* -------------------------------------

      This File is to collect random
          and usefull scripts

   -------------------------------------  */

//Random Function (so I dont have to typle a Math.random every time)
var rand = function (r){return Math.floor(Math.random()*r);}
//Example: outputs a number between 0 and 10
rand(10);

//**************************************************************

//Image Parallax
window.onscroll = function (e) {
    //Get Yaxis scroll and move the background with Yaxis variable
    $("body").css("background-position","center "+((window.scrollY/1.4))+"px");
};
//Description: This function gets the scroll position so you
//can change CSS transforms or background positions

//**************************************************************

//Anchor Tag Automatic Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    //Checks if the anchor link matches the site url
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      //Returns the anchor in the href
      var target = $(this.hash);
      //Checks if the # is greater than 0 then removes the #
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//Minified version
$('a[href*="#"]:not([href="#"])').click(function() {
  $('html,body').animate({scrollTop: ($("[name="+((this.hash).slice(1))+"]")).offset().top},1000);return false;
});
//Description: When clicking on a #Anchor
//tag it will automatically scroll down to the anchor

//**************************************************************

//Mimic PHP $_GET[VARIABLE]
var first = getUrlVars()["id"];
var second = getUrlVars()["page"];

//Function to parse URL for variables
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
  vars[key] = value;
  });
  return vars;
}
//Description:
//This will pull variables out of the URL liek the way PHP uses

//**************************************************************

//Get device tilt
window.addEventListener("deviceorientation", function(event) {
  var x = event.beta; // -180 to 180
  var y = event.gamma; // -90 to 90
  var z = event.alpha; // 0 to 360
});
//Description:
//Gets the device tilt and rotation for mobile devices (use with document ready)

//**************************************************************

//Do something on page scroll
$(document).scroll(function(){
    //Code here
});
//Description:
//Allows you to run code on a page scroll (usefull for scroll-jacking)

//**************************************************************
