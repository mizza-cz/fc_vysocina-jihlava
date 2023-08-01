$(function () {
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab("show");

  $("body").on("click", ".nav-tabs a", function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).tab("show");
  });
});
