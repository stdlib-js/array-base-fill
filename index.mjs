// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";function t(t,n,o,e){var a;return function(r,t){return"function"==typeof r[t]}(t,"fill")?t.fill(n,o,e):(a=r(t)).accessorProtocol?function(r,t,n,o){var e,a,s;for(e=r.data,a=r.accessors[1],s=n;s<o;s++)a(e,s,t);return e}(a,n,o,e):function(r,t,n,o){var e;for(e=n;e<o;e++)r[e]=t;return r}(t,n,o,e)}export{t as default};
//# sourceMappingURL=index.mjs.map
