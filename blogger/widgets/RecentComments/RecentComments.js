window.RecentComment = (function () {
  var a = function (m) {
    var e = m || {}, i = e.url_blog || "",
      b = e.id_containrc || "#rcentcomnets",
      j = e.numComments || 5,
      h = e.avatarSize || 50,
      f = e.characters || 100,
      d = e.loadingClass || "loadingxx",
      l = e.defaultAvatar || "http://1.bp.blogspot.com/-UEDpXinNyKQ/UYl-dRjojxI/AAAAAAAAJC8/s-X4fHE4Ln8/s000/user-anonymous-icon.png",
      k = e.maxfeeds || 50,
      g = e.MonthNames || ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      c = e.adminBlog || "";
    $(b).addClass(d);
    $.get((i === "" ? window.location.protocol + "//" + window.location.host : i) + "/feeds/comments/default?alt=json-in-script&orderby=published", function (G) {
      var o, n = G.feed.entry;
      if (n !== undefined) {
        o = "<ul class='rcomnetxx'>";
        ntotal = 0;
        for (var F = 0; F < k; F++) {
          var v, H, K, t, L, s, z;
          if (F == n.length) {
            break
          }
          if (ntotal >= j) {
            break
          }
          var q = n[F];
          for (var B = 0; B < q.link.length; B++) {
            if (q.link[B].rel == "alternate") {
              v = q.link[B].href
            }
          }
          for (var J = 0; J < q.author.length; J++) {
            H = q.author[J].name.$t;
            K = q.author[J].gd$image.src
          }
          if (H != c && ntotal < j) {
            ntotal++;
            o += "<li>";
            if (K == "http://img1.blogblog.com/img/blank.gif") {
              t = l
            } else {
              t = K.replace(/\/s[0-9]+(\-c|\/)/, "/s" + h + "$1")
            }
            s = (q.author[0].uri) ? q.author[0].uri.$t : "#nope";
            o += '<a target="_blank" class="kmtimg" rel="nofollow" href="' + s + '"><img async src="' + t + '"  title="' + H + '" alt="' + H + '" style="width:' + h + "px;height:" + h + 'px;display:block"/></a>';
            var y = v.lastIndexOf("/") + 1,
              A = v.lastIndexOf("."),
              M = v.split("-").join(" ").substring(y, A) + "...";
            L = q.published.$t.substring(0, 10);
            var x = L.substring(0, 4),
              C = L.substring(5, 7),
              I = L.substring(8, 10),
              D = g[parseInt(C, 10) - 1],
              w = q.published.$t.substring(11, 16),
              r = w.substring(0, 2),
              E = w.substring(2, 5);
            if (r < 12) {
              z = "AM"
            } else {
              z = "PM"
            } if (r === 0) {
              r = 12
            }
            if (r > 12) {
              r = r - 12
            }
            o += '<div class="ketkomt"><strong><a title="' + M + '" target="_blank" rel="nofollow" href="' + v + '">' + H + '</a></strong> <span class="date"><span class="dd">' + I + '</span> <span class="dm">' + D + '</span> <span class="dy">' + x + '</span> <span class="timex">' + r + E + " " + z + "</span></span></div>";
            var u = q.content.$t;
            var p = u.replace(/(<([^>]+)>)/gi, "");
            if (p !== "" && p.length > f) {
              p = p.substring(0, f);
              p += "..."
            } else {
              p = p
            }
            o += "<p>" + p + "</p>";
            o += "</li>"
          }
        }
        o += "</ul>";
        $(b).html(o).removeClass(d)
      } else {
        $(b).html("<span>No result!</span>").removeClass(d)
      }
    }, "jsonp")
  };
  return function (b) {
    a(b)
  }
})();