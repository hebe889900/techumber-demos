window.emoticonx = (function () {
  var b = function (m) {
    var j = m || {}, l = j.emoRange || "#comments p, div.emoWrap",
      k = j.putEmoAbove || "iframe#comment-editor",
      h = j.topText || "Click to see the code!",
      a = j.emoMessage || "To insert emoticon you must added at least one space before the code.";
    $(k).before('<div style="text-align:center" class="emoWrap"> :) :)) ;(( :-) =)) ;( ;-( :d :-d @-) :p :o :&gt;) (o) [-( :-? (p) :-s (m) 8-) :-t :-b  b-( :-# =p~ $-) (b) (f) x-) (k) (h) (c) cheer <br/><b>' + h + "</b><br/>" + a + "</div>");
    var i = function (c, d, e) {
      $(l).each(function () {
        $(this).html($(this).html().replace(/<br>:/g, "<br> :").replace(/<br>;/g, "<br> ;").replace(/<br>=/g, "<br> =").replace(/<br>\^/g, "<br> ^").replace(c, " <img style='max-height:24px' src='" + d + "' class='emo delayLoad' alt='" + e + "' />"))
      })
    };
    i(/\s:\)\)+/g, "http://1.bp.blogspot.com/-vskoNsBdihs/UYl9p6jAksI/AAAAAAAAI-4/AGjSDvooObE/s000/03.gif", ":))");
    i(/\s;\(\(+/g, "http://1.bp.blogspot.com/-Sn3E_SD_djY/UYl9qrrQiQI/AAAAAAAAI_A/_N2WJEaUfmg/s000/06.gif", ";((");
    i(/\s:\)+/g, "http://4.bp.blogspot.com/-TGmeb01UJ_c/UYl9svtOviI/AAAAAAAAI_I/7WPXi6Jbs4I/s000/01.gif", ":)");
    i(/\s:-\)+/g, "http://3.bp.blogspot.com/-ULVPkGfieac/UYl9toWKMYI/AAAAAAAAI_Q/GT6gCuUl2qI/s000/02.gif", ":-)");
    i(/\s=\)\)+/g, "http://3.bp.blogspot.com/-EAVc16Jn4Go/UYl9ubVye3I/AAAAAAAAI_Y/xeydJxWl_o4/s000/03a.gif", "=))");
    i(/\s;\(+/g, "http://2.bp.blogspot.com/-62Hie_NrpyY/UYl9vIW3_jI/AAAAAAAAI_c/WHnIbytoL74/s000/04.gif", ";(");
    i(/\s;-\(+/g, "http://3.bp.blogspot.com/-0XzlL89lNOs/UYl9v1pHnNI/AAAAAAAAI_o/jEOrGxiOzgs/s000/05.gif", ";-(");
    i(/\s:d/ig, "http://3.bp.blogspot.com/-aJrUgcokHYo/UYl9wn82PII/AAAAAAAAI_s/U3tvbU3WZHk/s000/7.gif", ":d");
    i(/\s:-d/ig, "http://3.bp.blogspot.com/-qZXP1UjLBrs/UYl9xXY0-uI/AAAAAAAAI_4/AW62-YHaVtQ/s000/8.gif", ":-d");
    i(/\s@-\)+/g, "http://1.bp.blogspot.com/--KSLxLC05kc/UYl9xz1LoDI/AAAAAAAAJAA/HUm36rjGAgA/s000/09.gif", "@-)");
    i(/\s:p/ig, "https://lh5.googleusercontent.com/-nkyzLkHUPg8/T2WEYdFqFxI/AAAAAAAACaQ/Mu1yPq91yuc/s36/10.gif", ":p");
    i(/\s:o/ig, "http://2.bp.blogspot.com/-zI0pi-UlZAI/UYl94UjJ96I/AAAAAAAAJAY/dpqr_RlUI4A/s000/11.gif", ":o");
    i(/\s:&gt;\)+/g, "http://1.bp.blogspot.com/-7UID-hPDOdg/UYl946HKGAI/AAAAAAAAJAg/CkIHp704FOk/s000/12.gif", ":&gt;)");
    i(/\s\(o\)+/ig, "http://2.bp.blogspot.com/-AUg0GgtAPjc/UYl95tdaRUI/AAAAAAAAJAo/rNPxsDIROkQ/s000/13.gif", "(o)");
    i(/\s\[-\(+/g, "http://4.bp.blogspot.com/-wZJ_dnZta7c/UYl965ryHYI/AAAAAAAAJAw/Dj5XZi0L0OQ/s000/14.gif", "[-(");
    i(/\s:-\?/g, "http://1.bp.blogspot.com/-exG8PIDVr4c/UYl97cOwu1I/AAAAAAAAJA0/IgPtwcaq8Lw/s000/15.gif", ":-?");
    i(/\s\(p\)+/ig, "http://3.bp.blogspot.com/-eOh8-uoT-Us/UYl98QWLz1I/AAAAAAAAJBA/5liDPytF5Ec/s000/16.gif", "(p)");
    i(/\s:-s/ig, "http://2.bp.blogspot.com/-4p9OCcW73YI/UYl99FWvoGI/AAAAAAAAJBI/J8WhdMMtmpo/s000/17.gif", ":-s");
    i(/\s\(m\)+/ig, "http://1.bp.blogspot.com/-g8uarPGC1OM/UYl99qymAPI/AAAAAAAAJBQ/fi62Dv1LWWY/s000/18.gif", "(m)");
    i(/\s8-\)+/ig, "http://1.bp.blogspot.com/-XlM_ZZcy2mw/UYl9-o17ChI/AAAAAAAAJBY/Z5w0AJG03G4/s000/19.gif", "8-)");
    i(/\s:-t/ig, "https://lh5.googleusercontent.com/-XCXdaCYaOGE/T2WEcmd15EI/AAAAAAAACbQ/Z5UyZCuX4Xo/s36/20.gif", ":-t");
    i(/\s:-b/ig, "http://1.bp.blogspot.com/-gBz7DccFllo/UYl-FIxKubI/AAAAAAAAJBg/TaHmbNeQaSA/s000/21.gif", ":-b");
    i(/\sb-\(+/ig, "http://3.bp.blogspot.com/-r72Ve93v7fk/UYl-HZTfYoI/AAAAAAAAJBk/5X6dcDUHglQ/s000/22.gif", "b-(");
    i(/\s:-#/ig, "http://3.bp.blogspot.com/-K7pkFrjRAmg/UYl-IWl_fJI/AAAAAAAAJBs/J1vN-M1DjdQ/s000/23.gif", ":-#");
    i(/\s=p~/ig, "https://lh3.googleusercontent.com/-H8izCFTaHFE/T2b39mmu2NI/AAAAAAAACkM/k4bDdFe301U/s36/24.gif", "=p~");
    i(/\s\$-\)+/ig, "http://3.bp.blogspot.com/-hA0HV7ElBkQ/UYl-PEKf8bI/AAAAAAAAJB0/jYLk8xsqIco/s000/25.gif", "$-)");
    i(/\s\(b\)+/ig, "http://1.bp.blogspot.com/-P9IkONN3z6k/UYl-RFrowNI/AAAAAAAAJB8/fObV-YnsS5c/s000/26.gif", "(b)");
    i(/\s\(f\)+/ig, "http://2.bp.blogspot.com/-d-ZlL4bONl4/UYl-SGf6FkI/AAAAAAAAJCE/WodYuWhK7k8/s000/27.gif'", "(f)");
    i(/\sx-\)+/ig, "http://1.bp.blogspot.com/-zyFSdisLns4/UYl-TlBqMTI/AAAAAAAAJCM/d6rty53PcKs/s000/28.gif", "x-)");
    i(/\s\(k\)+/ig, "http://4.bp.blogspot.com/-97ekotXWOkc/UYl-Ua4McKI/AAAAAAAAJCY/4G-GlZnXRnc/s000/29.gif", "(k)");
    i(/\s\(h\)+/ig, "http://1.bp.blogspot.com/-_fAEeZUGfkQ/UYl-VelfqAI/AAAAAAAAJCg/R9hGE34mtDI/s000/30.gif", "(h)");
    i(/\s\(c\)+/ig, "http://4.bp.blogspot.com/-mQl5GvTz7QY/UYl-VywKl8I/AAAAAAAAJCo/aRQxd9uI4xI/s000/31.gif", "(c)");
    i(/\scheer/ig, "https://lh5.googleusercontent.com/-9TYEg93ImUM/T2WEjvuhxTI/AAAAAAAACc0/KQRBXuuV_Yg/s36/32.gif", "cheer");
    $("div.emoWrap").one("click", function () {
      if (a) {
        alert(a)
      }
    });
    $(".emo").css("cursor", "pointer").on("click", function (c) {
      $(".emoKey").remove();
      $(this).after('<input class="emoKey" type="text" size="' + this.alt.length + '" value=" ' + this.alt + '" />');
      $(".emoKey").trigger("select");
      c.stopPropagation()
    });
    $(".emoKey").on("click", function () {
      $(this).focus().select()
    });
    $(document).on("click", function () {
      $(".emoKey").remove()
    })
  };
  return function (a) {
    b(a)
  }
})();