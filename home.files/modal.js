$(function() {
  setModal();
})

function setModal() {

  //HTML読み込み時にモーダルウィンドウの位置をセンターに調整
  //adjustCenter("div#modal div.container");

  //ウィンドウリサイズ時にモーダルウィンドウの位置をセンターに調整
  /*$(window).resize(function() {
    adjustCenter("div#modal div.container");
  });*/

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
    $("div#modal div.container p.article").load($(this).attr("href"), data="html", onComplete);
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
    // div#modal を表示
    $("div#modal").css("margin-top", 0);
    
    // div.container をスクロールイン
    $("div.container").css("-webkit-transition-duration", "0.5s");
    $("div.container").css("transition-duration", "0.5s");
    $("div.container").css("-webkit-transition-timing-function", "ease-out");
    $("div.container").css("transition-timing-function", "ease-out");
    $("div.container").addClass("scroll");
    
    $('div.container').animate({scrollTop: 0}, 1);

    // div.background をフェードイン
    $("div.background").fadeIn(500);
    // 背景のスクロール禁止
    $('body').addClass('noscroll');
  } else {
    // div.container をスクロールアウト
    $("div.container").css("-webkit-transition-duration", "0.25s");
    $("div.container").css("transition-duration", "0.25s");
    $("div.container").css("-webkit-transition-timing-function", "ease-in");
    $("div.container").css("transition-timing-function", "ease-in");
    $("div.container").removeClass("scroll");

    // div.background をフェードアウト
    $("div.background").fadeOut(250, function() {
      // div#modal 全体を非表示
      $("div#modal").css("margin-top", "100%");
      // 背景のスクロール許可
      $('body').removeClass('noscroll');
    });
  }
}

//ウィンドウの位置をセンターに調整
/*function adjustCenter(target) {
  var margin_top = ($(window).height()-$(target).height())/2;
  var margin_left = ($(window).width()-$(target).width())/2;
  $(target).css({top:margin_top+"px", left:margin_left+"px"});
}*/
