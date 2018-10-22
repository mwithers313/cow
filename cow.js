
var cow = {
  yAxis: 220,
  xAxis: 52,
  direction: 2
}

var commands = [];

function right(){
commands.push("r");
// execute(); 
//add if we dont want to use execute button
}

function left(){
  commands.push("l");
  // execute(); 
  }
function forward(){
commands.push("f");
// execute();
  }

function backward(){
  commands.push("b")
  // execute();
  }




  //loops through array of commands and executes
function execute(){

for (var i = 0; i < commands.length; i++){
 
if(commands[i] == "f" && cow.direction == 1){
setTimeout(function(){ cow.yAxis -= 60; }, i * 500);
}
//forward button
else if(commands[i] == "f" && cow.direction == 2){
    setTimeout(function(){ cow.xAxis += 60; }, i * 500);
  }
  else if(commands[i] == "f" && cow.direction == 3){
    setTimeout(function(){ cow.yAxis += 60; }, i * 500);
  }
    else if(commands[i] == "f" && cow.direction == 4){
      setTimeout(function(){ cow.xAxis -= 60; }, i * 500);
    }

//back button
if(commands[i] == "b" && cow.direction == 1){
  setTimeout(function(){cow.yAxis += 60; }, i * 500);

}else if(commands[i] == "b" && cow.direction == 2){
  setTimeout(function(){cow.xAxis -= 60; }, i * 500);

  }else if(commands[i] == "b" && cow.direction == 3){
    setTimeout(function(){cow.yAxis -= 60; }, i * 500);

  }else if(commands[i] == "b" && cow.direction == 4){
    setTimeout(function(){cow.xAxis += 60; }, i * 500);
  }

//right button

      if(commands[i] == "r" && cow.direction == 1){
        setTimeout(function(){ document.getElementById('cow').style.transform = "rotate(90deg)"; }, i * 500);
        cow.direction = 2; //2 in east
        }

       else if(cow.direction == 2 && commands[i] == "r"){
        setTimeout(function(){ document.getElementById('cow').style.transform = "rotate(180deg)"; }, i * 500);
          cow.direction = 3; //3 is south
        }
        
        else if(cow.direction == 3 && commands[i] == "r"){
          setTimeout(function(){ document.getElementById('cow').style.transform = "rotate(270deg)"; }, i * 500);
          cow.direction = 4; //4 is west
         }

          else if(cow.direction == 4 && commands[i] == "r"){
            setTimeout(function(){ document.getElementById('cow').style.transform = "rotate(360deg)"; }, i * 500);
            cow.direction = 1;
          }  




//left button

            if(commands[i] == "l" && cow.direction == 1){
              setTimeout(function(){ document.getElementById('cow').style.transform = "rotate(270deg)"; }, i * 500);
              cow.direction = 4; 
              
                }
      
             else if(cow.direction == 2 && commands[i] == "l"){
              setTimeout(function(){ document.getElementById('cow').style.transform = "rotate(360deg)"; }, i * 500);
              cow.direction = 1; 
        
                }
              
              else if(cow.direction == 3 && commands[i] == "l"){
                setTimeout(function(){ document.getElementById('cow').style.transform = "rotate(90deg)"; }, i * 500);
                cow.direction = 2; 
        
                }
                else if(cow.direction == 4 && commands[i] == "l"){
                  setTimeout(function(){ document.getElementById('cow').style.transform = "rotate(180deg)"; }, i * 500);
                  cow.direction = 3;
          
                  } 

                  //used to help find collision position
                  console.log("x axis = " + cow.xAxis + " " + "y axis = " + cow.yAxis);
}

commands = []; //clear the array of commands
 }

 window.setInterval(function makeStuffMove() {
  
  //below statements check for fence collision 
  if (cow.yAxis < 160){
    cow.yAxis = 100;
  }
  if (cow.yAxis > 580){
      cow.yAxis = 580;
   }

   if (cow.xAxis < 52){
     cow.xAxis = 52;
   }

  document.getElementById("cow").style.left = (cow.xAxis) + "px";
  document.getElementById("cow").style.top = (cow.yAxis) + "px";
  }, 500);


