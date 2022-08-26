$(document).ready(function () {
  var menuIcon = $(".heading");
  var headingMid = $(".heading-mid");
  var headingLst = $(".heading-ls");
  var menuListItem = $(".navigation ul li a");

  $(menuIcon).on("click", function () {
    $(this).toggleClass("active");
    
    $(".about-description").toggleClass("active");
    $("body").toggleClass("active");
   
  });
  $(headingMid).on("click", function () {
    $(this).toggleClass("active");
    $(".footer-mid").toggleClass("active1");
  
   
  });
  $(headingLst).on("click", function () {
    $(this).toggleClass("active");
    $(".footer-ls").toggleClass("active2");
   
   
  });

  $(menuListItem).on("click", function () {
    $(".footer-list").removeClass("active");
    $(".about-description").removeClass("active");
    $("body").removeClass("active");
  });

  
});
