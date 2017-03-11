$(document).ready(function() {
  $('nav a').click(function(){
  $(this).addClass('active-link');
  $(this).parent().parent().children('a').not(this).removeClass('active-link');
});
});

//broken because the nav element is not the direct parent and the a
// elements are not the direct children- fix
console.log("what");
