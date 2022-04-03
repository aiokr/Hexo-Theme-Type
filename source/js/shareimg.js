function share() {
  html2canvas(document.querySelector("#shareInfo"), {
    onrendered: function (canvas) {
      //添加属性
      canvas.setAttribute('id', 'shareCanvas');
    },
    width: 400,
    height: 600,
    useCORS: true,
    setTimeout: 15
  })
    .then(
      canvas => {
        document.getElementById("shareDialogImg").appendChild(canvas)
        var imgUrl = canvas.toDataURL("image/png"); // 将canvas转换成img的src流
        console.log("base64-data:", imgUrl);
      })
    .then(
      new mdui.Dialog('#shareDialogImg').open);
}
var Download = document.getElementById("Download");
Download.onclick = function () {
  var oCanvas = document.getElementById("shareCanvas");
  var img_data1 = Canvas2Image.saveAsPNG(oCanvas, true).getAttribute('src');
  saveFile(img_data1, 'abc');
}