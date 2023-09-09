window._iconfont_svg_string_3849573 = '<svg><symbol id="icon-school" viewBox="0 0 1024 1024"><path d="M994 782a30 30 0 0 1 30 30v182a30 30 0 0 1-30 30H30A30 30 0 0 1 0 994V812a30 30 0 0 1 30-30h92V540H92a30 30 0 0 1-30-30v-120c0-12 7.152-22.848 18.184-27.576L482 190.216V30A30 30 0 0 1 512 0h180a30 30 0 0 1 30 30c0 82.712-67.288 150-150 150h-30v10.184L945.768 362.4a30 30 0 0 1 18.232 27.592v120a30 30 0 0 1-30 30H904v242h90zM542 59.8V120h30c39.12 0 72.48-25.28 84.864-60.2H542zM512 420a30 30 0 1 1 0-60 30 30 0 0 1 0 60z m120 0a30 30 0 1 1 0-60 30 30 0 0 1 0 60z m-240 0a30 30 0 1 1 0-60 30 30 0 0 1 0 60z m-270-10.216V480H904v-70.184L512.032 242.624 122 409.784zM844 540h-62v242h62V540z m-602 424v-122H60v122h182z m0-182V540h-60v242h60z m128.304 182l40.216-122H302v122h68.304z m63.176 0h157.04l-40.216-122h-76.608l-40.216 122z m48.52-182h60v-92A30.032 30.032 0 0 0 512 660a30.032 30.032 0 0 0-30 30v92z m240 182v-122H613.48l40.216 122h68.304z m0-182V540h-420v242h120v-92C422 640.376 462.376 600 512 600s90 40.376 90 90v92h120z m242 182v-122H782v122h182z" fill="#4A90E2" ></path></symbol></svg>',
  function (n) {
    var t = (t = document.getElementsByTagName("script"))[t.length - 1],
      e = t.getAttribute("data-injectcss"),
      t = t.getAttribute("data-disable-injectsvg");
    if (!t) {
      var o, i, a, c, d, s = function (t, e) {
        e.parentNode.insertBefore(t, e)
      };
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (t) {
          console && console.log(t)
        }
      }
      o = function () {
        var t, e = document.createElement("div");
        e.innerHTML = n._iconfont_svg_string_3849573, (e = e.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", e = e, (t = document.body).firstChild ? s(e, t.firstChild) : t.appendChild(e))
      }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(o, 0) : (i = function () {
        document.removeEventListener("DOMContentLoaded", i, !1), o()
      }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (a = o, c = n.document, d = !1, v(), c.onreadystatechange = function () {
        "complete" == c.readyState && (c.onreadystatechange = null, l())
      })
    }

    function l() {
      d || (d = !0, a())
    }

    function v() {
      try {
        c.documentElement.doScroll("left")
      } catch (t) {
        return void setTimeout(v, 50)
      }
      l()
    }
  }(window);
