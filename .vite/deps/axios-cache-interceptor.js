import "./chunk-5WWUZCGV.js";

// node_modules/cache-parser/dist/index.mjs
var e = Symbol("cache-parser");
function a(e3) {
  return ("string" == typeof e3 || "number" == typeof e3) && (e3 = Number(e3)) >= 0 && e3 < Infinity;
}
function r(e3) {
  return true === e3 || "number" == typeof e3 || "string" == typeof e3 && "false" !== e3;
}
var t = Number;
function s(s3) {
  var n3 = Object.defineProperty({}, e, { enumerable: false, value: 1 });
  if (!s3 || "string" != typeof s3)
    return n3;
  var i2 = function(e3) {
    var a2 = {}, r4 = e3.toLowerCase().replace(/\s+/g, "").split(",");
    for (var t3 in r4) {
      var s4, n4 = r4[t3].split("=", 2);
      a2[n4[0]] = null == (s4 = n4[1]) || s4;
    }
    return a2;
  }(s3), u2 = i2["max-age"], l2 = i2["max-stale"], o2 = i2["min-fresh"], m2 = i2["s-maxage"], p2 = i2["stale-if-error"], h2 = i2["stale-while-revalidate"];
  return r(i2.immutable) && (n3.immutable = true), a(u2) && (n3.maxAge = t(u2)), a(l2) && (n3.maxStale = t(l2)), a(o2) && (n3.minFresh = t(o2)), r(i2["must-revalidate"]) && (n3.mustRevalidate = true), r(i2["must-understand"]) && (n3.mustUnderstand = true), r(i2["no-cache"]) && (n3.noCache = true), r(i2["no-store"]) && (n3.noStore = true), r(i2["no-transform"]) && (n3.noTransform = true), r(i2["only-if-cached"]) && (n3.onlyIfCached = true), r(i2.private) && (n3.private = true), r(i2["proxy-revalidate"]) && (n3.proxyRevalidate = true), r(i2.public) && (n3.public = true), a(m2) && (n3.sMaxAge = t(m2)), a(p2) && (n3.staleIfError = t(p2)), a(h2) && (n3.staleWhileRevalidate = t(h2)), n3;
}

// node_modules/fast-defer/dist/index.mjs
var r2 = Symbol();
function e2() {
  var e3, n3, o2 = new Promise(function(r4, o3) {
    e3 = r4, n3 = o3;
  });
  return o2.resolve = e3, o2.reject = n3, o2[r2] = 1, o2;
}

// node_modules/object-code/dist/index.mjs
function t2(n3, e3) {
  void 0 === e3 && (e3 = /* @__PURE__ */ new WeakMap());
  var r4 = typeof n3;
  if (n3 && "object" === r4 && !(n3 instanceof Date || n3 instanceof RegExp)) {
    for (var o2 = Array.isArray(n3) ? [] : {}, i2 = Object.keys(n3).sort(function(t3, n4) {
      return t3 > n4 ? 1 : -1;
    }), a2 = i2.length; a2--; ) {
      var f2 = i2[a2], c2 = n3[f2];
      if ("object" == typeof c2 && null !== c2 && !(c2 instanceof Date || c2 instanceof RegExp)) {
        if (e3.has(c2))
          continue;
        e3.set(c2, true);
      }
      o2[f2] = t2(c2, e3);
    }
    return String(n3.constructor) + JSON.stringify(o2, i2);
  }
  return r4 + String(n3);
}
function n(n3) {
  n3 = t2(n3);
  for (var e3 = 5381, r4 = 0; r4 < n3.length; )
    e3 = 33 * e3 ^ n3.charCodeAt(r4++);
  return e3;
}

// node_modules/axios-cache-interceptor/dist/index.mjs
var r3 = { d: (e3, t3) => {
  for (var a2 in t3)
    r3.o(t3, a2) && !r3.o(e3, a2) && Object.defineProperty(e3, a2, { enumerable: true, get: t3[a2] });
}, o: (e3, t3) => Object.prototype.hasOwnProperty.call(e3, t3) };
var s2 = {};
r3.d(s2, { h4: () => i, UN: () => A, uu: () => x, Kd: () => I, ZF: () => T, nv: () => y, p: () => f, E7: () => c, NQ: () => n2, xK: () => E, G6: () => h, LN: () => v, Bw: () => S, Ad: () => u, $k: () => m, v8: () => O, Jk: () => g, tI: () => p, iS: () => l });
var o = ((e3) => {
  var t3 = {};
  return r3.d(t3, e3), t3;
})({ parse: () => s });
var i = Object.freeze({ IfModifiedSince: "if-modified-since", LastModified: "last-modified", IfNoneMatch: "if-none-match", CacheControl: "cache-control", Pragma: "pragma", ETag: "etag", Expires: "expires", Age: "age", XAxiosCacheEtag: "x-axios-cache-etag", XAxiosCacheLastModified: "x-axios-cache-last-modified", XAxiosCacheStaleIfError: "x-axios-cache-stale-if-error" });
var n2 = (e3) => {
  if (!e3)
    return "not enough headers";
  const t3 = e3[i.CacheControl];
  if (t3) {
    const { noCache: a3, noStore: r4, maxAge: s3, maxStale: n3, immutable: d2, staleWhileRevalidate: c2 } = (0, o.parse)(String(t3));
    if (a3 || r4)
      return "dont cache";
    if (d2)
      return { cache: 31536e6 };
    if (void 0 !== s3) {
      const t4 = e3[i.Age];
      return { cache: t4 ? 1e3 * (s3 - Number(t4)) : 1e3 * s3, stale: void 0 !== n3 ? 1e3 * n3 : void 0 !== c2 ? 1e3 * c2 : void 0 };
    }
  }
  const a2 = e3[i.Expires];
  if (a2) {
    const e4 = Date.parse(String(a2)) - Date.now();
    return e4 >= 0 ? { cache: e4 } : "dont cache";
  }
  return "not enough headers";
};
var d = ((e3) => {
  var t3 = {};
  return r3.d(t3, e3), t3;
})({ deferred: () => e2 });
function c(e3) {
  return e3 ? (t3) => e3(t3) || 304 === t3 : (e4) => e4 >= 200 && e4 < 300 || 304 === e4;
}
function u(e3 = "get", t3 = []) {
  return e3 = e3.toLowerCase(), t3.some((t4) => t4 === e3);
}
function l(e3, t3) {
  var a2;
  t3.headers || (t3.headers = {});
  const { etag: r4, modifiedSince: s3 } = t3.cache;
  if (r4) {
    const s4 = true === r4 ? null === (a2 = e3.data) || void 0 === a2 ? void 0 : a2.headers[i.ETag] : r4;
    s4 && (t3.headers[i.IfNoneMatch] = s4);
  }
  s3 && (t3.headers[i.IfModifiedSince] = true === s3 ? e3.data.headers[i.LastModified] || new Date(e3.createdAt).toUTCString() : s3.toUTCString());
}
function f(e3, t3) {
  return 304 === e3.status && t3 ? (e3.cached = true, e3.data = t3.data, e3.status = t3.status, e3.statusText = t3.statusText, e3.headers = Object.assign(Object.assign({}, t3.headers), e3.headers), t3) : { data: e3.data, status: e3.status, statusText: e3.statusText, headers: e3.headers };
}
function h(e3) {
  const t3 = async (a2) => {
    var r4, s3, o2, n3, f2, h2, g2, p2, v2, m2, w2, y2, S2, I2, x2;
    if (a2.id = e3.generateKey(a2), false === a2.cache)
      return a2;
    if (a2.cache = Object.assign(Object.assign({}, e3.defaults.cache), a2.cache), a2.cache.cacheTakeover && (null !== (r4 = (m2 = a2.headers)[w2 = i.CacheControl]) && void 0 !== r4 || (m2[w2] = "no-cache"), null !== (s3 = (y2 = a2.headers)[S2 = i.Pragma]) && void 0 !== s3 || (y2[S2] = "no-cache"), null !== (o2 = (I2 = a2.headers)[x2 = i.Expires]) && void 0 !== o2 || (I2[x2] = "0")), !u(a2.method, a2.cache.methods))
      return a2;
    let C2 = await e3.storage.get(a2.id, a2);
    const b2 = a2.cache.override;
    e:
      if ("empty" === C2.state || "stale" === C2.state || b2) {
        if (e3.waiting[a2.id] && !b2 && (C2 = await e3.storage.get(a2.id, a2), "empty" !== C2.state)) {
          0;
          break e;
        }
        return e3.waiting[a2.id] = (0, d.deferred)(), e3.waiting[a2.id].catch(() => {
        }), await e3.storage.set(a2.id, { state: "loading", previous: b2 ? C2.data ? "stale" : "empty" : C2.state, data: C2.data, createdAt: b2 && !C2.createdAt ? Date.now() : C2.createdAt }, a2), "stale" === C2.state && l(C2, a2), a2.validateStatus = c(a2.validateStatus), ("stale" === C2.state || C2.data) && await (null === (f2 = (n3 = a2.cache).hydrate) || void 0 === f2 ? void 0 : f2.call(n3, C2)), a2;
      }
    let A2;
    if ("loading" === C2.state) {
      const r5 = e3.waiting[a2.id];
      if (!r5)
        return C2.data && await (null === (g2 = (h2 = a2.cache).hydrate) || void 0 === g2 ? void 0 : g2.call(h2, C2)), a2;
      0;
      try {
        A2 = await r5;
      } catch (e4) {
        return C2.data && await (null === (v2 = (p2 = a2.cache).hydrate) || void 0 === v2 ? void 0 : v2.call(p2, C2)), t3(a2);
      }
    } else
      A2 = C2.data;
    return a2.adapter = function() {
      return Promise.resolve({ config: a2, data: A2.data, headers: A2.headers, status: A2.status, statusText: A2.statusText, cached: true, id: a2.id });
    }, a2;
  };
  return { onFulfilled: t3, apply: () => e3.interceptors.request.use(t3) };
}
async function g(e3, t3) {
  var a2;
  if ("function" == typeof t3)
    return t3(e3);
  const { statusCheck: r4, responseMatch: s3, containsHeaders: o2 } = t3;
  if (r4 && !await r4(e3.status) || s3 && !await s3(e3))
    return false;
  if (o2) {
    for (const [t4, r5] of Object.entries(o2))
      if (!await r5(null !== (a2 = e3.headers[t4.toLowerCase()]) && void 0 !== a2 ? a2 : e3.headers[t4]))
        return false;
  }
  return true;
}
async function p(e3, t3, a2) {
  if ("function" == typeof a2)
    return a2(t3);
  for (const [r4, s3] of Object.entries(a2)) {
    if ("delete" === s3) {
      await e3.remove(r4, t3.config);
      continue;
    }
    const a3 = await e3.get(r4, t3.config);
    if ("loading" === a3.state)
      continue;
    const o2 = await s3(a3, t3);
    "delete" !== o2 ? "ignore" !== o2 && await e3.set(r4, o2, t3.config) : await e3.remove(r4, t3.config);
  }
}
function v(e3) {
  const t3 = async (t4, a3) => {
    var r5;
    await e3.storage.remove(t4, a3), null === (r5 = e3.waiting[t4]) || void 0 === r5 || r5.reject(), delete e3.waiting[t4];
  }, a2 = async (a3) => {
    var r5;
    if (!(null == a3 ? void 0 : a3.config))
      throw a3;
    a3.id = a3.config.id, null !== (r5 = a3.cached) && void 0 !== r5 || (a3.cached = false);
    const s3 = a3.config, o2 = s3.cache;
    if (a3.cached)
      return a3;
    if (!o2)
      return a3.cached = false, a3;
    if (o2.update && await p(e3.storage, a3, o2.update), !u(s3.method, o2.methods))
      return a3;
    const n3 = await e3.storage.get(a3.id, s3);
    if ("loading" !== n3.state)
      return a3;
    if (!n3.data && !await g(a3, o2.cachePredicate))
      return await t3(a3.id, s3), a3;
    for (const e4 of Object.keys(a3.headers))
      e4.startsWith("x-axios-cache") && delete a3.headers[e4];
    o2.etag && true !== o2.etag && (a3.headers[i.XAxiosCacheEtag] = o2.etag), o2.modifiedSince && (a3.headers[i.XAxiosCacheLastModified] = true === o2.modifiedSince ? "use-cache-timestamp" : o2.modifiedSince.toUTCString());
    let d2, c2 = o2.ttl || -1;
    if (o2.interpretHeader) {
      const r6 = e3.headerInterpreter(a3.headers);
      if ("dont cache" === r6)
        return await t3(a3.id, s3), a3;
      "not enough headers" !== r6 && ("number" == typeof r6 ? c2 = r6 : (c2 = r6.cache, d2 = r6.stale));
    }
    const l2 = f(a3, n3.data);
    "function" == typeof c2 && (c2 = await c2(a3)), o2.staleIfError && (a3.headers[i.XAxiosCacheStaleIfError] = String(c2));
    const h2 = { state: "cached", ttl: c2, staleTtl: d2, createdAt: Date.now(), data: l2 }, v2 = e3.waiting[a3.id];
    return v2 && (v2.resolve(h2.data), delete e3.waiting[a3.id]), await e3.storage.set(a3.id, h2, s3), a3;
  }, r4 = async (a3) => {
    var r5;
    if (!a3.isAxiosError || !a3.config)
      throw a3;
    const s3 = a3.config, n3 = s3.id, d2 = s3.cache, c2 = a3.response;
    if (!d2 || !n3)
      throw a3;
    if (!u(s3.method, d2.methods))
      throw await t3(n3, s3), a3;
    const l2 = await e3.storage.get(n3, s3);
    if ("loading" !== l2.state || "stale" !== l2.previous)
      throw await t3(n3, s3), a3;
    if (d2.staleIfError) {
      const t4 = String(null == c2 ? void 0 : c2.headers[i.CacheControl]), u2 = t4 && (0, o.parse)(t4).staleIfError, f2 = "function" == typeof d2.staleIfError ? await d2.staleIfError(c2, l2, a3) : true === d2.staleIfError && u2 ? 1e3 * u2 : d2.staleIfError;
      if (true === f2 || "number" == typeof f2 && l2.createdAt + f2 > Date.now())
        return null === (r5 = e3.waiting[n3]) || void 0 === r5 || r5.resolve(l2.data), delete e3.waiting[n3], await e3.storage.set(n3, { state: "stale", createdAt: Date.now(), data: l2.data }, s3), { cached: true, config: s3, id: n3, data: l2.data.data, headers: l2.data.headers, status: l2.data.status, statusText: l2.data.statusText };
    }
    throw await t3(n3, s3), a3;
  };
  return { onFulfilled: a2, onRejected: r4, apply: () => e3.interceptors.response.use(a2, r4) };
}
var m = (e3) => !!e3 && !!e3["is-storage"];
function w(e3) {
  const t3 = e3.data.headers;
  return i.ETag in t3 || i.LastModified in t3 || i.XAxiosCacheEtag in t3 || i.XAxiosCacheLastModified in t3;
}
function y(e3) {
  return !String(e3.data.headers[i.CacheControl]).includes("must-revalidate") && (!!w(e3) || "cached" === e3.state && void 0 !== e3.staleTtl && Math.abs(Date.now() - (e3.createdAt + e3.ttl)) <= e3.staleTtl);
}
function S(e3) {
  return void 0 !== e3.ttl && e3.createdAt + e3.ttl <= Date.now();
}
function I({ set: e3, find: t3, remove: a2 }) {
  return { "is-storage": 1, set: e3, remove: a2, get: async (r4, s3) => {
    let o2 = await t3(r4, s3);
    if (!o2)
      return { state: "empty" };
    if ("empty" === o2.state || "loading" === o2.state)
      return o2;
    if ("cached" === o2.state) {
      if (!S(o2))
        return o2;
      if (!y(o2))
        return await a2(r4, s3), { state: "empty" };
      o2 = { state: "stale", createdAt: o2.createdAt, data: o2.data, ttl: void 0 !== o2.staleTtl ? o2.staleTtl + o2.ttl : void 0 }, await e3(r4, o2, s3);
    }
    return S(o2) ? w(o2) ? o2 : (await a2(r4, s3), { state: "empty" }) : o2;
  } };
}
function x(e3 = false, t3 = false, a2 = false) {
  const r4 = I({ set: (t4, s3) => {
    if (a2) {
      let e4 = Object.keys(r4.data);
      if (e4.length >= a2)
        for (r4.cleanup(), e4 = Object.keys(r4.data); e4.length >= a2; )
          delete r4.data[e4.shift()];
    }
    r4.data[t4] = "double" === e3 ? "function" == typeof structuredClone ? structuredClone(s3) : JSON.parse(JSON.stringify(s3)) : s3;
  }, remove: (e4) => {
    delete r4.data[e4];
  }, find: (t4) => {
    const a3 = r4.data[t4];
    return e3 && void 0 !== a3 ? "function" == typeof structuredClone ? structuredClone(a3) : JSON.parse(JSON.stringify(a3)) : a3;
  } });
  return r4.data = /* @__PURE__ */ Object.create(null), r4.cleanup = () => {
    const e4 = Object.keys(r4.data);
    let t4, a3, s3 = -1;
    for (; ++s3 < e4.length; )
      a3 = e4[s3], t4 = r4.data[a3], "empty" !== t4.state ? "cached" === t4.state && S(t4) && !y(t4) && r4.remove(a3) : r4.remove(a3);
  }, t3 && (r4.cleaner = setInterval(r4.cleanup, t3)), r4;
}
var C = ((e3) => {
  var t3 = {};
  return r3.d(t3, e3), t3;
})({ hash: () => n });
var b = /^\/|\/$/g;
function A(e3) {
  return (t3) => {
    if (t3.id)
      return t3.id;
    const a2 = e3(t3);
    return "string" == typeof a2 || "number" == typeof a2 ? `${a2}` : `${(0, C.hash)(a2)}`;
  };
}
var E = A(({ baseURL: e3 = "", url: t3 = "", method: a2 = "get", params: r4, data: s3 }) => (e3 && (e3 = e3.replace(b, "")), t3 && (t3 = t3.replace(b, "")), a2 && (a2 = a2.toLowerCase()), { url: e3 + (e3 && t3 ? "/" : "") + t3, params: r4, method: a2, data: s3 }));
function O(e3, t3 = {}) {
  var a2, r4, s3, o2, i2, d2, c2, u2;
  const l2 = e3;
  if (l2.defaults.cache)
    throw new Error("setupCache() should be called only once");
  if (l2.storage = t3.storage || x(), !m(l2.storage))
    throw new Error("Use buildStorage() function");
  return l2.waiting = t3.waiting || {}, l2.generateKey = t3.generateKey || E, l2.headerInterpreter = t3.headerInterpreter || n2, l2.requestInterceptor = t3.requestInterceptor || h(l2), l2.responseInterceptor = t3.responseInterceptor || v(l2), l2.debug = t3.debug || function() {
  }, l2.defaults.cache = { update: t3.update || {}, ttl: null !== (a2 = t3.ttl) && void 0 !== a2 ? a2 : 3e5, methods: t3.methods || ["get", "head"], cachePredicate: t3.cachePredicate || { statusCheck: (e4) => [200, 203, 300, 301, 302, 404, 405, 410, 414, 501].includes(e4) }, etag: null === (r4 = t3.etag) || void 0 === r4 || r4, modifiedSince: null !== (s3 = t3.modifiedSince) && void 0 !== s3 ? s3 : false === t3.etag, interpretHeader: null === (o2 = t3.interpretHeader) || void 0 === o2 || o2, cacheTakeover: null === (i2 = t3.cacheTakeover) || void 0 === i2 || i2, staleIfError: null === (d2 = t3.staleIfError) || void 0 === d2 || d2, override: null !== (c2 = t3.override) && void 0 !== c2 && c2, hydrate: null !== (u2 = t3.hydrate) && void 0 !== u2 ? u2 : void 0 }, l2.requestInterceptor.apply(), l2.responseInterceptor.apply(), l2;
}
function T(e3, t3 = "axios-cache-") {
  return I({ find: (a2) => {
    const r4 = e3.getItem(t3 + a2);
    return r4 ? JSON.parse(r4) : void 0;
  }, remove: (a2) => {
    e3.removeItem(t3 + a2);
  }, set: (a2, r4) => {
    const s3 = () => e3.setItem(t3 + a2, JSON.stringify(r4));
    try {
      return s3();
    } catch (r5) {
      const o2 = Object.entries(e3).filter((e4) => e4[0].startsWith(t3)).map((e4) => [e4[0], JSON.parse(e4[1])]);
      for (const t4 of o2)
        "cached" === t4[1].state && S(t4[1]) && !y(t4[1]) && e3.removeItem(t4[0]);
      try {
        return s3();
      } catch (t4) {
        const a3 = o2.sort((e4, t5) => (e4[1].createdAt || 0) - (t5[1].createdAt || 0));
        for (const t5 of a3) {
          e3.removeItem(t5[0]);
          try {
            return s3();
          } catch (e4) {
          }
        }
      }
      e3.removeItem(t3 + a2);
    }
  } });
}
var j = s2.h4;
var N = s2.UN;
var k = s2.uu;
var M = s2.Kd;
var L = s2.ZF;
var D = s2.nv;
var J = s2.p;
var K = s2.E7;
var P = s2.NQ;
var X = s2.xK;
var R = s2.G6;
var U = s2.LN;
var q = s2.Bw;
var H = s2.Ad;
var $ = s2.$k;
var F = s2.v8;
var G = s2.Jk;
var W = s2.tI;
var B = s2.iS;
export {
  j as Header,
  N as buildKeyGenerator,
  k as buildMemoryStorage,
  M as buildStorage,
  L as buildWebStorage,
  D as canStale,
  J as createCacheResponse,
  K as createValidateStatus,
  P as defaultHeaderInterpreter,
  X as defaultKeyGenerator,
  R as defaultRequestInterceptor,
  U as defaultResponseInterceptor,
  q as isExpired,
  H as isMethodIn,
  $ as isStorage,
  F as setupCache,
  G as testCachePredicate,
  W as updateCache,
  B as updateStaleRequest
};
/*! Bundled license information:

axios-cache-interceptor/dist/index.mjs:
  (*!
   * Axios Cache Interceptor v1.3.2
   * (c) 2021-present Arthur Fiorette & Contributors
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=axios-cache-interceptor.js.map
