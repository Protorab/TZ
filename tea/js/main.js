$(document).ready(function () {
    $(".telephone").inputmask({
      mask: "+375 (99) 999 99 99",
      clearIncomplete: true,
      greedy: false
    });
});