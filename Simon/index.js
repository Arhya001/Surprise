var userClickedPattern = [];
var gamePattern = [];
var buttonColors=["red","blue","green","yellow"];
var level=0


var started=false
document.addEventListener("keypress",function(){
  if (started==false){
    $("#level-title").text("Press any key to start!");
    nextSequence();
    started=true;
  }
})


// console.log(userClickedPattern);

x=0
$(".btn").click(function(event){
  x++;
  var userChosenColor= (event.target.id)
  playSound(userChosenColor);
  animatePress(userChosenColor);
  userClickedPattern.push(userChosenColor);
  // console.log(userClickedPattern);
  checkPattern(gamePattern,userClickedPattern);
  if (x==gamePattern.length && started==true){
    setTimeout(function(){
      nextSequence();
    },1000);
    console.log(level);
    x=0
    userClickedPattern=[];
  }
  if (level==7){
    $("#Container").css("display","none");
    $("#hiddenbtn").css("display","block");
    started=false
    $("#level-title").text("Ohkk.. Ohkk.. Enough. U WIN. U can take see ur surprise now! <3");
  }
  // console.log(gamePattern);
})


function checkPattern(game,user){
  for (i=0;i<(user.length);i++){
    if (user[i]==game[i]){
      // console.log("correct");
    }
    else{
      $("body").css("background-color","red");
      setTimeout(function(){
        $("body").css("background-color","#011F3F")
      },150);
      $("#level-title").text("Game over, Press any key to restart");
      (new Audio("sounds/wrong.mp3")).play();
      started=false;
      x=0;
      level=0;
      gamePattern=[];
      userClickedPattern=[];
    }
  }
}





function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  },150)
}




function playSound(name){
  (new Audio("sounds/"+name+".mp3")).play();
}



function nextSequence(){
  var randomNum= Math.floor(Math.random()*4);
  var randomChosenColor= buttonColors[randomNum];
  gamePattern.push(randomChosenColor);

  level++;
  $("#level-title").text("Level "+ level);

  $("#"+randomChosenColor).css("opacity",0.3);
  setTimeout(function(){
    $("#"+randomChosenColor).css("opacity",1);
  },120);

  playSound(randomChosenColor);
}
