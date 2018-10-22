

//Cow and starting placement
var cow = {
  yAxis: 220,
  xAxis: 52,
  direction: 2
}


//array that stores sequence of instructions
var commands = [];




//right button
function right(){

commands.push("r");
// execute(); 
//add if we dont want to use execute button

var newRow = document.createElement('span');
newRow.className = 'instructions';

newRow.innerHTML = `
         R,
`
  document.getElementById('commands').appendChild(newRow);

}




//left button
function left(){

  commands.push("l");
// execute();
var newRow = document.createElement('span');
newRow.className = 'instructions';

newRow.innerHTML = `
        L, 
`
  document.getElementById('commands').appendChild(newRow);
}




//forward button
function forward(){

commands.push("f");
// execute();

var newRow = document.createElement('span');
newRow.className = 'instructions';

newRow.innerHTML = `
         F, 
`
  document.getElementById('commands').appendChild(newRow);
}



//back button
function backward(){

commands.push("b")
  // execute();

var newRow = document.createElement('span');
newRow.className = 'instructions';

newRow.innerHTML = `
         B, 
`
  document.getElementById('commands').appendChild(newRow);
}
  




  //loops through array of commands and executes
function execute(){

  //use jQuery to clear out the command window
  $("span.instructions").remove();


for (var i = 0; i < commands.length; i++){
 

 

  //forward button

if(commands[i] == "f" && cow.direction == 1){
setTimeout(function(){ cow.yAxis -= 60; }, i * 500);
}
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
                  
                  if(cow.xAxis == 2152 && cow.yAxis ==100 && cow.direction == 1){
                    alert("Are you trying to kiss me?! We've just met");
                  }

                  if(cow.xAxis == 2252 && cow.yAxis ==100 && cow.direction == 1){
                    alert("I'm starting to think you're flirting with me");
                  }

                  if(cow.xAxis == 2152 && cow.yAxis ==160 && cow.direction == 3){
                    alert("Somebody needs a bath");
                  }

                  if(cow.xAxis == 2252 && cow.yAxis ==100 && cow.direction == 1){
                    alert("Well this is awkward");
                  }
                  if(cow.xAxis == 2692 && cow.yAxis ==460 && cow.direction == 2){
                    alert("Better MOO've on back the other way");
                  }






                  //used to help me find fence collision position
                  console.log("x axis = " + cow.xAxis + " " + "y axis = " + cow.yAxis);
}

commands = []; //clear the array of commands


 }





 //setting the interval for the window while adjusting cows location
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

   if (cow.xAxis > 2830){
    cow.xAxis = 2830;
  }

 
  

  document.getElementById("cow").style.left = (cow.xAxis) + "px";
  document.getElementById("cow").style.top = (cow.yAxis) + "px";
  }, 500);



