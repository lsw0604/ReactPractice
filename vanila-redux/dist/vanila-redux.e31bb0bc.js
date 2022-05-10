// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/immer/dist/immer.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPatches = exports.Immer = void 0;
exports.castDraft = K;
exports.castImmutable = $;
exports.createDraft = void 0;
exports.current = D;
exports.default = void 0;
exports.enableAllPlugins = J;
exports.enableES5 = N;
exports.enableMapSet = C;
exports.enablePatches = T;
exports.finishDraft = void 0;
exports.freeze = d;
exports.immerable = void 0;
exports.isDraft = r;
exports.isDraftable = t;
exports.nothing = void 0;
exports.original = e;
exports.setUseProxies = exports.setAutoFreeze = exports.produceWithPatches = exports.produce = void 0;

function n(n) {
  for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) t[e - 1] = arguments[e];

  if ("production" !== "development") {
    var i = Y[n],
        o = i ? "function" == typeof i ? i.apply(null, t) : i : "unknown error nr: " + n;
    throw Error("[Immer] " + o);
  }

  throw Error("[Immer] minified error nr: " + n + (t.length ? " " + t.map(function (n) {
    return "'" + n + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}

function r(n) {
  return !!n && !!n[Q];
}

function t(n) {
  return !!n && (function (n) {
    if (!n || "object" != typeof n) return !1;
    var r = Object.getPrototypeOf(n);
    if (null === r) return !0;
    var t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
    return t === Object || "function" == typeof t && Function.toString.call(t) === Z;
  }(n) || Array.isArray(n) || !!n[L] || !!n.constructor[L] || s(n) || v(n));
}

function e(t) {
  return r(t) || n(23, t), t[Q].t;
}

function i(n, r, t) {
  void 0 === t && (t = !1), 0 === o(n) ? (t ? Object.keys : nn)(n).forEach(function (e) {
    t && "symbol" == typeof e || r(e, n[e], n);
  }) : n.forEach(function (t, e) {
    return r(e, t, n);
  });
}

function o(n) {
  var r = n[Q];
  return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(n) ? 1 : s(n) ? 2 : v(n) ? 3 : 0;
}

function u(n, r) {
  return 2 === o(n) ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
}

function a(n, r) {
  return 2 === o(n) ? n.get(r) : n[r];
}

function f(n, r, t) {
  var e = o(n);
  2 === e ? n.set(r, t) : 3 === e ? (n.delete(r), n.add(t)) : n[r] = t;
}

function c(n, r) {
  return n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r;
}

function s(n) {
  return X && n instanceof Map;
}

function v(n) {
  return q && n instanceof Set;
}

function p(n) {
  return n.o || n.t;
}

function l(n) {
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  var r = rn(n);
  delete r[Q];

  for (var t = nn(r), e = 0; e < t.length; e++) {
    var i = t[e],
        o = r[i];
    !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[i] = {
      configurable: !0,
      writable: !0,
      enumerable: o.enumerable,
      value: n[i]
    });
  }

  return Object.create(Object.getPrototypeOf(n), r);
}

function d(n, e) {
  return void 0 === e && (e = !1), y(n) || r(n) || !t(n) ? n : (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h), Object.freeze(n), e && i(n, function (n, r) {
    return d(r, !0);
  }, !0), n);
}

function h() {
  n(2);
}

function y(n) {
  return null == n || "object" != typeof n || Object.isFrozen(n);
}

function b(r) {
  var t = tn[r];
  return t || n(18, r), t;
}

function m(n, r) {
  tn[n] || (tn[n] = r);
}

function _() {
  return "production" === "development" || U || n(0), U;
}

function j(n, r) {
  r && (b("Patches"), n.u = [], n.s = [], n.v = r);
}

function O(n) {
  g(n), n.p.forEach(S), n.p = null;
}

function g(n) {
  n === U && (U = n.l);
}

function w(n) {
  return U = {
    p: [],
    l: U,
    h: n,
    m: !0,
    _: 0
  };
}

function S(n) {
  var r = n[Q];
  0 === r.i || 1 === r.i ? r.j() : r.O = !0;
}

function P(r, e) {
  e._ = e.p.length;
  var i = e.p[0],
      o = void 0 !== r && r !== i;
  return e.h.g || b("ES5").S(e, r, o), o ? (i[Q].P && (O(e), n(4)), t(r) && (r = M(e, r), e.l || x(e, r)), e.u && b("Patches").M(i[Q].t, r, e.u, e.s)) : r = M(e, i, []), O(e), e.u && e.v(e.u, e.s), r !== H ? r : void 0;
}

function M(n, r, t) {
  if (y(r)) return r;
  var e = r[Q];
  if (!e) return i(r, function (i, o) {
    return A(n, e, r, i, o, t);
  }, !0), r;
  if (e.A !== n) return r;
  if (!e.P) return x(n, e.t, !0), e.t;

  if (!e.I) {
    e.I = !0, e.A._--;
    var o = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o;
    i(3 === e.i ? new Set(o) : o, function (r, i) {
      return A(n, e, o, r, i, t);
    }), x(n, o, !1), t && n.u && b("Patches").R(e, t, n.u, n.s);
  }

  return e.o;
}

function A(e, i, o, a, c, s) {
  if ("production" !== "development" && c === o && n(5), r(c)) {
    var v = M(e, c, s && i && 3 !== i.i && !u(i.D, a) ? s.concat(a) : void 0);
    if (f(o, a, v), !r(v)) return;
    e.m = !1;
  }

  if (t(c) && !y(c)) {
    if (!e.h.F && e._ < 1) return;
    M(e, c), i && i.A.l || x(e, c);
  }
}

function x(n, r, t) {
  void 0 === t && (t = !1), n.h.F && n.m && d(r, t);
}

function z(n, r) {
  var t = n[Q];
  return (t ? p(t) : n)[r];
}

function I(n, r) {
  if (r in n) for (var t = Object.getPrototypeOf(n); t;) {
    var e = Object.getOwnPropertyDescriptor(t, r);
    if (e) return e;
    t = Object.getPrototypeOf(t);
  }
}

function k(n) {
  n.P || (n.P = !0, n.l && k(n.l));
}

function E(n) {
  n.o || (n.o = l(n.t));
}

function R(n, r, t) {
  var e = s(r) ? b("MapSet").N(r, t) : v(r) ? b("MapSet").T(r, t) : n.g ? function (n, r) {
    var t = Array.isArray(n),
        e = {
      i: t ? 1 : 0,
      A: r ? r.A : _(),
      P: !1,
      I: !1,
      D: {},
      l: r,
      t: n,
      k: null,
      o: null,
      j: null,
      C: !1
    },
        i = e,
        o = en;
    t && (i = [e], o = on);
    var u = Proxy.revocable(i, o),
        a = u.revoke,
        f = u.proxy;
    return e.k = f, e.j = a, f;
  }(r, t) : b("ES5").J(r, t);
  return (t ? t.A : _()).p.push(e), e;
}

function D(e) {
  return r(e) || n(22, e), function n(r) {
    if (!t(r)) return r;
    var e,
        u = r[Q],
        c = o(r);

    if (u) {
      if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
      u.I = !0, e = F(r, c), u.I = !1;
    } else e = F(r, c);

    return i(e, function (r, t) {
      u && a(u.t, r) === t || f(e, r, n(t));
    }), 3 === c ? new Set(e) : e;
  }(e);
}

function F(n, r) {
  switch (r) {
    case 2:
      return new Map(n);

    case 3:
      return Array.from(n);
  }

  return l(n);
}

function N() {
  function t(n, r) {
    var t = s[n];
    return t ? t.enumerable = r : s[n] = t = {
      configurable: !0,
      enumerable: r,
      get: function () {
        var r = this[Q];
        return "production" !== "development" && f(r), en.get(r, n);
      },
      set: function (r) {
        var t = this[Q];
        "production" !== "development" && f(t), en.set(t, n, r);
      }
    }, t;
  }

  function e(n) {
    for (var r = n.length - 1; r >= 0; r--) {
      var t = n[r][Q];
      if (!t.P) switch (t.i) {
        case 5:
          a(t) && k(t);
          break;

        case 4:
          o(t) && k(t);
      }
    }
  }

  function o(n) {
    for (var r = n.t, t = n.k, e = nn(t), i = e.length - 1; i >= 0; i--) {
      var o = e[i];

      if (o !== Q) {
        var a = r[o];
        if (void 0 === a && !u(r, o)) return !0;
        var f = t[o],
            s = f && f[Q];
        if (s ? s.t !== a : !c(f, a)) return !0;
      }
    }

    var v = !!r[Q];
    return e.length !== nn(r).length + (v ? 0 : 1);
  }

  function a(n) {
    var r = n.k;
    if (r.length !== n.t.length) return !0;
    var t = Object.getOwnPropertyDescriptor(r, r.length - 1);
    if (t && !t.get) return !0;

    for (var e = 0; e < r.length; e++) if (!r.hasOwnProperty(e)) return !0;

    return !1;
  }

  function f(r) {
    r.O && n(3, JSON.stringify(p(r)));
  }

  var s = {};
  m("ES5", {
    J: function (n, r) {
      var e = Array.isArray(n),
          i = function (n, r) {
        if (n) {
          for (var e = Array(r.length), i = 0; i < r.length; i++) Object.defineProperty(e, "" + i, t(i, !0));

          return e;
        }

        var o = rn(r);
        delete o[Q];

        for (var u = nn(o), a = 0; a < u.length; a++) {
          var f = u[a];
          o[f] = t(f, n || !!o[f].enumerable);
        }

        return Object.create(Object.getPrototypeOf(r), o);
      }(e, n),
          o = {
        i: e ? 5 : 4,
        A: r ? r.A : _(),
        P: !1,
        I: !1,
        D: {},
        l: r,
        t: n,
        k: i,
        o: null,
        O: !1,
        C: !1
      };

      return Object.defineProperty(i, Q, {
        value: o,
        writable: !0
      }), i;
    },
    S: function (n, t, o) {
      o ? r(t) && t[Q].A === n && e(n.p) : (n.u && function n(r) {
        if (r && "object" == typeof r) {
          var t = r[Q];

          if (t) {
            var e = t.t,
                o = t.k,
                f = t.D,
                c = t.i;
            if (4 === c) i(o, function (r) {
              r !== Q && (void 0 !== e[r] || u(e, r) ? f[r] || n(o[r]) : (f[r] = !0, k(t)));
            }), i(e, function (n) {
              void 0 !== o[n] || u(o, n) || (f[n] = !1, k(t));
            });else if (5 === c) {
              if (a(t) && (k(t), f.length = !0), o.length < e.length) for (var s = o.length; s < e.length; s++) f[s] = !1;else for (var v = e.length; v < o.length; v++) f[v] = !0;

              for (var p = Math.min(o.length, e.length), l = 0; l < p; l++) o.hasOwnProperty(l) || (f[l] = !0), void 0 === f[l] && n(o[l]);
            }
          }
        }
      }(n.p[0]), e(n.p));
    },
    K: function (n) {
      return 4 === n.i ? o(n) : a(n);
    }
  });
}

function T() {
  function e(n) {
    if (!t(n)) return n;
    if (Array.isArray(n)) return n.map(e);
    if (s(n)) return new Map(Array.from(n.entries()).map(function (n) {
      return [n[0], e(n[1])];
    }));
    if (v(n)) return new Set(Array.from(n).map(e));
    var r = Object.create(Object.getPrototypeOf(n));

    for (var i in n) r[i] = e(n[i]);

    return u(n, L) && (r[L] = n[L]), r;
  }

  function f(n) {
    return r(n) ? e(n) : n;
  }

  var c = "add";
  m("Patches", {
    $: function (r, t) {
      return t.forEach(function (t) {
        for (var i = t.path, u = t.op, f = r, s = 0; s < i.length - 1; s++) {
          var v = o(f),
              p = "" + i[s];
          0 !== v && 1 !== v || "__proto__" !== p && "constructor" !== p || n(24), "function" == typeof f && "prototype" === p && n(24), "object" != typeof (f = a(f, p)) && n(15, i.join("/"));
        }

        var l = o(f),
            d = e(t.value),
            h = i[i.length - 1];

        switch (u) {
          case "replace":
            switch (l) {
              case 2:
                return f.set(h, d);

              case 3:
                n(16);

              default:
                return f[h] = d;
            }

          case c:
            switch (l) {
              case 1:
                return "-" === h ? f.push(d) : f.splice(h, 0, d);

              case 2:
                return f.set(h, d);

              case 3:
                return f.add(d);

              default:
                return f[h] = d;
            }

          case "remove":
            switch (l) {
              case 1:
                return f.splice(h, 1);

              case 2:
                return f.delete(h);

              case 3:
                return f.delete(t.value);

              default:
                return delete f[h];
            }

          default:
            n(17, u);
        }
      }), r;
    },
    R: function (n, r, t, e) {
      switch (n.i) {
        case 0:
        case 4:
        case 2:
          return function (n, r, t, e) {
            var o = n.t,
                s = n.o;
            i(n.D, function (n, i) {
              var v = a(o, n),
                  p = a(s, n),
                  l = i ? u(o, n) ? "replace" : c : "remove";

              if (v !== p || "replace" !== l) {
                var d = r.concat(n);
                t.push("remove" === l ? {
                  op: l,
                  path: d
                } : {
                  op: l,
                  path: d,
                  value: p
                }), e.push(l === c ? {
                  op: "remove",
                  path: d
                } : "remove" === l ? {
                  op: c,
                  path: d,
                  value: f(v)
                } : {
                  op: "replace",
                  path: d,
                  value: f(v)
                });
              }
            });
          }(n, r, t, e);

        case 5:
        case 1:
          return function (n, r, t, e) {
            var i = n.t,
                o = n.D,
                u = n.o;

            if (u.length < i.length) {
              var a = [u, i];
              i = a[0], u = a[1];
              var s = [e, t];
              t = s[0], e = s[1];
            }

            for (var v = 0; v < i.length; v++) if (o[v] && u[v] !== i[v]) {
              var p = r.concat([v]);
              t.push({
                op: "replace",
                path: p,
                value: f(u[v])
              }), e.push({
                op: "replace",
                path: p,
                value: f(i[v])
              });
            }

            for (var l = i.length; l < u.length; l++) {
              var d = r.concat([l]);
              t.push({
                op: c,
                path: d,
                value: f(u[l])
              });
            }

            i.length < u.length && e.push({
              op: "replace",
              path: r.concat(["length"]),
              value: i.length
            });
          }(n, r, t, e);

        case 3:
          return function (n, r, t, e) {
            var i = n.t,
                o = n.o,
                u = 0;
            i.forEach(function (n) {
              if (!o.has(n)) {
                var i = r.concat([u]);
                t.push({
                  op: "remove",
                  path: i,
                  value: n
                }), e.unshift({
                  op: c,
                  path: i,
                  value: n
                });
              }

              u++;
            }), u = 0, o.forEach(function (n) {
              if (!i.has(n)) {
                var o = r.concat([u]);
                t.push({
                  op: c,
                  path: o,
                  value: n
                }), e.unshift({
                  op: "remove",
                  path: o,
                  value: n
                });
              }

              u++;
            });
          }(n, r, t, e);
      }
    },
    M: function (n, r, t, e) {
      t.push({
        op: "replace",
        path: [],
        value: r === H ? void 0 : r
      }), e.push({
        op: "replace",
        path: [],
        value: n
      });
    }
  });
}

function C() {
  function r(n, r) {
    function t() {
      this.constructor = n;
    }

    a(n, r), n.prototype = (t.prototype = r.prototype, new t());
  }

  function e(n) {
    n.o || (n.D = new Map(), n.o = new Map(n.t));
  }

  function o(n) {
    n.o || (n.o = new Set(), n.t.forEach(function (r) {
      if (t(r)) {
        var e = R(n.A.h, r, n);
        n.p.set(r, e), n.o.add(e);
      } else n.o.add(r);
    }));
  }

  function u(r) {
    r.O && n(3, JSON.stringify(p(r)));
  }

  var a = function (n, r) {
    return (a = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (n, r) {
      n.__proto__ = r;
    } || function (n, r) {
      for (var t in r) r.hasOwnProperty(t) && (n[t] = r[t]);
    })(n, r);
  },
      f = function () {
    function n(n, r) {
      return this[Q] = {
        i: 2,
        l: r,
        A: r ? r.A : _(),
        P: !1,
        I: !1,
        o: void 0,
        D: void 0,
        t: n,
        k: this,
        C: !1,
        O: !1
      }, this;
    }

    r(n, Map);
    var o = n.prototype;
    return Object.defineProperty(o, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), o.has = function (n) {
      return p(this[Q]).has(n);
    }, o.set = function (n, r) {
      var t = this[Q];
      return u(t), p(t).has(n) && p(t).get(n) === r || (e(t), k(t), t.D.set(n, !0), t.o.set(n, r), t.D.set(n, !0)), this;
    }, o.delete = function (n) {
      if (!this.has(n)) return !1;
      var r = this[Q];
      return u(r), e(r), k(r), r.t.has(n) ? r.D.set(n, !1) : r.D.delete(n), r.o.delete(n), !0;
    }, o.clear = function () {
      var n = this[Q];
      u(n), p(n).size && (e(n), k(n), n.D = new Map(), i(n.t, function (r) {
        n.D.set(r, !1);
      }), n.o.clear());
    }, o.forEach = function (n, r) {
      var t = this;
      p(this[Q]).forEach(function (e, i) {
        n.call(r, t.get(i), i, t);
      });
    }, o.get = function (n) {
      var r = this[Q];
      u(r);
      var i = p(r).get(n);
      if (r.I || !t(i)) return i;
      if (i !== r.t.get(n)) return i;
      var o = R(r.A.h, i, r);
      return e(r), r.o.set(n, o), o;
    }, o.keys = function () {
      return p(this[Q]).keys();
    }, o.values = function () {
      var n,
          r = this,
          t = this.keys();
      return (n = {})[V] = function () {
        return r.values();
      }, n.next = function () {
        var n = t.next();
        return n.done ? n : {
          done: !1,
          value: r.get(n.value)
        };
      }, n;
    }, o.entries = function () {
      var n,
          r = this,
          t = this.keys();
      return (n = {})[V] = function () {
        return r.entries();
      }, n.next = function () {
        var n = t.next();
        if (n.done) return n;
        var e = r.get(n.value);
        return {
          done: !1,
          value: [n.value, e]
        };
      }, n;
    }, o[V] = function () {
      return this.entries();
    }, n;
  }(),
      c = function () {
    function n(n, r) {
      return this[Q] = {
        i: 3,
        l: r,
        A: r ? r.A : _(),
        P: !1,
        I: !1,
        o: void 0,
        t: n,
        k: this,
        p: new Map(),
        O: !1,
        C: !1
      }, this;
    }

    r(n, Set);
    var t = n.prototype;
    return Object.defineProperty(t, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), t.has = function (n) {
      var r = this[Q];
      return u(r), r.o ? !!r.o.has(n) || !(!r.p.has(n) || !r.o.has(r.p.get(n))) : r.t.has(n);
    }, t.add = function (n) {
      var r = this[Q];
      return u(r), this.has(n) || (o(r), k(r), r.o.add(n)), this;
    }, t.delete = function (n) {
      if (!this.has(n)) return !1;
      var r = this[Q];
      return u(r), o(r), k(r), r.o.delete(n) || !!r.p.has(n) && r.o.delete(r.p.get(n));
    }, t.clear = function () {
      var n = this[Q];
      u(n), p(n).size && (o(n), k(n), n.o.clear());
    }, t.values = function () {
      var n = this[Q];
      return u(n), o(n), n.o.values();
    }, t.entries = function () {
      var n = this[Q];
      return u(n), o(n), n.o.entries();
    }, t.keys = function () {
      return this.values();
    }, t[V] = function () {
      return this.values();
    }, t.forEach = function (n, r) {
      for (var t = this.values(), e = t.next(); !e.done;) n.call(r, e.value, e.value, this), e = t.next();
    }, n;
  }();

  m("MapSet", {
    N: function (n, r) {
      return new f(n, r);
    },
    T: function (n, r) {
      return new c(n, r);
    }
  });
}

function J() {
  N(), C(), T();
}

function K(n) {
  return n;
}

function $(n) {
  return n;
}

var G,
    U,
    W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
    X = "undefined" != typeof Map,
    q = "undefined" != typeof Set,
    B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
    H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G),
    L = W ? Symbol.for("immer-draftable") : "__$immer_draftable",
    Q = W ? Symbol.for("immer-state") : "__$immer_state",
    V = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator",
    Y = {
  0: "Illegal state",
  1: "Immer drafts cannot have computed properties",
  2: "This object has been frozen and should not be mutated",
  3: function (n) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
  },
  4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  5: "Immer forbids circular references",
  6: "The first or second argument to `produce` must be a function",
  7: "The third argument to `produce` must be a function or undefined",
  8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
  10: "The given draft is already finalized",
  11: "Object.defineProperty() cannot be used on an Immer draft",
  12: "Object.setPrototypeOf() cannot be used on an Immer draft",
  13: "Immer only supports deleting array indices",
  14: "Immer only supports setting array indices and the 'length' property",
  15: function (n) {
    return "Cannot apply patch, path doesn't resolve: " + n;
  },
  16: 'Sets cannot have "replace" patches.',
  17: function (n) {
    return "Unsupported patch operation: " + n;
  },
  18: function (n) {
    return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
  },
  20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
  21: function (n) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n + "'";
  },
  22: function (n) {
    return "'current' expects a draft, got: " + n;
  },
  23: function (n) {
    return "'original' expects a draft, got: " + n;
  },
  24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
},
    Z = "" + Object.prototype.constructor,
    nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n) {
  return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Object.getOwnPropertyNames,
    rn = Object.getOwnPropertyDescriptors || function (n) {
  var r = {};
  return nn(n).forEach(function (t) {
    r[t] = Object.getOwnPropertyDescriptor(n, t);
  }), r;
},
    tn = {},
    en = {
  get: function (n, r) {
    if (r === Q) return n;
    var e = p(n);
    if (!u(e, r)) return function (n, r, t) {
      var e,
          i = I(r, t);
      return i ? "value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
    }(n, e, r);
    var i = e[r];
    return n.I || !t(i) ? i : i === z(n.t, r) ? (E(n), n.o[r] = R(n.A.h, i, n)) : i;
  },
  has: function (n, r) {
    return r in p(n);
  },
  ownKeys: function (n) {
    return Reflect.ownKeys(p(n));
  },
  set: function (n, r, t) {
    var e = I(p(n), r);
    if (null == e ? void 0 : e.set) return e.set.call(n.k, t), !0;

    if (!n.P) {
      var i = z(p(n), r),
          o = null == i ? void 0 : i[Q];
      if (o && o.t === t) return n.o[r] = t, n.D[r] = !1, !0;
      if (c(t, i) && (void 0 !== t || u(n.t, r))) return !0;
      E(n), k(n);
    }

    return n.o[r] === t && "number" != typeof t && (void 0 !== t || r in n.o) || (n.o[r] = t, n.D[r] = !0, !0);
  },
  deleteProperty: function (n, r) {
    return void 0 !== z(n.t, r) || r in n.t ? (n.D[r] = !1, E(n), k(n)) : delete n.D[r], n.o && delete n.o[r], !0;
  },
  getOwnPropertyDescriptor: function (n, r) {
    var t = p(n),
        e = Reflect.getOwnPropertyDescriptor(t, r);
    return e ? {
      writable: !0,
      configurable: 1 !== n.i || "length" !== r,
      enumerable: e.enumerable,
      value: t[r]
    } : e;
  },
  defineProperty: function () {
    n(11);
  },
  getPrototypeOf: function (n) {
    return Object.getPrototypeOf(n.t);
  },
  setPrototypeOf: function () {
    n(12);
  }
},
    on = {};

exports.immerable = L;
exports.nothing = H;
i(en, function (n, r) {
  on[n] = function () {
    return arguments[0] = arguments[0][0], r.apply(this, arguments);
  };
}), on.deleteProperty = function (r, t) {
  return "production" !== "development" && isNaN(parseInt(t)) && n(13), on.set.call(this, r, t, void 0);
}, on.set = function (r, t, e) {
  return "production" !== "development" && "length" !== t && isNaN(parseInt(t)) && n(14), en.set.call(this, r[0], t, e, r[0]);
};

var un = function () {
  function e(r) {
    var e = this;
    this.g = B, this.F = !0, this.produce = function (r, i, o) {
      if ("function" == typeof r && "function" != typeof i) {
        var u = i;
        i = r;
        var a = e;
        return function (n) {
          var r = this;
          void 0 === n && (n = u);

          for (var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) e[o - 1] = arguments[o];

          return a.produce(n, function (n) {
            var t;
            return (t = i).call.apply(t, [r, n].concat(e));
          });
        };
      }

      var f;

      if ("function" != typeof i && n(6), void 0 !== o && "function" != typeof o && n(7), t(r)) {
        var c = w(e),
            s = R(e, r, void 0),
            v = !0;

        try {
          f = i(s), v = !1;
        } finally {
          v ? O(c) : g(c);
        }

        return "undefined" != typeof Promise && f instanceof Promise ? f.then(function (n) {
          return j(c, o), P(n, c);
        }, function (n) {
          throw O(c), n;
        }) : (j(c, o), P(f, c));
      }

      if (!r || "object" != typeof r) {
        if (void 0 === (f = i(r)) && (f = r), f === H && (f = void 0), e.F && d(f, !0), o) {
          var p = [],
              l = [];
          b("Patches").M(r, f, p, l), o(p, l);
        }

        return f;
      }

      n(21, r);
    }, this.produceWithPatches = function (n, r) {
      if ("function" == typeof n) return function (r) {
        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) i[o - 1] = arguments[o];

        return e.produceWithPatches(r, function (r) {
          return n.apply(void 0, [r].concat(i));
        });
      };
      var t,
          i,
          o = e.produce(n, r, function (n, r) {
        t = n, i = r;
      });
      return "undefined" != typeof Promise && o instanceof Promise ? o.then(function (n) {
        return [n, t, i];
      }) : [o, t, i];
    }, "boolean" == typeof (null == r ? void 0 : r.useProxies) && this.setUseProxies(r.useProxies), "boolean" == typeof (null == r ? void 0 : r.autoFreeze) && this.setAutoFreeze(r.autoFreeze);
  }

  var i = e.prototype;
  return i.createDraft = function (e) {
    t(e) || n(8), r(e) && (e = D(e));
    var i = w(this),
        o = R(this, e, void 0);
    return o[Q].C = !0, g(i), o;
  }, i.finishDraft = function (r, t) {
    var e = r && r[Q];
    "production" !== "development" && (e && e.C || n(9), e.I && n(10));
    var i = e.A;
    return j(i, t), P(void 0, i);
  }, i.setAutoFreeze = function (n) {
    this.F = n;
  }, i.setUseProxies = function (r) {
    r && !B && n(20), this.g = r;
  }, i.applyPatches = function (n, t) {
    var e;

    for (e = t.length - 1; e >= 0; e--) {
      var i = t[e];

      if (0 === i.path.length && "replace" === i.op) {
        n = i.value;
        break;
      }
    }

    e > -1 && (t = t.slice(e + 1));
    var o = b("Patches").$;
    return r(n) ? o(n, t) : this.produce(n, function (n) {
      return o(n, t);
    });
  }, e;
}(),
    an = new un(),
    fn = an.produce,
    cn = an.produceWithPatches.bind(an),
    sn = an.setAutoFreeze.bind(an),
    vn = an.setUseProxies.bind(an),
    pn = an.applyPatches.bind(an),
    ln = an.createDraft.bind(an),
    dn = an.finishDraft.bind(an);

exports.finishDraft = dn;
exports.createDraft = ln;
exports.applyPatches = pn;
exports.setUseProxies = vn;
exports.setAutoFreeze = sn;
exports.produceWithPatches = cn;
exports.produce = fn;
exports.Immer = un;
var _default = fn;
exports.default = _default;
},{}],"node_modules/@babel/runtime/helpers/esm/defineProperty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _defineProperty;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
},{}],"node_modules/@babel/runtime/helpers/esm/objectSpread2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _objectSpread2;

var _defineProperty = _interopRequireDefault(require("./defineProperty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0, _defineProperty.default)(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}
},{"./defineProperty.js":"node_modules/@babel/runtime/helpers/esm/defineProperty.js"}],"node_modules/redux/es/redux.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__DO_NOT_USE__ActionTypes = void 0;
exports.applyMiddleware = applyMiddleware;
exports.bindActionCreators = bindActionCreators;
exports.combineReducers = combineReducers;
exports.compose = compose;
exports.createStore = createStore;
exports.legacy_createStore = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
} // Inlined version of the `symbol-observable` polyfill


var $$observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */


var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

exports.__DO_NOT_USE__ActionTypes = ActionTypes;

function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
} // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of


function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if ("development" !== 'production') {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}
/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */


function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error("development" === "production" ? formatProdErrorMessage(0) : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error("development" === "production" ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error("development" === "production" ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error("development" === "production" ? formatProdErrorMessage(3) : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error("development" === "production" ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error("development" === "production" ? formatProdErrorMessage(5) : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error("development" === "production" ? formatProdErrorMessage(6) : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error("development" === "production" ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error("development" === "production" ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error("development" === "production" ? formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error("development" === "production" ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error("development" === "production" ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */


var legacy_createStore = createStore;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */

exports.legacy_createStore = legacy_createStore;

function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("development" === "production" ? formatProdErrorMessage(12) : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("development" === "production" ? formatProdErrorMessage(13) : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if ("development" !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if ("development" !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if ("development" !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error("development" === "production" ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("development" === "production" ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */


function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */


function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("development" === "production" ? formatProdErrorMessage(15) : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */


function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}
},{"@babel/runtime/helpers/esm/objectSpread2":"node_modules/@babel/runtime/helpers/esm/objectSpread2.js"}],"node_modules/reselect/es/defaultMemoize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCacheKeyComparator = createCacheKeyComparator;
exports.defaultEqualityCheck = void 0;
exports.defaultMemoize = defaultMemoize;
// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
var NOT_FOUND = 'NOT_FOUND';

function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }

      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key: key,
        value: value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = undefined;
    }
  };
}

function createLruCache(maxSize, equals) {
  var entries = [];

  function get(key) {
    var cacheIndex = entries.findIndex(function (entry) {
      return equals(key, entry.key);
    }); // We found a cached entry

    if (cacheIndex > -1) {
      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }

      return entry.value;
    } // No entry found in cache, return sentinel


    return NOT_FOUND;
  }

  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      // TODO Is unshift slow?
      entries.unshift({
        key: key,
        value: value
      });

      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }

  function getEntries() {
    return entries;
  }

  function clear() {
    entries = [];
  }

  return {
    get: get,
    put: put,
    getEntries: getEntries,
    clear: clear
  };
}

var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
  return a === b;
};

exports.defaultEqualityCheck = defaultEqualityCheck;

function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


    var length = prev.length;

    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  };
} // defaultMemoize now supports a configurable cache size with LRU behavior,
// and optional comparison of the result value with existing values


function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck,
      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
      _providedOptions$maxS = providedOptions.maxSize,
      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
      resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

  function memoized() {
    var value = cache.get(arguments);

    if (value === NOT_FOUND) {
      // @ts-ignore
      value = func.apply(null, arguments);

      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function (entry) {
          return resultEqualityCheck(entry.value, value);
        });

        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }

      cache.put(arguments, value);
    }

    return value;
  }

  memoized.clearCache = function () {
    return cache.clear();
  };

  return memoized;
}
},{}],"node_modules/reselect/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSelector = void 0;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = void 0;
Object.defineProperty(exports, "defaultEqualityCheck", {
  enumerable: true,
  get: function () {
    return _defaultMemoize.defaultEqualityCheck;
  }
});
Object.defineProperty(exports, "defaultMemoize", {
  enumerable: true,
  get: function () {
    return _defaultMemoize.defaultMemoize;
  }
});

var _defaultMemoize = require("./defaultMemoize");

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
    }).join(', ');
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }

  var createSelector = function createSelector() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var _recomputations = 0;

    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
    // So, start by declaring the default value here.
    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


    var directlyPassedOptions = {
      memoizeOptions: undefined
    }; // Normally, the result func or "output selector" is the last arg

    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

    if (typeof resultFunc === 'object') {
      directlyPassedOptions = resultFunc; // and pop the real result func off

      resultFunc = funcs.pop();
    }

    if (typeof resultFunc !== 'function') {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    } // Determine which set of options we're using. Prefer options passed directly,
    // but fall back to options given to createSelectorCreator.


    var _directlyPassedOption = directlyPassedOptions,
        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
    // is an array. In most libs I've looked at, it's an equality function or options object.
    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
    // we wrap it in an array so we can apply it.

    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function () {
      _recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        // @ts-ignore
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc: resultFunc,
      memoizedResultFunc: memoizedResultFunc,
      dependencies: dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  }; // @ts-ignore


  return createSelector;
}

var createSelector = /* #__PURE__ */createSelectorCreator(_defaultMemoize.defaultMemoize); // Manual definition of state and output arguments

exports.createSelector = createSelector;

var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
  }

  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator( // @ts-ignore
  objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
  return resultSelector;
};

exports.createStructuredSelector = createStructuredSelector;
},{"./defaultMemoize":"node_modules/reselect/es/defaultMemoize.js"}],"node_modules/redux-thunk/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
var _default = thunk;
exports.default = _default;
},{}],"node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  MiddlewareArray: true,
  TaskAbortError: true,
  addListener: true,
  clearAllListeners: true,
  configureStore: true,
  createAction: true,
  createAsyncThunk: true,
  createDraftSafeSelector: true,
  createEntityAdapter: true,
  createImmutableStateInvariantMiddleware: true,
  createListenerMiddleware: true,
  createReducer: true,
  createSerializableStateInvariantMiddleware: true,
  createSlice: true,
  findNonSerializableValue: true,
  getDefaultMiddleware: true,
  getType: true,
  isAllOf: true,
  isAnyOf: true,
  isAsyncThunkAction: true,
  isFulfilled: true,
  isImmutableDefault: true,
  isPending: true,
  isPlain: true,
  isPlainObject: true,
  isRejected: true,
  isRejectedWithValue: true,
  miniSerializeError: true,
  nanoid: true,
  removeListener: true,
  unwrapResult: true,
  createNextState: true,
  current: true,
  freeze: true,
  original: true,
  isDraft: true,
  createSelector: true
};
exports.clearAllListeners = exports.addListener = exports.TaskAbortError = exports.MiddlewareArray = void 0;
exports.configureStore = configureStore;
exports.createAction = createAction;
exports.createAsyncThunk = createAsyncThunk;
exports.createDraftSafeSelector = void 0;
exports.createEntityAdapter = createEntityAdapter;
exports.createImmutableStateInvariantMiddleware = createImmutableStateInvariantMiddleware;
exports.createListenerMiddleware = createListenerMiddleware;
Object.defineProperty(exports, "createNextState", {
  enumerable: true,
  get: function () {
    return _immer.default;
  }
});
exports.createReducer = createReducer;
Object.defineProperty(exports, "createSelector", {
  enumerable: true,
  get: function () {
    return _reselect.createSelector;
  }
});
exports.createSerializableStateInvariantMiddleware = createSerializableStateInvariantMiddleware;
exports.createSlice = createSlice;
Object.defineProperty(exports, "current", {
  enumerable: true,
  get: function () {
    return _immer.current;
  }
});
exports.findNonSerializableValue = findNonSerializableValue;
Object.defineProperty(exports, "freeze", {
  enumerable: true,
  get: function () {
    return _immer.freeze;
  }
});
exports.getDefaultMiddleware = getDefaultMiddleware;
exports.getType = getType;
exports.isAllOf = isAllOf;
exports.isAnyOf = isAnyOf;
exports.isAsyncThunkAction = isAsyncThunkAction;
Object.defineProperty(exports, "isDraft", {
  enumerable: true,
  get: function () {
    return _immer.isDraft;
  }
});
exports.isFulfilled = isFulfilled;
exports.isImmutableDefault = isImmutableDefault;
exports.isPending = isPending;
exports.isPlain = isPlain;
exports.isPlainObject = isPlainObject;
exports.isRejected = isRejected;
exports.isRejectedWithValue = isRejectedWithValue;
exports.nanoid = exports.miniSerializeError = void 0;
Object.defineProperty(exports, "original", {
  enumerable: true,
  get: function () {
    return _immer.original;
  }
});
exports.removeListener = void 0;
exports.unwrapResult = unwrapResult;

var _immer = _interopRequireWildcard(require("immer"));

var _redux = require("redux");

Object.keys(_redux).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _redux[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _redux[key];
    }
  });
});

var _reselect = require("reselect");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
};

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;

var __defNormalProp = function (obj, key, value) {
  return key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: value
  }) : obj[key] = value;
};

var __spreadValues = function (a, b) {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);

  if (__getOwnPropSymbols) for (var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++) {
    var prop = _c[_i];
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};

var __spreadProps = function (a, b) {
  return __defProps(a, __getOwnPropDescs(b));
};

var __async = function (__this, __arguments, generator) {
  return new Promise(function (resolve, reject) {
    var fulfilled = function (value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };

    var rejected = function (value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };

    var step = function (x) {
      return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    };

    step((generator = generator.apply(__this, __arguments)).next());
  });
}; // src/index.ts


var createDraftSafeSelector = function () {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var selector = _reselect.createSelector.apply(void 0, args);

  var wrappedSelector = function (value) {
    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    return selector.apply(void 0, __spreadArray([(0, _immer.isDraft)(value) ? (0, _immer.current)(value) : value], rest));
  };

  return wrappedSelector;
}; // src/configureStore.ts


exports.createDraftSafeSelector = createDraftSafeSelector;
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
  if (arguments.length === 0) return void 0;
  if (typeof arguments[0] === "object") return _redux.compose;
  return _redux.compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
  return function (noop2) {
    return noop2;
  };
}; // src/isPlainObject.ts

function isPlainObject(value) {
  if (typeof value !== "object" || value === null) return false;
  var proto = Object.getPrototypeOf(value);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
} // src/getDefaultMiddleware.ts


// src/utils.ts
function getTimeMeasureUtils(maxDelay, fnName) {
  var elapsed = 0;
  return {
    measureTime: function (fn) {
      var started = Date.now();

      try {
        return fn();
      } finally {
        var finished = Date.now();
        elapsed += finished - started;
      }
    },
    warnIfExceeded: function () {
      if (elapsed > maxDelay) {
        console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
      }
    }
  };
}

var MiddlewareArray =
/** @class */
function (_super) {
  __extends(MiddlewareArray, _super);

  function MiddlewareArray() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var _this = _super.apply(this, args) || this;

    Object.setPrototypeOf(_this, MiddlewareArray.prototype);
    return _this;
  }

  Object.defineProperty(MiddlewareArray, Symbol.species, {
    get: function () {
      return MiddlewareArray;
    },
    enumerable: false,
    configurable: true
  });

  MiddlewareArray.prototype.concat = function () {
    var arr = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }

    return _super.prototype.concat.apply(this, arr);
  };

  MiddlewareArray.prototype.prepend = function () {
    var arr = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }

    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
    }

    return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
  };

  return MiddlewareArray;
}(Array); // src/immutableStateInvariantMiddleware.ts


exports.MiddlewareArray = MiddlewareArray;
var isProduction = "development" === "production";
var prefix = "Invariant failed";

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  }

  throw new Error(prefix + ": " + (message || ""));
}

function stringify(obj, serializer, indent, decycler) {
  return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}

function getSerialize(serializer, decycler) {
  var stack = [],
      keys = [];
  if (!decycler) decycler = function (_, value) {
    if (stack[0] === value) return "[Circular ~]";
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
  };
  return function (key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) value = decycler.call(this, key, value);
    } else stack.push(value);

    return serializer == null ? value : serializer.call(this, key, value);
  };
}

function isImmutableDefault(value) {
  return typeof value !== "object" || value === null || typeof value === "undefined" || Object.isFrozen(value);
}

function trackForMutations(isImmutable, ignorePaths, obj) {
  var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
  return {
    detectMutations: function () {
      return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
    }
  };
}

function trackProperties(isImmutable, ignorePaths, obj, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }

  if (path === void 0) {
    path = "";
  }

  var tracked = {
    value: obj
  };

  if (!isImmutable(obj)) {
    tracked.children = {};

    for (var key in obj) {
      var childPath = path ? path + "." + key : key;

      if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
        continue;
      }

      tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
    }
  }

  return tracked;
}

function detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }

  if (sameParentRef === void 0) {
    sameParentRef = false;
  }

  if (path === void 0) {
    path = "";
  }

  var prevObj = trackedProperty ? trackedProperty.value : void 0;
  var sameRef = prevObj === obj;

  if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
    return {
      wasMutated: true,
      path: path
    };
  }

  if (isImmutable(prevObj) || isImmutable(obj)) {
    return {
      wasMutated: false
    };
  }

  var keysToDetect = {};

  for (var key in trackedProperty.children) {
    keysToDetect[key] = true;
  }

  for (var key in obj) {
    keysToDetect[key] = true;
  }

  for (var key in keysToDetect) {
    var childPath = path ? path + "." + key : key;

    if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
      continue;
    }

    var result = detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);

    if (result.wasMutated) {
      return result;
    }
  }

  return {
    wasMutated: false
  };
}

function createImmutableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  if ("development" === "production") {
    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  var _c = options.isImmutable,
      isImmutable = _c === void 0 ? isImmutableDefault : _c,
      ignoredPaths = options.ignoredPaths,
      _d = options.warnAfter,
      warnAfter = _d === void 0 ? 32 : _d,
      ignore = options.ignore;
  ignoredPaths = ignoredPaths || ignore;
  var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
  return function (_c) {
    var getState = _c.getState;
    var state = getState();
    var tracker = track(state);
    var result;
    return function (next) {
      return function (action) {
        var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
        measureUtils.measureTime(function () {
          state = getState();
          result = tracker.detectMutations();
          tracker = track(state);
          invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        });
        var dispatchedAction = next(action);
        measureUtils.measureTime(function () {
          state = getState();
          result = tracker.detectMutations();
          tracker = track(state);
          result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        });
        measureUtils.warnIfExceeded();
        return dispatchedAction;
      };
    };
  };
} // src/serializableStateInvariantMiddleware.ts


function isPlain(val) {
  var type = typeof val;
  return type === "undefined" || val === null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
}

function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
  if (path === void 0) {
    path = "";
  }

  if (isSerializable === void 0) {
    isSerializable = isPlain;
  }

  if (ignoredPaths === void 0) {
    ignoredPaths = [];
  }

  var foundNestedSerializable;

  if (!isSerializable(value)) {
    return {
      keyPath: path || "<root>",
      value: value
    };
  }

  if (typeof value !== "object" || value === null) {
    return false;
  }

  var entries = getEntries != null ? getEntries(value) : Object.entries(value);
  var hasIgnoredPaths = ignoredPaths.length > 0;

  for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _c = entries_1[_i],
        key = _c[0],
        nestedValue = _c[1];
    var nestedPath = path ? path + "." + key : key;

    if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath) >= 0) {
      continue;
    }

    if (!isSerializable(nestedValue)) {
      return {
        keyPath: nestedPath,
        value: nestedValue
      };
    }

    if (typeof nestedValue === "object") {
      foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);

      if (foundNestedSerializable) {
        return foundNestedSerializable;
      }
    }
  }

  return false;
}

function createSerializableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  if ("development" === "production") {
    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  var _c = options.isSerializable,
      isSerializable = _c === void 0 ? isPlain : _c,
      getEntries = options.getEntries,
      _d = options.ignoredActions,
      ignoredActions = _d === void 0 ? [] : _d,
      _e = options.ignoredActionPaths,
      ignoredActionPaths = _e === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _e,
      _f = options.ignoredPaths,
      ignoredPaths = _f === void 0 ? [] : _f,
      _g = options.warnAfter,
      warnAfter = _g === void 0 ? 32 : _g,
      _h = options.ignoreState,
      ignoreState = _h === void 0 ? false : _h,
      _j = options.ignoreActions,
      ignoreActions = _j === void 0 ? false : _j;
  return function (storeAPI) {
    return function (next) {
      return function (action) {
        var result = next(action);
        var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");

        if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
          measureUtils.measureTime(function () {
            var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths);

            if (foundActionNonSerializableValue) {
              var keyPath = foundActionNonSerializableValue.keyPath,
                  value = foundActionNonSerializableValue.value;
              console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
            }
          });
        }

        if (!ignoreState) {
          measureUtils.measureTime(function () {
            var state = storeAPI.getState();
            var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths);

            if (foundStateNonSerializableValue) {
              var keyPath = foundStateNonSerializableValue.keyPath,
                  value = foundStateNonSerializableValue.value;
              console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
            }
          });
          measureUtils.warnIfExceeded();
        }

        return result;
      };
    };
  };
} // src/getDefaultMiddleware.ts


function isBoolean(x) {
  return typeof x === "boolean";
}

function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}

function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  var _c = options.thunk,
      thunk = _c === void 0 ? true : _c,
      _d = options.immutableCheck,
      immutableCheck = _d === void 0 ? true : _d,
      _e = options.serializableCheck,
      serializableCheck = _e === void 0 ? true : _e;
  var middlewareArray = new MiddlewareArray();

  if (thunk) {
    if (isBoolean(thunk)) {
      middlewareArray.push(_reduxThunk.default);
    } else {
      middlewareArray.push(_reduxThunk.default.withExtraArgument(thunk.extraArgument));
    }
  }

  if ("development" !== "production") {
    if (immutableCheck) {
      var immutableOptions = {};

      if (!isBoolean(immutableCheck)) {
        immutableOptions = immutableCheck;
      }

      middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
    }

    if (serializableCheck) {
      var serializableOptions = {};

      if (!isBoolean(serializableCheck)) {
        serializableOptions = serializableCheck;
      }

      middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
  }

  return middlewareArray;
} // src/configureStore.ts


var IS_PRODUCTION = "development" === "production";

function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();

  var _c = options || {},
      _d = _c.reducer,
      reducer = _d === void 0 ? void 0 : _d,
      _e = _c.middleware,
      middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e,
      _f = _c.devTools,
      devTools = _f === void 0 ? true : _f,
      _g = _c.preloadedState,
      preloadedState = _g === void 0 ? void 0 : _g,
      _h = _c.enhancers,
      enhancers = _h === void 0 ? void 0 : _h;

  var rootReducer;

  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject(reducer)) {
    rootReducer = (0, _redux.combineReducers)(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }

  var finalMiddleware = middleware;

  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);

    if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
      throw new Error("when using a middleware builder function, an array of middleware must be returned");
    }
  }

  if (!IS_PRODUCTION && finalMiddleware.some(function (item) {
    return typeof item !== "function";
  })) {
    throw new Error("each middleware provided to configureStore must be a function");
  }

  var middlewareEnhancer = _redux.applyMiddleware.apply(void 0, finalMiddleware);

  var finalCompose = _redux.compose;

  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }

  var storeEnhancers = [middlewareEnhancer];

  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(storeEnhancers);
  }

  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return (0, _redux.createStore)(rootReducer, preloadedState, composedEnhancer);
} // src/createAction.ts


function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);

      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }

      return __spreadValues(__spreadValues({
        type: type,
        payload: prepared.payload
      }, "meta" in prepared && {
        meta: prepared.meta
      }), "error" in prepared && {
        error: prepared.error
      });
    }

    return {
      type: type,
      payload: args[0]
    };
  }

  actionCreator.toString = function () {
    return "" + type;
  };

  actionCreator.type = type;

  actionCreator.match = function (action) {
    return action.type === type;
  };

  return actionCreator;
}

function isFSA(action) {
  return isPlainObject(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
}

function isValidKey(key) {
  return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}

function getType(actionCreator) {
  return "" + actionCreator;
} // src/createReducer.ts


// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function (typeOrActionCreator, reducer) {
      if ("development" !== "production") {
        if (actionMatchers.length > 0) {
          throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
        }

        if (defaultCaseReducer) {
          throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
        }
      }

      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;

      if (type in actionsMap) {
        throw new Error("addCase cannot be called with two reducers for the same action type");
      }

      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function (matcher, reducer) {
      if ("development" !== "production") {
        if (defaultCaseReducer) {
          throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
        }
      }

      actionMatchers.push({
        matcher: matcher,
        reducer: reducer
      });
      return builder;
    },
    addDefaultCase: function (reducer) {
      if ("development" !== "production") {
        if (defaultCaseReducer) {
          throw new Error("`builder.addDefaultCase` can only be called once");
        }
      }

      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
} // src/createReducer.ts


function isStateFunction(x) {
  return typeof x === "function";
}

function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }

  var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer],
      actionsMap = _c[0],
      finalActionMatchers = _c[1],
      finalDefaultCaseReducer = _c[2];

  var getInitialState;

  if (isStateFunction(initialState)) {
    getInitialState = function () {
      return (0, _immer.default)(initialState(), function () {});
    };
  } else {
    var frozenInitialState_1 = (0, _immer.default)(initialState, function () {});

    getInitialState = function () {
      return frozenInitialState_1;
    };
  }

  function reducer(state, action) {
    if (state === void 0) {
      state = getInitialState();
    }

    var caseReducers = __spreadArray([actionsMap[action.type]], finalActionMatchers.filter(function (_c) {
      var matcher = _c.matcher;
      return matcher(action);
    }).map(function (_c) {
      var reducer2 = _c.reducer;
      return reducer2;
    }));

    if (caseReducers.filter(function (cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }

    return caseReducers.reduce(function (previousState, caseReducer) {
      if (caseReducer) {
        if ((0, _immer.isDraft)(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action);

          if (typeof result === "undefined") {
            return previousState;
          }

          return result;
        } else if (!(0, _immer.isDraftable)(previousState)) {
          var result = caseReducer(previousState, action);

          if (typeof result === "undefined") {
            if (previousState === null) {
              return previousState;
            }

            throw Error("A case reducer on a non-draftable value must not return undefined");
          }

          return result;
        } else {
          return (0, _immer.default)(previousState, function (draft) {
            return caseReducer(draft, action);
          });
        }
      }

      return previousState;
    }, state);
  }

  reducer.getInitialState = getInitialState;
  return reducer;
} // src/createSlice.ts


function getType2(slice, actionKey) {
  return slice + "/" + actionKey;
}

function createSlice(options) {
  var name = options.name;

  if (!name) {
    throw new Error("`name` is a required option for createSlice");
  }

  var initialState = typeof options.initialState == "function" ? options.initialState : (0, _immer.default)(options.initialState, function () {});
  var reducers = options.reducers || {};
  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function (reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType2(name, reducerName);
    var caseReducer;
    var prepareCallback;

    if ("reducer" in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }

    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });

  function buildReducer() {
    var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers],
        _d = _c[0],
        extraReducers = _d === void 0 ? {} : _d,
        _e = _c[1],
        actionMatchers = _e === void 0 ? [] : _e,
        _f = _c[2],
        defaultCaseReducer = _f === void 0 ? void 0 : _f;

    var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);

    return createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
  }

  var _reducer;

  return {
    name: name,
    reducer: function (state, action) {
      if (!_reducer) _reducer = buildReducer();
      return _reducer(state, action);
    },
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName,
    getInitialState: function () {
      if (!_reducer) _reducer = buildReducer();
      return _reducer.getInitialState();
    }
  };
} // src/entities/entity_state.ts


function getInitialEntityState() {
  return {
    ids: [],
    entities: {}
  };
}

function createInitialStateFactory() {
  function getInitialState(additionalState) {
    if (additionalState === void 0) {
      additionalState = {};
    }

    return Object.assign(getInitialEntityState(), additionalState);
  }

  return {
    getInitialState: getInitialState
  };
} // src/entities/state_selectors.ts


function createSelectorsFactory() {
  function getSelectors(selectState) {
    var selectIds = function (state) {
      return state.ids;
    };

    var selectEntities = function (state) {
      return state.entities;
    };

    var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) {
      return ids.map(function (id) {
        return entities[id];
      });
    });

    var selectId = function (_, id) {
      return id;
    };

    var selectById = function (entities, id) {
      return entities[id];
    };

    var selectTotal = createDraftSafeSelector(selectIds, function (ids) {
      return ids.length;
    });

    if (!selectState) {
      return {
        selectIds: selectIds,
        selectEntities: selectEntities,
        selectAll: selectAll,
        selectTotal: selectTotal,
        selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
      };
    }

    var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
    return {
      selectIds: createDraftSafeSelector(selectState, selectIds),
      selectEntities: selectGlobalizedEntities,
      selectAll: createDraftSafeSelector(selectState, selectAll),
      selectTotal: createDraftSafeSelector(selectState, selectTotal),
      selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
    };
  }

  return {
    getSelectors: getSelectors
  };
} // src/entities/state_adapter.ts


function createSingleArgumentStateOperator(mutator) {
  var operator = createStateOperator(function (_, state) {
    return mutator(state);
  });
  return function operation(state) {
    return operator(state, void 0);
  };
}

function createStateOperator(mutator) {
  return function operation(state, arg) {
    function isPayloadActionArgument(arg2) {
      return isFSA(arg2);
    }

    var runMutator = function (draft) {
      if (isPayloadActionArgument(arg)) {
        mutator(arg.payload, draft);
      } else {
        mutator(arg, draft);
      }
    };

    if ((0, _immer.isDraft)(state)) {
      runMutator(state);
      return state;
    } else {
      return (0, _immer.default)(state, runMutator);
    }
  };
} // src/entities/utils.ts


function selectIdValue(entity, selectId) {
  var key = selectId(entity);

  if ("development" !== "production" && key === void 0) {
    console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
  }

  return key;
}

function ensureEntitiesArray(entities) {
  if (!Array.isArray(entities)) {
    entities = Object.values(entities);
  }

  return entities;
}

function splitAddedUpdatedEntities(newEntities, selectId, state) {
  newEntities = ensureEntitiesArray(newEntities);
  var added = [];
  var updated = [];

  for (var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++) {
    var entity = newEntities_1[_i];
    var id = selectIdValue(entity, selectId);

    if (id in state.entities) {
      updated.push({
        id: id,
        changes: entity
      });
    } else {
      added.push(entity);
    }
  }

  return [added, updated];
} // src/entities/unsorted_state_adapter.ts


function createUnsortedStateAdapter(selectId) {
  function addOneMutably(entity, state) {
    var key = selectIdValue(entity, selectId);

    if (key in state.entities) {
      return;
    }

    state.ids.push(key);
    state.entities[key] = entity;
  }

  function addManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);

    for (var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++) {
      var entity = newEntities_2[_i];
      addOneMutably(entity, state);
    }
  }

  function setOneMutably(entity, state) {
    var key = selectIdValue(entity, selectId);

    if (!(key in state.entities)) {
      state.ids.push(key);
    }

    state.entities[key] = entity;
  }

  function setManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);

    for (var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++) {
      var entity = newEntities_3[_i];
      setOneMutably(entity, state);
    }
  }

  function setAllMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    state.ids = [];
    state.entities = {};
    addManyMutably(newEntities, state);
  }

  function removeOneMutably(key, state) {
    return removeManyMutably([key], state);
  }

  function removeManyMutably(keys, state) {
    var didMutate = false;
    keys.forEach(function (key) {
      if (key in state.entities) {
        delete state.entities[key];
        didMutate = true;
      }
    });

    if (didMutate) {
      state.ids = state.ids.filter(function (id) {
        return id in state.entities;
      });
    }
  }

  function removeAllMutably(state) {
    Object.assign(state, {
      ids: [],
      entities: {}
    });
  }

  function takeNewKey(keys, update, state) {
    var original2 = state.entities[update.id];
    var updated = Object.assign({}, original2, update.changes);
    var newKey = selectIdValue(updated, selectId);
    var hasNewKey = newKey !== update.id;

    if (hasNewKey) {
      keys[update.id] = newKey;
      delete state.entities[update.id];
    }

    state.entities[newKey] = updated;
    return hasNewKey;
  }

  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }

  function updateManyMutably(updates, state) {
    var newKeys = {};
    var updatesPerEntity = {};
    updates.forEach(function (update) {
      if (update.id in state.entities) {
        updatesPerEntity[update.id] = {
          id: update.id,
          changes: __spreadValues(__spreadValues({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
        };
      }
    });
    updates = Object.values(updatesPerEntity);
    var didMutateEntities = updates.length > 0;

    if (didMutateEntities) {
      var didMutateIds = updates.filter(function (update) {
        return takeNewKey(newKeys, update, state);
      }).length > 0;

      if (didMutateIds) {
        state.ids = state.ids.map(function (id) {
          return newKeys[id] || id;
        });
      }
    }
  }

  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }

  function upsertManyMutably(newEntities, state) {
    var _c = splitAddedUpdatedEntities(newEntities, selectId, state),
        added = _c[0],
        updated = _c[1];

    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }

  return {
    removeAll: createSingleArgumentStateOperator(removeAllMutably),
    addOne: createStateOperator(addOneMutably),
    addMany: createStateOperator(addManyMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    updateOne: createStateOperator(updateOneMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    upsertMany: createStateOperator(upsertManyMutably),
    removeOne: createStateOperator(removeOneMutably),
    removeMany: createStateOperator(removeManyMutably)
  };
} // src/entities/sorted_state_adapter.ts


function createSortedStateAdapter(selectId, sort) {
  var _c = createUnsortedStateAdapter(selectId),
      removeOne = _c.removeOne,
      removeMany = _c.removeMany,
      removeAll = _c.removeAll;

  function addOneMutably(entity, state) {
    return addManyMutably([entity], state);
  }

  function addManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    var models = newEntities.filter(function (model) {
      return !(selectIdValue(model, selectId) in state.entities);
    });

    if (models.length !== 0) {
      merge(models, state);
    }
  }

  function setOneMutably(entity, state) {
    return setManyMutably([entity], state);
  }

  function setManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);

    if (newEntities.length !== 0) {
      merge(newEntities, state);
    }
  }

  function setAllMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    state.entities = {};
    state.ids = [];
    addManyMutably(newEntities, state);
  }

  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }

  function takeUpdatedModel(models, update, state) {
    if (!(update.id in state.entities)) {
      return false;
    }

    var original2 = state.entities[update.id];
    var updated = Object.assign({}, original2, update.changes);
    var newKey = selectIdValue(updated, selectId);
    delete state.entities[update.id];
    models.push(updated);
    return newKey !== update.id;
  }

  function updateManyMutably(updates, state) {
    var models = [];
    updates.forEach(function (update) {
      return takeUpdatedModel(models, update, state);
    });

    if (models.length !== 0) {
      merge(models, state);
    }
  }

  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }

  function upsertManyMutably(newEntities, state) {
    var _c = splitAddedUpdatedEntities(newEntities, selectId, state),
        added = _c[0],
        updated = _c[1];

    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }

  function areArraysEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length && i < b.length; i++) {
      if (a[i] === b[i]) {
        continue;
      }

      return false;
    }

    return true;
  }

  function merge(models, state) {
    models.forEach(function (model) {
      state.entities[selectId(model)] = model;
    });
    var allEntities = Object.values(state.entities);
    allEntities.sort(sort);
    var newSortedIds = allEntities.map(selectId);
    var ids = state.ids;

    if (!areArraysEqual(ids, newSortedIds)) {
      state.ids = newSortedIds;
    }
  }

  return {
    removeOne: removeOne,
    removeMany: removeMany,
    removeAll: removeAll,
    addOne: createStateOperator(addOneMutably),
    updateOne: createStateOperator(updateOneMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    addMany: createStateOperator(addManyMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertMany: createStateOperator(upsertManyMutably)
  };
} // src/entities/create_adapter.ts


function createEntityAdapter(options) {
  if (options === void 0) {
    options = {};
  }

  var _c = __spreadValues({
    sortComparer: false,
    selectId: function (instance) {
      return instance.id;
    }
  }, options),
      selectId = _c.selectId,
      sortComparer = _c.sortComparer;

  var stateFactory = createInitialStateFactory();
  var selectorsFactory = createSelectorsFactory();
  var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
  return __spreadValues(__spreadValues(__spreadValues({
    selectId: selectId,
    sortComparer: sortComparer
  }, stateFactory), selectorsFactory), stateAdapter);
} // src/nanoid.ts


var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";

var nanoid = function (size) {
  if (size === void 0) {
    size = 21;
  }

  var id = "";
  var i = size;

  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }

  return id;
}; // src/createAsyncThunk.ts


exports.nanoid = nanoid;
var commonProperties = ["name", "message", "stack", "code"];

var RejectWithValue =
/** @class */
function () {
  function RejectWithValue(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }

  return RejectWithValue;
}();

var FulfillWithMeta =
/** @class */
function () {
  function FulfillWithMeta(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }

  return FulfillWithMeta;
}();

var miniSerializeError = function (value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};

    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];

      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }

    return simpleError;
  }

  return {
    message: String(value)
  };
};

exports.miniSerializeError = miniSerializeError;

function createAsyncThunk(typePrefix, payloadCreator, options) {
  var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) {
    return {
      payload: payload,
      meta: __spreadProps(__spreadValues({}, meta || {}), {
        arg: arg,
        requestId: requestId,
        requestStatus: "fulfilled"
      })
    };
  });
  var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) {
    return {
      payload: void 0,
      meta: __spreadProps(__spreadValues({}, meta || {}), {
        arg: arg,
        requestId: requestId,
        requestStatus: "pending"
      })
    };
  });
  var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) {
    return {
      payload: payload,
      error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
      meta: __spreadProps(__spreadValues({}, meta || {}), {
        arg: arg,
        requestId: requestId,
        rejectedWithValue: !!payload,
        requestStatus: "rejected",
        aborted: (error == null ? void 0 : error.name) === "AbortError",
        condition: (error == null ? void 0 : error.name) === "ConditionError"
      })
    };
  });
  var displayedWarning = false;
  var AC = typeof AbortController !== "undefined" ? AbortController :
  /** @class */
  function () {
    function class_1() {
      this.signal = {
        aborted: false,
        addEventListener: function () {},
        dispatchEvent: function () {
          return false;
        },
        onabort: function () {},
        removeEventListener: function () {}
      };
    }

    class_1.prototype.abort = function () {
      if ("development" !== "production") {
        if (!displayedWarning) {
          displayedWarning = true;
          console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
        }
      }
    };

    return class_1;
  }();

  function actionCreator(arg) {
    return function (dispatch, getState, extra) {
      var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
      var abortController = new AC();
      var abortReason;
      var abortedPromise = new Promise(function (_, reject) {
        return abortController.signal.addEventListener("abort", function () {
          return reject({
            name: "AbortError",
            message: abortReason || "Aborted"
          });
        });
      });
      var started = false;

      function abort(reason) {
        if (started) {
          abortReason = reason;
          abortController.abort();
        }
      }

      var promise = function () {
        return __async(this, null, function () {
          var _a, _b, finalAction, conditionResult, err_1, skipDispatch;

          return __generator(this, function (_c) {
            switch (_c.label) {
              case 0:
                _c.trys.push([0, 4,, 5]);

                conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, {
                  getState: getState,
                  extra: extra
                });
                if (!isThenable(conditionResult)) return [3
                /*break*/
                , 2];
                return [4
                /*yield*/
                , conditionResult];

              case 1:
                conditionResult = _c.sent();
                _c.label = 2;

              case 2:
                if (conditionResult === false) {
                  throw {
                    name: "ConditionError",
                    message: "Aborted due to condition callback returning false."
                  };
                }

                started = true;
                dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, {
                  requestId: requestId,
                  arg: arg
                }, {
                  getState: getState,
                  extra: extra
                })));
                return [4
                /*yield*/
                , Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
                  dispatch: dispatch,
                  getState: getState,
                  extra: extra,
                  requestId: requestId,
                  signal: abortController.signal,
                  rejectWithValue: function (value, meta) {
                    return new RejectWithValue(value, meta);
                  },
                  fulfillWithValue: function (value, meta) {
                    return new FulfillWithMeta(value, meta);
                  }
                })).then(function (result) {
                  if (result instanceof RejectWithValue) {
                    throw result;
                  }

                  if (result instanceof FulfillWithMeta) {
                    return fulfilled(result.payload, requestId, arg, result.meta);
                  }

                  return fulfilled(result, requestId, arg);
                })])];

              case 3:
                finalAction = _c.sent();
                return [3
                /*break*/
                , 5];

              case 4:
                err_1 = _c.sent();
                finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                return [3
                /*break*/
                , 5];

              case 5:
                skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;

                if (!skipDispatch) {
                  dispatch(finalAction);
                }

                return [2
                /*return*/
                , finalAction];
            }
          });
        });
      }();

      return Object.assign(promise, {
        abort: abort,
        requestId: requestId,
        arg: arg,
        unwrap: function () {
          return promise.then(unwrapResult);
        }
      });
    };
  }

  return Object.assign(actionCreator, {
    pending: pending,
    rejected: rejected,
    fulfilled: fulfilled,
    typePrefix: typePrefix
  });
}

function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }

  if (action.error) {
    throw action.error;
  }

  return action.payload;
}

function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
} // src/tsHelpers.ts


var hasMatchFunction = function (v) {
  return v && typeof v.match === "function";
}; // src/matchers.ts


var matches = function (matcher, action) {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
};

function isAnyOf() {
  var matchers = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    matchers[_i] = arguments[_i];
  }

  return function (action) {
    return matchers.some(function (matcher) {
      return matches(matcher, action);
    });
  };
}

function isAllOf() {
  var matchers = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    matchers[_i] = arguments[_i];
  }

  return function (action) {
    return matchers.every(function (matcher) {
      return matches(matcher, action);
    });
  };
}

function hasExpectedRequestMetadata(action, validStatus) {
  if (!action || !action.meta) return false;
  var hasValidRequestId = typeof action.meta.requestId === "string";
  var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
  return hasValidRequestId && hasValidRequestStatus;
}

function isAsyncThunkArray(a) {
  return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}

function isPending() {
  var asyncThunks = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ["pending"]);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isPending()(asyncThunks[0]);
  }

  return function (action) {
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.pending;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}

function isRejected() {
  var asyncThunks = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ["rejected"]);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejected()(asyncThunks[0]);
  }

  return function (action) {
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.rejected;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}

function isRejectedWithValue() {
  var asyncThunks = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }

  var hasFlag = function (action) {
    return action && action.meta && action.meta.rejectedWithValue;
  };

  if (asyncThunks.length === 0) {
    return function (action) {
      var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
      return combinedMatcher(action);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejectedWithValue()(asyncThunks[0]);
  }

  return function (action) {
    var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
    return combinedMatcher(action);
  };
}

function isFulfilled() {
  var asyncThunks = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ["fulfilled"]);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isFulfilled()(asyncThunks[0]);
  }

  return function (action) {
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.fulfilled;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}

function isAsyncThunkAction() {
  var asyncThunks = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isAsyncThunkAction()(asyncThunks[0]);
  }

  return function (action) {
    var matchers = [];

    for (var _i = 0, asyncThunks_1 = asyncThunks; _i < asyncThunks_1.length; _i++) {
      var asyncThunk = asyncThunks_1[_i];
      matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
    }

    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
} // src/listenerMiddleware/utils.ts


var assertFunction = function (func, expected) {
  if (typeof func !== "function") {
    throw new TypeError(expected + " is not a function");
  }
};

var noop = function () {};

var catchRejection = function (promise, onError) {
  if (onError === void 0) {
    onError = noop;
  }

  promise.catch(onError);
  return promise;
};

var addAbortSignalListener = function (abortSignal, callback) {
  abortSignal.addEventListener("abort", callback, {
    once: true
  });
};

var abortControllerWithReason = function (abortController, reason) {
  var signal = abortController.signal;

  if (signal.aborted) {
    return;
  }

  if (!("reason" in signal)) {
    Object.defineProperty(signal, "reason", {
      enumerable: true,
      value: reason,
      configurable: true,
      writable: true
    });
  }

  ;
  abortController.abort(reason);
}; // src/listenerMiddleware/exceptions.ts


var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = "task-" + cancelled;
var taskCompleted = "task-" + completed;
var listenerCancelled = listener + "-" + cancelled;
var listenerCompleted = listener + "-" + completed;

var TaskAbortError =
/** @class */
function () {
  function TaskAbortError(code) {
    this.code = code;
    this.name = "TaskAbortError";
    this.message = task + " " + cancelled + " (reason: " + code + ")";
  }

  return TaskAbortError;
}(); // src/listenerMiddleware/task.ts


exports.TaskAbortError = TaskAbortError;

var validateActive = function (signal) {
  if (signal.aborted) {
    throw new TaskAbortError(signal.reason);
  }
};

var promisifyAbortSignal = function (signal) {
  return catchRejection(new Promise(function (_, reject) {
    var notifyRejection = function () {
      return reject(new TaskAbortError(signal.reason));
    };

    if (signal.aborted) {
      notifyRejection();
    } else {
      addAbortSignalListener(signal, notifyRejection);
    }
  }));
};

var runTask = function (task2, cleanUp) {
  return __async(void 0, null, function () {
    var value, error_1;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _c.trys.push([0, 3, 4, 5]);

          return [4
          /*yield*/
          , Promise.resolve()];

        case 1:
          _c.sent();

          return [4
          /*yield*/
          , task2()];

        case 2:
          value = _c.sent();
          return [2
          /*return*/
          , {
            status: "ok",
            value: value
          }];

        case 3:
          error_1 = _c.sent();
          return [2
          /*return*/
          , {
            status: error_1 instanceof TaskAbortError ? "cancelled" : "rejected",
            error: error_1
          }];

        case 4:
          cleanUp == null ? void 0 : cleanUp();
          return [7
          /*endfinally*/
          ];

        case 5:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var createPause = function (signal) {
  return function (promise) {
    return catchRejection(Promise.race([promisifyAbortSignal(signal), promise]).then(function (output) {
      validateActive(signal);
      return output;
    }));
  };
};

var createDelay = function (signal) {
  var pause = createPause(signal);
  return function (timeoutMs) {
    return pause(new Promise(function (resolve) {
      return setTimeout(resolve, timeoutMs);
    }));
  };
}; // src/listenerMiddleware/index.ts


var assign = Object.assign;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";

var createFork = function (parentAbortSignal) {
  var linkControllers = function (controller) {
    return addAbortSignalListener(parentAbortSignal, function () {
      return abortControllerWithReason(controller, parentAbortSignal.reason);
    });
  };

  return function (taskExecutor) {
    assertFunction(taskExecutor, "taskExecutor");
    var childAbortController = new AbortController();
    linkControllers(childAbortController);
    var result = runTask(function () {
      return __async(void 0, null, function () {
        var result2;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              validateActive(parentAbortSignal);
              validateActive(childAbortController.signal);
              return [4
              /*yield*/
              , taskExecutor({
                pause: createPause(childAbortController.signal),
                delay: createDelay(childAbortController.signal),
                signal: childAbortController.signal
              })];

            case 1:
              result2 = _c.sent();
              validateActive(childAbortController.signal);
              return [2
              /*return*/
              , result2];
          }
        });
      });
    }, function () {
      return abortControllerWithReason(childAbortController, taskCompleted);
    });
    return {
      result: createPause(parentAbortSignal)(result),
      cancel: function () {
        abortControllerWithReason(childAbortController, taskCancelled);
      }
    };
  };
};

var createTakePattern = function (startListening, signal) {
  var take = function (predicate, timeout) {
    return __async(void 0, null, function () {
      var unsubscribe, tuplePromise, promises, output;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            validateActive(signal);

            unsubscribe = function () {};

            tuplePromise = new Promise(function (resolve) {
              unsubscribe = startListening({
                predicate: predicate,
                effect: function (action, listenerApi) {
                  listenerApi.unsubscribe();
                  resolve([action, listenerApi.getState(), listenerApi.getOriginalState()]);
                }
              });
            });
            promises = [promisifyAbortSignal(signal), tuplePromise];

            if (timeout != null) {
              promises.push(new Promise(function (resolve) {
                return setTimeout(resolve, timeout, null);
              }));
            }

            _c.label = 1;

          case 1:
            _c.trys.push([1,, 3, 4]);

            return [4
            /*yield*/
            , Promise.race(promises)];

          case 2:
            output = _c.sent();
            validateActive(signal);
            return [2
            /*return*/
            , output];

          case 3:
            unsubscribe();
            return [7
            /*endfinally*/
            ];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return function (predicate, timeout) {
    return catchRejection(take(predicate, timeout));
  };
};

var getListenerEntryPropsFrom = function (options) {
  var type = options.type,
      actionCreator = options.actionCreator,
      matcher = options.matcher,
      predicate = options.predicate,
      effect = options.effect;

  if (type) {
    predicate = createAction(type).match;
  } else if (actionCreator) {
    type = actionCreator.type;
    predicate = actionCreator.match;
  } else if (matcher) {
    predicate = matcher;
  } else if (predicate) {} else {
    throw new Error("Creating or removing a listener requires one of the known fields for matching an action");
  }

  assertFunction(effect, "options.listener");
  return {
    predicate: predicate,
    type: type,
    effect: effect
  };
};

var createListenerEntry = function (options) {
  var _c = getListenerEntryPropsFrom(options),
      type = _c.type,
      predicate = _c.predicate,
      effect = _c.effect;

  var id = nanoid();
  var entry = {
    id: id,
    effect: effect,
    type: type,
    predicate: predicate,
    pending: new Set(),
    unsubscribe: function () {
      throw new Error("Unsubscribe not initialized");
    }
  };
  return entry;
};

var createClearListenerMiddleware = function (listenerMap) {
  return function () {
    listenerMap.forEach(cancelActiveListeners);
    listenerMap.clear();
  };
};

var safelyNotifyError = function (errorHandler, errorToNotify, errorInfo) {
  try {
    errorHandler(errorToNotify, errorInfo);
  } catch (errorHandlerError) {
    setTimeout(function () {
      throw errorHandlerError;
    }, 0);
  }
};

var addListener = createAction(alm + "/add");
exports.addListener = addListener;
var clearAllListeners = createAction(alm + "/removeAll");
exports.clearAllListeners = clearAllListeners;
var removeListener = createAction(alm + "/remove");
exports.removeListener = removeListener;

var defaultErrorHandler = function () {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  console.error.apply(console, __spreadArray([alm + "/error"], args));
};

var cancelActiveListeners = function (entry) {
  entry.pending.forEach(function (controller) {
    abortControllerWithReason(controller, listenerCancelled);
  });
};

function createListenerMiddleware(middlewareOptions) {
  var _this = this;

  if (middlewareOptions === void 0) {
    middlewareOptions = {};
  }

  var listenerMap = new Map();
  var extra = middlewareOptions.extra,
      _c = middlewareOptions.onError,
      onError = _c === void 0 ? defaultErrorHandler : _c;
  assertFunction(onError, "onError");

  var insertEntry = function (entry) {
    entry.unsubscribe = function () {
      return listenerMap.delete(entry.id);
    };

    listenerMap.set(entry.id, entry);
    return function (cancelOptions) {
      entry.unsubscribe();

      if (cancelOptions == null ? void 0 : cancelOptions.cancelActive) {
        cancelActiveListeners(entry);
      }
    };
  };

  var findListenerEntry = function (comparator) {
    for (var _i = 0, _c = listenerMap.values(); _i < _c.length; _i++) {
      var entry = _c[_i];

      if (comparator(entry)) {
        return entry;
      }
    }

    return void 0;
  };

  var startListening = function (options) {
    var entry = findListenerEntry(function (existingEntry) {
      return existingEntry.effect === options.effect;
    });

    if (!entry) {
      entry = createListenerEntry(options);
    }

    return insertEntry(entry);
  };

  var stopListening = function (options) {
    var _c = getListenerEntryPropsFrom(options),
        type = _c.type,
        effect = _c.effect,
        predicate = _c.predicate;

    var entry = findListenerEntry(function (entry2) {
      var matchPredicateOrType = typeof type === "string" ? entry2.type === type : entry2.predicate === predicate;
      return matchPredicateOrType && entry2.effect === effect;
    });

    if (entry) {
      entry.unsubscribe();

      if (options.cancelActive) {
        cancelActiveListeners(entry);
      }
    }

    return !!entry;
  };

  var notifyListener = function (entry, action, api, getOriginalState) {
    return __async(_this, null, function () {
      var internalTaskController, take, listenerError_1;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            internalTaskController = new AbortController();
            take = createTakePattern(startListening, internalTaskController.signal);
            _c.label = 1;

          case 1:
            _c.trys.push([1, 3, 4, 5]);

            entry.pending.add(internalTaskController);
            return [4
            /*yield*/
            , Promise.resolve(entry.effect(action, assign({}, api, {
              getOriginalState: getOriginalState,
              condition: function (predicate, timeout) {
                return take(predicate, timeout).then(Boolean);
              },
              take: take,
              delay: createDelay(internalTaskController.signal),
              pause: createPause(internalTaskController.signal),
              extra: extra,
              signal: internalTaskController.signal,
              fork: createFork(internalTaskController.signal),
              unsubscribe: entry.unsubscribe,
              subscribe: function () {
                listenerMap.set(entry.id, entry);
              },
              cancelActiveListeners: function () {
                entry.pending.forEach(function (controller, _, set) {
                  if (controller !== internalTaskController) {
                    abortControllerWithReason(controller, listenerCancelled);
                    set.delete(controller);
                  }
                });
              }
            })))];

          case 2:
            _c.sent();

            return [3
            /*break*/
            , 5];

          case 3:
            listenerError_1 = _c.sent();

            if (!(listenerError_1 instanceof TaskAbortError)) {
              safelyNotifyError(onError, listenerError_1, {
                raisedBy: "effect"
              });
            }

            return [3
            /*break*/
            , 5];

          case 4:
            abortControllerWithReason(internalTaskController, listenerCompleted);
            entry.pending.delete(internalTaskController);
            return [7
            /*endfinally*/
            ];

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  var clearListenerMiddleware = createClearListenerMiddleware(listenerMap);

  var middleware = function (api) {
    return function (next) {
      return function (action) {
        if (addListener.match(action)) {
          return startListening(action.payload);
        }

        if (clearAllListeners.match(action)) {
          clearListenerMiddleware();
          return;
        }

        if (removeListener.match(action)) {
          return stopListening(action.payload);
        }

        var originalState = api.getState();

        var getOriginalState = function () {
          if (originalState === INTERNAL_NIL_TOKEN) {
            throw new Error(alm + ": getOriginalState can only be called synchronously");
          }

          return originalState;
        };

        var result;

        try {
          result = next(action);

          if (listenerMap.size > 0) {
            var currentState = api.getState();
            var listenerEntries = Array.from(listenerMap.values());

            for (var _i = 0, listenerEntries_1 = listenerEntries; _i < listenerEntries_1.length; _i++) {
              var entry = listenerEntries_1[_i];
              var runListener = false;

              try {
                runListener = entry.predicate(action, currentState, originalState);
              } catch (predicateError) {
                runListener = false;
                safelyNotifyError(onError, predicateError, {
                  raisedBy: "predicate"
                });
              }

              if (!runListener) {
                continue;
              }

              notifyListener(entry, action, api, getOriginalState);
            }
          }
        } finally {
          originalState = INTERNAL_NIL_TOKEN;
        }

        return result;
      };
    };
  };

  return {
    middleware: middleware,
    startListening: startListening,
    stopListening: stopListening,
    clearListeners: clearListenerMiddleware
  };
} // src/index.ts


(0, _immer.enableES5)();
},{"immer":"node_modules/immer/dist/immer.esm.js","redux":"node_modules/redux/es/redux.js","reselect":"node_modules/reselect/es/index.js","redux-thunk":"node_modules/redux-thunk/es/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _toolkit = require("@reduxjs/toolkit");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { createStore } from "redux";
var divToggle = document.querySelector('.toggle');
var counter = document.querySelector('h1');
var btnIncrease = document.querySelector('#id');
var btnDecrease = document.querySelector('#decrease');
var TOGGLE_SWITCH = "TOGGLE_SWITCH";
var INCREASE = "INCREASE";
var DECREASE = "DECREASE";

var toggleSwitch = function toggleSwitch() {
  return {
    type: TOGGLE_SWITCH
  };
};

var increase = function increase(difference) {
  return {
    type: INCREASE,
    difference: difference
  };
};

var decrease = function decrease() {
  return {
    type: DECREASE
  };
};

var initialState = {
  toggle: false,
  counter: 0
}; // state가 undefined일 때는 initialState를 기본값으로 사용

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case TOGGLE_SWITCH:
      return _objectSpread(_objectSpread({}, state), {}, {
        // 불변성 유지를 해 주여야 한다.
        toggle: !state.toggle
      });

    case INCREASE:
      return _objectSpread(_objectSpread({}, state), {}, {
        counter: state.counter + action.difference
      });

    case DECREASE:
      return _objectSpread(_objectSpread({}, state), {}, {
        counter: state.counter - 1
      });

    default:
      return state;
  }
}

var store = (0, _toolkit.configureStore)(reducer);

var render = function render() {
  var state = store.getState(); // 현재 상태를 불러옴
  // 토글 처리 

  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  } // 카운터 처리


  counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onclick = function () {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = function () {
  store.dispatch(increase());
};

btnDecrease.onclick = function () {
  store.dispatch(decrease());
};
},{"@reduxjs/toolkit":"node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"}],"../../../Users/57swj/AppData/Roaming/nvm/v14.17.5/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "3561" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../Users/57swj/AppData/Roaming/nvm/v14.17.5/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/vanila-redux.e31bb0bc.js.map