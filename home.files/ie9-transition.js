// div.container を表示/非表示
function displayContainer(sign) {
  $('div.container').toggleClass('slide', (sign) ? 500 : 250);
}
