var pjax = new Pjax({
  // 在页面进行 PJAX 时需要被替换的元素或容器，一条一个 CSS 选择器，数组形式
  selectors: [
    "title",
    "meta[name=description]", // 如果是全部 meta 替换的话，只需要写 meta
    "main",
    ".content-area",
    "#comment",
    ".itp-index-content"
  ],
  cacheBust: false,
  scrollRestoration: true,
})
// 添加重载，其实就是 PJAX 完成之后的操作
document.addEventListener('pjax:complete', function (){
  // 需要重载的 JS 函数
});