(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{"./node_modules/@arcgis/core/renderers/support/heatmapUtils.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return r})),__webpack_require__.d(__webpack_exports__,"b",(function(){return o})),__webpack_require__.d(__webpack_exports__,"c",(function(){return e}));var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/core/mathUtils.js");const e=(()=>{if(!("document"in globalThis))return()=>null;const t=document.createElement("canvas"),e=t.getContext("2d");return t.height=512,t.width=1,n=>{e.clearRect(0,0,1,t.height);const r=e.createLinearGradient(0,0,0,t.height);for(const{ratio:t,color:e}of n.colorStops)r.addColorStop(Math.max(t,.001),`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`);return e.fillStyle=r,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}})();function r(t,e,n,r){const{blurRadius:o,fieldOffset:a,field:f}=e,u=new Float64Array(n*r),l=i(o),h=Math.round(3*o);let s,d=Number.NEGATIVE_INFINITY;const m=function c(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):n=>+n.readAttribute(t)+e:t=>1}(f,a),g=new Set;for(const i of t){const t=i.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const o=t.readLegacyPointGeometry(),a=128;if(o.x<-a||o.x>=n+a||o.y<-a||o.y>r+a)continue;const i=+m(t),f=Math.round(o.x)-h,c=Math.round(o.y)-h,y=Math.max(0,f),M=Math.max(0,c),x=Math.min(r,Math.round(o.y)+h),b=Math.min(n,Math.round(o.x)+h);for(let t=M;t<x;t++){const e=l[t-c];for(let r=y;r<b;r++){const o=l[r-f];s=u[t*n+r]+=e*o*i,s>d&&(d=s)}}}}return{matrix:u.buffer,max:d}}function o(t,e,n,r,o,i){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);const f=t.getImageData(0,0,e,e);n&&r&&f.data.set(new Uint8ClampedArray(function a(e,n,r,o,a){const i=new Uint32Array(e*e),f="buffer"in n?n:new Float64Array(n),c="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),u=c.length/(a-o);for(let l=0;l<f.length;l++){const e=f[l],n=Math.floor((e-o)*u);i[l]=c[Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.f)(n,0,c.length-1)]}return i.buffer}(e,n,r,o,i))),t.putImageData(f,0,0)}function i(t){const e=Math.round(3*t),n=2*t*t,r=new Float64Array(2*e+1);for(let o=0;o<=r.length;o++)r[o]=Math.exp(-((o-e)**2)/n)/Math.sqrt(2*Math.PI)*(t/2);return r}},"./node_modules/@arcgis/core/views/2d/layers/features/processors/BaseProcessor.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return p}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/HandleOwner.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js"));let s=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__.a{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.b)({readOnly:!0})],s.prototype,"supportsTileUpdates",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.b)({constructOnly:!0})],s.prototype,"remoteClient",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.b)({constructOnly:!0})],s.prototype,"service",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.b)()],s.prototype,"spatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.b)({constructOnly:!0})],s.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.b)({constructOnly:!0})],s.prototype,"tileStore",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.a)("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s},"./node_modules/@arcgis/core/views/2d/layers/features/processors/HeatmapProcessor.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return h}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/maybe.js")),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/@arcgis/core/core/Logger.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/set.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js")),_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/diffUtils.js"),_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@arcgis/core/renderers/support/heatmapUtils.js"),_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js"),_BaseProcessor_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@arcgis/core/views/2d/layers/features/processors/BaseProcessor.js"),_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@arcgis/core/views/2d/layers/features/support/tileUtils.js");class p{constructor(e,t){this.offset=e,this.extent=t}}let l=class extends _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_11__.a{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const s=t.schema.processors[0];"heatmap"===s.type&&Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_8__.a)(this._schema,s)&&(e.mesh=!0,this._schema=s)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,r,i){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const a=this._tileKeyToFeatureSets.get(e.key.id);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.l)(r.addOrUpdate)&&r.addOrUpdate.hasFeatures&&a.set(r.addOrUpdate.instance,r),r.end){const t=[],r=function c(e){const t=e.key,s=new Map,r=256,i=_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_10__.L,o=e.tileInfoView.tileInfo.isWrappable;return s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__.a)(t,-1,-1,o).id,new p([-i,-i],[i-r,i-r,i,i])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__.a)(t,0,-1,o).id,new p([0,-i],[0,i-r,i,i])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__.a)(t,1,-1,o).id,new p([i,-i],[0,i-r,r,i])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__.a)(t,-1,0,o).id,new p([-i,0],[i-r,0,i,i])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__.a)(t,1,0,o).id,new p([i,0],[0,0,r,i])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__.a)(t,-1,1,o).id,new p([-i,i],[i-r,0,i,r])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__.a)(t,0,1,o).id,new p([0,i],[0,0,i,r])),s.set(Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_12__.a)(t,1,1,o).id,new p([i,i],[0,0,r,r])),s}(e);this._tileKeyToFeatureSets.forEach(((i,o)=>{if(o===e.key.id)i.forEach((e=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.b)(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(o)){const e=r.get(o),[a,n]=e.offset;i.forEach((e=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.b)(e.addOrUpdate,(e=>{const s=e.transform(a,n,1,1);t.push(s)}))))}}));const a=Object(_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_9__.a)(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:a},d=[a.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...i,transferList:d})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.a)("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const h=l},"./node_modules/@arcgis/core/views/2d/layers/features/support/tileUtils.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return l}));__webpack_require__("./node_modules/@arcgis/core/views/2d/layers/features/support/Tile.js");function l(o,e,l,n){const r=o.clone(),t=1<<r.level,i=r.col+e,c=r.row+l;return n&&i<0?(r.col=i+t,r.world-=1):i>=t?(r.col=i-t,r.world+=1):r.col=i,r.row=c,r}}}]);