//*  マウスカーソル
//*------------------------------------*

let userAgent = navigator.userAgent;
if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
  $('#cursor').css('display', 'none');
} else {
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  });
  const linkElem = document.querySelectorAll('a, .cursorNone');
  for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function () {
      cursor.classList.add('hov_');
    });
    linkElem[i].addEventListener('mouseout', function () {
      cursor.classList.remove('hov_');
    });
  }
}


//*  ローディング画面
//*------------------------------------*

let splash_text = $.cookie('accessdate');
let myD = new Date();
let myYear = String(myD.getFullYear());
let myMonth = String(myD.getMonth() + 1);
let myDate = String(myD.getDate());
if (splash_text != myYear + myMonth + myDate) {
  $('.loading').css('display', 'block');
  setTimeout(function () {
    $('.loading_spinner').fadeIn(1000, function () {
      setTimeout(function () {
        $('.loading_spinner').fadeOut(1000);
      }, 30000);
      setTimeout(function () {
        $('.loading').fadeOut(1000, function () {
          let myD = new Date();
          let myYear = String(myD.getFullYear());
          let myMonth = String(myD.getMonth() + 1);
          let myDate = String(myD.getDate());
          $.cookie('accessdate', myYear + myMonth + myDate);
        });
      }, 1000);
    });
  }, 1000);
} else {
  $('.loading').css('display', 'none');
}


//*  スティッキーヘッダー
//*------------------------------------*
$(function () {
  let $win = $(window),
    $fv = $('.indexMain_fv'),
    $header = $('.header'),
    fvHeight = $fv.outerHeight(),
    fixedClass = 'fixed';
  $win.on('load scroll', function () {
    let value = $(this).scrollTop();
    if ($win.width() > 768) {
      if (value > fvHeight) {
        $header.addClass(fixedClass);
      } else {
        $header.removeClass(fixedClass);
      }
    }
  });
});


//*  ハンバーガーメニュー
//*------------------------------------*

$(function () {
  $('.header_hamburger').on('click', function () {
    $('.header_hamburger, .header_nav').toggleClass('open');
    $('body').toggleClass('noScroll');
  });
});


//*  ページ内リンク時スクロール
//*------------------------------------*

$(function () {
  $('a[href^="#"]').click(function () {
    let time = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" ? 'html' : href);
    let distance = target.offset().top;
    $("html, body").animate({ scrollTop: distance }, time, "swing");
    return false;
  });
});


//*  トップに戻るリンク
//*------------------------------------*

$(function () {
  let pagetop = $('.pageTop');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
});