(function () {
  var base = 50;
  $.each($('.photos'), function (i, photoSet) {
    $.each($(photoSet).children(), function (j, item) {
      var img = new Image();
      img.src = $(item).find('img').attr('src');
      img.onload = function () {
        var w = parseFloat(img.width);
        var h = parseFloat(img.height);
        $(item).css('width', w * base / h + 'px');
        $(item).css('flex-grow', w * base / h);
        $(item).find('div').css('padding-top', h / w * 100 + '%');
      };
    });
  });
})();