!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(
        exports,
        require('immer'),
        require('react'),
        require('redux'),
        require('redux-thunk'),
        require('memoizerific'),
        require('is-plain-object'),
        require('debounce'),
      )
    : 'function' == typeof define && define.amd
    ? define([
        'exports',
        'immer',
        'react',
        'redux',
        'redux-thunk',
        'memoizerific',
        'is-plain-object',
        'debounce',
      ], t)
    : t(
        ((e = e || self).EasyPeasy = {}),
        e.produce,
        e.React,
        e.Redux,
        e.ReduxThunk,
        e.memoizerific,
        e.isPlainObject,
        e.debounce,
      );
})(this, function(e, l, s, H, B, U, V, G) {
  'use strict';
  var c = 'default' in s ? s.default : s;
  (B = B && Object.prototype.hasOwnProperty.call(B, 'default') ? B.default : B),
    (U =
      U && Object.prototype.hasOwnProperty.call(U, 'default') ? U.default : U),
    (V =
      V && Object.prototype.hasOwnProperty.call(V, 'default') ? V.default : V),
    (G =
      G && Object.prototype.hasOwnProperty.call(G, 'default') ? G.default : G);
  var r = s.createContext(),
    f = 'undefined' != typeof window ? s.useLayoutEffect : s.useEffect;
  function t(t) {
    return function(e, n) {
      var r = s.useContext(t),
        o = s.useRef(e),
        i = s.useRef(),
        u = s.useRef(!0),
        c = s.useRef(),
        a = s.useReducer(function(e) {
          return e + 1;
        }, 0)[1];
      if (c.current || o.current !== e || void 0 === i.current)
        try {
          i.current = e(r.getState());
        } catch (e) {
          throw c.current || e;
        }
      return (
        f(function() {
          (o.current = e), (c.current = void 0);
        }),
        f(function() {
          function e() {
            try {
              var e = o.current(r.getState());
              if ('function' == typeof n ? n(i.current, e) : i.current === e)
                return;
              i.current = e;
            } catch (e) {
              c.current = e;
            }
            u.current && a({});
          }
          var t = r.subscribe(e);
          return (
            e(),
            function() {
              (u.current = !1), t();
            }
          );
        }, []),
        i.current
      );
    };
  }
  var n = t(r);
  function a(t) {
    return function(e) {
      return e(s.useContext(t).getActions());
    };
  }
  var o = a(r);
  function d(e) {
    return function() {
      return s.useContext(e).dispatch;
    };
  }
  var i = d(r);
  function u() {
    return s.useContext(r);
  }
  function p(o) {
    return function() {
      var e = s.useContext(o),
        t = s.useState(!1),
        n = t[0],
        r = t[1];
      return (
        s.useEffect(function() {
          e.persist.resolveRehydration().then(function() {
            return r(!0);
          });
        }, []),
        n
      );
    };
  }
  var v = p(r);
  function K() {
    return (K =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
  }
  var F = 'a',
    Q = 'aO',
    W = 'c',
    Y = 'p',
    Z = 'r',
    $ = 'tO',
    ee = 't',
    te = function(e) {
      return (e[F] = {}), e;
    },
    h = [
      function(e) {
        return e;
      },
    ],
    ne = function(e) {
      return (function t(n) {
        var r = Object.keys(n).reduce(function(e, t) {
          return (
            null == Object.getOwnPropertyDescriptor(n, t).get && (e[t] = n[t]),
            e
          );
        }, {});
        return (
          Object.keys(r).forEach(function(e) {
            V(r[e]) && (r[e] = t(r[e]));
          }),
          r
        );
      })(e);
    },
    y = function(e) {
      return null != e && 'object' == typeof e && 'function' == typeof e.then;
    };
  function re(e, t) {
    return e.reduce(function(e, t) {
      return V(e) ? e[t] : void 0;
    }, t);
  }
  var oe = function(r, t, o) {
    0 !== r.length
      ? r.reduce(function(e, t, n) {
          return n + 1 === r.length ? (e[t] = o) : (e[t] = e[t] || {}), e[t];
        }, t)
      : 'object' == typeof o &&
        (Object.keys(t).forEach(function(e) {
          delete t[e];
        }),
        Object.keys(o).forEach(function(e) {
          t[e] = o[e];
        }));
  };
  function g(d) {
    return (
      void 0 === d && (d = !1),
      function(e, t, n) {
        if (d) {
          var r = re(e, t),
            o = n(r);
          return r !== o
            ? (function e(t, n, r) {
                if (0 === t.length) return r;
                var o = K({}, n),
                  i = t[0];
                return (
                  1 === t.length ? (o[i] = r) : (o[i] = e(t.slice(1), o[i], r)),
                  o
                );
              })(e, t, o)
            : t;
        }
        if (0 === e.length) {
          var i = l.createDraft(t),
            u = n(i);
          return u ? (l.isDraft(u) ? l.finishDraft(u) : u) : l.finishDraft(i);
        }
        var c = e.slice(0, e.length - 1),
          a = l.createDraft(t),
          s = re(c, t),
          f = n(re(e, a));
        return f && (s[e[e.length - 1]] = f), l.finishDraft(a);
      }
    );
  }
  function ie(e, a, u, c) {
    function s(e, t) {
      var n,
        r,
        o,
        i,
        u = a[t.type];
      if (u) {
        var c = u[F] || u[Q];
        return (
          (n = e),
          (r = t),
          (o = u),
          (i = c.parent),
          f(i, n, function(e) {
            return o(e, r.payload);
          })
        );
      }
      return e;
    }
    var f = g(e);
    return function(e, t) {
      var n,
        i,
        r = s(e, t),
        o =
          0 < u.length
            ? ((n = r),
              (i = t),
              u.reduce(function(e, t) {
                var n = t.parentPath,
                  r = t.key,
                  o = t.reducer;
                return f(n, e, function(e) {
                  return (e[r] = o(e[r], i)), e;
                });
              }, n))
            : r;
      return (
        e !== o &&
          c.forEach(function(e) {
            var t = e.parentPath,
              n = e.bindComputedProperty,
              r = re(t, o);
            r && n(r);
          }),
        o
      );
    };
  }
  var m = {
    getItem: function() {},
    setItem: function() {},
    removeItem: function() {},
  };
  function S(e) {
    try {
      return 'undefined' != typeof window && void 0 !== window[e]
        ? window[e]
        : m;
    } catch (e) {
      return m;
    }
  }
  var b = S('localStorage'),
    O = S('sessionStorage');
  function ue(u, c) {
    void 0 === u && (u = O),
      void 0 === c && (c = []),
      'string' == typeof u &&
        (u = 'localStorage' === u ? b : 'sessionStorage' === u ? O : m);
    function n(e, t) {
      var n = t.substr(t.indexOf('@') + 1),
        r = u === b || u === O ? JSON.parse(e).data : e;
      return o.reduce(function(e, t) {
        return t.out(e, n);
      }, r);
    }
    var o = c.reverse(),
      r = y(u.getItem('_'));
    return {
      isAsync: r,
      getItem: function(t) {
        if (r)
          return u.getItem(t).then(function(e) {
            return null != e ? n(e, t) : void 0;
          });
        var e = u.getItem(t);
        return null != e ? n(e, t) : void 0;
      },
      setItem: function(e, t) {
        return u.setItem(
          e,
          ((n = t),
          (o = (r = e).substr(r.indexOf('@') + 1)),
          (i = c.reduce(function(e, t) {
            return t.in(e, o);
          }, n)),
          u === b || u === O ? JSON.stringify({ data: i }) : i),
        );
        var n, r, o, i;
      },
      removeItem: function(e) {
        return u.removeItem(e);
      },
    };
  }
  function ce(e, n, r) {
    var t = Object.keys(e);
    return (
      0 < n.length &&
        (t = t.reduce(function(e, t) {
          return -1 !==
            n.findIndex(function(e) {
              return e === t;
            })
            ? [].concat(e, [t])
            : e;
        }, [])),
      0 < r.length &&
        (t = t.reduce(function(e, t) {
          return -1 !==
            r.findIndex(function(e) {
              return e === t;
            })
            ? e
            : [].concat(e, [t]);
        }, [])),
      t
    );
  }
  function ae(l, p, v) {
    var h = Promise.resolve();
    return (
      0 < v.internals.persistenceConfig.length &&
        v.internals.persistenceConfig.forEach(function(e) {
          function n(e, t) {
            var n;
            'overwrite' === c
              ? oe(i, e, t)
              : 'merge' === c
              ? ((n = re(i, e)),
                Object.keys(t).forEach(function(e) {
                  n[e] = t[e];
                }))
              : 'mergeDeep' === c &&
                (function n(r, o) {
                  Object.keys(o).forEach(function(e) {
                    var t = o[e];
                    V(t) ? (V(r[e]) || (r[e] = {}), n(r[e], t)) : (r[e] = t);
                  });
                })(re(i, e), t);
          }
          var o,
            t,
            i = e.path,
            r = e.config,
            u = r.blacklist,
            c = r.mergeStrategy,
            a = r.storage,
            s = r.whitelist,
            f = v.internals.defaultState,
            d = ce(ne(re(i, f)), s, u);
          a.isAsync
            ? 0 <
                (o = d.reduce(function(e, t) {
                  var n = [].concat(i, [t]),
                    r = a.getItem(l(n));
                  return y(r) && e.push({ key: t, dataPromise: r }), e;
                }, [])).length &&
              (h = Promise.all(
                o.map(function(e) {
                  return e.dataPromise;
                }),
              ).then(function(e) {
                var t = e.reduce(function(e, t, n) {
                  var r = o[n].key;
                  return void 0 !== t && (e[r] = t), e;
                }, {});
                0 !== Object.keys(t).length && (n(f, t), p(f));
              }))
            : ((t = d.reduce(function(e, t) {
                var n = [].concat(i, [t]),
                  r = a.getItem(l(n));
                return void 0 !== r && (e[t] = r), e;
              }, {})),
              n(f, t),
              p(f));
        }),
      h
    );
  }
  function se(n, e, r) {
    var o = (n[F] ? '@action' : '@actionOn') + '.' + e.path.join('.'),
      i = n[F] || n[Q];
    (i.actionName = e.key),
      (i.type = o),
      (i.parent = e.parent),
      (i.path = e.path);
    function t(e) {
      var t = { type: o, payload: e };
      return (
        n[Q] &&
          i.resolvedTargets &&
          (e.resolvedTargets = [].concat(i.resolvedTargets)),
        r.dispatch(t)
      );
    }
    return (t.type = o), t;
  }
  function fe(e, t, o, i) {
    var u = (e[ee] ? '@thunk' : '@thunkOn') + '.' + t.path.join('.'),
      c = u + '(start)',
      a = u + '(success)',
      s = u + '(fail)',
      n = e[ee] || e[$];
    (n.type = u),
      (n.actionName = t.key),
      (n.parent = t.parent),
      (n.path = t.path);
    function r(t) {
      function n(e) {
        o.dispatch({ type: s, payload: t, error: e }),
          o.dispatch({ type: u, payload: t, error: e });
      }
      function r(e) {
        o.dispatch({ type: a, payload: t, result: e }),
          o.dispatch({ type: u, payload: t, result: e });
      }
      o.dispatch({ type: c, payload: t });
      try {
        var e = o.dispatch(function() {
          return i(t);
        });
        return y(e)
          ? e
              .then(function(e) {
                return r(e), e;
              })
              .catch(function(e) {
                throw (n(e), e);
              })
          : (r(e), e);
      } catch (e) {
        throw (n(e), e);
      }
    }
    return (
      (r.type = u), (r.startType = c), (r.successType = a), (r.failType = s), r
    );
  }
  function de(e, w, I, A) {
    var o,
      i,
      u,
      x = w,
      D = {},
      T = {},
      _ = {},
      M = {},
      N = [],
      q = [],
      z = {},
      t = {},
      L = [],
      X = [],
      J = { isInReducer: !1, currentState: x };
    return (
      (function P(R, j) {
        return Object.keys(R).forEach(function(t) {
          function e() {
            var e = re(j, w);
            oe(C, x, e && t in e ? e[t] : k);
          }
          var n,
            r,
            o,
            i,
            u,
            c,
            a,
            s,
            f,
            d,
            l,
            p,
            v,
            h,
            y,
            g,
            m,
            S,
            b,
            O,
            k = R[t],
            C = [].concat(j, [t]),
            E = { parent: j, path: C, key: t };
          t !== Y
            ? 'function' == typeof k
              ? k[F] || k[Q]
                ? ((o = se((r = k), E, A)),
                  (D[o.type] = o),
                  (_[o.type] = r),
                  'ePRS' !== E.key &&
                    (k[Q] ? (L.push(k), oe(C, z, o)) : oe(C, T, o)))
                : k[ee] || k[$]
                ? ((g = E),
                  (m = A),
                  (S = I),
                  (b = T),
                  (O = (y = k)[ee] || y[$]),
                  (u = fe(
                    k,
                    E,
                    A,
                    (i = function(e) {
                      var t = {
                        dispatch: m.dispatch,
                        getState: function() {
                          return re(g.parent, m.getState());
                        },
                        getStoreActions: function() {
                          return b;
                        },
                        getStoreState: m.getState,
                        injections: S,
                        meta: g,
                      };
                      return (
                        y[$] &&
                          O.resolvedTargets &&
                          (e.resolvedTargets = [].concat(O.resolvedTargets)),
                        y(re(g.parent, b), e, t)
                      );
                    }),
                  )),
                  oe(C, M, i),
                  (D[u.type] = u),
                  k[$] ? (L.push(k), oe(C, z, u)) : oe(C, T, u))
                : k[W]
                ? ((c = re(j, x)),
                  (a =
                    ((s = j),
                    (f = t),
                    (l = J),
                    (p = A),
                    (v = (d = k)[W]),
                    (h = U(1)(d)),
                    function(e) {
                      Object.defineProperty(e, f, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                          var t;
                          if (l.isInReducer) t = l.currentState;
                          else {
                            if (null == p.getState) return;
                            try {
                              t = p.getState();
                            } catch (e) {
                              return;
                            }
                          }
                          var n = re(s, t),
                            e = v.stateResolvers.map(function(e) {
                              return e(n, t);
                            });
                          return h.apply(void 0, e);
                        },
                      });
                    }))(c),
                  N.push({ key: t, parentPath: j, bindComputedProperty: a }))
                : k[Z]
                ? q.push({ key: t, parentPath: j, reducer: k })
                : e()
              : V(k)
              ? (null == re(C, x) && oe(C, x, {}), P(k, C))
              : e()
            : X.push(
                (void 0 === (n = k) && (n = {}),
                {
                  path: j,
                  config: {
                    blacklist: n.blacklist || [],
                    mergeStrategy: n.mergeStrategy || 'merge',
                    storage: ue(n.storage, n.transformers),
                    whitelist: n.whitelist || [],
                  },
                }),
              );
        });
      })(e, []),
      (o = T),
      (i = D),
      (u = t),
      L.forEach(function(e) {
        var n = e[Q] || e[$],
          t = n.targetResolver(re(n.parent, o), o),
          r = (Array.isArray(t) ? t : [t]).reduce(function(e, t) {
            return (
              'function' == typeof t && t.type && i[t.type]
                ? e.push(t.type)
                : 'string' == typeof t && e.push(t),
              e
            );
          }, []);
        (n.resolvedTargets = r).forEach(function(e) {
          var t = u[e] || [];
          t.push(i[n.type]), (u[e] = t);
        });
      }),
      {
        actionCreatorDict: D,
        actionCreators: T,
        actionReducersDict: _,
        computedProperties: N,
        customReducers: q,
        computedState: J,
        defaultState: x,
        listenerActionCreators: z,
        listenerActionMap: t,
        persistenceConfig: X,
      }
    );
  }
  function k(e, t) {
    void 0 === t && (t = {});
    function n(e) {
      return K({}, e, {
        ePRS: te(function(e, t) {
          return t;
        }),
      });
    }
    function r(e) {
      return '[' + w + ']@' + e.join('.');
    }
    function o(e) {
      return x.internals.actionCreatorDict['@action.ePRS'](e);
    }
    function i(e) {
      var t, n, r, o, i, u, c, a, s, f, d, l, p;
      void 0 === e && (e = {}),
        (x.internals =
          ((n = (t = {
            disableImmer: g,
            initialState: e,
            injections: k,
            model: D,
            reducerEnhancer: A,
            references: x,
          }).disableImmer),
          (r = t.initialState),
          (o = t.injections),
          (i = t.model),
          (u = t.reducerEnhancer),
          (c = de(i, r, o, t.references)),
          (a = c.actionCreatorDict),
          (s = c.actionCreators),
          (f = c.actionReducersDict),
          (d = c.computedState),
          (l = c.computedProperties),
          (p = c.customReducers),
          {
            actionCreatorDict: a,
            actionCreators: s,
            computedProperties: l,
            computedState: d,
            defaultState: c.defaultState,
            listenerActionCreators: c.listenerActionCreators,
            listenerActionMap: c.listenerActionMap,
            persistenceConfig: c.persistenceConfig,
            reducer: u(ie(n, f, p, l)),
          }));
    }
    var c,
      a,
      u,
      s,
      f,
      d,
      l = ne(e),
      p = t.compose,
      v = t.devTools,
      h = void 0 === v || v,
      y = t.disableImmer,
      g = void 0 !== y && y,
      m = t.enhancers,
      S = void 0 === m ? [] : m,
      b = t.initialState,
      O = void 0 === b ? {} : b,
      k = t.injections,
      C = t.middleware,
      E = void 0 === C ? [] : C,
      P = t.mockActions,
      R = void 0 !== P && P,
      j = t.name,
      w = void 0 === j ? 'EasyPeasyStore' : j,
      I = t.reducerEnhancer,
      A =
        void 0 === I
          ? function(e) {
              return e;
            }
          : I,
      x = {},
      D = n(l),
      T = [],
      _ =
        ((c = r),
        (a = x),
        G(function() {
          a.internals.persistenceConfig.forEach(function(e) {
            var n = e.path,
              t = e.config,
              r = t.storage,
              o = t.whitelist,
              i = t.blacklist,
              u = a.getState();
            ce(ne(re(n, u)), o, i).forEach(function(e) {
              var t = [].concat(n, [e]);
              r.setItem(c(t), re(t, u));
            });
          });
        }, 1e3)),
      M =
        ((u = _),
        function() {
          return function(n) {
            return function(e) {
              var t = n(e);
              return (
                e &&
                  '@action.ePRS' !== e.type &&
                  0 < s.internals.persistenceConfig.length &&
                  u(t),
                t
              );
            };
          };
        }),
      N =
        ((f = r),
        (d = s = x),
        function() {
          return new Promise(function(c, a) {
            d.internals.persistenceConfig.forEach(function(e) {
              var n = e.path,
                t = e.config,
                r = t.storage,
                o = t.whitelist,
                i = t.blacklist,
                u = ce(re(n, d.getState()), o, i);
              0 < u.length
                ? Promise.all(
                    u.map(function(e) {
                      var t = [].concat(n, [e]);
                      return r.removeItem(f(t));
                    }),
                  ).then(function() {
                    return c();
                  }, a)
                : c();
            });
          });
        }),
      q =
        p ||
        (h &&
        'undefined' != typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: w })
          : H.compose);
    i(O);
    var z,
      L,
      X = [
        function(n) {
          return function(t) {
            return function(e) {
              return (
                (L.internals.computedState.currentState = n.getState()),
                (L.internals.computedState.isInReducer = !0),
                t(e)
              );
            };
          };
        },
        B,
      ].concat(E, [
        ((z = L = x),
        function() {
          return function(r) {
            return function(t) {
              var n,
                e = r(t);
              return (
                t &&
                  z.internals.listenerActionMap[t.type] &&
                  0 < z.internals.listenerActionMap[t.type].length &&
                  ((n = z.internals.actionCreatorDict[t.type]),
                  z.internals.listenerActionMap[t.type].forEach(function(e) {
                    e({
                      type: n ? n.type : t.type,
                      payload: t.payload,
                      error: t.error,
                      result: t.result,
                    });
                  })),
                e
              );
            };
          };
        }),
        M,
      ]);
    R &&
      X.push(function() {
        return function() {
          return function(e) {
            null != e && T.push(e);
          };
        };
      });
    var J = H.createStore(
      x.internals.reducer,
      x.internals.defaultState,
      q.apply(void 0, [H.applyMiddleware.apply(void 0, X)].concat(S)),
    );
    J.subscribe(function() {
      x.internals.computedState.isInReducer = !1;
    }),
      (x.dispatch = J.dispatch),
      (x.getState = J.getState);
    function U() {
      Object.keys(J.dispatch).forEach(function(e) {
        delete J.dispatch[e];
      }),
        Object.keys(x.internals.actionCreators).forEach(function(e) {
          J.dispatch[e] = x.internals.actionCreators[e];
        });
    }
    U();
    function V(e) {
      var t = J.getState();
      e && delete t[e],
        i(t),
        J.replaceReducer(x.internals.reducer),
        o(x.internals.defaultState),
        U();
    }
    var F = ae(r, o, x);
    return Object.assign(J, {
      addModel: function(e, t) {
        D[e], (D[e] = t), V();
      },
      clearMockedActions: function() {
        T = [];
      },
      getActions: function() {
        return x.internals.actionCreators;
      },
      getListeners: function() {
        return x.internals.listenerActionCreators;
      },
      getMockedActions: function() {
        return [].concat(T);
      },
      persist: {
        clear: N,
        flush: function() {
          return _.flush();
        },
        resolveRehydration: function() {
          return F;
        },
      },
      reconfigure: function(e) {
        (D = n(e)), V();
      },
      removeModel: function(e) {
        D[e] && (delete D[e], V(e));
      },
    });
  }
  l.setAutoFreeze(!1),
    (e.StoreProvider = function(e) {
      var t = e.children,
        n = e.store;
      return c.createElement(r.Provider, { value: n }, t);
    }),
    (e.action = te),
    (e.actionOn = function(e, t) {
      return (t[Q] = { targetResolver: e }), t;
    }),
    (e.computed = function(e, t) {
      return 'function' == typeof t
        ? ((t[W] = { stateResolvers: e }), t)
        : ((e[W] = { stateResolvers: h }), e);
    }),
    (e.createComponentStore = function(u, c) {
      return function(e) {
        var t = s.useMemo(function() {
            return k('function' == typeof u ? u(e) : u, c);
          }, []),
          n = s.useRef(t.getState()),
          r = s.useState(function() {
            return t.getState();
          }),
          o = r[0],
          i = r[1];
        return (
          s.useEffect(
            function() {
              return t.subscribe(function() {
                var e = t.getState();
                n.current !== e && ((n.current = e), i(e));
              });
            },
            [t],
          ),
          [o, t.getActions()]
        );
      };
    }),
    (e.createContextStore = function(o, i) {
      var u = s.createContext();
      return {
        Provider: function(e) {
          var t = e.children,
            n = e.initialData,
            r = s.useMemo(function() {
              return k('function' == typeof o ? o(n) : o, i);
            }, []);
          return c.createElement(u.Provider, { value: r }, t);
        },
        useStore: function() {
          return s.useContext(u);
        },
        useStoreState: t(u),
        useStoreActions: a(u),
        useStoreDispatch: d(u),
        useStoreRehydrated: p(u),
      };
    }),
    (e.createStore = k),
    (e.createTransform = function(r, o, e) {
      void 0 === e && (e = {});
      var t = e.whitelist || null,
        n = e.blacklist || null;
      function i(e) {
        return (t && -1 === t.indexOf(e)) || !(!n || -1 === n.indexOf(e));
      }
      return {
        in: function(e, t, n) {
          return !i(t) && r ? r(e, t, n) : e;
        },
        out: function(e, t, n) {
          return !i(t) && o ? o(e, t, n) : e;
        },
      };
    }),
    (e.createTypedHooks = function() {
      return {
        useStoreActions: o,
        useStoreDispatch: i,
        useStoreState: n,
        useStoreRehydrated: v,
        useStore: u,
      };
    }),
    (e.debug = function(e) {
      return l.isDraft(e) ? l.original(e) : e;
    }),
    (e.memo = function(e, t) {
      return U(t)(e);
    }),
    (e.persist = function(e, t) {
      var n;
      return K({}, e, (((n = {})[Y] = t), n));
    }),
    (e.reducer = function(e) {
      return (e[Z] = {}), e;
    }),
    (e.thunk = function(e) {
      return (e[ee] = {}), e;
    }),
    (e.thunkOn = function(e, t) {
      return (t[$] = { targetResolver: e }), t;
    }),
    (e.useStore = u),
    (e.useStoreActions = o),
    (e.useStoreDispatch = i),
    (e.useStoreRehydrated = v),
    (e.useStoreState = n),
    Object.defineProperty(e, '__esModule', { value: !0 });
});
//# sourceMappingURL=easy-peasy.umd.js.map
