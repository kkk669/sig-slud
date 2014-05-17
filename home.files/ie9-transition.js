// div.container を表示/非表示
function displayContainer(sign) {
  if (sign) {
    $('div.container').toggleClass('scroll', 500);
  } else {
    $('div.container').toggleClass('scroll', 250);
  }
}
