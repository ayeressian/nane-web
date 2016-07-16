(function () {
  'use strict';
  var $document = $(document), $window = $(window);

  var windowMaxScrollTop = $document.height() - $window.height();

  $.get('config.json', function (config) {
    var rightToLeft = config.scrollConfig.rightToLeft;
    rightToLeft.forEach(function(item) {
      var horizontalElem = $('<div>').addClass('horizontal-scroll-band');
      horizontalElem.css('top', item.top + 'vh');
      horizontalElem.css('height', item.height + 'vh');
      var innerHorizontalElem = $('<div>');
      innerHorizontalElem.css('width', item.width + 'vw');
      var imgaes = item.images;
      imgaes.forEach(function(image) {
        var imgElem = $('<img>').attr('src', 'img/scrollImages/' + image.name);
        imgElem.css('left', image.left + 'vw');
        innerHorizontalElem.append(imgElem);
      });
      horizontalElem.append(innerHorizontalElem);
      horizontalElem.prependTo('body');

      var horizontalTopMaxScrollLeft = horizontalElem[0].scrollWidth - horizontalElem.width();
      var htRatio = windowMaxScrollTop / horizontalTopMaxScrollLeft;

      $window.resize(function () {
        horizontalTopMaxScrollLeft = horizontalElem[0].scrollWidth - horizontalElem.width();
      });
      $window.scroll(function () {
        horizontalElem.scrollLeft($document.scrollTop() / htRatio);
      });
    });
    var leftToRight = config.scrollConfig.leftToRight;
    leftToRight.forEach(function(item) {
      var horizontalElem = $('<div>').addClass('horizontal-scroll-band');
      horizontalElem.css('top', item.top + 'vh');
      horizontalElem.css('height', item.height + 'vh');
      var innerHorizontalElem = $('<div>');
      innerHorizontalElem.css('width', item.width + 'vw');
      var imgaes = item.images;
      imgaes.forEach(function(image) {
        var imgElem = $('<img>').attr('src', 'img/scrollImages/' + image.name);
        imgElem.css('right', image.right + 'vw');
        innerHorizontalElem.append(imgElem);
      });
      horizontalElem.append(innerHorizontalElem);
      horizontalElem.prependTo('body');

      var horizontalTopMaxScrollLeft = horizontalElem[0].scrollWidth - horizontalElem.width();
      var htRatio = windowMaxScrollTop / horizontalTopMaxScrollLeft;

      $window.resize(function () {
        horizontalTopMaxScrollLeft = horizontalElem[0].scrollWidth - horizontalElem.width();
      });
      $window.scroll(function () {
        horizontalElem.scrollLeft($document.scrollTop() / htRatio);
      });
    });
  });

  /*var verticalLeft = $('#vertical-left'),
    verticalRight = $('#vertical-right'),
    horizontalTop = $('#horizontal-top'),
    horizontalBottom = $('#horizontal-bottom'),
    $document = $(document),
    $window = $(window);

  var windowMaxScrollTop = $document.height() - $window.height();

  var verticalLeftMaxScrollTop = verticalLeft[0].scrollHeight - verticalLeft.height();
  var verticalRightMaxScrollTop = verticalRight[0].scrollHeight - verticalRight.height();
  var horizontalTopMaxScrollLeft = horizontalTop[0].scrollWidth - horizontalTop.width();


  verticalLeft.scrollTop(verticalLeftMaxScrollTop);

  var vlRatio = windowMaxScrollTop / verticalLeftMaxScrollTop;
  var vrRatio = windowMaxScrollTop / verticalRightMaxScrollTop;
  var htRatio = windowMaxScrollTop / horizontalTopMaxScrollLeft;

  $window.resize(function () {
    verticalLeftMaxScrollTop = verticalLeft[0].scrollHeight - verticalLeft.height();
    verticalRightMaxScrollTop = verticalRight[0].scrollHeight - verticalRight.height();
    horizontalTopMaxScrollLeft = horizontalTop[0].scrollWidth - horizontalTop.width();
  });
  $window.scroll(function () {
    verticalLeft.scrollTop(verticalLeftMaxScrollTop - $document.scrollTop() / vlRatio);
    verticalRight.scrollTop($document.scrollTop() / vrRatio);
    horizontalTop.scrollLeft($document.scrollTop() / htRatio);

  });*/
})();
