$(function () {
  //fullpage初始化
  $('#dowebok').fullpage({
    'navigation': true,
    anchors: [
      'page1',
      'page2',
      'page3',
      'page4'
    ],
    //页面初始化执行的回调函数
    afterRender: function () {
      $('#dowebok .section .page1>span').css('animation', 'lineBlack 2s forwards')
    },
    //当页面滚动到index屏时触发的回调函数
    afterLoad: function (anchorLink, index) {
      if (index === 1) {
        $('#dowebok .section .page1>span').css('animation', 'lineBlack 2s forwards')
      } else {
        $('#dowebok .section .page1>span').css('animation', '')
      }
      var leng = $('#dowebok .section .page2 .main .line_group>div');
      if (index === 2) {
        $('#dowebok .section .page2 .main .line_group>div .line .line-active>div').css('animation', 'line-text 1s  forwards');
        for (var i = 0; i <= leng.length; i++) {
          leng.eq(i).find('.line-active').css('animation', 'line' + Number(i + 1) + ' 2s forwards')
        }
      } else {
        $('#dowebok .section .page2 .line_group >div .line .line-active>div').css('animation', '');
        for (var i = 0; i <= leng.length; i++) {
          leng.eq(i).find('.line-active').css('animation', '')
        }
      }
    }
  });


  //项目展示切换按钮
  $('.btn-group span').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($('.btn-group span').eq(0).hasClass('active')) {
      $('.show').css('transform', 'translateX(0%)')
    } else if ($('.btn-group span').eq(1).hasClass('active')) {
      $('.show').css('transform', 'translateX(-50%)')
    }
  });

  //图片hover效果
  $('#dowebok .section .page3 .main>.show>div').hover(function () {
    $(this).children('.backgroundImg').css('background-position', 'center bottom')
  }, function () {
    $(this).children('.backgroundImg').css('background-position', 'center top')
  });

  //第三屏模态框效果
  $('.btn-group button').click(function () {
    var index = $(this).parents('.box').index();
    $('.model_shadow').eq(index).slideDown('500')
  });
  $('.model_shadow').click(function () {
    $(this).slideUp('500')
  })

  $(document).on("visibilitychange", function () {
    // console.log(document.visibilityState);
    // console.log(document.hidden);
    if (document.hidden) {
      $(document).prop('title', '求职中~~')
    } else {
      $(document).prop('title', '前端老刘')
    }
  });
});
