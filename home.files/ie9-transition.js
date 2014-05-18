// div#modal を表示/非表示
function animateModal(sign) {
  if (sign) {
  	$("div#modal").addClass('fade', 500);
  } else {
  	$("div#modal").removeClass('fade', 250);
  }
}

// div.container を表示/非表示
function animateContainer(sign) {
  if (sign) {
  	$("div.container").addClass('slide', 500);
  } else {
  	$("div.container").removeClass('slide', 250);
  }
}
