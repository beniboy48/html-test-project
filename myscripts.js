//Slide menu

$(document).ready(function(){
  $(".sliding-menu").click(function(){
	$(this).siblings("div").slideToggle("slow");
	$(this).children(".arrow-down").toggle();
	$(this).children(".arrow-up").toggle();
  });
});