
// Top Navbar active link highlighting
$(document).ready(function() {
  $('a.mdl-navigation__link').click(function(){
    $("a.active-link").removeClass('active-link');
    $(this).addClass('active-link');
  });
});

// $(document).ready(function() {
//
// 	let elements = Object.keys(images).map(function(item) {
// 	  let img = images[item];
// 	  return(
// 	    "<div class='img-overflow'><div class='hov-container img-container'><img src='" + img.path + "'><div class='hov-text'><h4>" + img.heading + "</h4>" +img.description+"</div></div></div>"
// 	  )
// 	});
//
// 	$("div#main-img-row").html(elements);
//
// });
