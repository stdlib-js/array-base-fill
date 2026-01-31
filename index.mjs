// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";function t(t,n,e,o){var a;return function(r,t){return"function"==typeof r[t]}(t,"fill")?t.fill(n,e,o):(e<0&&(e+=t.length)<0&&(e=0),o<0?o+=t.length:o>t.length&&(o=t.length),(a=r(t)).accessorProtocol?function(r,t,n,e){var o,a,l;for(o=r.data,a=r.accessors[1],l=n;l<e;l++)a(o,l,t);return o}(a,n,e,o):function(r,t,n,e){var o;for(o=n;o<e;o++)r[o]=t;return r}(t,n,e,o))}export{t as default};
//# sourceMappingURL=index.mjs.map
