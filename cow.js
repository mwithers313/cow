
var cow = {
  yAxis: 510,
  xAxis: 820,
  direction: 1
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



function execute(){


for (var i = 0; i < commands.length; i++){



if(commands[i] == "f" && cow.direction == 1){
cow.yAxis -= 60;
}
else if(commands[i] == "f" && cow.direction == 2){
  cow.xAxis += 60;
  }
  else if(commands[i] == "f" && cow.direction == 3){
    cow.yAxis += 60;
    }
    else if(commands[i] == "f" && cow.direction == 4){
      cow.xAxis -= 60;
      }


if(commands[i] == "b" && cow.direction == 1){
cow.yAxis += 60;
}else if(commands[i] == "b" && cow.direction == 2){
  cow.xAxis -= 60;
  }else if(commands[i] == "b" && cow.direction == 3){
    cow.yAxis -= 60;
    }else if(commands[i] == "b" && cow.direction == 4){
      cow.xAxis += 60;
      }



      if(commands[i] == "r" && cow.direction == 1){
        document.getElementById('cow').style.transform = "rotate(90deg)";
        cow.direction = 2; //2 in east
        console.log(cow.direction);
        
        }

       else if(cow.direction == 2 && commands[i] == "r"){
          document.getElementById('cow').style.transform = "rotate(180deg)";
          cow.direction = 3; //3 is south
          console.log(cow.direction);
  
          }
        
        else if(cow.direction == 3 && commands[i] == "r"){
          document.getElementById('cow').style.transform = "rotate(270deg)";
          cow.direction = 4; //4 is west
          console.log(cow.direction);
  
          }
          else if(cow.direction == 4 && commands[i] == "r"){
            document.getElementById('cow').style.transform = "rotate(360deg)";
            cow.direction = 1;
            console.log(cow.direction);
    
            }  

            if(commands[i] == "l" && cow.direction == 1){
              document.getElementById('cow').style.transform = "rotate(270deg)";
              cow.direction = 4; 
              console.log(cow.direction);
              
              }
      
             else if(cow.direction == 2 && commands[i] == "l"){
                document.getElementById('cow').style.transform = "rotate(360deg)";
                cow.direction = 1; 
                console.log(cow.direction);
        
                }
              
              else if(cow.direction == 3 && commands[i] == "l"){
                document.getElementById('cow').style.transform = "rotate(90deg)";
                cow.direction = 2; 
                console.log(cow.direction);
        
                }
                else if(cow.direction == 4 && commands[i] == "l"){
                  document.getElementById('cow').style.transform = "rotate(180deg)";
                  cow.direction = 3;
                  console.log(cow.direction);
          
                  } 





            window.setInterval(function makeStuffMove() {
              document.getElementById("cow").style.top = (cow.yAxis) + "px";
              document.getElementById("cow").style.left = (cow.xAxis) + "px";
              
              }, 60/1000);

}

commands = []; //clear the array of commands
 }


