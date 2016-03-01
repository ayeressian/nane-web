(function() {
  'use strict';
  var verticalLeft = $('#vertical-left'),
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

  $window.resize(function() {
    verticalLeftMaxScrollTop = verticalLeft[0].scrollHeight - verticalLeft.height();
    verticalRightMaxScrollTop = verticalRight[0].scrollHeight - verticalRight.height();
    horizontalTopMaxScrollLeft = horizontalTop[0].scrollWidth - horizontalTop.width();
  });
  $window.scroll(function(){
    verticalLeft.scrollTop(verticalLeftMaxScrollTop - $document.scrollTop() / vlRatio);
    verticalRight.scrollTop($document.scrollTop() / vrRatio);
    horizontalTop.scrollLeft($document.scrollTop() / htRatio);

  });
})();
