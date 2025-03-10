'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (d, b) {
        d.__proto__ = b;
      }) ||
    function (d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== 'function' && b !== null)
    throw new TypeError(
      'Class extends value ' + String(b) + ' is not a constructor or null'
    );
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype =
    b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === 'function' &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
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
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var e = function (t, n) {
  return (
    (e =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }),
    e(t, n)
  );
};
function t(t, n) {
  if ('function' != typeof n && null !== n)
    throw new TypeError(
      'Class extends value ' + String(n) + ' is not a constructor or null'
    );
  function r() {
    this.constructor = t;
  }
  e(t, n),
    (t.prototype =
      null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
}
var n = function () {
  return (
    (n =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }),
    n.apply(this, arguments)
  );
};
function r(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  }
  return n;
}
function o(e, t, n, r) {
  return new (n || (n = Promise))(function (o, i) {
    function a(e) {
      try {
        s(r.next(e));
      } catch (e) {
        i(e);
      }
    }
    function c(e) {
      try {
        s(r.throw(e));
      } catch (e) {
        i(e);
      }
    }
    function s(e) {
      var t;
      e.done
        ? o(e.value)
        : ((t = e.value),
          t instanceof n
            ? t
            : new n(function (e) {
                e(t);
              })).then(a, c);
    }
    s((r = r.apply(e, t || [])).next());
  });
}
function i(e, t) {
  var n,
    r,
    o,
    i,
    a = {
      label: 0,
      sent: function () {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (i = { next: c(0), throw: c(1), return: c(2) }),
    'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function c(i) {
    return function (c) {
      return (function (i) {
        if (n) throw new TypeError('Generator is already executing.');
        for (; a; )
          try {
            if (
              ((n = 1),
              r &&
                (o =
                  2 & i[0]
                    ? r.return
                    : i[0]
                    ? r.throw || ((o = r.return) && o.call(r), 0)
                    : r.next) &&
                !(o = o.call(r, i[1])).done)
            )
              return o;
            switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
              case 0:
              case 1:
                o = i;
                break;
              case 4:
                return a.label++, { value: i[1], done: !1 };
              case 5:
                a.label++, (r = i[1]), (i = [0]);
                continue;
              case 7:
                (i = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (
                  !((o = a.trys),
                  (o = o.length > 0 && o[o.length - 1]) ||
                    (6 !== i[0] && 2 !== i[0]))
                ) {
                  a = 0;
                  continue;
                }
                if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                  a.label = i[1];
                  break;
                }
                if (6 === i[0] && a.label < o[1]) {
                  (a.label = o[1]), (o = i);
                  break;
                }
                if (o && a.label < o[2]) {
                  (a.label = o[2]), a.ops.push(i);
                  break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            i = t.call(e, a);
          } catch (e) {
            (i = [6, e]), (r = 0);
          } finally {
            n = o = 0;
          }
        if (5 & i[0]) throw i[1];
        return { value: i[0] ? i[1] : void 0, done: !0 };
      })([i, c]);
    };
  }
}
function a(e, t) {
  var n = 'function' == typeof Symbol && e[Symbol.iterator];
  if (!n) return e;
  var r,
    o,
    i = n.call(e),
    a = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
  } catch (e) {
    o = { error: e };
  } finally {
    try {
      r && !r.done && (n = i.return) && n.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function c(e, t, n) {
  if (n || 2 === arguments.length)
    for (var r, o = 0, i = t.length; o < i; o++)
      (!r && o in t) ||
        (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
  return e.concat(r || Array.prototype.slice.call(t));
}
var s =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
function u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function l(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var f,
  d,
  h = function (e) {
    return e && e.Math == Math && e;
  },
  p =
    h('object' == typeof globalThis && globalThis) ||
    h('object' == typeof window && window) ||
    h('object' == typeof self && self) ||
    h('object' == typeof s && s) ||
    (function () {
      return this;
    })() ||
    Function('return this')(),
  y = function (e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
  v = !y(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  m = !y(function () {
    var e = function () {}.bind();
    return 'function' != typeof e || e.hasOwnProperty('prototype');
  }),
  b = Function.prototype.call,
  g = m
    ? b.bind(b)
    : function () {
        return b.apply(b, arguments);
      },
  w = {}.propertyIsEnumerable,
  S = Object.getOwnPropertyDescriptor,
  k =
    S && !w.call({ 1: 2 }, 1)
      ? function (e) {
          var t = S(this, e);
          return !!t && t.enumerable;
        }
      : w,
  _ = { f: k },
  I = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t,
    };
  },
  O = Function.prototype,
  x = O.bind,
  T = O.call,
  C = m && x.bind(T, T),
  j = m
    ? function (e) {
        return e && C(e);
      }
    : function (e) {
        return (
          e &&
          function () {
            return T.apply(e, arguments);
          }
        );
      },
  R = j({}.toString),
  W = j(''.slice),
  L = function (e) {
    return W(R(e), 8, -1);
  },
  E = Object,
  Z = j(''.split),
  G = y(function () {
    return !E('z').propertyIsEnumerable(0);
  })
    ? function (e) {
        return 'String' == L(e) ? Z(e, '') : E(e);
      }
    : E,
  P = TypeError,
  A = function (e) {
    if (null == e) throw P("Can't call method on " + e);
    return e;
  },
  F = function (e) {
    return G(A(e));
  },
  X = function (e) {
    return 'function' == typeof e;
  },
  K = function (e) {
    return 'object' == typeof e ? null !== e : X(e);
  },
  U = function (e) {
    return X(e) ? e : void 0;
  },
  N = function (e, t) {
    return arguments.length < 2 ? U(p[e]) : p[e] && p[e][t];
  },
  Y = j({}.isPrototypeOf),
  H = N('navigator', 'userAgent') || '',
  J = p.process,
  V = p.Deno,
  D = (J && J.versions) || (V && V.version),
  z = D && D.v8;
z && (d = (f = z.split('.'))[0] > 0 && f[0] < 4 ? 1 : +(f[0] + f[1])),
  !d &&
    H &&
    (!(f = H.match(/Edge\/(\d+)/)) || f[1] >= 74) &&
    (f = H.match(/Chrome\/(\d+)/)) &&
    (d = +f[1]);
var M = d,
  B =
    !!Object.getOwnPropertySymbols &&
    !y(function () {
      var e = Symbol();
      return (
        !String(e) ||
        !(Object(e) instanceof Symbol) ||
        (!Symbol.sham && M && M < 41)
      );
    }),
  Q = B && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  q = Object,
  $ = Q
    ? function (e) {
        return 'symbol' == typeof e;
      }
    : function (e) {
        var t = N('Symbol');
        return X(t) && Y(t.prototype, q(e));
      },
  ee = String,
  te = function (e) {
    try {
      return ee(e);
    } catch (e) {
      return 'Object';
    }
  },
  ne = TypeError,
  re = function (e) {
    if (X(e)) return e;
    throw ne(te(e) + ' is not a function');
  },
  oe = function (e, t) {
    var n = e[t];
    return null == n ? void 0 : re(n);
  },
  ie = TypeError,
  ae = Object.defineProperty,
  ce = function (e, t) {
    try {
      ae(p, e, { value: t, configurable: !0, writable: !0 });
    } catch (n) {
      p[e] = t;
    }
    return t;
  },
  se = p['__core-js_shared__'] || ce('__core-js_shared__', {}),
  ue = l(function (e) {
    (e.exports = function (e, t) {
      return se[e] || (se[e] = void 0 !== t ? t : {});
    })('versions', []).push({
      version: '3.23.5',
      mode: 'global',
      copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
      license: 'https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE',
      source: 'https://github.com/zloirock/core-js',
    });
  }),
  le = Object,
  fe = function (e) {
    return le(A(e));
  },
  de = j({}.hasOwnProperty),
  he =
    Object.hasOwn ||
    function (e, t) {
      return de(fe(e), t);
    },
  pe = 0,
  ye = Math.random(),
  ve = j((1).toString),
  me = function (e) {
    return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + ve(++pe + ye, 36);
  },
  be = ue('wks'),
  ge = p.Symbol,
  we = ge && ge.for,
  Se = Q ? ge : (ge && ge.withoutSetter) || me,
  ke = function (e) {
    if (!he(be, e) || (!B && 'string' != typeof be[e])) {
      var t = 'Symbol.' + e;
      B && he(ge, e) ? (be[e] = ge[e]) : (be[e] = Q && we ? we(t) : Se(t));
    }
    return be[e];
  },
  _e = TypeError,
  Ie = ke('toPrimitive'),
  Oe = function (e, t) {
    if (!K(e) || $(e)) return e;
    var n,
      r = oe(e, Ie);
    if (r) {
      if ((void 0 === t && (t = 'default'), (n = g(r, e, t)), !K(n) || $(n)))
        return n;
      throw _e("Can't convert object to primitive value");
    }
    return (
      void 0 === t && (t = 'number'),
      (function (e, t) {
        var n, r;
        if ('string' === t && X((n = e.toString)) && !K((r = g(n, e))))
          return r;
        if (X((n = e.valueOf)) && !K((r = g(n, e)))) return r;
        if ('string' !== t && X((n = e.toString)) && !K((r = g(n, e))))
          return r;
        throw ie("Can't convert object to primitive value");
      })(e, t)
    );
  },
  xe = function (e) {
    var t = Oe(e, 'string');
    return $(t) ? t : t + '';
  },
  Te = p.document,
  Ce = K(Te) && K(Te.createElement),
  je = function (e) {
    return Ce ? Te.createElement(e) : {};
  },
  Re =
    !v &&
    !y(function () {
      return (
        7 !=
        Object.defineProperty(je('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  We = Object.getOwnPropertyDescriptor,
  Le = {
    f: v
      ? We
      : function (e, t) {
          if (((e = F(e)), (t = xe(t)), Re))
            try {
              return We(e, t);
            } catch (e) {}
          if (he(e, t)) return I(!g(_.f, e, t), e[t]);
        },
  },
  Ee =
    v &&
    y(function () {
      return (
        42 !=
        Object.defineProperty(function () {}, 'prototype', {
          value: 42,
          writable: !1,
        }).prototype
      );
    }),
  Ze = String,
  Ge = TypeError,
  Pe = function (e) {
    if (K(e)) return e;
    throw Ge(Ze(e) + ' is not an object');
  },
  Ae = TypeError,
  Fe = Object.defineProperty,
  Xe = Object.getOwnPropertyDescriptor,
  Ke = {
    f: v
      ? Ee
        ? function (e, t, n) {
            if (
              (Pe(e),
              (t = xe(t)),
              Pe(n),
              'function' == typeof e &&
                'prototype' === t &&
                'value' in n &&
                'writable' in n &&
                !n.writable)
            ) {
              var r = Xe(e, t);
              r &&
                r.writable &&
                ((e[t] = n.value),
                (n = {
                  configurable:
                    'configurable' in n ? n.configurable : r.configurable,
                  enumerable: 'enumerable' in n ? n.enumerable : r.enumerable,
                  writable: !1,
                }));
            }
            return Fe(e, t, n);
          }
        : Fe
      : function (e, t, n) {
          if ((Pe(e), (t = xe(t)), Pe(n), Re))
            try {
              return Fe(e, t, n);
            } catch (e) {}
          if ('get' in n || 'set' in n) throw Ae('Accessors not supported');
          return 'value' in n && (e[t] = n.value), e;
        },
  },
  Ue = v
    ? function (e, t, n) {
        return Ke.f(e, t, I(1, n));
      }
    : function (e, t, n) {
        return (e[t] = n), e;
      },
  Ne = Function.prototype,
  Ye = v && Object.getOwnPropertyDescriptor,
  He = he(Ne, 'name'),
  Je = {
    EXISTS: He,
    PROPER: He && 'something' === function () {}.name,
    CONFIGURABLE: He && (!v || (v && Ye(Ne, 'name').configurable)),
  },
  Ve = j(Function.toString);
X(se.inspectSource) ||
  (se.inspectSource = function (e) {
    return Ve(e);
  });
var De,
  ze,
  Me,
  Be = se.inspectSource,
  Qe = p.WeakMap,
  qe = X(Qe) && /native code/.test(Be(Qe)),
  $e = ue('keys'),
  et = function (e) {
    return $e[e] || ($e[e] = me(e));
  },
  tt = {},
  nt = p.TypeError,
  rt = p.WeakMap;
if (qe || se.state) {
  var ot = se.state || (se.state = new rt()),
    it = j(ot.get),
    at = j(ot.has),
    ct = j(ot.set);
  (De = function (e, t) {
    if (at(ot, e)) throw new nt('Object already initialized');
    return (t.facade = e), ct(ot, e, t), t;
  }),
    (ze = function (e) {
      return it(ot, e) || {};
    }),
    (Me = function (e) {
      return at(ot, e);
    });
} else {
  var st = et('state');
  (tt[st] = !0),
    (De = function (e, t) {
      if (he(e, st)) throw new nt('Object already initialized');
      return (t.facade = e), Ue(e, st, t), t;
    }),
    (ze = function (e) {
      return he(e, st) ? e[st] : {};
    }),
    (Me = function (e) {
      return he(e, st);
    });
}
var ut = {
    set: De,
    get: ze,
    has: Me,
    enforce: function (e) {
      return Me(e) ? ze(e) : De(e, {});
    },
    getterFor: function (e) {
      return function (t) {
        var n;
        if (!K(t) || (n = ze(t)).type !== e)
          throw nt('Incompatible receiver, ' + e + ' required');
        return n;
      };
    },
  },
  lt = l(function (e) {
    var t = Je.CONFIGURABLE,
      n = ut.enforce,
      r = ut.get,
      o = Object.defineProperty,
      i =
        v &&
        !y(function () {
          return 8 !== o(function () {}, 'length', { value: 8 }).length;
        }),
      a = String(String).split('String'),
      c = (e.exports = function (e, r, c) {
        'Symbol(' === String(r).slice(0, 7) &&
          (r = '[' + String(r).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
          c && c.getter && (r = 'get ' + r),
          c && c.setter && (r = 'set ' + r),
          (!he(e, 'name') || (t && e.name !== r)) &&
            (v ? o(e, 'name', { value: r, configurable: !0 }) : (e.name = r)),
          i &&
            c &&
            he(c, 'arity') &&
            e.length !== c.arity &&
            o(e, 'length', { value: c.arity });
        try {
          c && he(c, 'constructor') && c.constructor
            ? v && o(e, 'prototype', { writable: !1 })
            : e.prototype && (e.prototype = void 0);
        } catch (e) {}
        var s = n(e);
        return (
          he(s, 'source') || (s.source = a.join('string' == typeof r ? r : '')),
          e
        );
      });
    Function.prototype.toString = c(function () {
      return (X(this) && r(this).source) || Be(this);
    }, 'toString');
  }),
  ft = function (e, t, n, r) {
    r || (r = {});
    var o = r.enumerable,
      i = void 0 !== r.name ? r.name : t;
    if ((X(n) && lt(n, i, r), r.global)) o ? (e[t] = n) : ce(t, n);
    else {
      try {
        r.unsafe ? e[t] && (o = !0) : delete e[t];
      } catch (e) {}
      o
        ? (e[t] = n)
        : Ke.f(e, t, {
            value: n,
            enumerable: !1,
            configurable: !r.nonConfigurable,
            writable: !r.nonWritable,
          });
    }
    return e;
  },
  dt = Math.ceil,
  ht = Math.floor,
  pt =
    Math.trunc ||
    function (e) {
      var t = +e;
      return (t > 0 ? ht : dt)(t);
    },
  yt = function (e) {
    var t = +e;
    return t != t || 0 === t ? 0 : pt(t);
  },
  vt = Math.max,
  mt = Math.min,
  bt = function (e, t) {
    var n = yt(e);
    return n < 0 ? vt(n + t, 0) : mt(n, t);
  },
  gt = Math.min,
  wt = function (e) {
    return e > 0 ? gt(yt(e), 9007199254740991) : 0;
  },
  St = function (e) {
    return wt(e.length);
  },
  kt = function (e) {
    return function (t, n, r) {
      var o,
        i = F(t),
        a = St(i),
        c = bt(r, a);
      if (e && n != n) {
        for (; a > c; ) if ((o = i[c++]) != o) return !0;
      } else
        for (; a > c; c++) if ((e || c in i) && i[c] === n) return e || c || 0;
      return !e && -1;
    };
  },
  _t = { includes: kt(!0), indexOf: kt(!1) },
  It = _t.indexOf,
  Ot = j([].push),
  xt = function (e, t) {
    var n,
      r = F(e),
      o = 0,
      i = [];
    for (n in r) !he(tt, n) && he(r, n) && Ot(i, n);
    for (; t.length > o; ) he(r, (n = t[o++])) && (~It(i, n) || Ot(i, n));
    return i;
  },
  Tt = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ],
  Ct = Tt.concat('length', 'prototype'),
  jt = {
    f:
      Object.getOwnPropertyNames ||
      function (e) {
        return xt(e, Ct);
      },
  },
  Rt = { f: Object.getOwnPropertySymbols },
  Wt = j([].concat),
  Lt =
    N('Reflect', 'ownKeys') ||
    function (e) {
      var t = jt.f(Pe(e)),
        n = Rt.f;
      return n ? Wt(t, n(e)) : t;
    },
  Et = function (e, t, n) {
    for (var r = Lt(t), o = Ke.f, i = Le.f, a = 0; a < r.length; a++) {
      var c = r[a];
      he(e, c) || (n && he(n, c)) || o(e, c, i(t, c));
    }
  },
  Zt = /#|\.prototype\./,
  Gt = function (e, t) {
    var n = At[Pt(e)];
    return n == Xt || (n != Ft && (X(t) ? y(t) : !!t));
  },
  Pt = (Gt.normalize = function (e) {
    return String(e).replace(Zt, '.').toLowerCase();
  }),
  At = (Gt.data = {}),
  Ft = (Gt.NATIVE = 'N'),
  Xt = (Gt.POLYFILL = 'P'),
  Kt = Gt,
  Ut = Le.f,
  Nt = function (e, t) {
    var n,
      r,
      o,
      i,
      a,
      c = e.target,
      s = e.global,
      u = e.stat;
    if ((n = s ? p : u ? p[c] || ce(c, {}) : (p[c] || {}).prototype))
      for (r in t) {
        if (
          ((i = t[r]),
          (o = e.dontCallGetSet ? (a = Ut(n, r)) && a.value : n[r]),
          !Kt(s ? r : c + (u ? '.' : '#') + r, e.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          Et(i, o);
        }
        (e.sham || (o && o.sham)) && Ue(i, 'sham', !0), ft(n, r, i, e);
      }
  },
  Yt = {};
Yt[ke('toStringTag')] = 'z';
var Ht,
  Jt = '[object z]' === String(Yt),
  Vt = ke('toStringTag'),
  Dt = Object,
  zt =
    'Arguments' ==
    L(
      (function () {
        return arguments;
      })()
    ),
  Mt = Jt
    ? L
    : function (e) {
        var t, n, r;
        return void 0 === e
          ? 'Undefined'
          : null === e
          ? 'Null'
          : 'string' ==
            typeof (n = (function (e, t) {
              try {
                return e[t];
              } catch (e) {}
            })((t = Dt(e)), Vt))
          ? n
          : zt
          ? L(t)
          : 'Object' == (r = L(t)) && X(t.callee)
          ? 'Arguments'
          : r;
      },
  Bt = String,
  Qt = function (e) {
    if ('Symbol' === Mt(e))
      throw TypeError('Cannot convert a Symbol value to a string');
    return Bt(e);
  },
  qt = ke('match'),
  $t = TypeError,
  en = function (e) {
    if (
      (function (e) {
        var t;
        return K(e) && (void 0 !== (t = e[qt]) ? !!t : 'RegExp' == L(e));
      })(e)
    )
      throw $t("The method doesn't accept regular expressions");
    return e;
  },
  tn = ke('match'),
  nn = function (e) {
    var t = /./;
    try {
      '/./'[e](t);
    } catch (n) {
      try {
        return (t[tn] = !1), '/./'[e](t);
      } catch (e) {}
    }
    return !1;
  },
  rn = Le.f,
  on = j(''.startsWith),
  an = j(''.slice),
  cn = Math.min,
  sn = nn('startsWith'),
  un = !(sn || ((Ht = rn(String.prototype, 'startsWith')), !Ht || Ht.writable));
Nt(
  { target: 'String', proto: !0, forced: !un && !sn },
  {
    startsWith: function (e) {
      var t = Qt(A(this));
      en(e);
      var n = wt(cn(arguments.length > 1 ? arguments[1] : void 0, t.length)),
        r = Qt(e);
      return on ? on(t, r, n) : an(t, n, n + r.length) === r;
    },
  }
);
var ln = function (e, t) {
  return j(p[e].prototype[t]);
};
ln('String', 'startsWith');
var fn =
    Array.isArray ||
    function (e) {
      return 'Array' == L(e);
    },
  dn = TypeError,
  hn = function (e) {
    if (e > 9007199254740991) throw dn('Maximum allowed index exceeded');
    return e;
  },
  pn = function (e, t, n) {
    var r = xe(t);
    r in e ? Ke.f(e, r, I(0, n)) : (e[r] = n);
  },
  yn = function () {},
  vn = [],
  mn = N('Reflect', 'construct'),
  bn = /^\s*(?:class|function)\b/,
  gn = j(bn.exec),
  wn = !bn.exec(yn),
  Sn = function (e) {
    if (!X(e)) return !1;
    try {
      return mn(yn, vn, e), !0;
    } catch (e) {
      return !1;
    }
  },
  kn = function (e) {
    if (!X(e)) return !1;
    switch (Mt(e)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return !1;
    }
    try {
      return wn || !!gn(bn, Be(e));
    } catch (e) {
      return !0;
    }
  };
kn.sham = !0;
var _n,
  In =
    !mn ||
    y(function () {
      var e;
      return (
        Sn(Sn.call) ||
        !Sn(Object) ||
        !Sn(function () {
          e = !0;
        }) ||
        e
      );
    })
      ? kn
      : Sn,
  On = ke('species'),
  xn = Array,
  Tn = function (e, t) {
    return new ((function (e) {
      var t;
      return (
        fn(e) &&
          ((t = e.constructor),
          ((In(t) && (t === xn || fn(t.prototype))) ||
            (K(t) && null === (t = t[On]))) &&
            (t = void 0)),
        void 0 === t ? xn : t
      );
    })(e))(0 === t ? 0 : t);
  },
  Cn = ke('species'),
  jn = ke('isConcatSpreadable'),
  Rn =
    M >= 51 ||
    !y(function () {
      var e = [];
      return (e[jn] = !1), e.concat()[0] !== e;
    }),
  Wn =
    ((_n = 'concat'),
    M >= 51 ||
      !y(function () {
        var e = [];
        return (
          ((e.constructor = {})[Cn] = function () {
            return { foo: 1 };
          }),
          1 !== e[_n](Boolean).foo
        );
      })),
  Ln = function (e) {
    if (!K(e)) return !1;
    var t = e[jn];
    return void 0 !== t ? !!t : fn(e);
  };
Nt(
  { target: 'Array', proto: !0, arity: 1, forced: !Rn || !Wn },
  {
    concat: function (e) {
      var t,
        n,
        r,
        o,
        i,
        a = fe(this),
        c = Tn(a, 0),
        s = 0;
      for (t = -1, r = arguments.length; t < r; t++)
        if (Ln((i = -1 === t ? a : arguments[t])))
          for (o = St(i), hn(s + o), n = 0; n < o; n++, s++)
            n in i && pn(c, s, i[n]);
        else hn(s + 1), pn(c, s++, i);
      return (c.length = s), c;
    },
  }
);
var En = Jt
  ? {}.toString
  : function () {
      return '[object ' + Mt(this) + ']';
    };
Jt || ft(Object.prototype, 'toString', En, { unsafe: !0 });
var Zn,
  Gn =
    Object.keys ||
    function (e) {
      return xt(e, Tt);
    },
  Pn =
    v && !Ee
      ? Object.defineProperties
      : function (e, t) {
          Pe(e);
          for (var n, r = F(t), o = Gn(t), i = o.length, a = 0; i > a; )
            Ke.f(e, (n = o[a++]), r[n]);
          return e;
        },
  An = { f: Pn },
  Fn = N('document', 'documentElement'),
  Xn = et('IE_PROTO'),
  Kn = function () {},
  Un = function (e) {
    return '<script>' + e + '</script>';
  },
  Nn = function (e) {
    e.write(Un('')), e.close();
    var t = e.parentWindow.Object;
    return (e = null), t;
  },
  Yn = function () {
    try {
      Zn = new ActiveXObject('htmlfile');
    } catch (e) {}
    var e, t;
    Yn =
      'undefined' != typeof document
        ? document.domain && Zn
          ? Nn(Zn)
          : (((t = je('iframe')).style.display = 'none'),
            Fn.appendChild(t),
            (t.src = String('javascript:')),
            (e = t.contentWindow.document).open(),
            e.write(Un('document.F=Object')),
            e.close(),
            e.F)
        : Nn(Zn);
    for (var n = Tt.length; n--; ) delete Yn.prototype[Tt[n]];
    return Yn();
  };
tt[Xn] = !0;
var Hn =
    Object.create ||
    function (e, t) {
      var n;
      return (
        null !== e
          ? ((Kn.prototype = Pe(e)),
            (n = new Kn()),
            (Kn.prototype = null),
            (n[Xn] = e))
          : (n = Yn()),
        void 0 === t ? n : An.f(n, t)
      );
    },
  Jn = Array,
  Vn = Math.max,
  Dn = jt.f,
  zn =
    'object' == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  Mn = function (e) {
    try {
      return Dn(e);
    } catch (e) {
      return (function (e, t, n) {
        for (
          var r = St(e),
            o = bt(t, r),
            i = bt(void 0 === n ? r : n, r),
            a = Jn(Vn(i - o, 0)),
            c = 0;
          o < i;
          o++, c++
        )
          pn(a, c, e[o]);
        return (a.length = c), a;
      })(zn);
    }
  },
  Bn = {
    f: function (e) {
      return zn && 'Window' == L(e) ? Mn(e) : Dn(F(e));
    },
  },
  Qn = { f: ke },
  qn = p,
  $n = Ke.f,
  er = function (e) {
    var t = qn.Symbol || (qn.Symbol = {});
    he(t, e) || $n(t, e, { value: Qn.f(e) });
  },
  tr = function () {
    var e = N('Symbol'),
      t = e && e.prototype,
      n = t && t.valueOf,
      r = ke('toPrimitive');
    t &&
      !t[r] &&
      ft(
        t,
        r,
        function (e) {
          return g(n, this);
        },
        { arity: 1 }
      );
  },
  nr = Ke.f,
  rr = ke('toStringTag'),
  or = function (e, t, n) {
    e && !n && (e = e.prototype),
      e && !he(e, rr) && nr(e, rr, { configurable: !0, value: t });
  },
  ir = j(j.bind),
  ar = function (e, t) {
    return (
      re(e),
      void 0 === t
        ? e
        : m
        ? ir(e, t)
        : function () {
            return e.apply(t, arguments);
          }
    );
  },
  cr = j([].push),
  sr = function (e) {
    var t = 1 == e,
      n = 2 == e,
      r = 3 == e,
      o = 4 == e,
      i = 6 == e,
      a = 7 == e,
      c = 5 == e || i;
    return function (s, u, l, f) {
      for (
        var d,
          h,
          p = fe(s),
          y = G(p),
          v = ar(u, l),
          m = St(y),
          b = 0,
          g = f || Tn,
          w = t ? g(s, m) : n || a ? g(s, 0) : void 0;
        m > b;
        b++
      )
        if ((c || b in y) && ((h = v((d = y[b]), b, p)), e))
          if (t) w[b] = h;
          else if (h)
            switch (e) {
              case 3:
                return !0;
              case 5:
                return d;
              case 6:
                return b;
              case 2:
                cr(w, d);
            }
          else
            switch (e) {
              case 4:
                return !1;
              case 7:
                cr(w, d);
            }
      return i ? -1 : r || o ? o : w;
    };
  },
  ur = {
    forEach: sr(0),
    map: sr(1),
    filter: sr(2),
    some: sr(3),
    every: sr(4),
    find: sr(5),
    findIndex: sr(6),
    filterReject: sr(7),
  }.forEach,
  lr = et('hidden'),
  fr = ut.set,
  dr = ut.getterFor('Symbol'),
  hr = Object.prototype,
  pr = p.Symbol,
  yr = pr && pr.prototype,
  vr = p.TypeError,
  mr = p.QObject,
  br = Le.f,
  gr = Ke.f,
  wr = Bn.f,
  Sr = _.f,
  kr = j([].push),
  _r = ue('symbols'),
  Ir = ue('op-symbols'),
  Or = ue('wks'),
  xr = !mr || !mr.prototype || !mr.prototype.findChild,
  Tr =
    v &&
    y(function () {
      return (
        7 !=
        Hn(
          gr({}, 'a', {
            get: function () {
              return gr(this, 'a', { value: 7 }).a;
            },
          })
        ).a
      );
    })
      ? function (e, t, n) {
          var r = br(hr, t);
          r && delete hr[t], gr(e, t, n), r && e !== hr && gr(hr, t, r);
        }
      : gr,
  Cr = function (e, t) {
    var n = (_r[e] = Hn(yr));
    return (
      fr(n, { type: 'Symbol', tag: e, description: t }),
      v || (n.description = t),
      n
    );
  },
  jr = function (e, t, n) {
    e === hr && jr(Ir, t, n), Pe(e);
    var r = xe(t);
    return (
      Pe(n),
      he(_r, r)
        ? (n.enumerable
            ? (he(e, lr) && e[lr][r] && (e[lr][r] = !1),
              (n = Hn(n, { enumerable: I(0, !1) })))
            : (he(e, lr) || gr(e, lr, I(1, {})), (e[lr][r] = !0)),
          Tr(e, r, n))
        : gr(e, r, n)
    );
  },
  Rr = function (e, t) {
    Pe(e);
    var n = F(t),
      r = Gn(n).concat(Zr(n));
    return (
      ur(r, function (t) {
        (v && !g(Wr, n, t)) || jr(e, t, n[t]);
      }),
      e
    );
  },
  Wr = function (e) {
    var t = xe(e),
      n = g(Sr, this, t);
    return (
      !(this === hr && he(_r, t) && !he(Ir, t)) &&
      (!(n || !he(this, t) || !he(_r, t) || (he(this, lr) && this[lr][t])) || n)
    );
  },
  Lr = function (e, t) {
    var n = F(e),
      r = xe(t);
    if (n !== hr || !he(_r, r) || he(Ir, r)) {
      var o = br(n, r);
      return (
        !o || !he(_r, r) || (he(n, lr) && n[lr][r]) || (o.enumerable = !0), o
      );
    }
  },
  Er = function (e) {
    var t = wr(F(e)),
      n = [];
    return (
      ur(t, function (e) {
        he(_r, e) || he(tt, e) || kr(n, e);
      }),
      n
    );
  },
  Zr = function (e) {
    var t = e === hr,
      n = wr(t ? Ir : F(e)),
      r = [];
    return (
      ur(n, function (e) {
        !he(_r, e) || (t && !he(hr, e)) || kr(r, _r[e]);
      }),
      r
    );
  };
B ||
  ((yr = (pr = function () {
    if (Y(yr, this)) throw vr('Symbol is not a constructor');
    var e =
        arguments.length && void 0 !== arguments[0] ? Qt(arguments[0]) : void 0,
      t = me(e),
      n = function (e) {
        this === hr && g(n, Ir, e),
          he(this, lr) && he(this[lr], t) && (this[lr][t] = !1),
          Tr(this, t, I(1, e));
      };
    return v && xr && Tr(hr, t, { configurable: !0, set: n }), Cr(t, e);
  }).prototype),
  ft(yr, 'toString', function () {
    return dr(this).tag;
  }),
  ft(pr, 'withoutSetter', function (e) {
    return Cr(me(e), e);
  }),
  (_.f = Wr),
  (Ke.f = jr),
  (An.f = Rr),
  (Le.f = Lr),
  (jt.f = Bn.f = Er),
  (Rt.f = Zr),
  (Qn.f = function (e) {
    return Cr(ke(e), e);
  }),
  v &&
    (gr(yr, 'description', {
      configurable: !0,
      get: function () {
        return dr(this).description;
      },
    }),
    ft(hr, 'propertyIsEnumerable', Wr, { unsafe: !0 }))),
  Nt(
    { global: !0, constructor: !0, wrap: !0, forced: !B, sham: !B },
    { Symbol: pr }
  ),
  ur(Gn(Or), function (e) {
    er(e);
  }),
  Nt(
    { target: 'Symbol', stat: !0, forced: !B },
    {
      useSetter: function () {
        xr = !0;
      },
      useSimple: function () {
        xr = !1;
      },
    }
  ),
  Nt(
    { target: 'Object', stat: !0, forced: !B, sham: !v },
    {
      create: function (e, t) {
        return void 0 === t ? Hn(e) : Rr(Hn(e), t);
      },
      defineProperty: jr,
      defineProperties: Rr,
      getOwnPropertyDescriptor: Lr,
    }
  ),
  Nt({ target: 'Object', stat: !0, forced: !B }, { getOwnPropertyNames: Er }),
  tr(),
  or(pr, 'Symbol'),
  (tt[lr] = !0);
var Gr = B && !!Symbol.for && !!Symbol.keyFor,
  Pr = ue('string-to-symbol-registry'),
  Ar = ue('symbol-to-string-registry');
Nt(
  { target: 'Symbol', stat: !0, forced: !Gr },
  {
    for: function (e) {
      var t = Qt(e);
      if (he(Pr, t)) return Pr[t];
      var n = N('Symbol')(t);
      return (Pr[t] = n), (Ar[n] = t), n;
    },
  }
);
var Fr = ue('symbol-to-string-registry');
Nt(
  { target: 'Symbol', stat: !0, forced: !Gr },
  {
    keyFor: function (e) {
      if (!$(e)) throw TypeError(te(e) + ' is not a symbol');
      if (he(Fr, e)) return Fr[e];
    },
  }
);
var Xr = Function.prototype,
  Kr = Xr.apply,
  Ur = Xr.call,
  Nr =
    ('object' == typeof Reflect && Reflect.apply) ||
    (m
      ? Ur.bind(Kr)
      : function () {
          return Ur.apply(Kr, arguments);
        }),
  Yr = j([].slice),
  Hr = N('JSON', 'stringify'),
  Jr = j(/./.exec),
  Vr = j(''.charAt),
  Dr = j(''.charCodeAt),
  zr = j(''.replace),
  Mr = j((1).toString),
  Br = /[\uD800-\uDFFF]/g,
  Qr = /^[\uD800-\uDBFF]$/,
  qr = /^[\uDC00-\uDFFF]$/,
  $r =
    !B ||
    y(function () {
      var e = N('Symbol')();
      return (
        '[null]' != Hr([e]) || '{}' != Hr({ a: e }) || '{}' != Hr(Object(e))
      );
    }),
  eo = y(function () {
    return (
      '"\\udf06\\ud834"' !== Hr('\udf06\ud834') || '"\\udead"' !== Hr('\udead')
    );
  }),
  to = function (e, t) {
    var n = Yr(arguments),
      r = t;
    if ((K(t) || void 0 !== e) && !$(e))
      return (
        fn(t) ||
          (t = function (e, t) {
            if ((X(r) && (t = g(r, this, e, t)), !$(t))) return t;
          }),
        (n[1] = t),
        Nr(Hr, null, n)
      );
  },
  no = function (e, t, n) {
    var r = Vr(n, t - 1),
      o = Vr(n, t + 1);
    return (Jr(Qr, e) && !Jr(qr, o)) || (Jr(qr, e) && !Jr(Qr, r))
      ? '\\u' + Mr(Dr(e, 0), 16)
      : e;
  };
Hr &&
  Nt(
    { target: 'JSON', stat: !0, arity: 3, forced: $r || eo },
    {
      stringify: function (e, t, n) {
        var r = Yr(arguments),
          o = Nr($r ? to : Hr, null, r);
        return eo && 'string' == typeof o ? zr(o, Br, no) : o;
      },
    }
  );
var ro =
  !B ||
  y(function () {
    Rt.f(1);
  });
Nt(
  { target: 'Object', stat: !0, forced: ro },
  {
    getOwnPropertySymbols: function (e) {
      var t = Rt.f;
      return t ? t(fe(e)) : [];
    },
  }
),
  er('asyncIterator');
var oo = Ke.f,
  io = p.Symbol,
  ao = io && io.prototype;
if (v && X(io) && (!('description' in ao) || void 0 !== io().description)) {
  var co = {},
    so = function () {
      var e =
          arguments.length < 1 || void 0 === arguments[0]
            ? void 0
            : Qt(arguments[0]),
        t = Y(ao, this) ? new io(e) : void 0 === e ? io() : io(e);
      return '' === e && (co[t] = !0), t;
    };
  Et(so, io), (so.prototype = ao), (ao.constructor = so);
  var uo = 'Symbol(test)' == String(io('test')),
    lo = j(ao.toString),
    fo = j(ao.valueOf),
    ho = /^Symbol\((.*)\)[^)]+$/,
    po = j(''.replace),
    yo = j(''.slice);
  oo(ao, 'description', {
    configurable: !0,
    get: function () {
      var e = fo(this),
        t = lo(e);
      if (he(co, e)) return '';
      var n = uo ? yo(t, 7, -1) : po(t, ho, '$1');
      return '' === n ? void 0 : n;
    },
  }),
    Nt({ global: !0, constructor: !0, forced: !0 }, { Symbol: so });
}
er('hasInstance'),
  er('isConcatSpreadable'),
  er('iterator'),
  er('match'),
  er('matchAll'),
  er('replace'),
  er('search'),
  er('species'),
  er('split'),
  er('toPrimitive'),
  tr(),
  er('toStringTag'),
  or(N('Symbol'), 'Symbol'),
  er('unscopables'),
  or(p.JSON, 'JSON', !0),
  or(Math, 'Math', !0),
  Nt({ global: !0 }, { Reflect: {} }),
  or(p.Reflect, 'Reflect', !0),
  qn.Symbol;
var vo,
  mo,
  bo,
  go = j(''.charAt),
  wo = j(''.charCodeAt),
  So = j(''.slice),
  ko = function (e) {
    return function (t, n) {
      var r,
        o,
        i = Qt(A(t)),
        a = yt(n),
        c = i.length;
      return a < 0 || a >= c
        ? e
          ? ''
          : void 0
        : (r = wo(i, a)) < 55296 ||
          r > 56319 ||
          a + 1 === c ||
          (o = wo(i, a + 1)) < 56320 ||
          o > 57343
        ? e
          ? go(i, a)
          : r
        : e
        ? So(i, a, a + 2)
        : o - 56320 + ((r - 55296) << 10) + 65536;
    };
  },
  _o = { codeAt: ko(!1), charAt: ko(!0) },
  Io = !y(function () {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    );
  }),
  Oo = et('IE_PROTO'),
  xo = Object,
  To = xo.prototype,
  Co = Io
    ? xo.getPrototypeOf
    : function (e) {
        var t = fe(e);
        if (he(t, Oo)) return t[Oo];
        var n = t.constructor;
        return X(n) && t instanceof n
          ? n.prototype
          : t instanceof xo
          ? To
          : null;
      },
  jo = ke('iterator'),
  Ro = !1;
[].keys &&
  ('next' in (bo = [].keys())
    ? (mo = Co(Co(bo))) !== Object.prototype && (vo = mo)
    : (Ro = !0));
var Wo =
  null == vo ||
  y(function () {
    var e = {};
    return vo[jo].call(e) !== e;
  });
Wo && (vo = {}),
  X(vo[jo]) ||
    ft(vo, jo, function () {
      return this;
    });
var Lo = { IteratorPrototype: vo, BUGGY_SAFARI_ITERATORS: Ro },
  Eo = {},
  Zo = Lo.IteratorPrototype,
  Go = function () {
    return this;
  },
  Po = String,
  Ao = TypeError,
  Fo =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var e,
            t = !1,
            n = {};
          try {
            (e = j(
              Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set
            ))(n, []),
              (t = n instanceof Array);
          } catch (e) {}
          return function (n, r) {
            return (
              Pe(n),
              (function (e) {
                if ('object' == typeof e || X(e)) return e;
                throw Ao("Can't set " + Po(e) + ' as a prototype');
              })(r),
              t ? e(n, r) : (n.__proto__ = r),
              n
            );
          };
        })()
      : void 0),
  Xo = Je.PROPER,
  Ko = Je.CONFIGURABLE,
  Uo = Lo.IteratorPrototype,
  No = Lo.BUGGY_SAFARI_ITERATORS,
  Yo = ke('iterator'),
  Ho = function () {
    return this;
  },
  Jo = function (e, t, n, r, o, i, a) {
    !(function (e, t, n, r) {
      var o = t + ' Iterator';
      (e.prototype = Hn(Zo, { next: I(+!r, n) })), or(e, o, !1), (Eo[o] = Go);
    })(n, t, r);
    var c,
      s,
      u,
      l = function (e) {
        if (e === o && y) return y;
        if (!No && e in h) return h[e];
        switch (e) {
          case 'keys':
          case 'values':
          case 'entries':
            return function () {
              return new n(this, e);
            };
        }
        return function () {
          return new n(this);
        };
      },
      f = t + ' Iterator',
      d = !1,
      h = e.prototype,
      p = h[Yo] || h['@@iterator'] || (o && h[o]),
      y = (!No && p) || l(o),
      v = ('Array' == t && h.entries) || p;
    if (
      (v &&
        (c = Co(v.call(new e()))) !== Object.prototype &&
        c.next &&
        (Co(c) !== Uo && (Fo ? Fo(c, Uo) : X(c[Yo]) || ft(c, Yo, Ho)),
        or(c, f, !0)),
      Xo &&
        'values' == o &&
        p &&
        'values' !== p.name &&
        (Ko
          ? Ue(h, 'name', 'values')
          : ((d = !0),
            (y = function () {
              return g(p, this);
            }))),
      o)
    )
      if (
        ((s = {
          values: l('values'),
          keys: i ? y : l('keys'),
          entries: l('entries'),
        }),
        a)
      )
        for (u in s) (No || d || !(u in h)) && ft(h, u, s[u]);
      else Nt({ target: t, proto: !0, forced: No || d }, s);
    return h[Yo] !== y && ft(h, Yo, y, { name: o }), (Eo[t] = y), s;
  },
  Vo = _o.charAt,
  Do = ut.set,
  zo = ut.getterFor('String Iterator');
Jo(
  String,
  'String',
  function (e) {
    Do(this, { type: 'String Iterator', string: Qt(e), index: 0 });
  },
  function () {
    var e,
      t = zo(this),
      n = t.string,
      r = t.index;
    return r >= n.length
      ? { value: void 0, done: !0 }
      : ((e = Vo(n, r)), (t.index += e.length), { value: e, done: !1 });
  }
);
var Mo = function (e, t, n) {
    var r, o;
    Pe(e);
    try {
      if (!(r = oe(e, 'return'))) {
        if ('throw' === t) throw n;
        return n;
      }
      r = g(r, e);
    } catch (e) {
      (o = !0), (r = e);
    }
    if ('throw' === t) throw n;
    if (o) throw r;
    return Pe(r), n;
  },
  Bo = function (e, t, n, r) {
    try {
      return r ? t(Pe(n)[0], n[1]) : t(n);
    } catch (t) {
      Mo(e, 'throw', t);
    }
  },
  Qo = ke('iterator'),
  qo = Array.prototype,
  $o = function (e) {
    return void 0 !== e && (Eo.Array === e || qo[Qo] === e);
  },
  ei = ke('iterator'),
  ti = function (e) {
    if (null != e) return oe(e, ei) || oe(e, '@@iterator') || Eo[Mt(e)];
  },
  ni = TypeError,
  ri = function (e, t) {
    var n = arguments.length < 2 ? ti(e) : t;
    if (re(n)) return Pe(g(n, e));
    throw ni(te(e) + ' is not iterable');
  },
  oi = Array,
  ii = ke('iterator'),
  ai = !1;
try {
  var ci = 0,
    si = {
      next: function () {
        return { done: !!ci++ };
      },
      return: function () {
        ai = !0;
      },
    };
  (si[ii] = function () {
    return this;
  }),
    Array.from(si, function () {
      throw 2;
    });
} catch (e) {}
var ui = function (e, t) {
    if (!t && !ai) return !1;
    var n = !1;
    try {
      var r = {};
      (r[ii] = function () {
        return {
          next: function () {
            return { done: (n = !0) };
          },
        };
      }),
        e(r);
    } catch (e) {}
    return n;
  },
  li = !ui(function (e) {
    Array.from(e);
  });
Nt(
  { target: 'Array', stat: !0, forced: li },
  {
    from: function (e) {
      var t = fe(e),
        n = In(this),
        r = arguments.length,
        o = r > 1 ? arguments[1] : void 0,
        i = void 0 !== o;
      i && (o = ar(o, r > 2 ? arguments[2] : void 0));
      var a,
        c,
        s,
        u,
        l,
        f,
        d = ti(t),
        h = 0;
      if (!d || (this === oi && $o(d)))
        for (a = St(t), c = n ? new this(a) : oi(a); a > h; h++)
          (f = i ? o(t[h], h) : t[h]), pn(c, h, f);
      else
        for (
          l = (u = ri(t, d)).next, c = n ? new this() : [];
          !(s = g(l, u)).done;
          h++
        )
          (f = i ? Bo(u, o, [s.value, h], !0) : s.value), pn(c, h, f);
      return (c.length = h), c;
    },
  }
),
  qn.Array.from;
var fi,
  di,
  hi,
  pi = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
  yi = Ke.f,
  vi = ut.enforce,
  mi = ut.get,
  bi = p.Int8Array,
  gi = bi && bi.prototype,
  wi = p.Uint8ClampedArray,
  Si = wi && wi.prototype,
  ki = bi && Co(bi),
  _i = gi && Co(gi),
  Ii = Object.prototype,
  Oi = p.TypeError,
  xi = ke('toStringTag'),
  Ti = me('TYPED_ARRAY_TAG'),
  Ci = pi && !!Fo && 'Opera' !== Mt(p.opera),
  ji = !1,
  Ri = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8,
  },
  Wi = { BigInt64Array: 8, BigUint64Array: 8 },
  Li = function (e) {
    var t = Co(e);
    if (K(t)) {
      var n = mi(t);
      return n && he(n, 'TypedArrayConstructor')
        ? n.TypedArrayConstructor
        : Li(t);
    }
  },
  Ei = function (e) {
    if (!K(e)) return !1;
    var t = Mt(e);
    return he(Ri, t) || he(Wi, t);
  };
for (fi in Ri)
  (hi = (di = p[fi]) && di.prototype)
    ? (vi(hi).TypedArrayConstructor = di)
    : (Ci = !1);
for (fi in Wi)
  (hi = (di = p[fi]) && di.prototype) && (vi(hi).TypedArrayConstructor = di);
if (
  (!Ci || !X(ki) || ki === Function.prototype) &&
  ((ki = function () {
    throw Oi('Incorrect invocation');
  }),
  Ci)
)
  for (fi in Ri) p[fi] && Fo(p[fi], ki);
if ((!Ci || !_i || _i === Ii) && ((_i = ki.prototype), Ci))
  for (fi in Ri) p[fi] && Fo(p[fi].prototype, _i);
if ((Ci && Co(Si) !== _i && Fo(Si, _i), v && !he(_i, xi)))
  for (fi in ((ji = !0),
  yi(_i, xi, {
    get: function () {
      return K(this) ? this[Ti] : void 0;
    },
  }),
  Ri))
    p[fi] && Ue(p[fi], Ti, fi);
var Zi = {
    NATIVE_ARRAY_BUFFER_VIEWS: Ci,
    TYPED_ARRAY_TAG: ji && Ti,
    aTypedArray: function (e) {
      if (Ei(e)) return e;
      throw Oi('Target is not a typed array');
    },
    aTypedArrayConstructor: function (e) {
      if (X(e) && (!Fo || Y(ki, e))) return e;
      throw Oi(te(e) + ' is not a typed array constructor');
    },
    exportTypedArrayMethod: function (e, t, n, r) {
      if (v) {
        if (n)
          for (var o in Ri) {
            var i = p[o];
            if (i && he(i.prototype, e))
              try {
                delete i.prototype[e];
              } catch (n) {
                try {
                  i.prototype[e] = t;
                } catch (e) {}
              }
          }
        (_i[e] && !n) || ft(_i, e, n ? t : (Ci && gi[e]) || t, r);
      }
    },
    exportTypedArrayStaticMethod: function (e, t, n) {
      var r, o;
      if (v) {
        if (Fo) {
          if (n)
            for (r in Ri)
              if ((o = p[r]) && he(o, e))
                try {
                  delete o[e];
                } catch (e) {}
          if (ki[e] && !n) return;
          try {
            return ft(ki, e, n ? t : (Ci && ki[e]) || t);
          } catch (e) {}
        }
        for (r in Ri) !(o = p[r]) || (o[e] && !n) || ft(o, e, t);
      }
    },
    getTypedArrayConstructor: Li,
    isView: function (e) {
      if (!K(e)) return !1;
      var t = Mt(e);
      return 'DataView' === t || he(Ri, t) || he(Wi, t);
    },
    isTypedArray: Ei,
    TypedArray: ki,
    TypedArrayPrototype: _i,
  },
  Gi = TypeError,
  Pi = ke('species'),
  Ai = function (e, t) {
    var n,
      r = Pe(e).constructor;
    return void 0 === r || null == (n = Pe(r)[Pi])
      ? t
      : (function (e) {
          if (In(e)) return e;
          throw Gi(te(e) + ' is not a constructor');
        })(n);
  },
  Fi = Zi.aTypedArrayConstructor,
  Xi = Zi.getTypedArrayConstructor,
  Ki = Zi.aTypedArray;
(0, Zi.exportTypedArrayMethod)(
  'slice',
  function (e, t) {
    for (
      var n,
        r = Yr(Ki(this), e, t),
        o = Fi(Ai((n = this), Xi(n))),
        i = 0,
        a = r.length,
        c = new o(a);
      a > i;

    )
      c[i] = r[i++];
    return c;
  },
  y(function () {
    new Int8Array(1).slice();
  })
);
var Ui = Ke.f,
  Ni = ke('unscopables'),
  Yi = Array.prototype;
null == Yi[Ni] && Ui(Yi, Ni, { configurable: !0, value: Hn(null) });
var Hi = function (e) {
    Yi[Ni][e] = !0;
  },
  Ji = _t.includes,
  Vi = y(function () {
    return !Array(1).includes();
  });
Nt(
  { target: 'Array', proto: !0, forced: Vi },
  {
    includes: function (e) {
      return Ji(this, e, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
),
  Hi('includes'),
  ln('Array', 'includes');
var Di = j(''.indexOf);
Nt(
  { target: 'String', proto: !0, forced: !nn('includes') },
  {
    includes: function (e) {
      return !!~Di(
        Qt(A(this)),
        Qt(en(e)),
        arguments.length > 1 ? arguments[1] : void 0
      );
    },
  }
),
  ln('String', 'includes');
var zi = Ke.f,
  Mi = ut.set,
  Bi = ut.getterFor('Array Iterator');
Jo(
  Array,
  'Array',
  function (e, t) {
    Mi(this, { type: 'Array Iterator', target: F(e), index: 0, kind: t });
  },
  function () {
    var e = Bi(this),
      t = e.target,
      n = e.kind,
      r = e.index++;
    return !t || r >= t.length
      ? ((e.target = void 0), { value: void 0, done: !0 })
      : 'keys' == n
      ? { value: r, done: !1 }
      : 'values' == n
      ? { value: t[r], done: !1 }
      : { value: [r, t[r]], done: !1 };
  },
  'values'
);
var Qi = (Eo.Arguments = Eo.Array);
if ((Hi('keys'), Hi('values'), Hi('entries'), v && 'values' !== Qi.name))
  try {
    zi(Qi, 'name', { value: 'values' });
  } catch (e) {}
var qi = y(function () {
    if ('function' == typeof ArrayBuffer) {
      var e = new ArrayBuffer(8);
      Object.isExtensible(e) && Object.defineProperty(e, 'a', { value: 8 });
    }
  }),
  $i = Object.isExtensible,
  ea =
    y(function () {
      $i(1);
    }) || qi
      ? function (e) {
          return !!K(e) && (!qi || 'ArrayBuffer' != L(e)) && (!$i || $i(e));
        }
      : $i,
  ta = !y(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  na = l(function (e) {
    var t = Ke.f,
      n = !1,
      r = me('meta'),
      o = 0,
      i = function (e) {
        t(e, r, { value: { objectID: 'O' + o++, weakData: {} } });
      },
      a = (e.exports = {
        enable: function () {
          (a.enable = function () {}), (n = !0);
          var e = jt.f,
            t = j([].splice),
            o = {};
          (o[r] = 1),
            e(o).length &&
              ((jt.f = function (n) {
                for (var o = e(n), i = 0, a = o.length; i < a; i++)
                  if (o[i] === r) {
                    t(o, i, 1);
                    break;
                  }
                return o;
              }),
              Nt(
                { target: 'Object', stat: !0, forced: !0 },
                { getOwnPropertyNames: Bn.f }
              ));
        },
        fastKey: function (e, t) {
          if (!K(e))
            return 'symbol' == typeof e
              ? e
              : ('string' == typeof e ? 'S' : 'P') + e;
          if (!he(e, r)) {
            if (!ea(e)) return 'F';
            if (!t) return 'E';
            i(e);
          }
          return e[r].objectID;
        },
        getWeakData: function (e, t) {
          if (!he(e, r)) {
            if (!ea(e)) return !0;
            if (!t) return !1;
            i(e);
          }
          return e[r].weakData;
        },
        onFreeze: function (e) {
          return ta && n && ea(e) && !he(e, r) && i(e), e;
        },
      });
    tt[r] = !0;
  });
na.enable, na.fastKey, na.getWeakData, na.onFreeze;
var ra = TypeError,
  oa = function (e, t) {
    (this.stopped = e), (this.result = t);
  },
  ia = oa.prototype,
  aa = function (e, t, n) {
    var r,
      o,
      i,
      a,
      c,
      s,
      u,
      l = n && n.that,
      f = !(!n || !n.AS_ENTRIES),
      d = !(!n || !n.IS_RECORD),
      h = !(!n || !n.IS_ITERATOR),
      p = !(!n || !n.INTERRUPTED),
      y = ar(t, l),
      v = function (e) {
        return r && Mo(r, 'normal', e), new oa(!0, e);
      },
      m = function (e) {
        return f
          ? (Pe(e), p ? y(e[0], e[1], v) : y(e[0], e[1]))
          : p
          ? y(e, v)
          : y(e);
      };
    if (d) r = e.iterator;
    else if (h) r = e;
    else {
      if (!(o = ti(e))) throw ra(te(e) + ' is not iterable');
      if ($o(o)) {
        for (i = 0, a = St(e); a > i; i++)
          if ((c = m(e[i])) && Y(ia, c)) return c;
        return new oa(!1);
      }
      r = ri(e, o);
    }
    for (s = d ? e.next : r.next; !(u = g(s, r)).done; ) {
      try {
        c = m(u.value);
      } catch (e) {
        Mo(r, 'throw', e);
      }
      if ('object' == typeof c && c && Y(ia, c)) return c;
    }
    return new oa(!1);
  },
  ca = TypeError,
  sa = function (e, t) {
    if (Y(t, e)) return e;
    throw ca('Incorrect invocation');
  },
  ua = function (e, t, n) {
    for (var r in t) ft(e, r, t[r], n);
    return e;
  },
  la = ke('species'),
  fa = Ke.f,
  da = na.fastKey,
  ha = ut.set,
  pa = ut.getterFor,
  ya = {
    getConstructor: function (e, t, n, r) {
      var o = e(function (e, o) {
          sa(e, i),
            ha(e, {
              type: t,
              index: Hn(null),
              first: void 0,
              last: void 0,
              size: 0,
            }),
            v || (e.size = 0),
            null != o && aa(o, e[r], { that: e, AS_ENTRIES: n });
        }),
        i = o.prototype,
        a = pa(t),
        c = function (e, t, n) {
          var r,
            o,
            i = a(e),
            c = s(e, t);
          return (
            c
              ? (c.value = n)
              : ((i.last = c =
                  {
                    index: (o = da(t, !0)),
                    key: t,
                    value: n,
                    previous: (r = i.last),
                    next: void 0,
                    removed: !1,
                  }),
                i.first || (i.first = c),
                r && (r.next = c),
                v ? i.size++ : e.size++,
                'F' !== o && (i.index[o] = c)),
            e
          );
        },
        s = function (e, t) {
          var n,
            r = a(e),
            o = da(t);
          if ('F' !== o) return r.index[o];
          for (n = r.first; n; n = n.next) if (n.key == t) return n;
        };
      return (
        ua(i, {
          clear: function () {
            for (var e = a(this), t = e.index, n = e.first; n; )
              (n.removed = !0),
                n.previous && (n.previous = n.previous.next = void 0),
                delete t[n.index],
                (n = n.next);
            (e.first = e.last = void 0), v ? (e.size = 0) : (this.size = 0);
          },
          delete: function (e) {
            var t = this,
              n = a(t),
              r = s(t, e);
            if (r) {
              var o = r.next,
                i = r.previous;
              delete n.index[r.index],
                (r.removed = !0),
                i && (i.next = o),
                o && (o.previous = i),
                n.first == r && (n.first = o),
                n.last == r && (n.last = i),
                v ? n.size-- : t.size--;
            }
            return !!r;
          },
          forEach: function (e) {
            for (
              var t,
                n = a(this),
                r = ar(e, arguments.length > 1 ? arguments[1] : void 0);
              (t = t ? t.next : n.first);

            )
              for (r(t.value, t.key, this); t && t.removed; ) t = t.previous;
          },
          has: function (e) {
            return !!s(this, e);
          },
        }),
        ua(
          i,
          n
            ? {
                get: function (e) {
                  var t = s(this, e);
                  return t && t.value;
                },
                set: function (e, t) {
                  return c(this, 0 === e ? 0 : e, t);
                },
              }
            : {
                add: function (e) {
                  return c(this, (e = 0 === e ? 0 : e), e);
                },
              }
        ),
        v &&
          fa(i, 'size', {
            get: function () {
              return a(this).size;
            },
          }),
        o
      );
    },
    setStrong: function (e, t, n) {
      var r = t + ' Iterator',
        o = pa(t),
        i = pa(r);
      Jo(
        e,
        t,
        function (e, t) {
          ha(this, { type: r, target: e, state: o(e), kind: t, last: void 0 });
        },
        function () {
          for (var e = i(this), t = e.kind, n = e.last; n && n.removed; )
            n = n.previous;
          return e.target && (e.last = n = n ? n.next : e.state.first)
            ? 'keys' == t
              ? { value: n.key, done: !1 }
              : 'values' == t
              ? { value: n.value, done: !1 }
              : { value: [n.key, n.value], done: !1 }
            : ((e.target = void 0), { value: void 0, done: !0 });
        },
        n ? 'entries' : 'values',
        !n,
        !0
      ),
        (function (e) {
          var t = N(e),
            n = Ke.f;
          v &&
            t &&
            !t[la] &&
            n(t, la, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        })(t);
    },
  };
function va(e) {
  var t = this.constructor;
  return this.then(
    function (n) {
      return t.resolve(e()).then(function () {
        return n;
      });
    },
    function (n) {
      return t.resolve(e()).then(function () {
        return t.reject(n);
      });
    }
  );
}
function ma(e) {
  return new this(function (t, n) {
    if (!e || void 0 === e.length)
      return n(
        new TypeError(
          typeof e +
            ' ' +
            e +
            ' is not iterable(cannot read property Symbol(Symbol.iterator))'
        )
      );
    var r = Array.prototype.slice.call(e);
    if (0 === r.length) return t([]);
    var o = r.length;
    function i(e, n) {
      if (n && ('object' == typeof n || 'function' == typeof n)) {
        var a = n.then;
        if ('function' == typeof a)
          return void a.call(
            n,
            function (t) {
              i(e, t);
            },
            function (n) {
              (r[e] = { status: 'rejected', reason: n }), 0 == --o && t(r);
            }
          );
      }
      (r[e] = { status: 'fulfilled', value: n }), 0 == --o && t(r);
    }
    for (var a = 0; a < r.length; a++) i(a, r[a]);
  });
}
!(function (e, t, n) {
  var r = -1 !== e.indexOf('Map'),
    o = -1 !== e.indexOf('Weak'),
    i = r ? 'set' : 'add',
    a = p[e],
    c = a && a.prototype,
    s = a,
    u = {},
    l = function (e) {
      var t = j(c[e]);
      ft(
        c,
        e,
        'add' == e
          ? function (e) {
              return t(this, 0 === e ? 0 : e), this;
            }
          : 'delete' == e
          ? function (e) {
              return !(o && !K(e)) && t(this, 0 === e ? 0 : e);
            }
          : 'get' == e
          ? function (e) {
              return o && !K(e) ? void 0 : t(this, 0 === e ? 0 : e);
            }
          : 'has' == e
          ? function (e) {
              return !(o && !K(e)) && t(this, 0 === e ? 0 : e);
            }
          : function (e, n) {
              return t(this, 0 === e ? 0 : e, n), this;
            }
      );
    };
  if (
    Kt(
      e,
      !X(a) ||
        !(
          o ||
          (c.forEach &&
            !y(function () {
              new a().entries().next();
            }))
        )
    )
  )
    (s = n.getConstructor(t, e, r, i)), na.enable();
  else if (Kt(e, !0)) {
    var f = new s(),
      d = f[i](o ? {} : -0, 1) != f,
      h = y(function () {
        f.has(1);
      }),
      v = ui(function (e) {
        new a(e);
      }),
      m =
        !o &&
        y(function () {
          for (var e = new a(), t = 5; t--; ) e[i](t, t);
          return !e.has(-0);
        });
    v ||
      (((s = t(function (e, t) {
        sa(e, c);
        var n = (function (e, t, n) {
          var r, o;
          return (
            Fo &&
              X((r = t.constructor)) &&
              r !== n &&
              K((o = r.prototype)) &&
              o !== n.prototype &&
              Fo(e, o),
            e
          );
        })(new a(), e, s);
        return null != t && aa(t, n[i], { that: n, AS_ENTRIES: r }), n;
      })).prototype = c),
      (c.constructor = s)),
      (h || m) && (l('delete'), l('has'), r && l('get')),
      (m || d) && l(i),
      o && c.clear && delete c.clear;
  }
  (u[e] = s),
    Nt({ global: !0, constructor: !0, forced: s != a }, u),
    or(s, e),
    o || n.setStrong(s, e, r);
})(
  'Set',
  function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  },
  ya
),
  qn.Set;
var ba = setTimeout;
function ga(e) {
  return Boolean(e && void 0 !== e.length);
}
function wa() {}
function Sa(e) {
  if (!(this instanceof Sa))
    throw new TypeError('Promises must be constructed via new');
  if ('function' != typeof e) throw new TypeError('not a function');
  (this._state = 0),
    (this._handled = !1),
    (this._value = void 0),
    (this._deferreds = []),
    Ta(e, this);
}
function ka(e, t) {
  for (; 3 === e._state; ) e = e._value;
  0 !== e._state
    ? ((e._handled = !0),
      Sa._immediateFn(function () {
        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
        if (null !== n) {
          var r;
          try {
            r = n(e._value);
          } catch (e) {
            return void Ia(t.promise, e);
          }
          _a(t.promise, r);
        } else (1 === e._state ? _a : Ia)(t.promise, e._value);
      }))
    : e._deferreds.push(t);
}
function _a(e, t) {
  try {
    if (t === e)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (t && ('object' == typeof t || 'function' == typeof t)) {
      var n = t.then;
      if (t instanceof Sa) return (e._state = 3), (e._value = t), void Oa(e);
      if ('function' == typeof n)
        return void Ta(
          ((r = n),
          (o = t),
          function () {
            r.apply(o, arguments);
          }),
          e
        );
    }
    (e._state = 1), (e._value = t), Oa(e);
  } catch (t) {
    Ia(e, t);
  }
  var r, o;
}
function Ia(e, t) {
  (e._state = 2), (e._value = t), Oa(e);
}
function Oa(e) {
  2 === e._state &&
    0 === e._deferreds.length &&
    Sa._immediateFn(function () {
      e._handled || Sa._unhandledRejectionFn(e._value);
    });
  for (var t = 0, n = e._deferreds.length; t < n; t++) ka(e, e._deferreds[t]);
  e._deferreds = null;
}
function xa(e, t, n) {
  (this.onFulfilled = 'function' == typeof e ? e : null),
    (this.onRejected = 'function' == typeof t ? t : null),
    (this.promise = n);
}
function Ta(e, t) {
  var n = !1;
  try {
    e(
      function (e) {
        n || ((n = !0), _a(t, e));
      },
      function (e) {
        n || ((n = !0), Ia(t, e));
      }
    );
  } catch (e) {
    if (n) return;
    (n = !0), Ia(t, e);
  }
}
(Sa.prototype.catch = function (e) {
  return this.then(null, e);
}),
  (Sa.prototype.then = function (e, t) {
    var n = new this.constructor(wa);
    return ka(this, new xa(e, t, n)), n;
  }),
  (Sa.prototype.finally = va),
  (Sa.all = function (e) {
    return new Sa(function (t, n) {
      if (!ga(e)) return n(new TypeError('Promise.all accepts an array'));
      var r = Array.prototype.slice.call(e);
      if (0 === r.length) return t([]);
      var o = r.length;
      function i(e, a) {
        try {
          if (a && ('object' == typeof a || 'function' == typeof a)) {
            var c = a.then;
            if ('function' == typeof c)
              return void c.call(
                a,
                function (t) {
                  i(e, t);
                },
                n
              );
          }
          (r[e] = a), 0 == --o && t(r);
        } catch (e) {
          n(e);
        }
      }
      for (var a = 0; a < r.length; a++) i(a, r[a]);
    });
  }),
  (Sa.allSettled = ma),
  (Sa.resolve = function (e) {
    return e && 'object' == typeof e && e.constructor === Sa
      ? e
      : new Sa(function (t) {
          t(e);
        });
  }),
  (Sa.reject = function (e) {
    return new Sa(function (t, n) {
      n(e);
    });
  }),
  (Sa.race = function (e) {
    return new Sa(function (t, n) {
      if (!ga(e)) return n(new TypeError('Promise.race accepts an array'));
      for (var r = 0, o = e.length; r < o; r++) Sa.resolve(e[r]).then(t, n);
    });
  }),
  (Sa._immediateFn =
    ('function' == typeof setImmediate &&
      function (e) {
        setImmediate(e);
      }) ||
    function (e) {
      ba(e, 0);
    }),
  (Sa._unhandledRejectionFn = function (e) {
    'undefined' != typeof console &&
      console &&
      console.warn('Possible Unhandled Promise Rejection:', e);
  });
var Ca = (function () {
  if ('undefined' != typeof self) return self;
  if ('undefined' != typeof window) return window;
  if ('undefined' != typeof global) return global;
  throw new Error('unable to locate global object');
})();
'function' != typeof Ca.Promise
  ? (Ca.Promise = Sa)
  : (Ca.Promise.prototype.finally || (Ca.Promise.prototype.finally = va),
    Ca.Promise.allSettled || (Ca.Promise.allSettled = ma)),
  (function (e) {
    function t() {}
    function n(e, t) {
      if (
        ((e = void 0 === e ? 'utf-8' : e),
        (t = void 0 === t ? { fatal: !1 } : t),
        -1 === o.indexOf(e.toLowerCase()))
      )
        throw new RangeError(
          "Failed to construct 'TextDecoder': The encoding label provided ('" +
            e +
            "') is invalid."
        );
      if (t.fatal)
        throw Error(
          "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
        );
    }
    function r(e) {
      for (
        var t = 0,
          n = Math.min(65536, e.length + 1),
          r = new Uint16Array(n),
          o = [],
          i = 0;
        ;

      ) {
        var a = t < e.length;
        if (!a || i >= n - 1) {
          if ((o.push(String.fromCharCode.apply(null, r.subarray(0, i))), !a))
            return o.join('');
          (e = e.subarray(t)), (i = t = 0);
        }
        if (0 == (128 & (a = e[t++]))) r[i++] = a;
        else if (192 == (224 & a)) {
          var c = 63 & e[t++];
          r[i++] = ((31 & a) << 6) | c;
        } else if (224 == (240 & a)) {
          c = 63 & e[t++];
          var s = 63 & e[t++];
          r[i++] = ((31 & a) << 12) | (c << 6) | s;
        } else if (240 == (248 & a)) {
          65535 <
            (a =
              ((7 & a) << 18) |
              ((c = 63 & e[t++]) << 12) |
              ((s = 63 & e[t++]) << 6) |
              (63 & e[t++])) &&
            ((a -= 65536),
            (r[i++] = ((a >>> 10) & 1023) | 55296),
            (a = 56320 | (1023 & a))),
            (r[i++] = a);
        }
      }
    }
    if (e.TextEncoder && e.TextDecoder) return !1;
    var o = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
    Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
      (t.prototype.encode = function (e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        t = 0;
        for (
          var n = e.length,
            r = 0,
            o = Math.max(32, n + (n >>> 1) + 7),
            i = new Uint8Array((o >>> 3) << 3);
          t < n;

        ) {
          var a = e.charCodeAt(t++);
          if (55296 <= a && 56319 >= a) {
            if (t < n) {
              var c = e.charCodeAt(t);
              56320 == (64512 & c) &&
                (++t, (a = ((1023 & a) << 10) + (1023 & c) + 65536));
            }
            if (55296 <= a && 56319 >= a) continue;
          }
          if (
            (r + 4 > i.length &&
              ((o += 8),
              (o = ((o *= 1 + (t / e.length) * 2) >>> 3) << 3),
              (c = new Uint8Array(o)).set(i),
              (i = c)),
            0 == (4294967168 & a))
          )
            i[r++] = a;
          else {
            if (0 == (4294965248 & a)) i[r++] = ((a >>> 6) & 31) | 192;
            else if (0 == (4294901760 & a))
              (i[r++] = ((a >>> 12) & 15) | 224),
                (i[r++] = ((a >>> 6) & 63) | 128);
            else {
              if (0 != (4292870144 & a)) continue;
              (i[r++] = ((a >>> 18) & 7) | 240),
                (i[r++] = ((a >>> 12) & 63) | 128),
                (i[r++] = ((a >>> 6) & 63) | 128);
            }
            i[r++] = (63 & a) | 128;
          }
        }
        return i.slice ? i.slice(0, r) : i.subarray(0, r);
      }),
      Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
      Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
      Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 });
    var i = r;
    'function' == typeof Buffer && Buffer.from
      ? (i = function (e) {
          return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
            'utf-8'
          );
        })
      : 'function' == typeof Blob &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        (i = function (e) {
          try {
            var t = URL.createObjectURL(
                new Blob([e], { type: 'text/plain;charset=UTF-8' })
              ),
              n = new XMLHttpRequest();
            return n.open('GET', t, !1), n.send(), n.responseText;
          } catch (t) {
            return r(e);
          } finally {
            t && URL.revokeObjectURL(t);
          }
        }),
      (n.prototype.decode = function (e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to decode: the 'stream' option is unsupported.");
        return (
          (e =
            e instanceof Uint8Array
              ? e
              : e.buffer instanceof ArrayBuffer
              ? new Uint8Array(e.buffer)
              : new Uint8Array(e)),
          i(e)
        );
      }),
      (e.TextEncoder = t),
      (e.TextDecoder = n);
  })('undefined' != typeof window ? window : s),
  (function () {
    function e(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function t(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function n(e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    }
    function r(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && i(e, t);
    }
    function o(e) {
      return (
        (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        o(e)
      );
    }
    function i(e, t) {
      return (
        (i =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          }),
        i(e, t)
      );
    }
    function a() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function c(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function u(e, t) {
      return !t || ('object' != typeof t && 'function' != typeof t) ? c(e) : t;
    }
    function l(e) {
      var t = a();
      return function () {
        var n,
          r = o(e);
        if (t) {
          var i = o(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return u(this, n);
      };
    }
    function f(e, t) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = o(e));

      );
      return e;
    }
    function d(e, t, n) {
      return (
        (d =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var r = f(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              }),
        d(e, t, n || e)
      );
    }
    var h = (function () {
        function t() {
          e(this, t),
            Object.defineProperty(this, 'listeners', {
              value: {},
              writable: !0,
              configurable: !0,
            });
        }
        return (
          n(t, [
            {
              key: 'addEventListener',
              value: function (e, t, n) {
                e in this.listeners || (this.listeners[e] = []),
                  this.listeners[e].push({ callback: t, options: n });
              },
            },
            {
              key: 'removeEventListener',
              value: function (e, t) {
                if (e in this.listeners)
                  for (
                    var n = this.listeners[e], r = 0, o = n.length;
                    r < o;
                    r++
                  )
                    if (n[r].callback === t) return void n.splice(r, 1);
              },
            },
            {
              key: 'dispatchEvent',
              value: function (e) {
                if (e.type in this.listeners) {
                  for (
                    var t = this.listeners[e.type].slice(), n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var o = t[n];
                    try {
                      o.callback.call(this, e);
                    } catch (e) {
                      Promise.resolve().then(function () {
                        throw e;
                      });
                    }
                    o.options &&
                      o.options.once &&
                      this.removeEventListener(e.type, o.callback);
                  }
                  return !e.defaultPrevented;
                }
              },
            },
          ]),
          t
        );
      })(),
      p = (function (t) {
        r(a, t);
        var i = l(a);
        function a() {
          var t;
          return (
            e(this, a),
            (t = i.call(this)).listeners || h.call(c(t)),
            Object.defineProperty(c(t), 'aborted', {
              value: !1,
              writable: !0,
              configurable: !0,
            }),
            Object.defineProperty(c(t), 'onabort', {
              value: null,
              writable: !0,
              configurable: !0,
            }),
            t
          );
        }
        return (
          n(a, [
            {
              key: 'toString',
              value: function () {
                return '[object AbortSignal]';
              },
            },
            {
              key: 'dispatchEvent',
              value: function (e) {
                'abort' === e.type &&
                  ((this.aborted = !0),
                  'function' == typeof this.onabort &&
                    this.onabort.call(this, e)),
                  d(o(a.prototype), 'dispatchEvent', this).call(this, e);
              },
            },
          ]),
          a
        );
      })(h),
      y = (function () {
        function t() {
          e(this, t),
            Object.defineProperty(this, 'signal', {
              value: new p(),
              writable: !0,
              configurable: !0,
            });
        }
        return (
          n(t, [
            {
              key: 'abort',
              value: function () {
                var e;
                try {
                  e = new Event('abort');
                } catch (t) {
                  'undefined' != typeof document
                    ? document.createEvent
                      ? (e = document.createEvent('Event')).initEvent(
                          'abort',
                          !1,
                          !1
                        )
                      : ((e = document.createEventObject()).type = 'abort')
                    : (e = { type: 'abort', bubbles: !1, cancelable: !1 });
                }
                this.signal.dispatchEvent(e);
              },
            },
            {
              key: 'toString',
              value: function () {
                return '[object AbortController]';
              },
            },
          ]),
          t
        );
      })();
    function v(e) {
      return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
        ? (console.log(
            '__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill'
          ),
          !0)
        : ('function' == typeof e.Request &&
            !e.Request.prototype.hasOwnProperty('signal')) ||
            !e.AbortController;
    }
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      ((y.prototype[Symbol.toStringTag] = 'AbortController'),
      (p.prototype[Symbol.toStringTag] = 'AbortSignal')),
      (function (e) {
        v(e) && ((e.AbortController = y), (e.AbortSignal = p));
      })('undefined' != typeof self ? self : s);
  })();
var ja = l(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var n = (function () {
    function e() {
      var e = this;
      (this.locked = new Map()),
        (this.addToLocked = function (t, n) {
          var r = e.locked.get(t);
          void 0 === r
            ? void 0 === n
              ? e.locked.set(t, [])
              : e.locked.set(t, [n])
            : void 0 !== n && (r.unshift(n), e.locked.set(t, r));
        }),
        (this.isLocked = function (t) {
          return e.locked.has(t);
        }),
        (this.lock = function (t) {
          return new Promise(function (n, r) {
            e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
          });
        }),
        (this.unlock = function (t) {
          var n = e.locked.get(t);
          if (void 0 !== n && 0 !== n.length) {
            var r = n.pop();
            e.locked.set(t, n), void 0 !== r && setTimeout(r, 0);
          } else e.locked.delete(t);
        });
    }
    return (
      (e.getInstance = function () {
        return void 0 === e.instance && (e.instance = new e()), e.instance;
      }),
      e
    );
  })();
  t.default = function () {
    return n.getInstance();
  };
});
u(ja);
var Ra = l(function (e, t) {
    var n =
        (s && s.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : new n(function (t) {
                    t(e.value);
                  }).then(a, c);
            }
            s((r = r.apply(e, t || [])).next());
          });
        },
      r =
        (s && s.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(i) {
            return function (c) {
              return (function (i) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        };
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = 'browser-tabs-lock-key';
    function i(e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    }
    function a(e) {
      for (
        var t = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
          n = '',
          r = 0;
        r < e;
        r++
      ) {
        n += t[Math.floor(Math.random() * t.length)];
      }
      return n;
    }
    var c = (function () {
      function e() {
        (this.acquiredIatSet = new Set()),
          (this.id = Date.now().toString() + a(15)),
          (this.acquireLock = this.acquireLock.bind(this)),
          (this.releaseLock = this.releaseLock.bind(this)),
          (this.releaseLock__private__ =
            this.releaseLock__private__.bind(this)),
          (this.waitForSomethingToChange =
            this.waitForSomethingToChange.bind(this)),
          (this.refreshLockWhileAcquired =
            this.refreshLockWhileAcquired.bind(this)),
          void 0 === e.waiters && (e.waiters = []);
      }
      return (
        (e.prototype.acquireLock = function (t, c) {
          return (
            void 0 === c && (c = 5e3),
            n(this, void 0, void 0, function () {
              var n, s, u, l, f, d;
              return r(this, function (r) {
                switch (r.label) {
                  case 0:
                    (n = Date.now() + a(4)),
                      (s = Date.now() + c),
                      (u = o + '-' + t),
                      (l = window.localStorage),
                      (r.label = 1);
                  case 1:
                    return Date.now() < s ? [4, i(30)] : [3, 8];
                  case 2:
                    return (
                      r.sent(),
                      null !== l.getItem(u)
                        ? [3, 5]
                        : ((f = this.id + '-' + t + '-' + n),
                          [4, i(Math.floor(25 * Math.random()))])
                    );
                  case 3:
                    return (
                      r.sent(),
                      l.setItem(
                        u,
                        JSON.stringify({
                          id: this.id,
                          iat: n,
                          timeoutKey: f,
                          timeAcquired: Date.now(),
                          timeRefreshed: Date.now(),
                        })
                      ),
                      [4, i(30)]
                    );
                  case 4:
                    return (
                      r.sent(),
                      null !== (d = l.getItem(u)) &&
                      (d = JSON.parse(d)).id === this.id &&
                      d.iat === n
                        ? (this.acquiredIatSet.add(n),
                          this.refreshLockWhileAcquired(u, n),
                          [2, !0])
                        : [3, 7]
                    );
                  case 5:
                    return (
                      e.lockCorrector(), [4, this.waitForSomethingToChange(s)]
                    );
                  case 6:
                    r.sent(), (r.label = 7);
                  case 7:
                    return (n = Date.now() + a(4)), [3, 1];
                  case 8:
                    return [2, !1];
                }
              });
            })
          );
        }),
        (e.prototype.refreshLockWhileAcquired = function (e, t) {
          return n(this, void 0, void 0, function () {
            var o = this;
            return r(this, function (i) {
              return (
                setTimeout(function () {
                  return n(o, void 0, void 0, function () {
                    var n, o;
                    return r(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, ja.default().lock(t)];
                        case 1:
                          return (
                            r.sent(),
                            this.acquiredIatSet.has(t)
                              ? ((n = window.localStorage),
                                null === (o = n.getItem(e))
                                  ? (ja.default().unlock(t), [2])
                                  : (((o = JSON.parse(o)).timeRefreshed =
                                      Date.now()),
                                    n.setItem(e, JSON.stringify(o)),
                                    ja.default().unlock(t),
                                    this.refreshLockWhileAcquired(e, t),
                                    [2]))
                              : (ja.default().unlock(t), [2])
                          );
                      }
                    });
                  });
                }, 1e3),
                [2]
              );
            });
          });
        }),
        (e.prototype.waitForSomethingToChange = function (t) {
          return n(this, void 0, void 0, function () {
            return r(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (n) {
                      var r = !1,
                        o = Date.now(),
                        i = !1;
                      function a() {
                        if (
                          (i ||
                            (window.removeEventListener('storage', a),
                            e.removeFromWaiting(a),
                            clearTimeout(c),
                            (i = !0)),
                          !r)
                        ) {
                          r = !0;
                          var t = 50 - (Date.now() - o);
                          t > 0 ? setTimeout(n, t) : n();
                        }
                      }
                      window.addEventListener('storage', a), e.addToWaiting(a);
                      var c = setTimeout(a, Math.max(0, t - Date.now()));
                    }),
                  ];
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        }),
        (e.addToWaiting = function (t) {
          this.removeFromWaiting(t), void 0 !== e.waiters && e.waiters.push(t);
        }),
        (e.removeFromWaiting = function (t) {
          void 0 !== e.waiters &&
            (e.waiters = e.waiters.filter(function (e) {
              return e !== t;
            }));
        }),
        (e.notifyWaiters = function () {
          void 0 !== e.waiters &&
            e.waiters.slice().forEach(function (e) {
              return e();
            });
        }),
        (e.prototype.releaseLock = function (e) {
          return n(this, void 0, void 0, function () {
            return r(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.releaseLock__private__(e)];
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (e.prototype.releaseLock__private__ = function (t) {
          return n(this, void 0, void 0, function () {
            var n, i, a;
            return r(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (n = window.localStorage),
                    (i = o + '-' + t),
                    null === (a = n.getItem(i))
                      ? [2]
                      : (a = JSON.parse(a)).id !== this.id
                      ? [3, 2]
                      : [4, ja.default().lock(a.iat)]
                  );
                case 1:
                  r.sent(),
                    this.acquiredIatSet.delete(a.iat),
                    n.removeItem(i),
                    ja.default().unlock(a.iat),
                    e.notifyWaiters(),
                    (r.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (e.lockCorrector = function () {
          for (
            var t = Date.now() - 5e3,
              n = window.localStorage,
              r = Object.keys(n),
              i = !1,
              a = 0;
            a < r.length;
            a++
          ) {
            var c = r[a];
            if (c.includes(o)) {
              var s = n.getItem(c);
              null !== s &&
                ((void 0 === (s = JSON.parse(s)).timeRefreshed &&
                  s.timeAcquired < t) ||
                  (void 0 !== s.timeRefreshed && s.timeRefreshed < t)) &&
                (n.removeItem(c), (i = !0));
            }
          }
          i && e.notifyWaiters();
        }),
        (e.waiters = void 0),
        e
      );
    })();
    t.default = c;
  }),
  Wa = u(Ra),
  La = { timeoutInSeconds: 60 },
  Ea = [
    'login_required',
    'consent_required',
    'interaction_required',
    'account_selection_required',
    'access_denied',
  ],
  Za = { name: 'auth0-spa-js', version: '1.22.1' },
  Ga = function () {
    return Date.now();
  },
  Pa = (function (e) {
    function n(t, r) {
      var o = e.call(this, r) || this;
      return (
        (o.error = t),
        (o.error_description = r),
        Object.setPrototypeOf(o, n.prototype),
        o
      );
    }
    return (
      t(n, e),
      (n.fromPayload = function (e) {
        return new n(e.error, e.error_description);
      }),
      n
    );
  })(Error),
  Aa = (function (e) {
    function n(t, r, o, i) {
      void 0 === i && (i = null);
      var a = e.call(this, t, r) || this;
      return (
        (a.state = o),
        (a.appState = i),
        Object.setPrototypeOf(a, n.prototype),
        a
      );
    }
    return t(n, e), n;
  })(Pa),
  Fa = (function (e) {
    function n() {
      var t = e.call(this, 'timeout', 'Timeout') || this;
      return Object.setPrototypeOf(t, n.prototype), t;
    }
    return t(n, e), n;
  })(Pa),
  Xa = (function (e) {
    function n(t) {
      var r = e.call(this) || this;
      return (r.popup = t), Object.setPrototypeOf(r, n.prototype), r;
    }
    return t(n, e), n;
  })(Fa),
  Ka = (function (e) {
    function n(t) {
      var r = e.call(this, 'cancelled', 'Popup closed') || this;
      return (r.popup = t), Object.setPrototypeOf(r, n.prototype), r;
    }
    return t(n, e), n;
  })(Pa),
  Ua = (function (e) {
    function n(t, r, o) {
      var i = e.call(this, t, r) || this;
      return (i.mfa_token = o), Object.setPrototypeOf(i, n.prototype), i;
    }
    return t(n, e), n;
  })(Pa),
  Na = (function (e) {
    function n(t, r) {
      var o =
        e.call(
          this,
          'missing_refresh_token',
          "Missing Refresh Token (audience: '"
            .concat(qa(t, ['default']), "', scope: '")
            .concat(qa(r), "')")
        ) || this;
      return (
        (o.audience = t),
        (o.scope = r),
        Object.setPrototypeOf(o, n.prototype),
        o
      );
    }
    return t(n, e), n;
  })(Pa),
  Ya = function (e) {
    return new Promise(function (t, n) {
      var r,
        o = setInterval(function () {
          e.popup &&
            e.popup.closed &&
            (clearInterval(o),
            clearTimeout(i),
            window.removeEventListener('message', r, !1),
            n(new Ka(e.popup)));
        }, 1e3),
        i = setTimeout(function () {
          clearInterval(o),
            n(new Xa(e.popup)),
            window.removeEventListener('message', r, !1);
        }, 1e3 * (e.timeoutInSeconds || 60));
      (r = function (a) {
        if (a.data && 'authorization_response' === a.data.type) {
          if (
            (clearTimeout(i),
            clearInterval(o),
            window.removeEventListener('message', r, !1),
            e.popup.close(),
            a.data.response.error)
          )
            return n(Pa.fromPayload(a.data.response));
          t(a.data.response);
        }
      }),
        window.addEventListener('message', r);
    });
  },
  Ha = function () {
    return window.crypto || window.msCrypto;
  },
  Ja = function () {
    var e = Ha();
    return e.subtle || e.webkitSubtle;
  },
  Va = function () {
    var e =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
      t = '';
    return (
      Array.from(Ha().getRandomValues(new Uint8Array(43))).forEach(function (
        n
      ) {
        return (t += e[n % e.length]);
      }),
      t
    );
  },
  Da = function (e) {
    return btoa(e);
  },
  za = function (e) {
    return Object.keys(e)
      .filter(function (t) {
        return void 0 !== e[t];
      })
      .map(function (t) {
        return encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
      })
      .join('&');
  },
  Ma = function (e) {
    return o(void 0, void 0, void 0, function () {
      var t;
      return i(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = Ja().digest(
                { name: 'SHA-256' },
                new TextEncoder().encode(e)
              )),
              window.msCrypto
                ? [
                    2,
                    new Promise(function (e, n) {
                      (t.oncomplete = function (t) {
                        e(t.target.result);
                      }),
                        (t.onerror = function (e) {
                          n(e.error);
                        }),
                        (t.onabort = function () {
                          n('The digest operation was aborted');
                        });
                    }),
                  ]
                : [4, t]
            );
          case 1:
            return [2, n.sent()];
        }
      });
    });
  },
  Ba = function (e) {
    return (function (e) {
      return decodeURIComponent(
        atob(e)
          .split('')
          .map(function (e) {
            return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
    })(e.replace(/_/g, '/').replace(/-/g, '+'));
  },
  Qa = function (e) {
    var t = new Uint8Array(e);
    return (function (e) {
      var t = { '+': '-', '/': '_', '=': '' };
      return e.replace(/[+/=]/g, function (e) {
        return t[e];
      });
    })(
      window.btoa(
        String.fromCharCode.apply(String, c([], a(Array.from(t)), !1))
      )
    );
  };
function qa(e, t) {
  return void 0 === t && (t = []), e && !t.includes(e) ? e : '';
}
var $a = function (e, t) {
    return o(void 0, void 0, void 0, function () {
      var n, r;
      return i(this, function (o) {
        switch (o.label) {
          case 0:
            return [
              4,
              ((i = e),
              (a = t),
              (a = a || {}),
              new Promise(function (e, t) {
                var n = new XMLHttpRequest(),
                  r = [],
                  o = [],
                  c = {},
                  s = function () {
                    return {
                      ok: 2 == ((n.status / 100) | 0),
                      statusText: n.statusText,
                      status: n.status,
                      url: n.responseURL,
                      text: function () {
                        return Promise.resolve(n.responseText);
                      },
                      json: function () {
                        return Promise.resolve(n.responseText).then(JSON.parse);
                      },
                      blob: function () {
                        return Promise.resolve(new Blob([n.response]));
                      },
                      clone: s,
                      headers: {
                        keys: function () {
                          return r;
                        },
                        entries: function () {
                          return o;
                        },
                        get: function (e) {
                          return c[e.toLowerCase()];
                        },
                        has: function (e) {
                          return e.toLowerCase() in c;
                        },
                      },
                    };
                  };
                for (var u in (n.open(a.method || 'get', i, !0),
                (n.onload = function () {
                  n
                    .getAllResponseHeaders()
                    .replace(
                      /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
                      function (e, t, n) {
                        r.push((t = t.toLowerCase())),
                          o.push([t, n]),
                          (c[t] = c[t] ? c[t] + ',' + n : n);
                      }
                    ),
                    e(s());
                }),
                (n.onerror = t),
                (n.withCredentials = 'include' == a.credentials),
                a.headers))
                  n.setRequestHeader(u, a.headers[u]);
                n.send(a.body || null);
              })),
            ];
          case 1:
            return (n = o.sent()), (r = { ok: n.ok }), [4, n.json()];
          case 2:
            return [2, ((r.json = o.sent()), r)];
        }
        var i, a;
      });
    });
  },
  ec = function (e, t, n) {
    return o(void 0, void 0, void 0, function () {
      var r, o;
      return i(this, function (i) {
        return (
          (r = new AbortController()),
          (t.signal = r.signal),
          [
            2,
            Promise.race([
              $a(e, t),
              new Promise(function (e, t) {
                o = setTimeout(function () {
                  r.abort(), t(new Error("Timeout when executing 'fetch'"));
                }, n);
              }),
            ]).finally(function () {
              clearTimeout(o);
            }),
          ]
        );
      });
    });
  },
  tc = function (e, t, n, r, a, c, s) {
    return o(void 0, void 0, void 0, function () {
      return i(this, function (o) {
        return [
          2,
          ((i = {
            auth: { audience: t, scope: n },
            timeout: a,
            fetchUrl: e,
            fetchOptions: r,
            useFormData: s,
          }),
          (u = c),
          new Promise(function (e, t) {
            var n = new MessageChannel();
            (n.port1.onmessage = function (n) {
              n.data.error ? t(new Error(n.data.error)) : e(n.data);
            }),
              u.postMessage(i, [n.port2]);
          })),
        ];
        var i, u;
      });
    });
  },
  nc = function (e, t, n, r, a, c, s) {
    return (
      void 0 === s && (s = 1e4),
      o(void 0, void 0, void 0, function () {
        return i(this, function (o) {
          return a ? [2, tc(e, t, n, r, s, a, c)] : [2, ec(e, r, s)];
        });
      })
    );
  };
function rc(e, t, n, a, c, s, u) {
  return o(this, void 0, void 0, function () {
    var o, l, f, d, h, p, y, v, m;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          (o = null), (f = 0), (i.label = 1);
        case 1:
          if (!(f < 3)) return [3, 6];
          i.label = 2;
        case 2:
          return i.trys.push([2, 4, , 5]), [4, nc(e, n, a, c, s, u, t)];
        case 3:
          return (l = i.sent()), (o = null), [3, 6];
        case 4:
          return (d = i.sent()), (o = d), [3, 5];
        case 5:
          return f++, [3, 1];
        case 6:
          if (o) throw ((o.message = o.message || 'Failed to fetch'), o);
          if (
            ((h = l.json),
            (p = h.error),
            (y = h.error_description),
            (v = r(h, ['error', 'error_description'])),
            !l.ok)
          ) {
            if (
              ((m = y || 'HTTP error. Unable to fetch '.concat(e)),
              'mfa_required' === p)
            )
              throw new Ua(p, m, v.mfa_token);
            throw new Pa(p || 'request_error', m);
          }
          return [2, v];
      }
    });
  });
}
function oc(e, t) {
  var n = e.baseUrl,
    a = e.timeout,
    c = e.audience,
    s = e.scope,
    u = e.auth0Client,
    l = e.useFormData,
    f = r(e, [
      'baseUrl',
      'timeout',
      'audience',
      'scope',
      'auth0Client',
      'useFormData',
    ]);
  return o(this, void 0, void 0, function () {
    var e;
    return i(this, function (r) {
      switch (r.label) {
        case 0:
          return (
            (e = l ? za(f) : JSON.stringify(f)),
            [
              4,
              rc(
                ''.concat(n, '/oauth/token'),
                a,
                c || 'default',
                s,
                {
                  method: 'POST',
                  body: e,
                  headers: {
                    'Content-Type': l
                      ? 'application/x-www-form-urlencoded'
                      : 'application/json',
                    'Auth0-Client': btoa(JSON.stringify(u || Za)),
                  },
                },
                t,
                l
              ),
            ]
          );
        case 1:
          return [2, r.sent()];
      }
    });
  });
}
var ic = function (e) {
    return Array.from(new Set(e));
  },
  ac = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return ic(e.join(' ').trim().split(/\s+/)).join(' ');
  },
  cc = (function () {
    function e(e, t) {
      void 0 === t && (t = '@@auth0spajs@@'),
        (this.prefix = t),
        (this.client_id = e.client_id),
        (this.scope = e.scope),
        (this.audience = e.audience);
    }
    return (
      (e.prototype.toKey = function () {
        return ''
          .concat(this.prefix, '::')
          .concat(this.client_id, '::')
          .concat(this.audience, '::')
          .concat(this.scope);
      }),
      (e.fromKey = function (t) {
        var n = a(t.split('::'), 4),
          r = n[0],
          o = n[1],
          i = n[2];
        return new e({ client_id: o, scope: n[3], audience: i }, r);
      }),
      (e.fromCacheEntry = function (t) {
        return new e({
          scope: t.scope,
          audience: t.audience,
          client_id: t.client_id,
        });
      }),
      e
    );
  })(),
  sc = (function () {
    function e() {}
    return (
      (e.prototype.set = function (e, t) {
        localStorage.setItem(e, JSON.stringify(t));
      }),
      (e.prototype.get = function (e) {
        var t = window.localStorage.getItem(e);
        if (t)
          try {
            return JSON.parse(t);
          } catch (e) {
            return;
          }
      }),
      (e.prototype.remove = function (e) {
        localStorage.removeItem(e);
      }),
      (e.prototype.allKeys = function () {
        return Object.keys(window.localStorage).filter(function (e) {
          return e.startsWith('@@auth0spajs@@');
        });
      }),
      e
    );
  })(),
  uc = function () {
    var e;
    this.enclosedCache =
      ((e = {}),
      {
        set: function (t, n) {
          e[t] = n;
        },
        get: function (t) {
          var n = e[t];
          if (n) return n;
        },
        remove: function (t) {
          delete e[t];
        },
        allKeys: function () {
          return Object.keys(e);
        },
      });
  },
  lc = (function () {
    function e(e, t, n) {
      (this.cache = e),
        (this.keyManifest = t),
        (this.nowProvider = n),
        (this.nowProvider = this.nowProvider || Ga);
    }
    return (
      (e.prototype.get = function (e, t) {
        var n;
        return (
          void 0 === t && (t = 0),
          o(this, void 0, void 0, function () {
            var r, o, a, c, s;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, this.cache.get(e.toKey())];
                case 1:
                  return (r = i.sent()) ? [3, 4] : [4, this.getCacheKeys()];
                case 2:
                  return (o = i.sent())
                    ? (a = this.matchExistingCacheKey(e, o))
                      ? [4, this.cache.get(a)]
                      : [3, 4]
                    : [2];
                case 3:
                  (r = i.sent()), (i.label = 4);
                case 4:
                  return r ? [4, this.nowProvider()] : [2];
                case 5:
                  return (
                    (c = i.sent()),
                    (s = Math.floor(c / 1e3)),
                    r.expiresAt - t < s
                      ? r.body.refresh_token
                        ? ((r.body = { refresh_token: r.body.refresh_token }),
                          [4, this.cache.set(e.toKey(), r)])
                        : [3, 7]
                      : [3, 10]
                  );
                case 6:
                  return i.sent(), [2, r.body];
                case 7:
                  return [4, this.cache.remove(e.toKey())];
                case 8:
                  return (
                    i.sent(),
                    [
                      4,
                      null === (n = this.keyManifest) || void 0 === n
                        ? void 0
                        : n.remove(e.toKey()),
                    ]
                  );
                case 9:
                  return i.sent(), [2];
                case 10:
                  return [2, r.body];
              }
            });
          })
        );
      }),
      (e.prototype.set = function (e) {
        var t;
        return o(this, void 0, void 0, function () {
          var n, r;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (n = new cc({
                    client_id: e.client_id,
                    scope: e.scope,
                    audience: e.audience,
                  })),
                  [4, this.wrapCacheEntry(e)]
                );
              case 1:
                return (r = o.sent()), [4, this.cache.set(n.toKey(), r)];
              case 2:
                return (
                  o.sent(),
                  [
                    4,
                    null === (t = this.keyManifest) || void 0 === t
                      ? void 0
                      : t.add(n.toKey()),
                  ]
                );
              case 3:
                return o.sent(), [2];
            }
          });
        });
      }),
      (e.prototype.clear = function (e) {
        var t;
        return o(this, void 0, void 0, function () {
          var n,
            r = this;
          return i(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.getCacheKeys()];
              case 1:
                return (n = a.sent())
                  ? [
                      4,
                      n
                        .filter(function (t) {
                          return !e || t.includes(e);
                        })
                        .reduce(function (e, t) {
                          return o(r, void 0, void 0, function () {
                            return i(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  return [4, e];
                                case 1:
                                  return n.sent(), [4, this.cache.remove(t)];
                                case 2:
                                  return n.sent(), [2];
                              }
                            });
                          });
                        }, Promise.resolve()),
                    ]
                  : [2];
              case 2:
                return (
                  a.sent(),
                  [
                    4,
                    null === (t = this.keyManifest) || void 0 === t
                      ? void 0
                      : t.clear(),
                  ]
                );
              case 3:
                return a.sent(), [2];
            }
          });
        });
      }),
      (e.prototype.clearSync = function (e) {
        var t = this,
          n = this.cache.allKeys();
        n &&
          n
            .filter(function (t) {
              return !e || t.includes(e);
            })
            .forEach(function (e) {
              t.cache.remove(e);
            });
      }),
      (e.prototype.wrapCacheEntry = function (e) {
        return o(this, void 0, void 0, function () {
          var t, n, r;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, this.nowProvider()];
              case 1:
                return (
                  (t = o.sent()),
                  (n = Math.floor(t / 1e3) + e.expires_in),
                  (r = Math.min(n, e.decodedToken.claims.exp)),
                  [2, { body: e, expiresAt: r }]
                );
            }
          });
        });
      }),
      (e.prototype.getCacheKeys = function () {
        var e;
        return o(this, void 0, void 0, function () {
          var t;
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                return this.keyManifest ? [4, this.keyManifest.get()] : [3, 2];
              case 1:
                return (
                  (t =
                    null === (e = n.sent()) || void 0 === e ? void 0 : e.keys),
                  [3, 4]
                );
              case 2:
                return [4, this.cache.allKeys()];
              case 3:
                (t = n.sent()), (n.label = 4);
              case 4:
                return [2, t];
            }
          });
        });
      }),
      (e.prototype.matchExistingCacheKey = function (e, t) {
        return t.filter(function (t) {
          var n = cc.fromKey(t),
            r = new Set(n.scope && n.scope.split(' ')),
            o = e.scope.split(' '),
            i =
              n.scope &&
              o.reduce(function (e, t) {
                return e && r.has(t);
              }, !0);
          return (
            '@@auth0spajs@@' === n.prefix &&
            n.client_id === e.client_id &&
            n.audience === e.audience &&
            i
          );
        })[0];
      }),
      e
    );
  })(),
  fc = (function () {
    function e(e, t) {
      (this.storage = e),
        (this.clientId = t),
        (this.storageKey = ''
          .concat('a0.spajs.txs', '.')
          .concat(this.clientId)),
        (this.transaction = this.storage.get(this.storageKey));
    }
    return (
      (e.prototype.create = function (e) {
        (this.transaction = e),
          this.storage.save(this.storageKey, e, { daysUntilExpire: 1 });
      }),
      (e.prototype.get = function () {
        return this.transaction;
      }),
      (e.prototype.remove = function () {
        delete this.transaction, this.storage.remove(this.storageKey);
      }),
      e
    );
  })(),
  dc = function (e) {
    return 'number' == typeof e;
  },
  hc = [
    'iss',
    'aud',
    'exp',
    'nbf',
    'iat',
    'jti',
    'azp',
    'nonce',
    'auth_time',
    'at_hash',
    'c_hash',
    'acr',
    'amr',
    'sub_jwk',
    'cnf',
    'sip_from_tag',
    'sip_date',
    'sip_callid',
    'sip_cseq_num',
    'sip_via_branch',
    'orig',
    'dest',
    'mky',
    'events',
    'toe',
    'txn',
    'rph',
    'sid',
    'vot',
    'vtm',
  ],
  pc = function (e) {
    if (!e.id_token) throw new Error('ID token is required but missing');
    var t = (function (e) {
      var t = e.split('.'),
        n = a(t, 3),
        r = n[0],
        o = n[1],
        i = n[2];
      if (3 !== t.length || !r || !o || !i)
        throw new Error('ID token could not be decoded');
      var c = JSON.parse(Ba(o)),
        s = { __raw: e },
        u = {};
      return (
        Object.keys(c).forEach(function (e) {
          (s[e] = c[e]), hc.includes(e) || (u[e] = c[e]);
        }),
        {
          encoded: { header: r, payload: o, signature: i },
          header: JSON.parse(Ba(r)),
          claims: s,
          user: u,
        }
      );
    })(e.id_token);
    if (!t.claims.iss)
      throw new Error(
        'Issuer (iss) claim must be a string present in the ID token'
      );
    if (t.claims.iss !== e.iss)
      throw new Error(
        'Issuer (iss) claim mismatch in the ID token; expected "'
          .concat(e.iss, '", found "')
          .concat(t.claims.iss, '"')
      );
    if (!t.user.sub)
      throw new Error(
        'Subject (sub) claim must be a string present in the ID token'
      );
    if ('RS256' !== t.header.alg)
      throw new Error(
        'Signature algorithm of "'.concat(
          t.header.alg,
          '" is not supported. Expected the ID token to be signed with "RS256".'
        )
      );
    if (
      !t.claims.aud ||
      ('string' != typeof t.claims.aud && !Array.isArray(t.claims.aud))
    )
      throw new Error(
        'Audience (aud) claim must be a string or array of strings present in the ID token'
      );
    if (Array.isArray(t.claims.aud)) {
      if (!t.claims.aud.includes(e.aud))
        throw new Error(
          'Audience (aud) claim mismatch in the ID token; expected "'
            .concat(e.aud, '" but was not one of "')
            .concat(t.claims.aud.join(', '), '"')
        );
      if (t.claims.aud.length > 1) {
        if (!t.claims.azp)
          throw new Error(
            'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
          );
        if (t.claims.azp !== e.aud)
          throw new Error(
            'Authorized Party (azp) claim mismatch in the ID token; expected "'
              .concat(e.aud, '", found "')
              .concat(t.claims.azp, '"')
          );
      }
    } else if (t.claims.aud !== e.aud)
      throw new Error(
        'Audience (aud) claim mismatch in the ID token; expected "'
          .concat(e.aud, '" but found "')
          .concat(t.claims.aud, '"')
      );
    if (e.nonce) {
      if (!t.claims.nonce)
        throw new Error(
          'Nonce (nonce) claim must be a string present in the ID token'
        );
      if (t.claims.nonce !== e.nonce)
        throw new Error(
          'Nonce (nonce) claim mismatch in the ID token; expected "'
            .concat(e.nonce, '", found "')
            .concat(t.claims.nonce, '"')
        );
    }
    if (e.max_age && !dc(t.claims.auth_time))
      throw new Error(
        'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
      );
    if (!dc(t.claims.exp))
      throw new Error(
        'Expiration Time (exp) claim must be a number present in the ID token'
      );
    if (!dc(t.claims.iat))
      throw new Error(
        'Issued At (iat) claim must be a number present in the ID token'
      );
    var n = e.leeway || 60,
      r = new Date(e.now || Date.now()),
      o = new Date(0),
      i = new Date(0),
      c = new Date(0);
    if (
      (c.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n),
      o.setUTCSeconds(t.claims.exp + n),
      i.setUTCSeconds(t.claims.nbf - n),
      r > o)
    )
      throw new Error(
        'Expiration Time (exp) claim error in the ID token; current time ('
          .concat(r, ') is after expiration time (')
          .concat(o, ')')
      );
    if (dc(t.claims.nbf) && r < i)
      throw new Error(
        "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time ("
          .concat(r, ') is before ')
          .concat(i)
      );
    if (dc(t.claims.auth_time) && r > c)
      throw new Error(
        'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time ('
          .concat(r, ') is after last auth at ')
          .concat(c)
      );
    if (e.organizationId) {
      if (!t.claims.org_id)
        throw new Error(
          'Organization ID (org_id) claim must be a string present in the ID token'
        );
      if (e.organizationId !== t.claims.org_id)
        throw new Error(
          'Organization ID (org_id) claim mismatch in the ID token; expected "'
            .concat(e.organizationId, '", found "')
            .concat(t.claims.org_id, '"')
        );
    }
    return t;
  },
  yc = l(function (e, t) {
    var n =
      (s && s.__assign) ||
      function () {
        return (
          (n =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          n.apply(this, arguments)
        );
      };
    function r(e, t) {
      if (!t) return '';
      var n = '; ' + e;
      return !0 === t ? n : n + '=' + t;
    }
    function o(e, t, n) {
      return (
        encodeURIComponent(e)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29') +
        '=' +
        encodeURIComponent(t).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        ) +
        (function (e) {
          if ('number' == typeof e.expires) {
            var t = new Date();
            t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
              (e.expires = t);
          }
          return (
            r('Expires', e.expires ? e.expires.toUTCString() : '') +
            r('Domain', e.domain) +
            r('Path', e.path) +
            r('Secure', e.secure) +
            r('SameSite', e.sameSite)
          );
        })(n)
      );
    }
    function i(e) {
      for (
        var t = {}, n = e ? e.split('; ') : [], r = /(%[\dA-F]{2})+/gi, o = 0;
        o < n.length;
        o++
      ) {
        var i = n[o].split('='),
          a = i.slice(1).join('=');
        '"' === a.charAt(0) && (a = a.slice(1, -1));
        try {
          t[i[0].replace(r, decodeURIComponent)] = a.replace(
            r,
            decodeURIComponent
          );
        } catch (e) {}
      }
      return t;
    }
    function a() {
      return i(document.cookie);
    }
    function c(e, t, r) {
      document.cookie = o(e, t, n({ path: '/' }, r));
    }
    (t.__esModule = !0),
      (t.encode = o),
      (t.parse = i),
      (t.getAll = a),
      (t.get = function (e) {
        return a()[e];
      }),
      (t.set = c),
      (t.remove = function (e, t) {
        c(e, '', n(n({}, t), { expires: -1 }));
      });
  });
u(yc), yc.encode, yc.parse, yc.getAll;
var vc = yc.get,
  mc = yc.set,
  bc = yc.remove,
  gc = {
    get: function (e) {
      var t = vc(e);
      if (void 0 !== t) return JSON.parse(t);
    },
    save: function (e, t, n) {
      var r = {};
      'https:' === window.location.protocol &&
        (r = { secure: !0, sameSite: 'none' }),
        (null == n ? void 0 : n.daysUntilExpire) &&
          (r.expires = n.daysUntilExpire),
        (null == n ? void 0 : n.cookieDomain) && (r.domain = n.cookieDomain),
        mc(e, JSON.stringify(t), r);
    },
    remove: function (e) {
      bc(e);
    },
  },
  wc = {
    get: function (e) {
      var t = gc.get(e);
      return t || gc.get(''.concat('_legacy_').concat(e));
    },
    save: function (e, t, n) {
      var r = {};
      'https:' === window.location.protocol && (r = { secure: !0 }),
        (null == n ? void 0 : n.daysUntilExpire) &&
          (r.expires = n.daysUntilExpire),
        mc(''.concat('_legacy_').concat(e), JSON.stringify(t), r),
        gc.save(e, t, n);
    },
    remove: function (e) {
      gc.remove(e), gc.remove(''.concat('_legacy_').concat(e));
    },
  },
  Sc = {
    get: function (e) {
      if ('undefined' != typeof sessionStorage) {
        var t = sessionStorage.getItem(e);
        if (void 0 !== t) return JSON.parse(t);
      }
    },
    save: function (e, t) {
      sessionStorage.setItem(e, JSON.stringify(t));
    },
    remove: function (e) {
      sessionStorage.removeItem(e);
    },
  };
function kc(e, t, n) {
  var r = void 0 === t ? null : t,
    o = (function (e, t) {
      var n = atob(e);
      if (t) {
        for (var r = new Uint8Array(n.length), o = 0, i = n.length; o < i; ++o)
          r[o] = n.charCodeAt(o);
        return String.fromCharCode.apply(null, new Uint16Array(r.buffer));
      }
      return n;
    })(e, void 0 !== n && n),
    i = o.indexOf('\n', 10) + 1,
    a = o.substring(i) + (r ? '//# sourceMappingURL=' + r : ''),
    c = new Blob([a], { type: 'application/javascript' });
  return URL.createObjectURL(c);
}
var _c,
  Ic,
  Oc,
  xc,
  Tc =
    ((_c =
      'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9LHQoZSxyKX07ZnVuY3Rpb24gZShlLHIpe2lmKCJmdW5jdGlvbiIhPXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKCJDbGFzcyBleHRlbmRzIHZhbHVlICIrU3RyaW5nKHIpKyIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX12YXIgcj1mdW5jdGlvbigpe3JldHVybiByPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0sci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIG4odCxlLHIsbil7cmV0dXJuIG5ldyhyfHwocj1Qcm9taXNlKSkoKGZ1bmN0aW9uKG8sYyl7ZnVuY3Rpb24gaSh0KXt0cnl7cyhuLm5leHQodCkpfWNhdGNoKHQpe2ModCl9fWZ1bmN0aW9uIGEodCl7dHJ5e3Mobi50aHJvdyh0KSl9Y2F0Y2godCl7Yyh0KX19ZnVuY3Rpb24gcyh0KXt2YXIgZTt0LmRvbmU/byh0LnZhbHVlKTooZT10LnZhbHVlLGUgaW5zdGFuY2VvZiByP2U6bmV3IHIoKGZ1bmN0aW9uKHQpe3QoZSl9KSkpLnRoZW4oaSxhKX1zKChuPW4uYXBwbHkodCxlfHxbXSkpLm5leHQoKSl9KSl9ZnVuY3Rpb24gbyh0LGUpe3ZhciByLG4sbyxjLGk9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmb1swXSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX07cmV0dXJuIGM9e25leHQ6YSgwKSx0aHJvdzphKDEpLHJldHVybjphKDIpfSwiZnVuY3Rpb24iPT10eXBlb2YgU3ltYm9sJiYoY1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxjO2Z1bmN0aW9uIGEoYyl7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjKXtpZihyKXRocm93IG5ldyBUeXBlRXJyb3IoIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy4iKTtmb3IoO2k7KXRyeXtpZihyPTEsbiYmKG89MiZjWzBdP24ucmV0dXJuOmNbMF0/bi50aHJvd3x8KChvPW4ucmV0dXJuKSYmby5jYWxsKG4pLDApOm4ubmV4dCkmJiEobz1vLmNhbGwobixjWzFdKSkuZG9uZSlyZXR1cm4gbztzd2l0Y2gobj0wLG8mJihjPVsyJmNbMF0sby52YWx1ZV0pLGNbMF0pe2Nhc2UgMDpjYXNlIDE6bz1jO2JyZWFrO2Nhc2UgNDpyZXR1cm4gaS5sYWJlbCsrLHt2YWx1ZTpjWzFdLGRvbmU6ITF9O2Nhc2UgNTppLmxhYmVsKyssbj1jWzFdLGM9WzBdO2NvbnRpbnVlO2Nhc2UgNzpjPWkub3BzLnBvcCgpLGkudHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKCEobz1pLnRyeXMsKG89by5sZW5ndGg+MCYmb1tvLmxlbmd0aC0xXSl8fDYhPT1jWzBdJiYyIT09Y1swXSkpe2k9MDtjb250aW51ZX1pZigzPT09Y1swXSYmKCFvfHxjWzFdPm9bMF0mJmNbMV08b1szXSkpe2kubGFiZWw9Y1sxXTticmVha31pZig2PT09Y1swXSYmaS5sYWJlbDxvWzFdKXtpLmxhYmVsPW9bMV0sbz1jO2JyZWFrfWlmKG8mJmkubGFiZWw8b1syXSl7aS5sYWJlbD1vWzJdLGkub3BzLnB1c2goYyk7YnJlYWt9b1syXSYmaS5vcHMucG9wKCksaS50cnlzLnBvcCgpO2NvbnRpbnVlfWM9ZS5jYWxsKHQsaSl9Y2F0Y2godCl7Yz1bNix0XSxuPTB9ZmluYWxseXtyPW89MH1pZig1JmNbMF0pdGhyb3cgY1sxXTtyZXR1cm57dmFsdWU6Y1swXT9jWzFdOnZvaWQgMCxkb25lOiEwfX0oW2MsYV0pfX19ZnVuY3Rpb24gYyh0LGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1bXSksdCYmIWUuaW5jbHVkZXModCk/dDoiIn12YXIgaT1mdW5jdGlvbih0KXtmdW5jdGlvbiByKGUsbil7dmFyIG89dC5jYWxsKHRoaXMsbil8fHRoaXM7cmV0dXJuIG8uZXJyb3I9ZSxvLmVycm9yX2Rlc2NyaXB0aW9uPW4sT2JqZWN0LnNldFByb3RvdHlwZU9mKG8sci5wcm90b3R5cGUpLG99cmV0dXJuIGUocix0KSxyLmZyb21QYXlsb2FkPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgcih0LmVycm9yLHQuZXJyb3JfZGVzY3JpcHRpb24pfSxyfShFcnJvcik7IWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSxuLG8sYyl7dm9pZCAwPT09YyYmKGM9bnVsbCk7dmFyIGk9dC5jYWxsKHRoaXMsZSxuKXx8dGhpcztyZXR1cm4gaS5zdGF0ZT1vLGkuYXBwU3RhdGU9YyxPYmplY3Quc2V0UHJvdG90eXBlT2YoaSxyLnByb3RvdHlwZSksaX1lKHIsdCl9KGkpLGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSl7dmFyIG49dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBuLnBvcHVwPWUsT2JqZWN0LnNldFByb3RvdHlwZU9mKG4sci5wcm90b3R5cGUpLG59ZShyLHQpfShmdW5jdGlvbih0KXtmdW5jdGlvbiByKCl7dmFyIGU9dC5jYWxsKHRoaXMsInRpbWVvdXQiLCJUaW1lb3V0Iil8fHRoaXM7cmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZihlLHIucHJvdG90eXBlKSxlfXJldHVybiBlKHIsdCkscn0oaSkpLGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSl7dmFyIG49dC5jYWxsKHRoaXMsImNhbmNlbGxlZCIsIlBvcHVwIGNsb3NlZCIpfHx0aGlzO3JldHVybiBuLnBvcHVwPWUsT2JqZWN0LnNldFByb3RvdHlwZU9mKG4sci5wcm90b3R5cGUpLG59ZShyLHQpfShpKSxmdW5jdGlvbih0KXtmdW5jdGlvbiByKGUsbixvKXt2YXIgYz10LmNhbGwodGhpcyxlLG4pfHx0aGlzO3JldHVybiBjLm1mYV90b2tlbj1vLE9iamVjdC5zZXRQcm90b3R5cGVPZihjLHIucHJvdG90eXBlKSxjfWUocix0KX0oaSk7dmFyIGE9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gcihlLG4pe3ZhciBvPXQuY2FsbCh0aGlzLCJtaXNzaW5nX3JlZnJlc2hfdG9rZW4iLCJNaXNzaW5nIFJlZnJlc2ggVG9rZW4gKGF1ZGllbmNlOiAnIi5jb25jYXQoYyhlLFsiZGVmYXVsdCJdKSwiJywgc2NvcGU6ICciKS5jb25jYXQoYyhuKSwiJykiKSl8fHRoaXM7cmV0dXJuIG8uYXVkaWVuY2U9ZSxvLnNjb3BlPW4sT2JqZWN0LnNldFByb3RvdHlwZU9mKG8sci5wcm90b3R5cGUpLG99cmV0dXJuIGUocix0KSxyfShpKSxzPXt9LHU9ZnVuY3Rpb24odCxlKXtyZXR1cm4iIi5jb25jYXQodCwifCIpLmNvbmNhdChlKX07YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0YSxjPWUudGltZW91dCxpPWUuYXV0aCxmPWUuZmV0Y2hVcmwsbD1lLmZldGNoT3B0aW9ucyxwPWUudXNlRm9ybURhdGEsaD1mdW5jdGlvbih0LGUpe3ZhciByPSJmdW5jdGlvbiI9PXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXTtpZighcilyZXR1cm4gdDt2YXIgbixvLGM9ci5jYWxsKHQpLGk9W107dHJ5e2Zvcig7KHZvaWQgMD09PWV8fGUtLSA+MCkmJiEobj1jLm5leHQoKSkuZG9uZTspaS5wdXNoKG4udmFsdWUpfWNhdGNoKHQpe289e2Vycm9yOnR9fWZpbmFsbHl7dHJ5e24mJiFuLmRvbmUmJihyPWMucmV0dXJuKSYmci5jYWxsKGMpfWZpbmFsbHl7aWYobyl0aHJvdyBvLmVycm9yfX1yZXR1cm4gaX0odC5wb3J0cywxKVswXTtyZXR1cm4gbih2b2lkIDAsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgdCxlLG4seSx2LGIsZCx3LE8sXztyZXR1cm4gbyh0aGlzLChmdW5jdGlvbihvKXtzd2l0Y2goby5sYWJlbCl7Y2FzZSAwOm49KGU9aXx8e30pLmF1ZGllbmNlLHk9ZS5zY29wZSxvLmxhYmVsPTE7Y2FzZSAxOmlmKG8udHJ5cy5wdXNoKFsxLDcsLDhdKSwhKHY9cD8obT1sLmJvZHksaz1uZXcgVVJMU2VhcmNoUGFyYW1zKG0pLFA9e30say5mb3JFYWNoKChmdW5jdGlvbih0LGUpe1BbZV09dH0pKSxQKTpKU09OLnBhcnNlKGwuYm9keSkpLnJlZnJlc2hfdG9rZW4mJiJyZWZyZXNoX3Rva2VuIj09PXYuZ3JhbnRfdHlwZSl7aWYoYj1mdW5jdGlvbih0LGUpe3JldHVybiBzW3UodCxlKV19KG4seSksIWIpdGhyb3cgbmV3IGEobix5KTtsLmJvZHk9cD9uZXcgVVJMU2VhcmNoUGFyYW1zKHIocih7fSx2KSx7cmVmcmVzaF90b2tlbjpifSkpLnRvU3RyaW5nKCk6SlNPTi5zdHJpbmdpZnkocihyKHt9LHYpLHtyZWZyZXNoX3Rva2VuOmJ9KSl9ZD12b2lkIDAsImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixsLnNpZ25hbD1kLnNpZ25hbCksdz12b2lkIDAsby5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gby50cnlzLnB1c2goWzIsNCwsNV0pLFs0LFByb21pc2UucmFjZShbKGc9YyxuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7cmV0dXJuIHNldFRpbWVvdXQodCxnKX0pKSksZmV0Y2goZixyKHt9LGwpKV0pXTtjYXNlIDM6cmV0dXJuIHc9by5zZW50KCksWzMsNV07Y2FzZSA0OnJldHVybiBPPW8uc2VudCgpLGgucG9zdE1lc3NhZ2Uoe2Vycm9yOk8ubWVzc2FnZX0pLFsyXTtjYXNlIDU6cmV0dXJuIHc/WzQsdy5qc29uKCldOihkJiZkLmFib3J0KCksaC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KSxbMl0pO2Nhc2UgNjpyZXR1cm4odD1vLnNlbnQoKSkucmVmcmVzaF90b2tlbj8oZnVuY3Rpb24odCxlLHIpe3NbdShlLHIpXT10fSh0LnJlZnJlc2hfdG9rZW4sbix5KSxkZWxldGUgdC5yZWZyZXNoX3Rva2VuKTpmdW5jdGlvbih0LGUpe2RlbGV0ZSBzW3UodCxlKV19KG4seSksaC5wb3N0TWVzc2FnZSh7b2s6dy5vayxqc29uOnR9KSxbMyw4XTtjYXNlIDc6cmV0dXJuIF89by5zZW50KCksaC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3JfZGVzY3JpcHRpb246Xy5tZXNzYWdlfX0pLFszLDhdO2Nhc2UgODpyZXR1cm5bMl19dmFyIGcsbSxrLFB9KSl9KSl9KSl9KCk7Cgo='),
    (Ic = null),
    (Oc = !1),
    function (e) {
      return (xc = xc || kc(_c, Ic, Oc)), new Worker(xc, e);
    }),
  Cc = {},
  jc = (function () {
    function e(e, t) {
      (this.cache = e),
        (this.clientId = t),
        (this.manifestKey = this.createManifestKeyFrom(this.clientId));
    }
    return (
      (e.prototype.add = function (e) {
        var t;
        return o(this, void 0, void 0, function () {
          var n, r;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                return (r = Set.bind), [4, this.cache.get(this.manifestKey)];
              case 1:
                return (
                  (n = new (r.apply(Set, [
                    void 0,
                    (null === (t = o.sent()) || void 0 === t
                      ? void 0
                      : t.keys) || [],
                  ]))()).add(e),
                  [
                    4,
                    this.cache.set(this.manifestKey, { keys: c([], a(n), !1) }),
                  ]
                );
              case 2:
                return o.sent(), [2];
            }
          });
        });
      }),
      (e.prototype.remove = function (e) {
        return o(this, void 0, void 0, function () {
          var t, n;
          return i(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.cache.get(this.manifestKey)];
              case 1:
                return (t = r.sent())
                  ? ((n = new Set(t.keys)).delete(e),
                    n.size > 0
                      ? [
                          4,
                          this.cache.set(this.manifestKey, {
                            keys: c([], a(n), !1),
                          }),
                        ]
                      : [3, 3])
                  : [3, 5];
              case 2:
              case 4:
                return [2, r.sent()];
              case 3:
                return [4, this.cache.remove(this.manifestKey)];
              case 5:
                return [2];
            }
          });
        });
      }),
      (e.prototype.get = function () {
        return this.cache.get(this.manifestKey);
      }),
      (e.prototype.clear = function () {
        return this.cache.remove(this.manifestKey);
      }),
      (e.prototype.createManifestKeyFrom = function (e) {
        return ''.concat('@@auth0spajs@@', '::').concat(e);
      }),
      e
    );
  })(),
  Rc = new Wa(),
  Wc = {
    memory: function () {
      return new uc().enclosedCache;
    },
    localstorage: function () {
      return new sc();
    },
  },
  Lc = function (e) {
    return Wc[e];
  },
  Ec = function () {
    return !/Trident.*rv:11\.0/.test(navigator.userAgent);
  },
  Zc = (function () {
    function e(e) {
      var t, n, o, i;
      if (
        ((this.options = e),
        'undefined' != typeof window &&
          (function () {
            if (!Ha())
              throw new Error(
                'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
              );
            if (void 0 === Ja())
              throw new Error(
                '\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    '
              );
          })(),
        e.cache &&
          e.cacheLocation &&
          console.warn(
            'Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`.'
          ),
        e.cache)
      )
        o = e.cache;
      else {
        if (
          ((this.cacheLocation = e.cacheLocation || 'memory'),
          !Lc(this.cacheLocation))
        )
          throw new Error(
            'Invalid cache location "'.concat(this.cacheLocation, '"')
          );
        o = Lc(this.cacheLocation)();
      }
      (this.httpTimeoutMs = e.httpTimeoutInSeconds
        ? 1e3 * e.httpTimeoutInSeconds
        : 1e4),
        (this.cookieStorage = !1 === e.legacySameSiteCookie ? gc : wc),
        (this.orgHintCookieName =
          ((i = this.options.client_id),
          'auth0.'.concat(i, '.organization_hint'))),
        (this.isAuthenticatedCookieName = (function (e) {
          return 'auth0.'.concat(e, '.is.authenticated');
        })(this.options.client_id)),
        (this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1);
      var a,
        c = e.useCookiesForTransactions ? this.cookieStorage : Sc;
      (this.scope = this.options.scope),
        (this.transactionManager = new fc(c, this.options.client_id)),
        (this.nowProvider = this.options.nowProvider || Ga),
        (this.cacheManager = new lc(
          o,
          o.allKeys ? null : new jc(o, this.options.client_id),
          this.nowProvider
        )),
        (this.domainUrl =
          ((a = this.options.domain),
          /^https?:\/\//.test(a) ? a : 'https://'.concat(a))),
        (this.tokenIssuer = (function (e, t) {
          return e
            ? e.startsWith('https://')
              ? e
              : 'https://'.concat(e, '/')
            : ''.concat(t, '/');
        })(this.options.issuer, this.domainUrl)),
        (this.defaultScope = ac(
          'openid',
          void 0 !==
            (null ===
              (n =
                null === (t = this.options) || void 0 === t
                  ? void 0
                  : t.advancedOptions) || void 0 === n
              ? void 0
              : n.defaultScope)
            ? this.options.advancedOptions.defaultScope
            : 'openid profile email'
        )),
        this.options.useRefreshTokens &&
          (this.scope = ac(this.scope, 'offline_access')),
        'undefined' != typeof window &&
          window.Worker &&
          this.options.useRefreshTokens &&
          'memory' === this.cacheLocation &&
          Ec() &&
          (this.worker = new Tc()),
        (this.customOptions = (function (e) {
          return (
            e.advancedOptions,
            e.audience,
            e.auth0Client,
            e.authorizeTimeoutInSeconds,
            e.cacheLocation,
            e.cache,
            e.client_id,
            e.domain,
            e.issuer,
            e.leeway,
            e.max_age,
            e.nowProvider,
            e.redirect_uri,
            e.scope,
            e.useRefreshTokens,
            e.useRefreshTokensFallback,
            e.useCookiesForTransactions,
            e.useFormData,
            r(e, [
              'advancedOptions',
              'audience',
              'auth0Client',
              'authorizeTimeoutInSeconds',
              'cacheLocation',
              'cache',
              'client_id',
              'domain',
              'issuer',
              'leeway',
              'max_age',
              'nowProvider',
              'redirect_uri',
              'scope',
              'useRefreshTokens',
              'useRefreshTokensFallback',
              'useCookiesForTransactions',
              'useFormData',
            ])
          );
        })(e)),
        (this.useRefreshTokensFallback =
          !1 !== this.options.useRefreshTokensFallback);
    }
    return (
      (e.prototype._url = function (e) {
        var t = encodeURIComponent(
          btoa(JSON.stringify(this.options.auth0Client || Za))
        );
        return ''.concat(this.domainUrl).concat(e, '&auth0Client=').concat(t);
      }),
      (e.prototype._getRedirectUri = function (e, t) {
        return 'function' == typeof this.options.buildRedirectUri
          ? this.options.buildRedirectUri(e, t)
          : t;
      }),
      (e.prototype._getParams = function (e, t, o, i, a) {
        var c = this.options;
        c.useRefreshTokens,
          c.useCookiesForTransactions,
          c.useFormData,
          c.auth0Client,
          c.cacheLocation,
          c.advancedOptions,
          c.detailedResponse,
          c.nowProvider,
          c.authorizeTimeoutInSeconds,
          c.legacySameSiteCookie,
          c.sessionCheckExpiryDays,
          c.domain,
          c.leeway,
          c.httpTimeoutInSeconds;
        var s = r(c, [
          'useRefreshTokens',
          'useCookiesForTransactions',
          'useFormData',
          'auth0Client',
          'cacheLocation',
          'advancedOptions',
          'detailedResponse',
          'nowProvider',
          'authorizeTimeoutInSeconds',
          'legacySameSiteCookie',
          'sessionCheckExpiryDays',
          'domain',
          'leeway',
          'httpTimeoutInSeconds',
        ]);
        return n(n(n({}, s), e), {
          scope: ac(this.defaultScope, this.scope, e.scope),
          response_type: 'code',
          response_mode: 'query',
          state: t,
          nonce: o,
          redirect_uri: a || this.options.redirect_uri,
          code_challenge: i,
          code_challenge_method: 'S256',
        });
      }),
      (e.prototype._authorizeUrl = function (e) {
        return this._url('/authorize?'.concat(za(e)));
      }),
      (e.prototype._verifyIdToken = function (e, t, n) {
        return o(this, void 0, void 0, function () {
          var r;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, this.nowProvider()];
              case 1:
                return (
                  (r = o.sent()),
                  [
                    2,
                    pc({
                      iss: this.tokenIssuer,
                      aud: this.options.client_id,
                      id_token: e,
                      nonce: t,
                      organizationId: n,
                      leeway: this.options.leeway,
                      max_age: this._parseNumber(this.options.max_age),
                      now: r,
                    }),
                  ]
                );
            }
          });
        });
      }),
      (e.prototype._parseNumber = function (e) {
        return 'string' != typeof e ? e : parseInt(e, 10) || void 0;
      }),
      (e.prototype._processOrgIdHint = function (e) {
        e
          ? this.cookieStorage.save(this.orgHintCookieName, e, {
              daysUntilExpire: this.sessionCheckExpiryDays,
              cookieDomain: this.options.cookieDomain,
            })
          : this.cookieStorage.remove(this.orgHintCookieName);
      }),
      (e.prototype.buildAuthorizeUrl = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, o, a, c, s, u, l, f, d, h, p, y;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = e.redirect_uri),
                    (o = e.appState),
                    (a = r(e, ['redirect_uri', 'appState'])),
                    (c = Da(Va())),
                    (s = Da(Va())),
                    (u = Va()),
                    [4, Ma(u)]
                  );
                case 1:
                  return (
                    (l = i.sent()),
                    (f = Qa(l)),
                    (d = e.fragment ? '#'.concat(e.fragment) : ''),
                    (h = this._getParams(
                      a,
                      c,
                      s,
                      f,
                      this._getRedirectUri('buildAuthorizeUrl', t)
                    )),
                    (p = this._authorizeUrl(h)),
                    (y = e.organization || this.options.organization),
                    this.transactionManager.create(
                      n(
                        {
                          nonce: s,
                          code_verifier: u,
                          appState: o,
                          scope: h.scope,
                          audience: h.audience || 'default',
                          redirect_uri: h.redirect_uri,
                          state: c,
                        },
                        y && { organizationId: y }
                      )
                    ),
                    [2, p + d]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.loginWithPopup = function (e, t) {
        return o(this, void 0, void 0, function () {
          var o, a, c, s, u, l, f, d, h, p, y, v, m;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                if (
                  ((e = e || {}),
                  !(t = t || {}).popup &&
                    ((t.popup = (function (e) {
                      var t = window.screenX + (window.innerWidth - 400) / 2,
                        n = window.screenY + (window.innerHeight - 600) / 2;
                      return window.open(
                        e,
                        'auth0:authorize:popup',
                        'left='
                          .concat(t, ',top=')
                          .concat(n, ',width=')
                          .concat(400, ',height=')
                          .concat(600, ',resizable,scrollbars=yes,status=1')
                      );
                    })('')),
                    !t.popup))
                )
                  throw new Error(
                    'Unable to open a popup for loginWithPopup - window.open returned `null`'
                  );
                return (
                  (o = r(e, [])),
                  (a = Da(Va())),
                  (c = Da(Va())),
                  (s = Va()),
                  [4, Ma(s)]
                );
              case 1:
                return (
                  (u = i.sent()),
                  (l = Qa(u)),
                  (f = this._getParams(
                    o,
                    a,
                    c,
                    l,
                    this._getRedirectUri(
                      'loginWithPopup',
                      this.options.redirect_uri || window.location.origin
                    )
                  )),
                  (d = this._authorizeUrl(
                    n(n({}, f), { response_mode: 'web_message' })
                  )),
                  (t.popup.location.href = d),
                  [
                    4,
                    Ya(
                      n(n({}, t), {
                        timeoutInSeconds:
                          t.timeoutInSeconds ||
                          this.options.authorizeTimeoutInSeconds ||
                          60,
                      })
                    ),
                  ]
                );
              case 2:
                if (((h = i.sent()), a !== h.state))
                  throw new Error('Invalid state');
                return [
                  4,
                  oc(
                    {
                      audience: f.audience,
                      scope: f.scope,
                      baseUrl: this.domainUrl,
                      client_id: this.options.client_id,
                      code_verifier: s,
                      code: h.code,
                      grant_type: 'authorization_code',
                      redirect_uri: f.redirect_uri,
                      auth0Client: this.options.auth0Client,
                      useFormData: this.options.useFormData,
                      timeout: this.httpTimeoutMs,
                    },
                    this.worker
                  ),
                ];
              case 3:
                return (
                  (p = i.sent()),
                  (y = e.organization || this.options.organization),
                  [4, this._verifyIdToken(p.id_token, c, y)]
                );
              case 4:
                return (
                  (v = i.sent()),
                  (m = n(n({}, p), {
                    decodedToken: v,
                    scope: f.scope,
                    audience: f.audience || 'default',
                    client_id: this.options.client_id,
                  })),
                  [4, this.cacheManager.set(m)]
                );
              case 5:
                return (
                  i.sent(),
                  this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
                    daysUntilExpire: this.sessionCheckExpiryDays,
                    cookieDomain: this.options.cookieDomain,
                  }),
                  this._processOrgIdHint(v.claims.org_id),
                  [2]
                );
            }
          });
        });
      }),
      (e.prototype.getUser = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, n, r;
            return i(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e.audience || this.options.audience || 'default'),
                    (n = ac(this.defaultScope, this.scope, e.scope)),
                    [
                      4,
                      this.cacheManager.get(
                        new cc({
                          client_id: this.options.client_id,
                          audience: t,
                          scope: n,
                        })
                      ),
                    ]
                  );
                case 1:
                  return [
                    2,
                    (r = o.sent()) && r.decodedToken && r.decodedToken.user,
                  ];
              }
            });
          })
        );
      }),
      (e.prototype.getIdTokenClaims = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, n, r;
            return i(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e.audience || this.options.audience || 'default'),
                    (n = ac(this.defaultScope, this.scope, e.scope)),
                    [
                      4,
                      this.cacheManager.get(
                        new cc({
                          client_id: this.options.client_id,
                          audience: t,
                          scope: n,
                        })
                      ),
                    ]
                  );
                case 1:
                  return [
                    2,
                    (r = o.sent()) && r.decodedToken && r.decodedToken.claims,
                  ];
              }
            });
          })
        );
      }),
      (e.prototype.loginWithRedirect = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, n, o;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = e.redirectMethod),
                    (n = r(e, ['redirectMethod'])),
                    [4, this.buildAuthorizeUrl(n)]
                  );
                case 1:
                  return (o = i.sent()), window.location[t || 'assign'](o), [2];
              }
            });
          })
        );
      }),
      (e.prototype.handleRedirectCallback = function (e) {
        return (
          void 0 === e && (e = window.location.href),
          o(this, void 0, void 0, function () {
            var t, r, o, c, s, u, l, f, d, h;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  if (0 === (t = e.split('?').slice(1)).length)
                    throw new Error(
                      'There are no query params available for parsing.'
                    );
                  if (
                    ((r = (function (e) {
                      e.indexOf('#') > -1 && (e = e.substr(0, e.indexOf('#')));
                      var t = e.split('&'),
                        n = {};
                      return (
                        t.forEach(function (e) {
                          var t = a(e.split('='), 2),
                            r = t[0],
                            o = t[1];
                          n[r] = decodeURIComponent(o);
                        }),
                        n.expires_in && (n.expires_in = parseInt(n.expires_in)),
                        n
                      );
                    })(t.join(''))),
                    (o = r.state),
                    (c = r.code),
                    (s = r.error),
                    (u = r.error_description),
                    !(l = this.transactionManager.get()))
                  )
                    throw new Error('Invalid state');
                  if ((this.transactionManager.remove(), s))
                    throw new Aa(s, u, o, l.appState);
                  if (!l.code_verifier || (l.state && l.state !== o))
                    throw new Error('Invalid state');
                  return (
                    (f = {
                      audience: l.audience,
                      scope: l.scope,
                      baseUrl: this.domainUrl,
                      client_id: this.options.client_id,
                      code_verifier: l.code_verifier,
                      grant_type: 'authorization_code',
                      code: c,
                      auth0Client: this.options.auth0Client,
                      useFormData: this.options.useFormData,
                      timeout: this.httpTimeoutMs,
                    }),
                    void 0 !== l.redirect_uri &&
                      (f.redirect_uri = l.redirect_uri),
                    [4, oc(f, this.worker)]
                  );
                case 1:
                  return (
                    (d = i.sent()),
                    [
                      4,
                      this._verifyIdToken(
                        d.id_token,
                        l.nonce,
                        l.organizationId
                      ),
                    ]
                  );
                case 2:
                  return (
                    (h = i.sent()),
                    [
                      4,
                      this.cacheManager.set(
                        n(
                          n(
                            n(n({}, d), {
                              decodedToken: h,
                              audience: l.audience,
                              scope: l.scope,
                            }),
                            d.scope ? { oauthTokenScope: d.scope } : null
                          ),
                          { client_id: this.options.client_id }
                        )
                      ),
                    ]
                  );
                case 3:
                  return (
                    i.sent(),
                    this.cookieStorage.save(
                      this.isAuthenticatedCookieName,
                      !0,
                      {
                        daysUntilExpire: this.sessionCheckExpiryDays,
                        cookieDomain: this.options.cookieDomain,
                      }
                    ),
                    this._processOrgIdHint(h.claims.org_id),
                    [2, { appState: l.appState }]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.checkSession = function (e) {
        return o(this, void 0, void 0, function () {
          var t;
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
                  if (!this.cookieStorage.get('auth0.is.authenticated'))
                    return [2];
                  this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
                    daysUntilExpire: this.sessionCheckExpiryDays,
                    cookieDomain: this.options.cookieDomain,
                  }),
                    this.cookieStorage.remove('auth0.is.authenticated');
                }
                n.label = 1;
              case 1:
                return n.trys.push([1, 3, , 4]), [4, this.getTokenSilently(e)];
              case 2:
                return n.sent(), [3, 4];
              case 3:
                if (((t = n.sent()), !Ea.includes(t.error))) throw t;
                return [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }),
      (e.prototype.getTokenSilently = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t,
              o,
              a,
              c = this;
            return i(this, function (i) {
              return (
                (t = n(
                  n({ audience: this.options.audience, ignoreCache: !1 }, e),
                  { scope: ac(this.defaultScope, this.scope, e.scope) }
                )),
                (o = t.ignoreCache),
                (a = r(t, ['ignoreCache'])),
                [
                  2,
                  ((s = function () {
                    return c._getTokenSilently(n({ ignoreCache: o }, a));
                  }),
                  (u = ''
                    .concat(this.options.client_id, '::')
                    .concat(a.audience, '::')
                    .concat(a.scope)),
                  (l = Cc[u]),
                  l ||
                    ((l = s().finally(function () {
                      delete Cc[u], (l = null);
                    })),
                    (Cc[u] = l)),
                  l),
                ]
              );
              var s, u, l;
            });
          })
        );
      }),
      (e.prototype._getTokenSilently = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, a, c, s, u, l, f, d, h;
            return i(this, function (p) {
              switch (p.label) {
                case 0:
                  return (
                    (t = e.ignoreCache),
                    (a = r(e, ['ignoreCache'])),
                    t
                      ? [3, 2]
                      : [
                          4,
                          this._getEntryFromCache({
                            scope: a.scope,
                            audience: a.audience || 'default',
                            client_id: this.options.client_id,
                            getDetailedEntry: e.detailedResponse,
                          }),
                        ]
                  );
                case 1:
                  if ((c = p.sent())) return [2, c];
                  p.label = 2;
                case 2:
                  return [
                    4,
                    ((y = function () {
                      return Rc.acquireLock('auth0.lock.getTokenSilently', 5e3);
                    }),
                    (v = 10),
                    void 0 === v && (v = 3),
                    o(void 0, void 0, void 0, function () {
                      var e;
                      return i(this, function (t) {
                        switch (t.label) {
                          case 0:
                            (e = 0), (t.label = 1);
                          case 1:
                            return e < v ? [4, y()] : [3, 4];
                          case 2:
                            if (t.sent()) return [2, !0];
                            t.label = 3;
                          case 3:
                            return e++, [3, 1];
                          case 4:
                            return [2, !1];
                        }
                      });
                    })),
                  ];
                case 3:
                  if (!p.sent()) return [3, 15];
                  p.label = 4;
                case 4:
                  return (
                    p.trys.push([4, , 12, 14]),
                    t
                      ? [3, 6]
                      : [
                          4,
                          this._getEntryFromCache({
                            scope: a.scope,
                            audience: a.audience || 'default',
                            client_id: this.options.client_id,
                            getDetailedEntry: e.detailedResponse,
                          }),
                        ]
                  );
                case 5:
                  if ((c = p.sent())) return [2, c];
                  p.label = 6;
                case 6:
                  return this.options.useRefreshTokens
                    ? [4, this._getTokenUsingRefreshToken(a)]
                    : [3, 8];
                case 7:
                  return (u = p.sent()), [3, 10];
                case 8:
                  return [4, this._getTokenFromIFrame(a)];
                case 9:
                  (u = p.sent()), (p.label = 10);
                case 10:
                  return (
                    (s = u),
                    [
                      4,
                      this.cacheManager.set(
                        n({ client_id: this.options.client_id }, s)
                      ),
                    ]
                  );
                case 11:
                  return (
                    p.sent(),
                    this.cookieStorage.save(
                      this.isAuthenticatedCookieName,
                      !0,
                      {
                        daysUntilExpire: this.sessionCheckExpiryDays,
                        cookieDomain: this.options.cookieDomain,
                      }
                    ),
                    e.detailedResponse
                      ? ((l = s.id_token),
                        (f = s.access_token),
                        (d = s.oauthTokenScope),
                        (h = s.expires_in),
                        [
                          2,
                          n(
                            n(
                              { id_token: l, access_token: f },
                              d ? { scope: d } : null
                            ),
                            { expires_in: h }
                          ),
                        ])
                      : [2, s.access_token]
                  );
                case 12:
                  return [4, Rc.releaseLock('auth0.lock.getTokenSilently')];
                case 13:
                  return p.sent(), [7];
                case 14:
                  return [3, 16];
                case 15:
                  throw new Fa();
                case 16:
                  return [2];
              }
              var y, v;
            });
          })
        );
      }),
      (e.prototype.getTokenWithPopup = function (e, t) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          o(this, void 0, void 0, function () {
            return i(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (e.audience = e.audience || this.options.audience),
                    (e.scope = ac(this.defaultScope, this.scope, e.scope)),
                    (t = n(n({}, La), t)),
                    [4, this.loginWithPopup(e, t)]
                  );
                case 1:
                  return (
                    r.sent(),
                    [
                      4,
                      this.cacheManager.get(
                        new cc({
                          scope: e.scope,
                          audience: e.audience || 'default',
                          client_id: this.options.client_id,
                        })
                      ),
                    ]
                  );
                case 2:
                  return [2, r.sent().access_token];
              }
            });
          })
        );
      }),
      (e.prototype.isAuthenticated = function () {
        return o(this, void 0, void 0, function () {
          return i(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.getUser()];
              case 1:
                return [2, !!e.sent()];
            }
          });
        });
      }),
      (e.prototype.buildLogoutUrl = function (e) {
        void 0 === e && (e = {}),
          null !== e.client_id
            ? (e.client_id = e.client_id || this.options.client_id)
            : delete e.client_id;
        var t = e.federated,
          n = r(e, ['federated']),
          o = t ? '&federated' : '';
        return this._url('/v2/logout?'.concat(za(n))) + o;
      }),
      (e.prototype.logout = function (e) {
        var t = this;
        void 0 === e && (e = {});
        var n = e.localOnly,
          o = r(e, ['localOnly']);
        if (n && o.federated)
          throw new Error(
            'It is invalid to set both the `federated` and `localOnly` options to `true`'
          );
        var i = function () {
          if (
            (t.cookieStorage.remove(t.orgHintCookieName),
            t.cookieStorage.remove(t.isAuthenticatedCookieName),
            !n)
          ) {
            var e = t.buildLogoutUrl(o);
            window.location.assign(e);
          }
        };
        if (this.options.cache)
          return this.cacheManager.clear().then(function () {
            return i();
          });
        this.cacheManager.clearSync(), i();
      }),
      (e.prototype._getTokenFromIFrame = function (e) {
        return o(this, void 0, void 0, function () {
          var t, o, a, c, s, u, l, f, d, h, p, y, v, m, b, g, w;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return (t = Da(Va())), (o = Da(Va())), (a = Va()), [4, Ma(a)];
              case 1:
                (c = i.sent()),
                  (s = Qa(c)),
                  e.detailedResponse,
                  (u = r(e, ['detailedResponse'])),
                  (l = this._getParams(
                    u,
                    t,
                    o,
                    s,
                    this._getRedirectUri(
                      '_getTokenFromIFrame',
                      e.redirect_uri ||
                        this.options.redirect_uri ||
                        window.location.origin
                    )
                  )),
                  (f = this.cookieStorage.get(this.orgHintCookieName)) &&
                    !l.organization &&
                    (l.organization = f),
                  (d = this._authorizeUrl(
                    n(n({}, l), {
                      prompt: 'none',
                      response_mode: 'web_message',
                    })
                  )),
                  (i.label = 2);
              case 2:
                if ((i.trys.push([2, 6, , 7]), window.crossOriginIsolated))
                  throw new Pa(
                    'login_required',
                    'The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.'
                  );
                return (
                  (h =
                    e.timeoutInSeconds ||
                    this.options.authorizeTimeoutInSeconds),
                  [
                    4,
                    ((S = d),
                    (k = this.domainUrl),
                    (_ = h),
                    void 0 === _ && (_ = 60),
                    new Promise(function (e, t) {
                      var n = window.document.createElement('iframe');
                      n.setAttribute('width', '0'),
                        n.setAttribute('height', '0'),
                        (n.style.display = 'none');
                      var r,
                        o = function () {
                          window.document.body.contains(n) &&
                            (window.document.body.removeChild(n),
                            window.removeEventListener('message', r, !1));
                        },
                        i = setTimeout(function () {
                          t(new Fa()), o();
                        }, 1e3 * _);
                      (r = function (n) {
                        if (
                          n.origin == k &&
                          n.data &&
                          'authorization_response' === n.data.type
                        ) {
                          var a = n.source;
                          a && a.close(),
                            n.data.response.error
                              ? t(Pa.fromPayload(n.data.response))
                              : e(n.data.response),
                            clearTimeout(i),
                            window.removeEventListener('message', r, !1),
                            setTimeout(o, 2e3);
                        }
                      }),
                        window.addEventListener('message', r, !1),
                        window.document.body.appendChild(n),
                        n.setAttribute('src', S);
                    })),
                  ]
                );
              case 3:
                if (((p = i.sent()), t !== p.state))
                  throw new Error('Invalid state');
                return (
                  (y = e.scope),
                  (v = e.audience),
                  e.redirect_uri,
                  e.ignoreCache,
                  e.timeoutInSeconds,
                  e.detailedResponse,
                  (m = r(e, [
                    'scope',
                    'audience',
                    'redirect_uri',
                    'ignoreCache',
                    'timeoutInSeconds',
                    'detailedResponse',
                  ])),
                  [
                    4,
                    oc(
                      n(n(n({}, this.customOptions), m), {
                        scope: y,
                        audience: v,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        code_verifier: a,
                        code: p.code,
                        grant_type: 'authorization_code',
                        redirect_uri: l.redirect_uri,
                        auth0Client: this.options.auth0Client,
                        useFormData: this.options.useFormData,
                        timeout: m.timeout || this.httpTimeoutMs,
                      }),
                      this.worker
                    ),
                  ]
                );
              case 4:
                return (b = i.sent()), [4, this._verifyIdToken(b.id_token, o)];
              case 5:
                return (
                  (g = i.sent()),
                  this._processOrgIdHint(g.claims.org_id),
                  [
                    2,
                    n(n({}, b), {
                      decodedToken: g,
                      scope: l.scope,
                      oauthTokenScope: b.scope,
                      audience: l.audience || 'default',
                    }),
                  ]
                );
              case 6:
                throw (
                  ('login_required' === (w = i.sent()).error &&
                    this.logout({ localOnly: !0 }),
                  w)
                );
              case 7:
                return [2];
            }
            var S, k, _;
          });
        });
      }),
      (e.prototype._getTokenUsingRefreshToken = function (e) {
        return o(this, void 0, void 0, function () {
          var t, o, a, c, s, u, l, f, d;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e.scope = ac(
                    this.defaultScope,
                    this.options.scope,
                    e.scope
                  )),
                  [
                    4,
                    this.cacheManager.get(
                      new cc({
                        scope: e.scope,
                        audience: e.audience || 'default',
                        client_id: this.options.client_id,
                      })
                    ),
                  ]
                );
              case 1:
                return ((t = i.sent()) && t.refresh_token) || this.worker
                  ? [3, 4]
                  : this.useRefreshTokensFallback
                  ? [4, this._getTokenFromIFrame(e)]
                  : [3, 3];
              case 2:
                return [2, i.sent()];
              case 3:
                throw new Na(e.audience || 'default', e.scope);
              case 4:
                (o = this._getRedirectUri(
                  '_getTokenUsingRefreshToken',
                  e.redirect_uri ||
                    this.options.redirect_uri ||
                    window.location.origin
                )),
                  (c = e.scope),
                  (s = e.audience),
                  e.ignoreCache,
                  e.timeoutInSeconds,
                  e.detailedResponse,
                  (u = r(e, [
                    'scope',
                    'audience',
                    'ignoreCache',
                    'timeoutInSeconds',
                    'detailedResponse',
                  ])),
                  (l =
                    'number' == typeof e.timeoutInSeconds
                      ? 1e3 * e.timeoutInSeconds
                      : null),
                  (i.label = 5);
              case 5:
                return (
                  i.trys.push([5, 7, , 10]),
                  [
                    4,
                    oc(
                      n(
                        n(
                          n(n(n({}, this.customOptions), u), {
                            audience: s,
                            scope: c,
                            baseUrl: this.domainUrl,
                            client_id: this.options.client_id,
                            grant_type: 'refresh_token',
                            refresh_token: t && t.refresh_token,
                            redirect_uri: o,
                          }),
                          l && { timeout: l }
                        ),
                        {
                          auth0Client: this.options.auth0Client,
                          useFormData: this.options.useFormData,
                          timeout: this.httpTimeoutMs,
                        }
                      ),
                      this.worker
                    ),
                  ]
                );
              case 6:
                return (a = i.sent()), [3, 10];
              case 7:
                return ((f = i.sent()).message.indexOf(
                  'Missing Refresh Token'
                ) > -1 ||
                  (f.message &&
                    f.message.indexOf('invalid refresh token') > -1)) &&
                  this.useRefreshTokensFallback
                  ? [4, this._getTokenFromIFrame(e)]
                  : [3, 9];
              case 8:
                return [2, i.sent()];
              case 9:
                throw f;
              case 10:
                return [4, this._verifyIdToken(a.id_token)];
              case 11:
                return (
                  (d = i.sent()),
                  [
                    2,
                    n(n({}, a), {
                      decodedToken: d,
                      scope: e.scope,
                      oauthTokenScope: a.scope,
                      audience: e.audience || 'default',
                    }),
                  ]
                );
            }
          });
        });
      }),
      (e.prototype._getEntryFromCache = function (e) {
        var t = e.scope,
          r = e.audience,
          a = e.client_id,
          c = e.getDetailedEntry,
          s = void 0 !== c && c;
        return o(this, void 0, void 0, function () {
          var e, o, c, u, l;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return [
                  4,
                  this.cacheManager.get(
                    new cc({ scope: t, audience: r, client_id: a }),
                    60
                  ),
                ];
              case 1:
                return (e = i.sent()) && e.access_token
                  ? s
                    ? ((o = e.id_token),
                      (c = e.access_token),
                      (u = e.oauthTokenScope),
                      (l = e.expires_in),
                      [
                        2,
                        n(
                          n(
                            { id_token: o, access_token: c },
                            u ? { scope: u } : null
                          ),
                          { expires_in: l }
                        ),
                      ])
                    : [2, e.access_token]
                  : [2];
            }
          });
        });
      }),
      e
    );
  })(),
  Gc = function () {};

/**
 * The initial auth state.
 */
var initialAuthState = {
  isAuthenticated: false,
  isLoading: true,
};

/**
 * @ignore
 */
var stub = function () {
  throw new Error('You forgot to wrap your component in <Auth0Provider>.');
};
/**
 * @ignore
 */
var initialContext = __assign(__assign({}, initialAuthState), {
  buildAuthorizeUrl: stub,
  buildLogoutUrl: stub,
  getAccessTokenSilently: stub,
  getAccessTokenWithPopup: stub,
  getIdTokenClaims: stub,
  loginWithRedirect: stub,
  loginWithPopup: stub,
  logout: stub,
  handleRedirectCallback: stub,
});
/**
 * The Auth0 Context
 */
var Auth0Context = React.createContext(initialContext);

/**
 * An OAuth2 error will come from the authorization server and will have at least an `error` property which will
 * be the error code. And possibly an `error_description` property
 *
 * See: https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.3.1.2.6
 */
var OAuthError = /** @class */ (function (_super) {
  __extends(OAuthError, _super);
  function OAuthError(error, error_description) {
    var _this = _super.call(this, error_description || error) || this;
    _this.error = error;
    _this.error_description = error_description;
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(_this, OAuthError.prototype);
    return _this;
  }
  return OAuthError;
})(Error);

var CODE_RE = /[?&]code=[^&]+/;
var STATE_RE = /[?&]state=[^&]+/;
var ERROR_RE = /[?&]error=[^&]+/;
var hasAuthParams = function (searchParams) {
  if (searchParams === void 0) {
    searchParams = window.location.search;
  }
  return (
    (CODE_RE.test(searchParams) || ERROR_RE.test(searchParams)) &&
    STATE_RE.test(searchParams)
  );
};
var normalizeErrorFn = function (fallbackMessage) {
  return function (error) {
    if ('error' in error) {
      return new OAuthError(error.error, error.error_description);
    }
    if (error instanceof Error) {
      return error;
    }
    return new Error(fallbackMessage);
  };
};
var loginError = normalizeErrorFn('Login failed');
var tokenError = normalizeErrorFn('Get access token failed');

/**
 * Handles how that state changes in the `useAuth0` hook.
 */
var reducer = function (state, action) {
  var _a, _b;
  switch (action.type) {
    case 'LOGIN_POPUP_STARTED':
      return __assign(__assign({}, state), { isLoading: true });
    case 'LOGIN_POPUP_COMPLETE':
    case 'INITIALISED':
      return __assign(__assign({}, state), {
        isAuthenticated: !!action.user,
        user: action.user,
        isLoading: false,
        error: undefined,
      });
    case 'HANDLE_REDIRECT_COMPLETE':
    case 'GET_ACCESS_TOKEN_COMPLETE':
      if (
        ((_a = state.user) === null || _a === void 0
          ? void 0
          : _a.updated_at) ===
        ((_b = action.user) === null || _b === void 0 ? void 0 : _b.updated_at)
      ) {
        return state;
      }
      return __assign(__assign({}, state), {
        isAuthenticated: !!action.user,
        user: action.user,
      });
    case 'LOGOUT':
      return __assign(__assign({}, state), {
        isAuthenticated: false,
        user: undefined,
      });
    case 'ERROR':
      return __assign(__assign({}, state), {
        isLoading: false,
        error: action.error,
      });
  }
};

/**
 * @ignore
 */
var toAuth0ClientOptions = function (opts) {
  var clientId = opts.clientId,
    redirectUri = opts.redirectUri,
    maxAge = opts.maxAge,
    validOpts = __rest(opts, ['clientId', 'redirectUri', 'maxAge']);
  return __assign(__assign({}, validOpts), {
    client_id: clientId,
    redirect_uri: redirectUri,
    max_age: maxAge,
    auth0Client: {
      name: 'auth0-react',
      version: '1.10.2',
    },
  });
};
/**
 * @ignore
 */
var toAuth0LoginRedirectOptions = function (opts) {
  if (!opts) {
    return;
  }
  var redirectUri = opts.redirectUri,
    validOpts = __rest(opts, ['redirectUri']);
  return __assign(__assign({}, validOpts), { redirect_uri: redirectUri });
};
/**
 * @ignore
 */
var defaultOnRedirectCallback = function (appState) {
  window.history.replaceState(
    {},
    document.title,
    (appState === null || appState === void 0 ? void 0 : appState.returnTo) ||
      window.location.pathname
  );
};
/**
 * ```jsx
 * <Auth0Provider
 *   domain={domain}
 *   clientId={clientId}
 *   redirectUri={window.location.origin}>
 *   <MyApp />
 * </Auth0Provider>
 * ```
 *
 * Provides the Auth0Context to its child components.
 */
var Auth0Provider = function (opts) {
  var children = opts.children,
    skipRedirectCallback = opts.skipRedirectCallback,
    _a = opts.onRedirectCallback,
    onRedirectCallback = _a === void 0 ? defaultOnRedirectCallback : _a,
    clientOpts = __rest(opts, [
      'children',
      'skipRedirectCallback',
      'onRedirectCallback',
    ]);
  var client = React.useState(function () {
    return new Zc(toAuth0ClientOptions(clientOpts));
  })[0];
  var _b = React.useReducer(reducer, initialAuthState),
    state = _b[0],
    dispatch = _b[1];
  var didInitialise = React.useRef(false);
  React.useEffect(
    function () {
      if (didInitialise.current) {
        return;
      }
      didInitialise.current = true;
      (function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var appState, user, error_1;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 6, , 7]);
                if (!(hasAuthParams() && !skipRedirectCallback))
                  return [3 /*break*/, 2];
                return [4 /*yield*/, client.handleRedirectCallback()];
              case 1:
                appState = _a.sent().appState;
                onRedirectCallback(appState);
                return [3 /*break*/, 4];
              case 2:
                return [4 /*yield*/, client.checkSession()];
              case 3:
                _a.sent();
                _a.label = 4;
              case 4:
                return [4 /*yield*/, client.getUser()];
              case 5:
                user = _a.sent();
                dispatch({ type: 'INITIALISED', user: user });
                return [3 /*break*/, 7];
              case 6:
                error_1 = _a.sent();
                dispatch({ type: 'ERROR', error: loginError(error_1) });
                return [3 /*break*/, 7];
              case 7:
                return [2 /*return*/];
            }
          });
        });
      })();
    },
    [client, onRedirectCallback, skipRedirectCallback]
  );
  var buildAuthorizeUrl = React.useCallback(
    function (opts) {
      return client.buildAuthorizeUrl(toAuth0LoginRedirectOptions(opts));
    },
    [client]
  );
  var buildLogoutUrl = React.useCallback(
    function (opts) {
      return client.buildLogoutUrl(opts);
    },
    [client]
  );
  var loginWithRedirect = React.useCallback(
    function (opts) {
      return client.loginWithRedirect(toAuth0LoginRedirectOptions(opts));
    },
    [client]
  );
  var loginWithPopup = React.useCallback(
    function (options, config) {
      return __awaiter(void 0, void 0, void 0, function () {
        var error_2, user;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              dispatch({ type: 'LOGIN_POPUP_STARTED' });
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4 /*yield*/, client.loginWithPopup(options, config)];
            case 2:
              _a.sent();
              return [3 /*break*/, 4];
            case 3:
              error_2 = _a.sent();
              dispatch({ type: 'ERROR', error: loginError(error_2) });
              return [2 /*return*/];
            case 4:
              return [4 /*yield*/, client.getUser()];
            case 5:
              user = _a.sent();
              dispatch({ type: 'LOGIN_POPUP_COMPLETE', user: user });
              return [2 /*return*/];
          }
        });
      });
    },
    [client]
  );
  var logout = React.useCallback(
    function (opts) {
      if (opts === void 0) {
        opts = {};
      }
      var maybePromise = client.logout(opts);
      if (opts.localOnly) {
        if (maybePromise && typeof maybePromise.then === 'function') {
          return maybePromise.then(function () {
            return dispatch({ type: 'LOGOUT' });
          });
        }
        dispatch({ type: 'LOGOUT' });
      }
      return maybePromise;
    },
    [client]
  );
  var getAccessTokenSilently = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (opts) {
      return __awaiter(void 0, void 0, void 0, function () {
        var token, error_3, _a;
        var _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 2, 3, 5]);
              return [4 /*yield*/, client.getTokenSilently(opts)];
            case 1:
              token = _c.sent();
              return [3 /*break*/, 5];
            case 2:
              error_3 = _c.sent();
              throw tokenError(error_3);
            case 3:
              _a = dispatch;
              _b = {
                type: 'GET_ACCESS_TOKEN_COMPLETE',
              };
              return [4 /*yield*/, client.getUser()];
            case 4:
              _a.apply(void 0, [((_b.user = _c.sent()), _b)]);
              return [7 /*endfinally*/];
            case 5:
              return [2 /*return*/, token];
          }
        });
      });
    },
    [client]
  );
  var getAccessTokenWithPopup = React.useCallback(
    function (opts, config) {
      return __awaiter(void 0, void 0, void 0, function () {
        var token, error_4, _a;
        var _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 2, 3, 5]);
              return [4 /*yield*/, client.getTokenWithPopup(opts, config)];
            case 1:
              token = _c.sent();
              return [3 /*break*/, 5];
            case 2:
              error_4 = _c.sent();
              throw tokenError(error_4);
            case 3:
              _a = dispatch;
              _b = {
                type: 'GET_ACCESS_TOKEN_COMPLETE',
              };
              return [4 /*yield*/, client.getUser()];
            case 4:
              _a.apply(void 0, [((_b.user = _c.sent()), _b)]);
              return [7 /*endfinally*/];
            case 5:
              return [2 /*return*/, token];
          }
        });
      });
    },
    [client]
  );
  var getIdTokenClaims = React.useCallback(
    function (opts) {
      return client.getIdTokenClaims(opts);
    },
    [client]
  );
  var handleRedirectCallback = React.useCallback(
    function (url) {
      return __awaiter(void 0, void 0, void 0, function () {
        var error_5, _a;
        var _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 2, 3, 5]);
              return [4 /*yield*/, client.handleRedirectCallback(url)];
            case 1:
              return [2 /*return*/, _c.sent()];
            case 2:
              error_5 = _c.sent();
              throw tokenError(error_5);
            case 3:
              _a = dispatch;
              _b = {
                type: 'HANDLE_REDIRECT_COMPLETE',
              };
              return [4 /*yield*/, client.getUser()];
            case 4:
              _a.apply(void 0, [((_b.user = _c.sent()), _b)]);
              return [7 /*endfinally*/];
            case 5:
              return [2 /*return*/];
          }
        });
      });
    },
    [client]
  );
  var contextValue = React.useMemo(
    function () {
      return __assign(__assign({}, state), {
        buildAuthorizeUrl: buildAuthorizeUrl,
        buildLogoutUrl: buildLogoutUrl,
        getAccessTokenSilently: getAccessTokenSilently,
        getAccessTokenWithPopup: getAccessTokenWithPopup,
        getIdTokenClaims: getIdTokenClaims,
        loginWithRedirect: loginWithRedirect,
        loginWithPopup: loginWithPopup,
        logout: logout,
        handleRedirectCallback: handleRedirectCallback,
      });
    },
    [
      state,
      buildAuthorizeUrl,
      buildLogoutUrl,
      getAccessTokenSilently,
      getAccessTokenWithPopup,
      getIdTokenClaims,
      loginWithRedirect,
      loginWithPopup,
      logout,
      handleRedirectCallback,
    ]
  );
  return React__default['default'].createElement(
    Auth0Context.Provider,
    { value: contextValue },
    children
  );
};

/**
 * ```js
 * const {
 *   // Auth state:
 *   error,
 *   isAuthenticated,
 *   isLoading,
 *   user,
 *   // Auth methods:
 *   getAccessTokenSilently,
 *   getAccessTokenWithPopup,
 *   getIdTokenClaims,
 *   loginWithRedirect,
 *   loginWithPopup,
 *   logout,
 * } = useAuth0<TUser>();
 * ```
 *
 * Use the `useAuth0` hook in your components to access the auth state and methods.
 *
 * TUser is an optional type param to provide a type to the `user` field.
 */
var useAuth0 = function () {
  return React.useContext(Auth0Context);
};

/**
 * ```jsx
 * class MyComponent extends Component {
 *   render() {
 *     // Access the auth context from the `auth0` prop
 *     const { user } = this.props.auth0;
 *     return <div>Hello {user.name}!</div>
 *   }
 * }
 * // Wrap your class component in withAuth0
 * export default withAuth0(MyComponent);
 * ```
 *
 * Wrap your class components in this Higher Order Component to give them access to the Auth0Context
 */
var withAuth0 = function (Component) {
  return function WithAuth(props) {
    return React__default['default'].createElement(
      Auth0Context.Consumer,
      null,
      function (auth) {
        return React__default['default'].createElement(
          Component,
          __assign({}, props, { auth0: auth })
        );
      }
    );
  };
};

/**
 * @ignore
 */
var defaultOnRedirecting = function () {
  return React__default['default'].createElement(
    React__default['default'].Fragment,
    null
  );
};
/**
 * @ignore
 */
var defaultReturnTo = function () {
  return ''.concat(window.location.pathname).concat(window.location.search);
};
/**
 * ```js
 * const MyProtectedComponent = withAuthenticationRequired(MyComponent);
 * ```
 *
 * When you wrap your components in this Higher Order Component and an anonymous user visits your component
 * they will be redirected to the login page and returned to the page they we're redirected from after login.
 */
var withAuthenticationRequired = function (Component, options) {
  if (options === void 0) {
    options = {};
  }
  return function WithAuthenticationRequired(props) {
    var _this = this;
    var _a = useAuth0(),
      user = _a.user,
      isAuthenticated = _a.isAuthenticated,
      isLoading = _a.isLoading,
      loginWithRedirect = _a.loginWithRedirect;
    var _b = options.returnTo,
      returnTo = _b === void 0 ? defaultReturnTo : _b,
      _c = options.onRedirecting,
      onRedirecting = _c === void 0 ? defaultOnRedirecting : _c,
      _d = options.claimCheck,
      claimCheck =
        _d === void 0
          ? function () {
              return true;
            }
          : _d,
      loginOptions = options.loginOptions;
    /**
     * The route is authenticated if the user has valid auth and there are no
     * JWT claim mismatches.
     */
    var routeIsAuthenticated = isAuthenticated && claimCheck(user);
    React.useEffect(
      function () {
        if (isLoading || routeIsAuthenticated) {
          return;
        }
        var opts = __assign(__assign({}, loginOptions), {
          appState: __assign(
            __assign({}, loginOptions && loginOptions.appState),
            { returnTo: typeof returnTo === 'function' ? returnTo() : returnTo }
          ),
        });
        (function () {
          return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4 /*yield*/, loginWithRedirect(opts)];
                case 1:
                  _a.sent();
                  return [2 /*return*/];
              }
            });
          });
        })();
      },
      [
        isLoading,
        routeIsAuthenticated,
        loginWithRedirect,
        loginOptions,
        returnTo,
      ]
    );
    return routeIsAuthenticated
      ? React__default['default'].createElement(Component, __assign({}, props))
      : onRedirecting();
  };
};

exports.Auth0Context = Auth0Context;
exports.Auth0Provider = Auth0Provider;
exports.InMemoryCache = uc;
exports.LocalStorageCache = sc;
exports.OAuthError = OAuthError;
exports.User = Gc;
exports.useAuth0 = useAuth0;
exports.withAuth0 = withAuth0;
exports.withAuthenticationRequired = withAuthenticationRequired;
//# sourceMappingURL=auth0-react.cjs.js.map
