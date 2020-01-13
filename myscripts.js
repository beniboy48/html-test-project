//Slide menu

$(document).ready(function(){
  $(".sliding-menu").click(function(){
    $(".sliding-item-container").slideToggle("slow");
  });
});