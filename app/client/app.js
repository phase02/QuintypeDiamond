window.jQuery = window.$ =  require("jquery");
require("bootstrap-sass");
var bootbox = require('bootbox');

var totalDiamonds = 0;
global.startApp = function(container) {
  console.log("Here is the container:", container);
}

global.eventClick = function(event){
  
    if(event.target.className == "cell unknown diamond" || event.target.className == "cell diamond")
    {
      event.target.className = "cell diamond";
      totalDiamonds = totalDiamonds +1;
      if(totalDiamonds == 8)
      {
        alert("End of game!!! Your score is "+document.getElementsByClassName("cell unknown").length);
      }
    }
    else
    {
      var potentialDiamonds = document.getElementsByClassName("cell unknown diamond");
      event.target.className = "cell";
    }
}
