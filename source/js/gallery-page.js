/*function getImageWidth(url, callback) {
  var img = new Image();
  img.src = url;
  if (img.complete) {
    callback(img.width, img.height);
  } else {
    img.onload = function () {
      callback(img.width, img.height);
    };
  }
}
function imgbox(obj, i) {
  var img_src = $(obj).find("img").attr('src');
  getImageWidth(img_src, function (w, h) {
    $(obj).find("i").css({ "padding-bottom": h / w * 100 + '%' })
    $(obj).css({ flexGrow: (w * 100) / h, flexBasis: (w * 240) / h + "px" });
  })
}
var imgs = document.getElementById("img_wrap").getElementsByClassName("img_x");
for (let i = 0; i < imgs.length; i++) {
  imgbox(imgs[i]);
}*/