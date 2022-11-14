var pjax = new Pjax({
  // 在页面进行 PJAX 时需要被替换的元素或容器，一条一个 CSS 选择器，数组形式
  selectors: [
    "title",
    "meta[name=description]", // 如果是全部 meta 替换的话，只需要写 meta
    "section.pjax-area",
    "div.itp-float-bar",
    "script[data-pjax]",
  ],
  cacheBust: false,
  scrollRestoration: true,
})
var Comment = document.querySelector("#comment");
document.addEventListener('pjax:send', function () {
  NProgress.start();
  NProgress.set(0.4);
  pjax.refresh(Comment);
})
// PJAX 完成之后的操作
document.addEventListener('pjax:complete', function () {
  // 重载 Background Image Lazyload
  $("div.lazy").lazyload();
  $("a.lazy").lazyload();
  //重载 代码高亮
  function loadscript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function () {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  loadscript('/js/highlight.min.js', function () {
    hljs.initHighlighting();
  });
  NProgress.set(0.9);
  NProgress.done();
});

