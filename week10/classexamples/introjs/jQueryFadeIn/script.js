$(document).ready(function(){
  $("button").click(function(){
      $("box1").fadeIn("slow");
      $("box2").fadeIn("slow");
      $("box3").fadeIn("slow");
      $("box4").fadeIn("slow");
      $("box5").fadeIn("slow");
      $("box6").fadeIn("slow");
  });
  $("button").click(function(){
      $("box1").fadeOut();
      $("#box2").fadeOut("slow");
      $("#box3").fadeOut("slow");
      $("#box4").fadeOut("slow");
      $("#box5").fadeOut("2000");
      $("#box6").fadeOut("3000");
  });
});
