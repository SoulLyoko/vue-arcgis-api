(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{"./node_modules/@arcgis/core/arcade/functions/featuresetstats.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"registerFunctions",(function(){return m}));var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/languageUtils.js"),_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/arcade/functions/fieldStats.js"),_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/promiseUtils.js"),_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/sql/WhereClause.js");function l(n,e,c,s,l,m){if(1===s.length){if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.w)(s[0]))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.u)(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__.a)(n,s[0],Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.e)(s[1],-1)));if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.x)(s[0]))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.u)(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__.a)(n,s[0].toArray(),Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.e)(s[1],-1)))}else if(2===s.length){if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.w)(s[0]))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.u)(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__.a)(n,s[0],Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.e)(s[1],-1)));if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.x)(s[0]))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.u)(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__.a)(n,s[0].toArray(),Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.e)(s[1],-1)));if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.K)(s[0]))return s[0].load().then((t=>d(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__.WhereClause.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.e)(s[2],1e3),e.abortSignal)))))}else if(3===s.length&&Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.K)(s[0]))return s[0].load().then((t=>d(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__.WhereClause.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.e)(s[2],1e3),e.abortSignal)))));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.u)(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__.a)(n,s,-1))}function d(n,t,r){try{const e=n.getVariables();if(e.length>0){const u=[];for(let n=0;n<e.length;n++){const i={name:e[n]};u.push(t.evaluateIdentifier(r,i))}return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(u).then((t=>{const r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return n.parameters=r,n}))}return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.u)(n)}catch(e){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(e)}}function m(i){"async"===i.mode&&(i.functions.stdev=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("stdev",t,0,e,n,i)}))},i.functions.variance=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("variance",t,0,e,n,i)}))},i.functions.average=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,0,e,n,i)}))},i.functions.mean=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,0,e,n,i)}))},i.functions.sum=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("sum",t,0,e,n,i)}))},i.functions.min=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("min",t,0,e,n,i)}))},i.functions.max=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("max",t,0,e,n,i)}))},i.functions.count=function(a,o){return i.standardFunctionAsync(a,o,(function(i,a,o){if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.L)(o,1,1),Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.K)(o[0]))return o[0].count(i.abortSignal);if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.w)(o[0])||Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.B)(o[0]))return o[0].length;if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.x)(o[0]))return o[0].length();throw new Error("Invalid Parameters for Count")}))})}}}]);