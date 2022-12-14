'use strict';
(self.webpackChunkrate = self.webpackChunkrate || []).push([
  [736],
  {
    4874: (e, r, n) => {
      n.r(r), n.d(r, { default: () => w });
      var t = n(5893),
        a = n(7294),
        s = n(6088),
        i = n(5443),
        o = n(7007),
        c = n(471),
        l = n(7296),
        u = n(1302),
        d = n(9161),
        v = n(6925),
        f = n(4002),
        h = n(4807);
      const p = {
        title: 'ikI7V',
        text: 'uNJee',
        error: 'F9oLX',
        left: 'dBqPI',
        right: 'j4UBr',
        center: 'iJw6m',
      };
      var m,
        b,
        x = function () {
          return (
            (x =
              Object.assign ||
              function (e) {
                for (var r, n = 1, t = arguments.length; n < t; n++)
                  for (var a in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                return e;
              }),
            x.apply(this, arguments)
          );
        };
      !(function (e) {
        (e.PRIMARY = 'primary'), (e.ERROR = 'error');
      })(m || (m = {})),
        (function (e) {
          (e.LEFT = 'left'), (e.RIGHT = 'right'), (e.CENTER = 'center');
        })(b || (b = {}));
      var j = (0, a.memo)(function (e) {
          var r = e.className,
            n = e.text,
            a = e.title,
            s = e.theme,
            i = void 0 === s ? m.PRIMARY : s,
            o = e.align,
            c = void 0 === o ? b.LEFT : o;
          return (0,
          t.jsxs)('div', x({ className: (0, h.A)(p.Text, [r, p[i], p[c]]) }, { children: [a && (0, t.jsx)('h1', x({ className: p.title }, { children: a })), n && (0, t.jsx)('p', x({ className: p.text }, { children: n }))] }));
        }),
        y = n(2832),
        C = n(9312),
        g = n(3048),
        N = n(3151),
        R = function (e) {
          var r;
          return null === (r = e.currencyConverter) || void 0 === r
            ? void 0
            : r.data;
        },
        L = function (e) {
          var r;
          return null === (r = e.currencyConverter) || void 0 === r
            ? void 0
            : r.errorMessage;
        },
        k = function (e) {
          var r;
          return null === (r = e.currencyConverter) || void 0 === r
            ? void 0
            : r.isLoading;
        },
        E = function (e) {
          var r;
          return null === (r = e.currencyConverter) || void 0 === r
            ? void 0
            : r.inputValue;
        },
        O = function (e) {
          var r;
          return null === (r = e.currencyConverter) || void 0 === r
            ? void 0
            : r.rateResult;
        },
        M = n(7168),
        I = n(5354),
        V = (0, M.oM)({
          name: 'currencyConverter',
          initialState: {
            data: [],
            inputValue: '1.00',
            rateResult: void 0,
            isLoading: !1,
            errorMessage: '',
          },
          reducers: {
            setInputValue: function (e, r) {
              var n = r.payload;
              localStorage.setItem(I.di, n), (e.inputValue = n);
            },
            setDefaultInputValue: function (e) {
              var r = localStorage.getItem(I.di);
              e.inputValue = r || '1.00';
            },
          },
          extraReducers: function (e) {
            e.addCase(s.$X.pending, function (e) {
              (e.errorMessage = ''), (e.isLoading = !0);
            })
              .addCase(s.$X.fulfilled, function (e, r) {
                var n = r.payload;
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
              .addCase(s.$X.rejected, function (e, r) {
                var n = r.payload;
                (e.errorMessage = n), (e.isLoading = !1);
              })
              .addCase(s.$N.pending, function (e) {
                (e.errorMessage = ''), (e.isLoading = !0);
              })
              .addCase(s.$N.fulfilled, function (e, r) {
                var n = r.payload;
                (e.rateResult = n), (e.errorMessage = ''), (e.isLoading = !1);
              })
              .addCase(s.$N.rejected, function (e, r) {
                var n = r.payload;
                (e.errorMessage = n), (e.isLoading = !1);
              });
          },
        }),
        T = V.actions,
        F = V.reducer;
      const $ = {
        inner: 'o8BkT',
        tools: 'YFlME',
        currencyLists: 'aO8Nc',
        input: 'AxQ_l',
        from: 'VJNMG',
        exchange: 'jqHrg',
        label: 'ZolED',
        info: 'kB9cV',
        result: 'n1kHF',
        linkButton: 'vOyhy',
      };
      var A = function () {
          return (
            (A =
              Object.assign ||
              function (e) {
                for (var r, n = 1, t = arguments.length; n < t; n++)
                  for (var a in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                return e;
              }),
            A.apply(this, arguments)
          );
        },
        B = { currencyConverter: F },
        D = (0, a.memo)(function () {
          var e = (0, i.$)().t,
            r = (0, u.T)(),
            n = (0, a.useState)(0),
            h = n[0],
            p = n[1],
            x = (0, o.v9)(R),
            M = (0, o.v9)(L),
            I = (0, o.v9)(k),
            V = (0, o.v9)(E),
            F = (0, o.v9)(y.p),
            D = (0, o.v9)(C.j),
            P = (0, o.v9)(O),
            w = (0, a.useCallback)(function (e) {
              /[0-9.]/.test(e.key) || e.preventDefault();
            }, []),
            q = (0, a.useCallback)(
              function () {
                '' !== V && P && p(Number(V) * P);
              },
              [V, P],
            );
          (0, a.useEffect)(
            function () {
              r((0, s.$X)()),
                r(s.tL.setDefaultFromCurrentCurrency()),
                r(s.NL.setDefaultToCurrentCurrency()),
                r(T.setDefaultInputValue());
            },
            [r],
          ),
            (0, a.useEffect)(
              function () {
                q(),
                  (null == D ? void 0 : D.abbr) &&
                    (null == F ? void 0 : F.abbr) &&
                    r(
                      (0, s.$N)({
                        from: null == D ? void 0 : D.abbr,
                        to: null == F ? void 0 : F.abbr,
                      }),
                    );
              },
              [r, null == D ? void 0 : D.abbr, q, null == F ? void 0 : F.abbr],
            );
          var S,
            U = (0, a.useCallback)(
              function (e) {
                r(T.setInputValue(e));
              },
              [r],
            ),
            X = (0, a.useCallback)(
              function () {
                r(s.NL.setToCurrentCurrency(D)),
                  r(s.tL.setFromCurrentCurrency(F)),
                  q();
              },
              [r, D, q, F],
            );
          return (
            (S = M
              ? (0, t.jsx)(j, {
                  align: b.CENTER,
                  theme: m.ERROR,
                  title: e('symbolsError'),
                })
              : (0, t.jsxs)(
                  'div',
                  A(
                    { className: $.inner },
                    {
                      children: [
                        (0, t.jsxs)(
                          'section',
                          A(
                            { className: $.tools },
                            {
                              children: [
                                (0, t.jsxs)('div', {
                                  children: [
                                    (0, t.jsx)(
                                      'h3',
                                      A(
                                        { className: $.label },
                                        { children: e('convert') },
                                      ),
                                    ),
                                    (0, t.jsxs)(
                                      'div',
                                      A(
                                        { className: 'input' },
                                        {
                                          children: [
                                            (0, t.jsx)(v.I, {
                                              placeholder: e('amount'),
                                              value: V,
                                              onChange: U,
                                              onKeyPress: w,
                                            }),
                                            I &&
                                              (0, t.jsx)(f.a, {
                                                size: '20px',
                                                borderWidth: '4px',
                                              }),
                                          ],
                                        },
                                      ),
                                    ),
                                  ],
                                }),
                                (0, t.jsxs)(
                                  'div',
                                  A(
                                    { className: $.currencyLists },
                                    {
                                      children: [
                                        (0, t.jsxs)(
                                          'div',
                                          A(
                                            { className: $.from },
                                            {
                                              children: [
                                                (0, t.jsx)(
                                                  'h3',
                                                  A(
                                                    { className: $.label },
                                                    {
                                                      children:
                                                        e('fromCurrency'),
                                                    },
                                                  ),
                                                ),
                                                (0, t.jsx)(s.yV, {
                                                  currencyList: x,
                                                }),
                                              ],
                                            },
                                          ),
                                        ),
                                        (0, t.jsx)(
                                          d.zx,
                                          A(
                                            {
                                              className: $.exchange,
                                              theme: d.lq.CLEAR,
                                              onClick: X,
                                            },
                                            { children: (0, t.jsx)(c.suf, {}) },
                                          ),
                                        ),
                                        (0, t.jsxs)(
                                          'div',
                                          A(
                                            { className: $.to },
                                            {
                                              children: [
                                                (0, t.jsx)(
                                                  'h3',
                                                  A(
                                                    { className: $.label },
                                                    {
                                                      children: e('toCurrency'),
                                                    },
                                                  ),
                                                ),
                                                (0, t.jsx)(s.Ub, {
                                                  currencyList: x,
                                                }),
                                              ],
                                            },
                                          ),
                                        ),
                                      ],
                                    },
                                  ),
                                ),
                              ],
                            },
                          ),
                        ),
                        (0, t.jsxs)(
                          'div',
                          A(
                            { className: $.info },
                            {
                              children: [
                                (0, t.jsxs)(
                                  'div',
                                  A(
                                    { className: $.result },
                                    {
                                      children: [
                                        (0, t.jsx)('h3', {
                                          children: ''
                                            .concat(V, ' ')
                                            .concat(
                                              null == D
                                                ? void 0
                                                : D.description,
                                              's =',
                                            ),
                                        }),
                                        (0, t.jsx)('h1', {
                                          children: ''
                                            .concat(h.toFixed(2), ' ')
                                            .concat(
                                              null == F
                                                ? void 0
                                                : F.description,
                                              's',
                                            ),
                                        }),
                                        (0, t.jsx)('p', {
                                          children: '1.00 '
                                            .concat(
                                              null == D
                                                ? void 0
                                                : D.abbr.toUpperCase(),
                                              ' = ',
                                            )
                                            .concat(
                                              null == P ? void 0 : P.toFixed(2),
                                              ' ',
                                            )
                                            .concat(
                                              null == F
                                                ? void 0
                                                : F.abbr.toUpperCase(),
                                            ),
                                        }),
                                      ],
                                    },
                                  ),
                                ),
                                (0, t.jsx)(
                                  g.F,
                                  A(
                                    { to: N.n.rates, theme: g.u.SECONDARY },
                                    {
                                      children: (0, t.jsx)(
                                        d.zx,
                                        A(
                                          {
                                            className: $.linkButton,
                                            theme: d.lq.CLEAR,
                                          },
                                          { children: e('recentRates') },
                                        ),
                                      ),
                                    },
                                  ),
                                ),
                              ],
                            },
                          ),
                        ),
                      ],
                    },
                  ),
                )),
            (0, t.jsx)(
              l.T,
              A(
                { reducers: B, removeAfterUnmount: !0 },
                {
                  children: (0, t.jsx)(
                    'section',
                    A({ className: 'content' }, { children: S }),
                  ),
                },
              ),
            )
          );
        });
      var P = function () {
        return (
          (P =
            Object.assign ||
            function (e) {
              for (var r, n = 1, t = arguments.length; n < t; n++)
                for (var a in (r = arguments[n]))
                  Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
              return e;
            }),
          P.apply(this, arguments)
        );
      };
      const w = (0, a.memo)(function () {
        return (0,
        t.jsx)('div', P({ className: 'BqmRO' }, { children: (0, t.jsx)(D, {}) }));
      });
    },
  },
]);
