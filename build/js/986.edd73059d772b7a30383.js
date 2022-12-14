'use strict';
(self.webpackChunkrate = self.webpackChunkrate || []).push([
  [986],
  {
    6687: (e, t, n) => {
      n.r(t), n.d(t, { default: () => V });
      var r = n(5893),
        a = n(7294),
        u = n(6088),
        o = n(3031),
        i = n(7007),
        s = n(4807);
      var c = function () {
          return (
            (c =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            c.apply(this, arguments)
          );
        },
        l = (0, a.memo)(function (e) {
          var t,
            n,
            l = e.currencyRecentRate,
            d = e.currencyName,
            f = e.currencyYesterdayRate,
            y = (0, i.v9)(u.tH),
            m = (0, a.useMemo)(
              function () {
                return ((l - f) / f) * 100;
              },
              [l, f],
            );
          return (0,
          r.jsxs)('li', c({ className: (0, s.A)('XcGbu', [], ((t = {}), (t.vW6yY = 'rub' === d.abbr || 'eur' === d.abbr || 'usd' === d.abbr || 'gbp' === d.abbr), t)) }, { children: [(0, r.jsxs)('div', c({ className: 'an1F1' }, { children: [(0, r.jsx)('p', { children: ''.concat(d.description) }), (0, r.jsxs)('span', { children: [' ', d.abbr.toUpperCase()] })] })), (0, r.jsx)('p', c({ className: (0, s.A)('MyplD', [], ((n = {}), (n.EXPPw = m >= 0), (n.ebAO6 = m < 0), n)), 'data-text': (0, o.t)('rateOfChangePerDay') }, { children: ''.concat(m >= 0 ? '+' : '').concat(m.toFixed(2), '%') })), (0, r.jsx)('p', c({ className: 'O9mpg' }, { children: ''.concat((1 / l).toFixed(2), ' ').concat(null == y ? void 0 : y.abbr.toUpperCase()) }))] }));
        }),
        d = n(4221),
        f = function (e) {
          var t;
          return null === (t = e.recentRates) || void 0 === t ? void 0 : t.data;
        },
        y = function (e) {
          var t;
          return null === (t = e.recentRates) || void 0 === t
            ? void 0
            : t.inputValue;
        },
        m = function (e) {
          var t;
          return null === (t = e.recentRates) || void 0 === t
            ? void 0
            : t.recentRates;
        },
        h = function (e) {
          var t;
          return null === (t = e.recentRates) || void 0 === t
            ? void 0
            : t.yesterdayRates;
        },
        p = function (e) {
          var t;
          return null === (t = e.recentRates) || void 0 === t
            ? void 0
            : t.recentRatesDate;
        },
        v = (0, a.memo)(function (e) {
          var t = e.currencyList,
            n = e.recentRates,
            u = e.yesterdayRates,
            o = (0, i.v9)(y),
            s = (0, a.useMemo)(
              function () {
                return t && o
                  ? new d.Z(t, { keys: ['abbr', 'description'] })
                      .search(o)
                      .map(function (e) {
                        return e.item;
                      })
                  : t;
              },
              [t, o],
            );
          return (0, r.jsx)('ul', {
            children:
              null == s
                ? void 0
                : s.map(function (e) {
                    return (0,
                    r.jsx)(l, { currencyRecentRate: n[e.abbr], currencyYesterdayRate: u[e.abbr], currencyName: e }, e.description);
                  }),
          });
        }),
        b = n(7296),
        g = n(1302),
        M = n(6925),
        D = n(5443),
        w = n(7168),
        T =
          /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,
        N =
          /\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,
        x = /[^-+\dA-Z]/g,
        j = {
          default: 'ddd mmm dd yyyy HH:MM:ss',
          shortDate: 'm/d/yy',
          paddedShortDate: 'mm/dd/yyyy',
          mediumDate: 'mmm d, yyyy',
          longDate: 'mmmm d, yyyy',
          fullDate: 'dddd, mmmm d, yyyy',
          shortTime: 'h:MM TT',
          mediumTime: 'h:MM:ss TT',
          longTime: 'h:MM:ss TT Z',
          isoDate: 'yyyy-mm-dd',
          isoTime: 'HH:MM:ss',
          isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
          isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
          expiresHeaderFormat: 'ddd, dd mmm yyyy HH:MM:ss Z',
        },
        R = {
          dayNames: [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          monthNames: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'],
        },
        C = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return String(e).padStart(t, '0');
        },
        O = function (e) {
          var t = e.y,
            n = e.m,
            r = e.d,
            a = e._,
            u = e.dayName,
            o = e.short,
            i = void 0 !== o && o,
            s = new Date(),
            c = new Date();
          c.setDate(c[a + 'Date']() - 1);
          var l = new Date();
          return (
            l.setDate(l[a + 'Date']() + 1),
            s[a + 'FullYear']() === t &&
            s[a + 'Month']() === n &&
            s[a + 'Date']() === r
              ? i
                ? 'Tdy'
                : 'Today'
              : c[a + 'FullYear']() === t &&
                c[a + 'Month']() === n &&
                c[a + 'Date']() === r
              ? i
                ? 'Ysd'
                : 'Yesterday'
              : l[a + 'FullYear']() === t &&
                l[a + 'Month']() === n &&
                l[a + 'Date']() === r
              ? i
                ? 'Tmw'
                : 'Tomorrow'
              : u
          );
        },
        S = function (e) {
          var t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
          t.setDate(t.getDate() - ((t.getDay() + 6) % 7) + 3);
          var n = new Date(t.getFullYear(), 0, 4);
          n.setDate(n.getDate() - ((n.getDay() + 6) % 7) + 3);
          var r = t.getTimezoneOffset() - n.getTimezoneOffset();
          t.setHours(t.getHours() - r);
          var a = (t - n) / 6048e5;
          return 1 + Math.floor(a);
        },
        H = function (e) {
          var t = e.getDay();
          return 0 === t && (t = 7), t;
        },
        A = function (e) {
          return (String(e).match(N) || [''])
            .pop()
            .replace(x, '')
            .replace(/GMT\+0000/g, 'UTC');
        },
        L = (0, w.hg)('recentRates/fetchYesterdayRates', function (e, t) {
          var n,
            r,
            a,
            u,
            o = e.base,
            i = e.date,
            s = t.rejectWithValue,
            c = t.extra;
          return (
            (n = void 0),
            (r = void 0),
            (u = function () {
              var e, t, n;
              return (function (e, t) {
                var n,
                  r,
                  a,
                  u,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (u = { next: i(0), throw: i(1), return: i(2) }),
                  'function' == typeof Symbol &&
                    (u[Symbol.iterator] = function () {
                      return this;
                    }),
                  u
                );
                function i(u) {
                  return function (i) {
                    return (function (u) {
                      if (n)
                        throw new TypeError('Generator is already executing.');
                      for (; o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (a =
                                2 & u[0]
                                  ? r.return
                                  : u[0]
                                  ? r.throw || ((a = r.return) && a.call(r), 0)
                                  : r.next) &&
                              !(a = a.call(r, u[1])).done)
                          )
                            return a;
                          switch (
                            ((r = 0), a && (u = [2 & u[0], a.value]), u[0])
                          ) {
                            case 0:
                            case 1:
                              a = u;
                              break;
                            case 4:
                              return o.label++, { value: u[1], done: !1 };
                            case 5:
                              o.label++, (r = u[1]), (u = [0]);
                              continue;
                            case 7:
                              (u = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (a =
                                    (a = o.trys).length > 0 &&
                                    a[a.length - 1]) ||
                                  (6 !== u[0] && 2 !== u[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === u[0] &&
                                (!a || (u[1] > a[0] && u[1] < a[3]))
                              ) {
                                o.label = u[1];
                                break;
                              }
                              if (6 === u[0] && o.label < a[1]) {
                                (o.label = a[1]), (a = u);
                                break;
                              }
                              if (a && o.label < a[2]) {
                                (o.label = a[2]), o.ops.push(u);
                                break;
                              }
                              a[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          u = t.call(e, o);
                        } catch (e) {
                          (u = [6, e]), (r = 0);
                        } finally {
                          n = a = 0;
                        }
                      if (5 & u[0]) throw u[1];
                      return { value: u[0] ? u[1] : void 0, done: !0 };
                    })([u, i]);
                  };
                }
              })(this, function (r) {
                switch (r.label) {
                  case 0:
                    (e = new Date(i)).setDate(e.getDate() - 1),
                      (t = (function (e, t, n, r) {
                        if (
                          (1 !== arguments.length ||
                            'string' != typeof e ||
                            /\d/.test(e) ||
                            ((t = e), (e = void 0)),
                          (e = e || 0 === e ? e : new Date()) instanceof Date ||
                            (e = new Date(e)),
                          isNaN(e))
                        )
                          throw TypeError('Invalid date');
                        var a = (t = String(j[t] || t || j.default)).slice(
                          0,
                          4,
                        );
                        ('UTC:' !== a && 'GMT:' !== a) ||
                          ((t = t.slice(4)),
                          (n = !0),
                          'GMT:' === a && (r = !0));
                        var u = function () {
                            return n ? 'getUTC' : 'get';
                          },
                          o = function () {
                            return e[u() + 'Date']();
                          },
                          i = function () {
                            return e[u() + 'Day']();
                          },
                          s = function () {
                            return e[u() + 'Month']();
                          },
                          c = function () {
                            return e[u() + 'FullYear']();
                          },
                          l = function () {
                            return e[u() + 'Hours']();
                          },
                          d = function () {
                            return e[u() + 'Minutes']();
                          },
                          f = function () {
                            return e[u() + 'Seconds']();
                          },
                          y = function () {
                            return e[u() + 'Milliseconds']();
                          },
                          m = function () {
                            return n ? 0 : e.getTimezoneOffset();
                          },
                          h = function () {
                            return S(e);
                          },
                          p = function () {
                            return H(e);
                          },
                          v = {
                            d: function () {
                              return o();
                            },
                            dd: function () {
                              return C(o());
                            },
                            ddd: function () {
                              return R.dayNames[i()];
                            },
                            DDD: function () {
                              return O({
                                y: c(),
                                m: s(),
                                d: o(),
                                _: u(),
                                dayName: R.dayNames[i()],
                                short: !0,
                              });
                            },
                            dddd: function () {
                              return R.dayNames[i() + 7];
                            },
                            DDDD: function () {
                              return O({
                                y: c(),
                                m: s(),
                                d: o(),
                                _: u(),
                                dayName: R.dayNames[i() + 7],
                              });
                            },
                            m: function () {
                              return s() + 1;
                            },
                            mm: function () {
                              return C(s() + 1);
                            },
                            mmm: function () {
                              return R.monthNames[s()];
                            },
                            mmmm: function () {
                              return R.monthNames[s() + 12];
                            },
                            yy: function () {
                              return String(c()).slice(2);
                            },
                            yyyy: function () {
                              return C(c(), 4);
                            },
                            h: function () {
                              return l() % 12 || 12;
                            },
                            hh: function () {
                              return C(l() % 12 || 12);
                            },
                            H: function () {
                              return l();
                            },
                            HH: function () {
                              return C(l());
                            },
                            M: function () {
                              return d();
                            },
                            MM: function () {
                              return C(d());
                            },
                            s: function () {
                              return f();
                            },
                            ss: function () {
                              return C(f());
                            },
                            l: function () {
                              return C(y(), 3);
                            },
                            L: function () {
                              return C(Math.floor(y() / 10));
                            },
                            t: function () {
                              return l() < 12 ? R.timeNames[0] : R.timeNames[1];
                            },
                            tt: function () {
                              return l() < 12 ? R.timeNames[2] : R.timeNames[3];
                            },
                            T: function () {
                              return l() < 12 ? R.timeNames[4] : R.timeNames[5];
                            },
                            TT: function () {
                              return l() < 12 ? R.timeNames[6] : R.timeNames[7];
                            },
                            Z: function () {
                              return r ? 'GMT' : n ? 'UTC' : A(e);
                            },
                            o: function () {
                              return (
                                (m() > 0 ? '-' : '+') +
                                C(
                                  100 * Math.floor(Math.abs(m()) / 60) +
                                    (Math.abs(m()) % 60),
                                  4,
                                )
                              );
                            },
                            p: function () {
                              return (
                                (m() > 0 ? '-' : '+') +
                                C(Math.floor(Math.abs(m()) / 60), 2) +
                                ':' +
                                C(Math.floor(Math.abs(m()) % 60), 2)
                              );
                            },
                            S: function () {
                              return ['th', 'st', 'nd', 'rd'][
                                o() % 10 > 3
                                  ? 0
                                  : (((o() % 100) - (o() % 10) != 10) * o()) %
                                    10
                              ];
                            },
                            W: function () {
                              return h();
                            },
                            WW: function () {
                              return C(h());
                            },
                            N: function () {
                              return p();
                            },
                          };
                        return t.replace(T, function (e) {
                          return e in v ? v[e]() : e.slice(1, e.length - 1);
                        });
                      })(e, 'isoDate')),
                      (r.label = 1);
                  case 1:
                    return (
                      r.trys.push([1, 3, , 4]),
                      [
                        4,
                        c.api.get(
                          '/'.concat(t, '/currencies/').concat(o, '.min.json'),
                        ),
                      ]
                    );
                  case 2:
                    if (!(n = r.sent()).data) throw new Error();
                    return [2, Object.values(n.data)[1]];
                  case 3:
                    return r.sent(), [2, s('error')];
                  case 4:
                    return [2];
                }
              });
            }),
            new ((a = void 0) || (a = Promise))(function (e, t) {
              function o(e) {
                try {
                  s(u.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function i(e) {
                try {
                  s(u.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function s(t) {
                var n;
                t.done
                  ? e(t.value)
                  : ((n = t.value),
                    n instanceof a
                      ? n
                      : new a(function (e) {
                          e(n);
                        })).then(o, i);
              }
              s((u = u.apply(n, r || [])).next());
            })
          );
        }),
        k = (0, w.oM)({
          name: 'resentRates',
          initialState: {
            data: [],
            inputValue: '',
            isLoading: !1,
            recentRatesDate: '',
            errorMessage: '',
            yesterdayRates: void 0,
            recentRates: void 0,
          },
          reducers: {
            setInputValue: function (e, t) {
              var n = t.payload;
              e.inputValue = n;
            },
            setRecentRatesDate: function (e, t) {
              var n = t.payload;
              e.recentRatesDate = n;
            },
          },
          extraReducers: function (e) {
            e.addCase(u.$X.pending, function (e) {
              (e.errorMessage = ''), (e.isLoading = !0);
            })
              .addCase(u.$X.fulfilled, function (e, t) {
                var n = t.payload;
                (e.data = n.sort(function (e) {
                  return 'rub' === e.abbr ||
                    'eur' === e.abbr ||
                    'usd' === e.abbr ||
                    'gbp' === e.abbr
                    ? -1
                    : 1;
                })),
                  (e.errorMessage = ''),
                  (e.isLoading = !1);
              })
              .addCase(u.$X.rejected, function (e, t) {
                var n = t.payload;
                (e.errorMessage = n), (e.isLoading = !1);
              })
              .addCase(Y.pending, function (e) {
                (e.errorMessage = ''), (e.isLoading = !0);
              })
              .addCase(Y.fulfilled, function (e, t) {
                var n = t.payload;
                (e.recentRates = n), (e.errorMessage = ''), (e.isLoading = !1);
              })
              .addCase(Y.rejected, function (e, t) {
                var n = t.payload;
                (e.errorMessage = n), (e.isLoading = !1);
              })
              .addCase(L.pending, function (e) {
                (e.errorMessage = ''), (e.isLoading = !0);
              })
              .addCase(L.fulfilled, function (e, t) {
                var n = t.payload;
                (e.yesterdayRates = n),
                  (e.errorMessage = ''),
                  (e.isLoading = !1);
              })
              .addCase(L.rejected, function (e, t) {
                var n = t.payload;
                (e.errorMessage = n), (e.isLoading = !1);
              });
          },
        }),
        F = k.actions,
        P = k.reducer,
        Y = (0, w.hg)('recentRates/fetchRecentRates', function (e, t) {
          var n,
            r,
            a,
            u,
            o = e.base,
            i = t.rejectWithValue,
            s = t.extra,
            c = t.dispatch;
          return (
            (n = void 0),
            (r = void 0),
            (u = function () {
              var e, t;
              return (function (e, t) {
                var n,
                  r,
                  a,
                  u,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (u = { next: i(0), throw: i(1), return: i(2) }),
                  'function' == typeof Symbol &&
                    (u[Symbol.iterator] = function () {
                      return this;
                    }),
                  u
                );
                function i(u) {
                  return function (i) {
                    return (function (u) {
                      if (n)
                        throw new TypeError('Generator is already executing.');
                      for (; o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (a =
                                2 & u[0]
                                  ? r.return
                                  : u[0]
                                  ? r.throw || ((a = r.return) && a.call(r), 0)
                                  : r.next) &&
                              !(a = a.call(r, u[1])).done)
                          )
                            return a;
                          switch (
                            ((r = 0), a && (u = [2 & u[0], a.value]), u[0])
                          ) {
                            case 0:
                            case 1:
                              a = u;
                              break;
                            case 4:
                              return o.label++, { value: u[1], done: !1 };
                            case 5:
                              o.label++, (r = u[1]), (u = [0]);
                              continue;
                            case 7:
                              (u = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (a =
                                    (a = o.trys).length > 0 &&
                                    a[a.length - 1]) ||
                                  (6 !== u[0] && 2 !== u[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === u[0] &&
                                (!a || (u[1] > a[0] && u[1] < a[3]))
                              ) {
                                o.label = u[1];
                                break;
                              }
                              if (6 === u[0] && o.label < a[1]) {
                                (o.label = a[1]), (a = u);
                                break;
                              }
                              if (a && o.label < a[2]) {
                                (o.label = a[2]), o.ops.push(u);
                                break;
                              }
                              a[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          u = t.call(e, o);
                        } catch (e) {
                          (u = [6, e]), (r = 0);
                        } finally {
                          n = a = 0;
                        }
                      if (5 & u[0]) throw u[1];
                      return { value: u[0] ? u[1] : void 0, done: !0 };
                    })([u, i]);
                  };
                }
              })(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      n.trys.push([0, 2, , 3]),
                      [
                        4,
                        s.api.get('/latest/currencies/'.concat(o, '.min.json')),
                      ]
                    );
                  case 1:
                    if (!(e = n.sent()).data) throw new Error();
                    return (
                      (t = Object.values(e.data)),
                      c(F.setRecentRatesDate(t[0])),
                      [2, t[1]]
                    );
                  case 2:
                    return n.sent(), [2, i('error')];
                  case 3:
                    return [2];
                }
              });
            }),
            new ((a = void 0) || (a = Promise))(function (e, t) {
              function o(e) {
                try {
                  s(u.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function i(e) {
                try {
                  s(u.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function s(t) {
                var n;
                t.done
                  ? e(t.value)
                  : ((n = t.value),
                    n instanceof a
                      ? n
                      : new a(function (e) {
                          e(n);
                        })).then(o, i);
              }
              s((u = u.apply(n, r || [])).next());
            })
          );
        });
      const W = { choseInput: 'OUbwZ', label: 'OcBpe', input: 'VGoUs' };
      var U = function () {
          return (
            (U =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            U.apply(this, arguments)
          );
        },
        Z = { recentRates: P },
        E = (0, a.memo)(function () {
          var e = (0, D.$)().t,
            t = (0, g.T)(),
            n = (0, i.v9)(f),
            o = (0, i.v9)(m),
            c = (0, i.v9)(h),
            l = (0, i.v9)(p),
            d = (0, i.v9)(u.tH),
            w = (0, i.v9)(y);
          (0, a.useEffect)(
            function () {
              t((0, u.$X)()),
                t(u.W3.setDefaultBaseCurrentCurrency()),
                t(Y({ base: null == d ? void 0 : d.abbr })),
                t(L({ base: null == d ? void 0 : d.abbr, date: l }));
            },
            [null == d ? void 0 : d.abbr, t, l],
          );
          var T = (0, a.useCallback)(
            function (e) {
              t(F.setInputValue(e));
            },
            [t],
          );
          return (0,
          r.jsx)(b.T, U({ reducers: Z }, { children: (0, r.jsxs)('section', U({ className: 'content' }, { children: [(0, r.jsxs)('div', U({ className: W.choseInput }, { children: [(0, r.jsxs)('div', U({ className: W.header }, { children: [(0, r.jsx)('h3', U({ className: W.label }, { children: e('searchCur') })), (0, r.jsx)('div', U({ className: (0, s.A)(W.input, ['input']) }, { children: (0, r.jsx)(M.I, { placeholder: e('search'), value: w, onChange: T }) }))] })), (0, r.jsxs)('div', { children: [(0, r.jsx)('h3', U({ className: W.label }, { children: e('choseBaseCurrency') })), (0, r.jsx)(u.p1, { currencyList: n, currentCurrency: d })] })] })), (0, r.jsx)(v, { currencyList: n, recentRates: o, yesterdayRates: c })] })) }));
        });
      var G = function () {
        return (
          (G =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          G.apply(this, arguments)
        );
      };
      const V = (0, a.memo)(function () {
        return (0,
        r.jsx)('div', G({ className: '_6W5pJ' }, { children: (0, r.jsx)(E, {}) }));
      });
    },
  },
]);
