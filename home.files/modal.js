$(function() {
  setModal();
})

function setModal() {
  //背景がクリックされた時にモーダルウィンドウを閉じる
  $("div#modal").click(function(e) {
    if (e.target.id === 'modal')
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
    // div#modal を表示しフェードイン
    $("div#modal").addClass('show');
    animateModal(sign);
    $('div#modal').animate({scrollTop: 0}, 1);
    
    // div.container をスライドイン
    animateContainer(sign);

    // 背景のスクロール禁止
    $('body').addClass('noscroll');
  } else {
    // モーダルウィンドウの背後をフェードアウト
    animateModal(sign);

    // div.container をスライドアウト
    animateContainer(sign);

    // アニメーションの時間に合わせて div#modal を非表示
    setTimeout(function() {
      $("div#modal").removeClass('show');
      $('body').removeClass('noscroll');
    }, 250);
  }
}

// div#modal を表示/非表示(引数 sign は ie9-transition.js との互換)
function animateModal(sign) {
  if (sign) {
    $("div#modal").addClass('fade');
  } else {
    $("div#modal").removeClass('fade');
  }
}

// div.container を表示/非表示(引数 sign は ie9-transition.js との互換)
function animateContainer(sign) {
  if (sign) {
    if ((window.navigator.userAgent.toLowerCase()).indexOf('gecko/') != -1) {
      // Firefox なら delay をいれる
      setTimeout(function() {
        $("div.container").addClass("slide");
      }, 20);
    } else {
      // Firefox 以外はそのまま
      $("div.container").addClass("slide");
    }
  } else {
    $("div.container").removeClass("slide");
  }
}
