$(function() {
  var n = $("#pwd"), 
      o = $(".pwd-text"),
      e = $("#eye");
  n.on("input", function() {
    o.val(n.val())
  }),
  e.mouseover(function() {
    o.css("z-index", "10")
  }),
  e.mouseout(function() {
    o.css("z-index", "-10")
  })

});


