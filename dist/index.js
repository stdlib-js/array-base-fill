"use strict";var l=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(e){throw (i=0, e)}};};var u=l(function(j,c){
var s=require('@stdlib/array-base-arraylike2object/dist');function a(r,i){return typeof r[i]=="function"}function h(r,i,e,f){var o;for(o=e;o<f;o++)r[o]=i;return r}function v(r,i,e,f){var o,t,n;for(o=r.data,t=r.accessors[1],n=e;n<f;n++)t(o,n,i);return o}function g(r,i,e,f){var o;return a(r,"fill")?r.fill(i,e,f):(e<0&&(e+=r.length,e<0&&(e=0)),f<0?f+=r.length:f>r.length&&(f=r.length),o=s(r),o.accessorProtocol?v(o,i,e,f):h(r,i,e,f))}c.exports=g
});var p=u();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
