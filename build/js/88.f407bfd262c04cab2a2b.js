'use strict';
(self.webpackChunkrate = self.webpackChunkrate || []).push([
  [88],
  {
    6088: (e, r, n) => {
      n.d(r, {
        p1: () => me,
        W3: () => pe,
        yV: () => ae,
        tL: () => ne,
        Ub: () => ee,
        NL: () => J,
        $N: () => Ce,
        $X: () => je,
        tH: () => de,
      });
      var t = n(5893),
        u = n(7294),
        c = n(7007),
        o = n(7296),
        a = function (e) {
          var r;
          return null === (r = e.searchToCurrency) || void 0 === r
            ? void 0
            : r.value;
        },
        s = function (e) {
          var r;
          return null === (r = e.searchToCurrency) || void 0 === r
            ? void 0
            : r.isFocused;
        },
        i = n(7168),
        l = (0, i.oM)({
          name: 'searchToCurrency',
          initialState: { value: '', isFocused: !1 },
          reducers: {
            setToValue: function (e, r) {
              var n = r.payload;
              e.value = n;
            },
            setToIsFocused: function (e, r) {
              var n = r.payload;
              e.isFocused = n;
            },
          },
        }),
        d = l.actions,
        f = l.reducer,
        v = n(3750),
        p = n(4807),
        b = n(1302),
        y = n(9161),
        h = n(6925);
      const m = 'bSbcF',
        C = 'Kucec';
      var j = function () {
          return (
            (j =
              Object.assign ||
              function (e) {
                for (var r, n = 1, t = arguments.length; n < t; n++)
                  for (var u in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
                return e;
              }),
            j.apply(this, arguments)
          );
        },
        x = { searchToCurrency: f },
        g = (0, u.memo)(function (e) {
          var r,
            n,
            i = e.currentCurrency,
            l = e.isCurMenu,
            f = (0, b.T)(),
            g = (0, c.v9)(s),
            M = (0, c.v9)(a),
            F = (0, u.useMemo)(
              function () {
                return ''
                  .concat(null == i ? void 0 : i.abbr.toUpperCase(), ' - ')
                  .concat(null == i ? void 0 : i.description);
              },
              [null == i ? void 0 : i.abbr, null == i ? void 0 : i.description],
            ),
            O = (0, u.useCallback)(
              function (e) {
                f(d.setToValue(e));
              },
              [f],
            );
          return (0, t.jsx)(
            o.T,
            j(
              { removeAfterUnmount: !0, reducers: x },
              {
                children: (0, t.jsxs)(
                  'div',
                  j(
                    {
                      className: (0, p.A)(m, [], ((r = {}), (r.LeblN = g), r)),
                    },
                    {
                      children: [
                        (0, t.jsx)(h.I, {
                          placeholder: F,
                          value: M,
                          onChange: O,
                          onClick: function () {
                            f(d.setToIsFocused(!0)), f(J.setIsToCurMenu(!0));
                          },
                        }),
                        (0, t.jsx)(
                          y.zx,
                          j(
                            {
                              className: (0, p.A)(
                                C,
                                [],
                                ((n = {}), (n.exOic = l), n),
                              ),
                              theme: y.lq.CLEAR,
                              size: y.Ph.S,
                              onClick: function () {
                                f(d.setToIsFocused(!g)),
                                  f(J.setIsToCurMenu(!l));
                              },
                            },
                            { children: (0, t.jsx)(v.SZO, {}) },
                          ),
                        ),
                      ],
                    },
                  ),
                ),
              },
            ),
          );
        }),
        M = function (e) {
          var r;
          return null === (r = e.searchFromCurrency) || void 0 === r
            ? void 0
            : r.value;
        },
        F = function (e) {
          var r;
          return null === (r = e.searchFromCurrency) || void 0 === r
            ? void 0
            : r.isFocused;
        },
        O = (0, i.oM)({
          name: 'searchFromCurrency',
          initialState: { value: '', isFocused: !1 },
          reducers: {
            setFromValue: function (e, r) {
              var n = r.payload;
              e.value = n;
            },
            setFromIsFocused: function (e, r) {
              var n = r.payload;
              e.isFocused = n;
            },
          },
        }),
        I = O.actions,
        T = O.reducer,
        w = function () {
          return (
            (w =
              Object.assign ||
              function (e) {
                for (var r, n = 1, t = arguments.length; n < t; n++)
                  for (var u in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
                return e;
              }),
            w.apply(this, arguments)
          );
        },
        S = { searchFromCurrency: T },
        N = (0, u.memo)(function (e) {
          var r,
            n,
            a = e.currentCurrency,
            s = e.isCurMenu,
            i = (0, b.T)(),
            l = (0, c.v9)(F),
            d = (0, c.v9)(M),
            f = (0, u.useMemo)(
              function () {
                return ''
                  .concat(null == a ? void 0 : a.abbr.toUpperCase(), ' - ')
                  .concat(null == a ? void 0 : a.description);
              },
              [null == a ? void 0 : a.abbr, null == a ? void 0 : a.description],
            ),
            j = (0, u.useCallback)(
              function (e) {
                i(I.setFromValue(e));
              },
              [i],
            );
          return (0, t.jsx)(
            o.T,
            w(
              { removeAfterUnmount: !0, reducers: S },
              {
                children: (0, t.jsxs)(
                  'div',
                  w(
                    {
                      className: (0, p.A)(m, [], ((r = {}), (r.LeblN = l), r)),
                    },
                    {
                      children: [
                        (0, t.jsx)(h.I, {
                          placeholder: f,
                          value: d,
                          onChange: j,
                          onClick: function () {
                            i(I.setFromIsFocused(!0)),
                              i(ne.setIsFromCurMenu(!0));
                          },
                        }),
                        (0, t.jsx)(
                          y.zx,
                          w(
                            {
                              className: (0, p.A)(
                                C,
                                [],
                                ((n = {}), (n.exOic = s), n),
                              ),
                              theme: y.lq.CLEAR,
                              size: y.Ph.S,
                              onClick: function () {
                                i(I.setFromIsFocused(!l)),
                                  i(ne.setIsFromCurMenu(!s));
                              },
                            },
                            { children: (0, t.jsx)(v.SZO, {}) },
                          ),
                        ),
                      ],
                    },
                  ),
                ),
              },
            ),
          );
        }),
        A = n(4221);
      const k = 'huxSS',
        B = 'zUDpF',
        L = 'AJnY1',
        P = 'cuNLf';
      var _ = function () {
          return (
            (_ =
              Object.assign ||
              function (e) {
                for (var r, n = 1, t = arguments.length; n < t; n++)
                  for (var u in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
                return e;
              }),
            _.apply(this, arguments)
          );
        },
        U = (0, u.memo)(function (e) {
          var r,
            n = e.currencyList,
            o = e.isCurMenu,
            s = (0, b.T)(),
            i = (0, c.v9)(a),
            l = (0, u.useMemo)(
              function () {
                return n && i
                  ? new A.Z(n, { keys: ['abbr', 'description'] })
                      .search(i)
                      .map(function (e) {
                        return e.item;
                      })
                  : n;
              },
              [n, i],
            );
          return (0, t.jsx)(
            'div',
            _(
              { className: (0, p.A)(k, [], ((r = {}), (r.cT78C = o), r)) },
              {
                children:
                  null == l
                    ? void 0
                    : l.map(function (e) {
                        var r;
                        return (0, t.jsxs)(
                          y.zx,
                          _(
                            {
                              className: (0, p.A)(
                                B,
                                [],
                                ((r = {}),
                                (r.x1YDz =
                                  'rub' === e.abbr ||
                                  'eur' === e.abbr ||
                                  'usd' === e.abbr ||
                                  'gbp' === e.abbr),
                                r),
                              ),
                              onClick: function () {
                                return (
                                  (r = e),
                                  s(J.setToCurrentCurrency(r)),
                                  s(J.setIsToCurMenu(!1)),
                                  s(d.setToIsFocused(!1)),
                                  void s(d.setToValue(''))
                                );
                                var r;
                              },
                              theme: y.lq.CLEAR,
                              tabIndex: 0,
                            },
                            {
                              children: [
                                (0, t.jsx)(
                                  'p',
                                  _(
                                    { className: L },
                                    { children: e.abbr.toUpperCase() },
                                  ),
                                ),
                                (0, t.jsx)('span', { children: '-' }),
                                (0, t.jsx)(
                                  'p',
                                  _(
                                    { className: P },
                                    { children: e.description },
                                  ),
                                ),
                              ],
                            },
                          ),
                          e.abbr + e.description,
                        );
                      }),
              },
            ),
          );
        }),
        z = function () {
          return (
            (z =
              Object.assign ||
              function (e) {
                for (var r, n = 1, t = arguments.length; n < t; n++)
                  for (var u in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
                return e;
              }),
            z.apply(this, arguments)
          );
        },
        E = (0, u.memo)(function (e) {
          var r,
            n = e.currencyList,
            o = e.isCurMenu,
            a = (0, b.T)(),
            s = (0, c.v9)(M),
            i = (0, u.useMemo)(
              function () {
                return n && s
                  ? new A.Z(n, { keys: ['abbr', 'description'] })
                      .search(s)
                      .map(function (e) {
                        return e.item;
                      })
                  : n;
              },
              [n, s],
            );
          return (0, t.jsx)(
            'div',
            z(
              { className: (0, p.A)(k, [], ((r = {}), (r.cT78C = o), r)) },
              {
                children:
                  null == i
                    ? void 0
                    : i.map(function (e) {
                        var r;
                        return (0, t.jsxs)(
                          y.zx,
                          z(
                            {
                              className: (0, p.A)(
                                B,
                                [],
                                ((r = {}),
                                (r.x1YDz =
                                  'rub' === e.abbr ||
                                  'eur' === e.abbr ||
                                  'usd' === e.abbr ||
                                  'gbp' === e.abbr),
                                r),
                              ),
                              onClick: function () {
                                return (
                                  (r = e),
                                  a(ne.setFromCurrentCurrency(r)),
                                  a(ne.setIsFromCurMenu(!1)),
                                  a(I.setFromIsFocused(!1)),
                                  void a(I.setFromValue(''))
                                );
                                var r;
                              },
                              theme: y.lq.CLEAR,
                              tabIndex: 0,
                            },
                            {
                              children: [
                                (0, t.jsx)(
                                  'p',
                                  z(
                                    { className: L },
                                    { children: e.abbr.toUpperCase() },
                                  ),
                                ),
                                (0, t.jsx)('span', { children: '-' }),
                                (0, t.jsx)(
                                  'p',
                                  z(
                                    { className: P },
                                    { children: e.description },
                                  ),
                                ),
                              ],
                            },
                          ),
                          e.abbr + e.description,
                        );
                      }),
              },
            ),
          );
        }),
        R = function (e) {
          var r;
          return null === (r = e.searchBaseCurrency) || void 0 === r
            ? void 0
            : r.value;
        },
        V = function (e) {
          var r;
          return null === (r = e.searchBaseCurrency) || void 0 === r
            ? void 0
            : r.isFocused;
        },
        D = (0, i.oM)({
          name: 'searchBaseCurrency',
          initialState: { value: '', isFocused: !1 },
          reducers: {
            setBaseValue: function (e, r) {
              var n = r.payload;
              e.value = n;
            },
            setBaseIsFocused: function (e, r) {
              var n = r.payload;
              e.isFocused = n;
            },
          },
        }),
        Y = D.actions,
        q = D.reducer,
        Z = function () {
          return (
            (Z =
              Object.assign ||
              function (e) {
                for (var r, n = 1, t = arguments.length; n < t; n++)
                  for (var u in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
                return e;
              }),
            Z.apply(this, arguments)
          );
        },
        $ = (0, u.memo)(function (e) {
          var r,
            n = e.currencyList,
            o = e.isCurMenu,
            a = (0, b.T)(),
            s = (0, c.v9)(R),
            i = (0, u.useMemo)(
              function () {
                return n && s
                  ? new A.Z(n, { keys: ['abbr', 'description'] })
                      .search(s)
                      .map(function (e) {
                        return e.item;
                      })
                  : n;
              },
              [n, s],
            );
          return (0, t.jsx)(
            'div',
            Z(
              { className: (0, p.A)(k, [], ((r = {}), (r.cT78C = o), r)) },
              {
                children:
                  null == i
                    ? void 0
                    : i.map(function (e) {
                        var r;
                        return (0, t.jsxs)(
                          y.zx,
                          Z(
                            {
                              className: (0, p.A)(
                                B,
                                [],
                                ((r = {}),
                                (r.x1YDz =
                                  'rub' === e.abbr ||
                                  'eur' === e.abbr ||
                                  'usd' === e.abbr ||
                                  'gbp' === e.abbr),
                                r),
                              ),
                              onClick: function () {
                                return (
                                  (r = e),
                                  a(pe.setBaseCurrentCurrency(r)),
                                  a(pe.setIsBaseCurMenu(!1)),
                                  a(Y.setBaseIsFocused(!1)),
                                  void a(Y.setBaseValue(''))
                                );
                                var r;
                              },
                              theme: y.lq.CLEAR,
                              tabIndex: 0,
                            },
                            {
                              children: [
                                (0, t.jsx)(
                                  'p',
                                  Z(
                                    { className: L },
                                    { children: e.abbr.toUpperCase() },
                                  ),
                                ),
                                (0, t.jsx)('span', { children: '-' }),
                                (0, t.jsx)(
                                  'p',
                                  Z(
                                    { className: P },
                                    { children: e.description },
                                  ),
                                ),
                              ],
                            },
                          ),
                          e.abbr + e.description,
                        );
                      }),
              },
            ),
          );
        }),
        W = n(2832),
        G = n(5354),
        H = (0, i.oM)({
          name: 'choseToCurrency',
          initialState: {
            currentCurrency: { abbr: '', description: '' },
            isCurMenu: !1,
          },
          reducers: {
            setToCurrentCurrency: function (e, r) {
              var n = r.payload;
              localStorage.setItem(G.nY, n.abbr),
                localStorage.setItem(G.mt, n.description),
                (e.currentCurrency = n);
            },
            setIsToCurMenu: function (e, r) {
              var n = r.payload;
              e.isCurMenu = n;
            },
            setDefaultToCurrentCurrency: function (e) {
              var r = localStorage.getItem(G.nY),
                n = localStorage.getItem(G.mt);
              (e.currentCurrency.abbr = r || 'rub'),
                (e.currentCurrency.description = n || 'Russian Ruble');
            },
          },
        }),
        J = H.actions,
        K = H.reducer,
        X = function () {
          return (
            (X =
              Object.assign ||
              function (e) {
                for (var r, n = 1, t = arguments.length; n < t; n++)
                  for (var u in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
                return e;
              }),
            X.apply(this, arguments)
          );
        },
        Q = { choseToCurrency: K },
        ee = (0, u.memo)(function (e) {
          var r = e.currencyList,
            n = (0, c.v9)(W.p),
            u = (0, c.v9)(W.y);
          return (0,
          t.jsxs)(o.T, X({ removeAfterUnmount: !0, reducers: Q }, { children: [(0, t.jsx)(g, { currentCurrency: n, isCurMenu: u }), (0, t.jsx)(U, { currencyList: r, isCurMenu: u })] }));
        }),
        re = (0, i.oM)({
          name: 'choseFromCurrency',
          initialState: {
            currentCurrency: { abbr: '', description: '' },
            isCurMenu: !1,
          },
          reducers: {
            setFromCurrentCurrency: function (e, r) {
              var n = r.payload;
              localStorage.setItem(G.gM, n.abbr),
                localStorage.setItem(G.$B, n.description),
                (e.currentCurrency = n);
            },
            setIsFromCurMenu: function (e, r) {
              var n = r.payload;
              e.isCurMenu = n;
            },
            setDefaultFromCurrentCurrency: function (e) {
              var r = localStorage.getItem(G.gM),
                n = localStorage.getItem(G.$B);
              (e.currentCurrency.abbr = r || 'usd'),
                (e.currentCurrency.description = n || 'United States Dollar');
            },
          },
        }),
        ne = re.actions,
        te = re.reducer,
        ue = n(9312),
        ce = function () {
          return (
            (ce =
              Object.assign ||
              function (e) {
                for (var r, n = 1, t = arguments.length; n < t; n++)
                  for (var u in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
                return e;
              }),
            ce.apply(this, arguments)
          );
        },
        oe = { choseFromCurrency: te },
        ae = (0, u.memo)(function (e) {
          var r = e.currencyList,
            n = (0, c.v9)(ue.j),
            u = (0, c.v9)(ue.e);
          return (0,
          t.jsxs)(o.T, ce({ removeAfterUnmount: !0, reducers: oe }, { children: [(0, t.jsx)(N, { currentCurrency: n, isCurMenu: u }), (0, t.jsx)(E, { currencyList: r, isCurMenu: u })] }));
        }),
        se = function () {
          return (
            (se =
              Object.assign ||
              function (e) {
                for (var r, n = 1, t = arguments.length; n < t; n++)
                  for (var u in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
                return e;
              }),
            se.apply(this, arguments)
          );
        },
        ie = { searchBaseCurrency: q },
        le = (0, u.memo)(function (e) {
          var r,
            n,
            a = e.currentCurrency,
            s = e.isCurMenu,
            i = (0, b.T)(),
            l = (0, c.v9)(V),
            d = (0, c.v9)(R),
            f = (0, u.useMemo)(
              function () {
                return ''
                  .concat(null == a ? void 0 : a.abbr.toUpperCase(), ' - ')
                  .concat(null == a ? void 0 : a.description);
              },
              [null == a ? void 0 : a.abbr, null == a ? void 0 : a.description],
            ),
            j = (0, u.useCallback)(
              function (e) {
                i(Y.setBaseValue(e));
              },
              [i],
            );
          return (0, t.jsx)(
            o.T,
            se(
              { removeAfterUnmount: !0, reducers: ie },
              {
                children: (0, t.jsxs)(
                  'div',
                  se(
                    {
                      className: (0, p.A)(m, [], ((r = {}), (r.LeblN = l), r)),
                    },
                    {
                      children: [
                        (0, t.jsx)(h.I, {
                          placeholder: f,
                          value: d,
                          onChange: j,
                          onClick: function () {
                            i(Y.setBaseIsFocused(!0)),
                              i(pe.setIsBaseCurMenu(!0));
                          },
                        }),
                        (0, t.jsx)(
                          y.zx,
                          se(
                            {
                              className: (0, p.A)(
                                C,
                                [],
                                ((n = {}), (n.exOic = s), n),
                              ),
                              theme: y.lq.CLEAR,
                              size: y.Ph.S,
                              onClick: function () {
                                i(Y.setBaseIsFocused(!l)),
                                  i(pe.setIsBaseCurMenu(!s));
                              },
                            },
                            { children: (0, t.jsx)(v.SZO, {}) },
                          ),
                        ),
                      ],
                    },
                  ),
                ),
              },
            ),
          );
        }),
        de = function (e) {
          var r;
          return null === (r = e.choseBaseCurrency) || void 0 === r
            ? void 0
            : r.currentCurrency;
        },
        fe = function (e) {
          var r;
          return null === (r = e.choseBaseCurrency) || void 0 === r
            ? void 0
            : r.isCurMenu;
        },
        ve = (0, i.oM)({
          name: 'choseBaseCurrency',
          initialState: {
            currentCurrency: { abbr: '', description: '' },
            isCurMenu: !1,
          },
          reducers: {
            setBaseCurrentCurrency: function (e, r) {
              var n = r.payload;
              localStorage.setItem(G.zN, n.abbr),
                localStorage.setItem(G.T0, n.description),
                (e.currentCurrency = n);
            },
            setIsBaseCurMenu: function (e, r) {
              var n = r.payload;
              e.isCurMenu = n;
            },
            setDefaultBaseCurrentCurrency: function (e) {
              var r = localStorage.getItem(G.zN),
                n = localStorage.getItem(G.T0);
              (e.currentCurrency.abbr = r || 'rub'),
                (e.currentCurrency.description = n || 'Russian Ruble');
            },
          },
        }),
        pe = ve.actions,
        be = ve.reducer,
        ye = function () {
          return (
            (ye =
              Object.assign ||
              function (e) {
                for (var r, n = 1, t = arguments.length; n < t; n++)
                  for (var u in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
                return e;
              }),
            ye.apply(this, arguments)
          );
        },
        he = { choseBaseCurrency: be },
        me = (0, u.memo)(function (e) {
          var r = e.currencyList,
            n = e.currentCurrency,
            u = (0, c.v9)(fe);
          return (0,
          t.jsxs)(o.T, ye({ removeAfterUnmount: !0, reducers: he }, { children: [(0, t.jsx)(le, { currentCurrency: n, isCurMenu: u }), (0, t.jsx)($, { currencyList: r, isCurMenu: u })] }));
        }),
        Ce = (0, i.hg)('choseCurrency/fetchRate', function (e, r) {
          var n,
            t,
            u,
            c,
            o = e.from,
            a = e.to,
            s = r.rejectWithValue,
            i = r.extra;
          return (
            (n = void 0),
            (t = void 0),
            (c = function () {
              var e;
              return (function (e, r) {
                var n,
                  t,
                  u,
                  c,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & u[0]) throw u[1];
                      return u[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (c = { next: a(0), throw: a(1), return: a(2) }),
                  'function' == typeof Symbol &&
                    (c[Symbol.iterator] = function () {
                      return this;
                    }),
                  c
                );
                function a(c) {
                  return function (a) {
                    return (function (c) {
                      if (n)
                        throw new TypeError('Generator is already executing.');
                      for (; o; )
                        try {
                          if (
                            ((n = 1),
                            t &&
                              (u =
                                2 & c[0]
                                  ? t.return
                                  : c[0]
                                  ? t.throw || ((u = t.return) && u.call(t), 0)
                                  : t.next) &&
                              !(u = u.call(t, c[1])).done)
                          )
                            return u;
                          switch (
                            ((t = 0), u && (c = [2 & c[0], u.value]), c[0])
                          ) {
                            case 0:
                            case 1:
                              u = c;
                              break;
                            case 4:
                              return o.label++, { value: c[1], done: !1 };
                            case 5:
                              o.label++, (t = c[1]), (c = [0]);
                              continue;
                            case 7:
                              (c = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (u =
                                    (u = o.trys).length > 0 &&
                                    u[u.length - 1]) ||
                                  (6 !== c[0] && 2 !== c[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === c[0] &&
                                (!u || (c[1] > u[0] && c[1] < u[3]))
                              ) {
                                o.label = c[1];
                                break;
                              }
                              if (6 === c[0] && o.label < u[1]) {
                                (o.label = u[1]), (u = c);
                                break;
                              }
                              if (u && o.label < u[2]) {
                                (o.label = u[2]), o.ops.push(c);
                                break;
                              }
                              u[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          c = r.call(e, o);
                        } catch (e) {
                          (c = [6, e]), (t = 0);
                        } finally {
                          n = u = 0;
                        }
                      if (5 & c[0]) throw c[1];
                      return { value: c[0] ? c[1] : void 0, done: !0 };
                    })([c, a]);
                  };
                }
              })(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 2, , 3]),
                      [
                        4,
                        i.api.get(
                          '/latest/currencies/'
                            .concat(o, '/')
                            .concat(a, '.min.json'),
                        ),
                      ]
                    );
                  case 1:
                    if (!(e = r.sent()).data) throw new Error();
                    return [2, Number(Object.values(e.data)[1])];
                  case 2:
                    return r.sent(), [2, s('error')];
                  case 3:
                    return [2];
                }
              });
            }),
            new ((u = void 0) || (u = Promise))(function (e, r) {
              function o(e) {
                try {
                  s(c.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function a(e) {
                try {
                  s(c.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(r) {
                var n;
                r.done
                  ? e(r.value)
                  : ((n = r.value),
                    n instanceof u
                      ? n
                      : new u(function (e) {
                          e(n);
                        })).then(o, a);
              }
              s((c = c.apply(n, t || [])).next());
            })
          );
        }),
        je = (0, i.hg)('choseCurrency/fetchSymbols', function (e, r) {
          var n,
            t,
            u,
            c,
            o = r.rejectWithValue,
            a = r.extra;
          return (
            (n = void 0),
            (t = void 0),
            (c = function () {
              var e;
              return (function (e, r) {
                var n,
                  t,
                  u,
                  c,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & u[0]) throw u[1];
                      return u[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (c = { next: a(0), throw: a(1), return: a(2) }),
                  'function' == typeof Symbol &&
                    (c[Symbol.iterator] = function () {
                      return this;
                    }),
                  c
                );
                function a(c) {
                  return function (a) {
                    return (function (c) {
                      if (n)
                        throw new TypeError('Generator is already executing.');
                      for (; o; )
                        try {
                          if (
                            ((n = 1),
                            t &&
                              (u =
                                2 & c[0]
                                  ? t.return
                                  : c[0]
                                  ? t.throw || ((u = t.return) && u.call(t), 0)
                                  : t.next) &&
                              !(u = u.call(t, c[1])).done)
                          )
                            return u;
                          switch (
                            ((t = 0), u && (c = [2 & c[0], u.value]), c[0])
                          ) {
                            case 0:
                            case 1:
                              u = c;
                              break;
                            case 4:
                              return o.label++, { value: c[1], done: !1 };
                            case 5:
                              o.label++, (t = c[1]), (c = [0]);
                              continue;
                            case 7:
                              (c = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (u =
                                    (u = o.trys).length > 0 &&
                                    u[u.length - 1]) ||
                                  (6 !== c[0] && 2 !== c[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === c[0] &&
                                (!u || (c[1] > u[0] && c[1] < u[3]))
                              ) {
                                o.label = c[1];
                                break;
                              }
                              if (6 === c[0] && o.label < u[1]) {
                                (o.label = u[1]), (u = c);
                                break;
                              }
                              if (u && o.label < u[2]) {
                                (o.label = u[2]), o.ops.push(c);
                                break;
                              }
                              u[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          c = r.call(e, o);
                        } catch (e) {
                          (c = [6, e]), (t = 0);
                        } finally {
                          n = u = 0;
                        }
                      if (5 & c[0]) throw c[1];
                      return { value: c[0] ? c[1] : void 0, done: !0 };
                    })([c, a]);
                  };
                }
              })(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 2, , 3]),
                      [4, a.api.get('/latest/currencies.min.json')]
                    );
                  case 1:
                    if (!(e = r.sent()).data) throw new Error();
                    return [
                      2,
                      Object.entries(e.data).map(function (e) {
                        return { abbr: e[0], description: e[1] };
                      }),
                    ];
                  case 2:
                    return r.sent(), [2, o('error')];
                  case 3:
                    return [2];
                }
              });
            }),
            new ((u = void 0) || (u = Promise))(function (e, r) {
              function o(e) {
                try {
                  s(c.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function a(e) {
                try {
                  s(c.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(r) {
                var n;
                r.done
                  ? e(r.value)
                  : ((n = r.value),
                    n instanceof u
                      ? n
                      : new u(function (e) {
                          e(n);
                        })).then(o, a);
              }
              s((c = c.apply(n, t || [])).next());
            })
          );
        });
    },
    9312: (e, r, n) => {
      n.d(r, { e: () => u, j: () => t });
      var t = function (e) {
          var r;
          return null === (r = e.choseFromCurrency) || void 0 === r
            ? void 0
            : r.currentCurrency;
        },
        u = function (e) {
          var r;
          return null === (r = e.choseFromCurrency) || void 0 === r
            ? void 0
            : r.isCurMenu;
        };
    },
    2832: (e, r, n) => {
      n.d(r, { p: () => t, y: () => u });
      var t = function (e) {
          var r;
          return null === (r = e.choseToCurrency) || void 0 === r
            ? void 0
            : r.currentCurrency;
        },
        u = function (e) {
          var r;
          return null === (r = e.choseToCurrency) || void 0 === r
            ? void 0
            : r.isCurMenu;
        };
    },
    5354: (e, r, n) => {
      n.d(r, {
        $B: () => a,
        T0: () => i,
        di: () => t,
        gM: () => o,
        mt: () => c,
        nY: () => u,
        zN: () => s,
      });
      var t = 'input_value',
        u = 'to_current_currency_abbr',
        c = 'to_current_currency_desc',
        o = 'from_current_currency_abbr',
        a = 'from_current_currency_desc',
        s = 'base_current_currency_abbr',
        i = 'base_current_currency_desc';
    },
    7296: (e, r, n) => {
      n.d(r, { T: () => a });
      var t = n(5893),
        u = n(7294),
        c = n(7007),
        o = n(1302),
        a = function (e) {
          var r = e.children,
            n = e.reducers,
            a = e.removeAfterUnmount,
            s = (0, o.T)(),
            i = (0, c.oR)();
          return (
            (0, u.useEffect)(function () {
              return (
                Object.entries(n).forEach(function (e) {
                  var r = e[0],
                    n = e[1];
                  i.reducerManager.add(r, n),
                    s({ type: '@Init '.concat(r, ' reducer') });
                }),
                function () {
                  a &&
                    Object.entries(n).forEach(function (e) {
                      var r = e[0];
                      i.reducerManager.remove(r),
                        s({ type: '@Destroy '.concat(r, ' reducer') });
                    });
                }
              );
            }, []),
            (0, t.jsx)(t.Fragment, { children: r })
          );
        };
    },
    1302: (e, r, n) => {
      n.d(r, { T: () => u });
      var t = n(7007),
        u = function () {
          return (0, t.I0)();
        };
    },
    6925: (e, r, n) => {
      n.d(r, { I: () => a });
      var t = n(5893),
        u = n(7294),
        c = n(4807);
      var o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var r, n = 1, t = arguments.length; n < t; n++)
                  for (var u in (r = arguments[n]))
                    Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
                return e;
              }),
            o.apply(this, arguments)
          );
        },
        a = (0, u.memo)(function (e) {
          var r = e.className,
            n = e.value,
            a = e.onChange,
            s = e.type,
            i = e.placeholder,
            l = e.isAutoFocus,
            d = (function (e, r) {
              var n = {};
              for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) &&
                  r.indexOf(t) < 0 &&
                  (n[t] = e[t]);
              if (
                null != e &&
                'function' == typeof Object.getOwnPropertySymbols
              ) {
                var u = 0;
                for (t = Object.getOwnPropertySymbols(e); u < t.length; u++)
                  r.indexOf(t[u]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, t[u]) &&
                    (n[t[u]] = e[t[u]]);
              }
              return n;
            })(e, [
              'className',
              'value',
              'onChange',
              'type',
              'placeholder',
              'isAutoFocus',
            ]),
            f = (0, u.useRef)(null);
          return (
            (0, u.useEffect)(
              function () {
                var e;
                l && (null === (e = f.current) || void 0 === e || e.focus());
              },
              [l],
            ),
            (0, t.jsx)(
              'div',
              o(
                { className: (0, c.A)('LuFDU', [r]) },
                {
                  children: (0, t.jsx)(
                    'input',
                    o(
                      {
                        placeholder: i,
                        ref: f,
                        className: 'LVdIP',
                        value: n,
                        onChange: function (e) {
                          null == a || a(e.target.value);
                        },
                        type: s,
                      },
                      d,
                    ),
                  ),
                },
              ),
            )
          );
        });
    },
  },
]);
