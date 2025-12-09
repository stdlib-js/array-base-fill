"use strict";var l=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var u=l(function(j,c){
var s=require('@stdlib/array-base-arraylike2object/dist');function a(r,i){return typeof r[i]=="function"}function h(r,i,o,f){var e;for(e=o;e<f;e++)r[e]=i;return r}function v(r,i,o,f){var e,t,n;for(e=r.data,t=r.accessors[1],n=o;n<f;n++)t(e,n,i);return e}function g(r,i,o,f){var e;return a(r,"fill")?r.fill(i,o,f):(o<0&&(o+=r.length,o<0&&(o=0)),f<0?f+=r.length:f>r.length&&(f=r.length),e=s(r),e.accessorProtocol?v(e,i,o,f):h(r,i,o,f))}c.exports=g
});var p=u();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
