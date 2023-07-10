$(".topstory-slider").slick({
  autoplay: !0,
  autoplaySpeed: 5e3,
  slidesToShow: 1,
  pauseOnHover: !1,
  arrows: !1,
}),
  $("#topstory-slider-control .slick-arrow").on("click", function () {
    return $(".topstory-slider").slick($(this).data("method")), !1;
  }),
  $(".topstory-slider").on("init reInit afterChange", function (o, t, r, i) {
    var s = (r || 0) + 1;
    var paginator = $("#topstory-slider-paginator");
    paginator.html(
      "<span>" +
        s.toString()[0] +
        "</span>" + ' ' +
        s.toString().substring(1) +
        " / " +
        t.slideCount
    );
  });
