$(function() {
    $("#slider-range").slider({
        step: 5,
        range: !0,
        min: 0,
        max: 700,
        values: [100, 500],
        slide: function(n, a) {
            $("#amount-1").val(a.values[0]),
            $("#amount-2").val(a.values[1])
        }
    }),
    $("#amount-1").val($("#slider-range").slider("values", 0)),
    $("#amount-2").val($("#slider-range").slider("values", 1)),
    $("input#amount-1").change(function() {
        var n = $("input#amount-1").val()
          , a = $("input#amount-2").val();
        parseInt(n) > parseInt(a) && (n = a,
        $("input#amount-1").val(n)),
        $("#slider-range").slider("values", 0, n)
    }),
    $("input#amount-2").change(function() {
        var n = $("input#amount-1").val()
          , a = $("input#amount-2").val();
        parseInt(n) > parseInt(a) && (a = n,
        $("input#amount-2").val(a)),
        $("#slider-range").slider("values", 1, a)
    }),
    jQuery("#amount-1, #amount-2").keypress(function(n) {
        var a, e;
        if (!n)
            var n = window.event;
        return n.keyCode ? a = n.keyCode : n.which && (a = n.which),
        null == a || 0 == a || 8 == a || 13 == a || 9 == a || 46 == a || 37 == a || 39 == a ? !0 : (e = String.fromCharCode(a),
        /\d/.test(e) ? void 0 : !1)
    })
})();
