/* eslint-disable */
!(function (n) {
  var e = n.document

  var t = e.documentElement

  var i = 720

  var d = i / 100

  var o = 'orientationchange' in n ? 'orientationchange' : 'resize'

  var a = function () {
    var n = t.clientWidth || 320; n > 720 && (n = 720)
    t.style.fontSize = n / d + 'px'
  }
  e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener('DOMContentLoaded', a, !1))
}(window))
