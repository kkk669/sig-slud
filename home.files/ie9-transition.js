// div.container を表示/非表示
function displayContainer(sign) {
  $('div.container-back').toggleClass('slide', (sign) ? 500 : 250);
}
