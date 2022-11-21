/** @format */

var appDaily = {
  baiduSearch: function (words) {
    var key =
      'site:' + window.location.host + '%20' + words.replace(/\s/g, '%20');
    var url = 'https://www.baidu.com/baidu?tn=baidu&ie=utf-8&word=';

    window.open(url + key, '_blank');
  },
  googleSearch: function (words) {
    var key =
      'site:' + window.location.host + '%20' + words.replace(/\s/g, '%20');
    var url = 'https://www.google.com/search?q=';

    window.open(url + key, '_blank');
  },
  submitSearch: function (search_engines) {
    var $ipt = document.getElementById('homeSearchInput');

    if (search_engines === 'baidu') {
      this.baiduSearch($ipt.value.trim());
    } else {
      this.googleSearch($ipt.value.trim());
    }
    return false;
    header;
  },
};
function scrollto(comment) {
  document.querySelector('#comment').scrollIntoView(true);
}

//点击底部弹出图层
function OpenToc() {
  $('#open_toc').click(function () {
    $('.itp-toc-layer').addClass('itp-float-layer-pull-up');
    $('.itp-float-layer-bg').removeClass('layer-bg-nodisplay');
  });
  $('#close_btn,#close_layer').click(function () {
    $('.itp-comment-layer,.itp-toc-layer').removeClass(
      'itp-float-layer-pull-up'
    );
    $('.itp-float-layer-bg').addClass('layer-bg-nodisplay');
  });
}

$('.itp-layer-toc-text').replaceWith(function () {
  return (
    "<div class ='itp-layer-toc-text' id='close_btn' style='color: #fff;'>" +
    this.innerHTML +
    '</div>'
  );
});

//滚动影响
var whetherChange = 0;
var whetherChangeToTop = 0;
var ticking = false;

cover = 240;
window.onscroll = function () {
  var howFar = document.documentElement.scrollTop || document.body.scrollTop;
  if ((howFar > cover) & (whetherChange == 0)) {
    $('#column-toc').addClass('itp-toc-pull-up'); //滚动影响toc菜单透明度
    whetherChange = 1;
  }
  if ((howFar <= cover) & (whetherChange == 1)) {
    $('#column-toc').removeClass('itp-toc-pull-up'); //滚动影响toc菜单透明度
    whetherChange = 0;
  }
};

m3righttop = 470;
window.onscroll = function () {
  var howFar = document.documentElement.scrollTop || document.body.scrollTop;
  if ((howFar > m3righttop) & (whetherChange == 0)) {
    $('#column-toc-m3').removeClass('itp-toc-m3-sidetop'); //m3 样式中，滚动影响toc菜单定位方式
    whetherChange = 1;
  }
  if ((howFar <= m3righttop) & (whetherChange == 1)) {
    $('#column-toc-m3').addClass('itp-toc-m3-sidetop'); //m3 样式中，滚动影响toc菜单定位方式
    whetherChange = 0;
  }
};

/*

$(".toc li").replaceWith(function () {
  return "<li class='mdui-menu-item'>" + this.innerHTML + "</li>";
});

$(".toc-child li").replaceWith(function () {
  return "<li class='mdui-menu-item'>" + this.innerHTML + "</li>";
});

$(".itp-column-toc ol").replaceWith(function () {
  return "<ul class='mdui-menu mdui-menu-cascade itp-toc-menu' id='toc'>" + this.innerHTML + "</ul>";
});

*/

$('img')
  .not(
    'footer img,.drawer-img, .mdui-card-header-avatar,.itp-mag-content img,.itp-post-author-avatar img,.itp-post-gallery img,.vavatar img,.nofancy'
  )
  .each(function () {
    // $(this).attr("data-fancybox", "gallery"); 直接给img添加data-fancybox会导致点击图片后图片消失
    var element = document.createElement('a');
    $(element).attr('data-fancybox', 'gallery');
    $(element).attr('href', $(this).attr('src'));
    $(this).wrap(element);
  });

$('.itp-mag-content img').each(function () {
  // $(this).attr("data-fancybox", "gallery"); 直接给img添加data-fancybox会导致点击图片后图片消失
  var element = document.createElement('div');
  $(element).attr('class', 'itp-mag-img');
  $(this).wrap(element);
});

//首次加载首页时，执行的脚本
window.onload = function () {
  $('div.lazy').lazyload();
  $('a.lazy').lazyload();
};

console.log(
  `${'\n'} %c  Hexo-Theme-Type  %c  https://github.com/aiokr/hexo-theme-type  ${'\n'}`,
  'color: #fff; background: #030307; padding:5px 0;',
  'color: #fff; background: #71afdd; padding:5px 0;'
);
