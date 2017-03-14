$(document).ready(function() {
  $('a.mdl-navigation__link').click(function(){
  $("a.active-link").removeClass('active-link');
  $(this).addClass('active-link');
});
});

//broken because the nav element is not the direct parent and the a
// elements are not the direct children- fix
console.log("what");
