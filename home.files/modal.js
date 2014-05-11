$(function() {
  setModal();
})

function setModal() {

  //HTML読み込み時にモーダルウィンドウの位置をセンターに調整
  adjustCenter("div#modal div.container");

  //ウィンドウリサイズ時にモーダルウィンドウの位置をセンターに調整
  $(window).resize(function() {
    adjustCenter("div#modal div.container");
  });

  //背景がクリックされた時にモーダルウィンドウを閉じる
  $("div#modal div.background").click(function() {
    displayModal(false);
  });

  //リンクがクリックされた時にAjaxでコンテンツを読み込む
  $("a.modal").click(function(event) {
    event.preventDefault();
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.overrideMimeType("text/html; charset=iso-2022-jp");
      }
    });
    $("div#modal div.container").load($(this).attr("href"), data="html", onComplete);
    return false;
  });

  //コンテンツの読み込み完了時にモーダルウィンドウを開く
  function onComplete() {
    displayModal(true);
    $("div#modal div.container a.close").click(function() {
      displayModal(false);
      return false;
    });
  }
}

//モーダルウィンドウを開く
function displayModal(sign) {
  if (sign) {
    var scrolltop = $(window).scrollTop();

    $('div.container').animate({scrollTop: 0}, 1);
    $("div#modal").fadeIn(500);
    $('body').addClass('noscroll');
  } else {
    $("div#modal").fadeOut(250);
    $('body').removeClass('noscroll');
  }
}

//ウィンドウの位置をセンターに調整
function adjustCenter(target) {
  var margin_top = ($(window).height()-$(target).height())/2;
  var margin_left = ($(window).width()-$(target).width())/2;
  $(target).css({top:margin_top+"px", left:margin_left+"px"});
}