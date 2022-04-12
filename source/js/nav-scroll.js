//滚动影响appbar颜色
var whetherChange = 0;
var whetherChangeToTop = 0;
var ticking = false;
cover = 240

window.onscroll = function () {
  var howFar = document.documentElement.scrollTop || document.body.scrollTop;
  if (howFar > cover & whetherChange == 0) {
    $("#appbar-index").addClass("itp-appbar-color-pull-up");
    $("#column-toc").addClass("itp-toc-pull-up");
    whetherChange = 1;
  };
  if (howFar <= cover & whetherChange == 1) {
    $("#appbar-index").removeClass("itp-appbar-color-pull-up");
    $("#column-toc").removeClass("itp-toc-pull-up");
    whetherChange = 0;
  }
};