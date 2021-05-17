function nxtbtn(n,a){
  $("#"+a).css("visibility","hidden");
  if (n!='hiddenbtn'){
    console.log(n,a);
    console.log('#'+n);
    $("#"+n).css("visibility","visible");
  }
  else{
    $(".h1").html("Sike! I was talking abt This Button (Btw it was alwayss heree) <br/> Lmnoo I just madee u click a bunch of useless buttons for Nothing. (I hope ur annoyed!!) <br /> but Now be serious and make the browser full screen abhi <br /> I Love You <3");
    $("#hiddenbtn").css("color","#056676");
    $("#hiddenbtn").css("background","#3cb0fd");
  }
}
