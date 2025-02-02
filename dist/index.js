"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=f(function(j,a){
var u=require('@stdlib/array-base-arraylike2object/dist');function l(r,e){return typeof r[e]=="function"}function v(r,e,i,o){var t;for(t=i;t<o;t++)r[t]=e;return r}function d(r,e,i,o){var t,c,n;for(t=r.data,c=r.accessors[1],n=i;n<o;n++)c(t,n,e);return t}function p(r,e,i,o){var t;return l(r,"fill")?r.fill(e,i,o):(t=u(r),t.accessorProtocol?d(t,e,i,o):v(r,e,i,o))}a.exports=p
});var b=s();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
