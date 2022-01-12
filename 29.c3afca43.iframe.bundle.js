(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return F})),__webpack_require__.d(__webpack_exports__,"b",(function(){return w})),__webpack_require__.d(__webpack_exports__,"c",(function(){return L})),__webpack_require__.d(__webpack_exports__,"d",(function(){return T})),__webpack_require__.d(__webpack_exports__,"e",(function(){return P})),__webpack_require__.d(__webpack_exports__,"f",(function(){return G})),__webpack_require__.d(__webpack_exports__,"g",(function(){return d})),__webpack_require__.d(__webpack_exports__,"h",(function(){return j})),__webpack_require__.d(__webpack_exports__,"i",(function(){return v})),__webpack_require__.d(__webpack_exports__,"j",(function(){return R})),__webpack_require__.d(__webpack_exports__,"k",(function(){return x})),__webpack_require__.d(__webpack_exports__,"l",(function(){return q})),__webpack_require__.d(__webpack_exports__,"m",(function(){return A}));__webpack_require__("./node_modules/@arcgis/core/geometry.js");var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/unitUtils.js"),_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/geometry/projection.js"),_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@arcgis/core/geometry/Extent.js"),_geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@arcgis/core/geometry/Point.js");const f=5e-4;function x(e,n,t){return!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__.b)(e,n,t)}function m(n,t,o){const i=x(n,t,o);if(i&&!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__.h)())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.a("rasterprojectionhelper-project","projection engine is not loaded");return i}const p=function(e,n,t){const o=(e[0]+e[4]+e[4*n.cols]+e[4*n.cols+4])/4,i=(e[1]+e[5]+e[4*n.rows+1]+e[4*n.rows+5])/4,a=(e[4*n.cols]-e[0]+e[4*n.cols+4]-e[4])/t[0]*.5,r=(e[4*n.cols+1]-e[1]+e[4*n.cols+5]-e[5])/t[1]*.5;return[0===a||isNaN(a)?0:Math.abs(o-e[2*n.rows+2])/Math.abs(a),0===r||isNaN(r)?0:Math.abs(i-e[2*n.rows+3])/Math.abs(r)]},h={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244};async function d(){if(Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__.h)())return null;await Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__.i)()}function w(e,n,t){return m(e.spatialReference,n)?t?Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__.f)(n,e.spatialReference,e):Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__.f)(e.spatialReference,n,e):null}function R(e,t,o,i=null){if(e.spatialReference.equals(t))return e;m(e.spatialReference,t,i);const a=o.center,r=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__.a({xmin:a.x-e.x/2,xmax:a.x+e.x/2,ymin:a.y-e.y/2,ymax:a.y+e.y/2,spatialReference:e.spatialReference}),s=Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__.m)(r,t,i);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.k)(s)?null:{x:s.xmax-s.xmin,y:s.ymax-s.ymin}}function b(e,n=.01){return Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__.f)(e)?n/Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__.f)(e):0}function v(e,n,t=null,o=!0){const i=e.spatialReference;if(i.equals(n))return e;m(i,n,t);const a=Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__.m)(e,n,t);if(o&&n.isGeographic){const[n,t]=C(i,!0),o=b(i);o&&null!=n&&null!=t&&(Math.abs(e.x-n)<o&&Math.abs(180-a.x)<f?a.x-=360:Math.abs(e.x-t)<o&&Math.abs(180+a.x)<f&&(a.x+=360))}return a}function z(e){const n=P(e[0].spatialReference);if(e.length<2||!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.l)(n))return e[0];let{xmin:o,xmax:i,ymin:a,ymax:r}=e[0];for(let t=1;t<e.length;t++){const o=e[t];i=o.xmax+n*t,a=Math.min(a,o.ymin),r=Math.max(r,o.ymax)}return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__.a({xmin:o,xmax:i,ymin:a,ymax:r,spatialReference:e[0].spatialReference})}function j(e,n,o=null,i=!0){if(e.spatialReference.equals(n))return e;const a=G(e),r=P(e.spatialReference,!0);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.l)(r)&&0!==a?z(e.clone().normalize().map((e=>S(e,n,o,i)))):S(e,n,o,i)}function S(e,n,t=null,o=!0){const i=e.spatialReference;if(i.equals(n))return e;m(i,n,t);const a=Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__.m)(e,n,t);let[r,s]=C(i,!0);if(a&&o&&i.isWebMercator&&n.isGeographic&&null!=r&&null!=s){const o=.001,l=1e3;if(Math.abs(e.xmin-r)<o&&Math.abs(s-e.xmax)>l&&Math.abs(180-a.xmax)<f){a.xmin=-180;const o=[];o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__.a(e.xmax,e.ymin,i)),o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__.a(e.xmax,(e.ymin+e.ymax)/2,i)),o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__.a(e.xmax,e.ymax,i));const r=o.map((e=>v(e,n,t))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));a.xmax=Math.max.apply(null,r)}if(Math.abs(e.xmax-s)<o&&Math.abs(r-e.xmin)>l&&Math.abs(180+a.xmin)<f){a.xmax=180;const o=[];o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__.a(e.xmin,e.ymin,i)),o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__.a(e.xmin,(e.ymin+e.ymax)/2,i)),o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__.a(e.xmin,e.ymax,i));const r=o.map((e=>v(e,n,t))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));a.xmin=Math.min.apply(null,r)}}[r,s]=C(n,!0);const c=b(n);return c&&null!=r&&null!=s&&a&&(Math.abs(a.xmin-r)<c&&(a.xmin=r),Math.abs(a.xmax-s)<c&&(a.xmax=s)),a}function P(e,n=!1){const t=n?20037508.342787:20037508.342788905;return e.isWebMercator?2*t:e.wkid&&e.isGeographic?360:2*h[e.wkid]||null}function C(e,n=!1){const o=[],i=P(e,n);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.l)(i)&&(o.push(-i/2),o.push(i/2)),o}function W(e,n,t,o){let i=(e-n)/t;return i-Math.floor(i)!=0?i=Math.floor(i):o&&(i-=1),i}function G(e,n=!1){const o=P(e.spatialReference);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.l)(o))return 0;const i=n?0:-o/2;return W(e.xmax,i,o,!0)-W(e.xmin,i,o,!1)}function T(e){const n=e.storageInfo.origin.x,o=P(e.spatialReference,!0);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.l)(o))return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const i=o/2,{nativePixelSize:a,storageInfo:r,extent:s}=e,{maximumPyramidLevel:l,blockWidth:c,pyramidScalingFactor:u}=r;let f=a.x;const x=[],m=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.l)(e.transform)&&"gcs-shift"===e.transform.type,p=n+(m?0:i),h=m?o-n:i-n;for(let t=0;t<=l;t++){const e=(s.xmax-n)/f/c,t=e-Math.floor(e)==0?e:Math.ceil(e),o=h/f/c,i=o-Math.floor(o)==0?o:Math.ceil(o),a=Math.floor(p/f/c),r=Math.round(p/f)%c,l=(c-Math.round(h/f)%c)%c;x.push({resolutionX:f,blockWidth:c,datsetColumnCount:t,worldColumnCountFromOrigin:i,leftMargin:r,rightPadding:l,originColumnOffset:a}),f*=u}return{originX:n,halfWorldWidth:i,pyramidsInfo:x,hasGCSSShiftTransform:m}}function L(e){const n=e.isAdaptive&&null==e.spacing,t=e.spacing||[32,32];let o=k(e),i={cols:o.size[0]+1,rows:o.size[1]+1},a=p(o.offsets,i,t);const r=(a[0]+a[1])/2,s=o.outofBoundPointCount>0&&o.outofBoundPointCount<o.offsets.length/2;return n&&(s||r>4)&&(o=k({...e,spacing:[4,4]}),i={cols:o.size[0]+1,rows:o.size[1]+1},a=p(o.offsets,i,t)),o.error=a,o.coefficients=function I(e,n,t){const{cols:o,rows:i}=n,a=new Float32Array((o-1)*(i-1)*2*6),r=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),s=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let l=0;l<o-1;l++){for(let n=0;n<i-1;n++){let t=l*i*2+2*n;const c=e[t],u=e[t+1],f=e[t+2],x=e[t+3];t+=2*i;const m=e[t],p=e[t+1],h=e[t+2],y=e[t+3];let M=0,g=12*(n*(o-1)+l);for(let e=0;e<3;e++)a[g++]=r[M++]*c+r[M++]*f+r[M++]*h;M=0;for(let e=0;e<3;e++)a[g++]=r[M++]*u+r[M++]*x+r[M++]*y;M=0;for(let e=0;e<3;e++)a[g++]=s[M++]*c+s[M++]*m+s[M++]*h;M=0;for(let e=0;e<3;e++)a[g++]=s[M++]*u+s[M++]*p+s[M++]*y}if(t)for(let e=0;e<a.length;e++)isNaN(a[e])&&(a[e]=-1)}return a}(o.offsets,i,s),o}function k(e){const{projectedExtent:n,srcBufferExtent:o,pixelSize:i,datumTransformation:a,rasterTransform:r}=e,s=n.spatialReference,l=o.spatialReference;m(s,l);const{xmin:c,ymin:f,xmax:x,ymax:p}=n,h=P(l),M=e.hasWrapAround||"gcs-shift"===(null==r?void 0:r.type),g=e.spacing||[32,32],d={x:g[0]*i.x,y:g[1]*i.y},w_cols=Math.ceil((x-c)/d.x-.1/g[0])+1,w_rows=Math.ceil((p-f)/d.y-.1/g[1])+1,R=d.x,b=d.y,v=[];let z,j=0;const S=[];for(let t=0;t<w_cols;t++)for(let e=0;e<w_rows;e++)S.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__.a({x:c+R*t,y:p-b*e,spatialReference:s}));const C=function N(e,n,t=null){const o=e[0].spatialReference;return o.equals(n)?e:(m(o,n,t),Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__.m)(e,n,t))}(S,l,a);for(let u=0;u<w_cols;u++){const e=[];for(let n=0;n<w_rows;n++){let i=C[u*w_rows+n];r&&(i=r.inverseTransform(i)),e.push(i),u>0&&M&&i&&z[n]&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.l)(h)&&i.x<z[n].x&&(i.x+=h),i?(v.push((i.x-o.xmin)/(o.xmax-o.xmin)),v.push((o.ymax-i.y)/(o.ymax-o.ymin))):(v.push(NaN),v.push(NaN),j++)}z=e}return{offsets:v,error:null,coefficients:null,outofBoundPointCount:j,spacing:g,size:[w_cols-1,w_rows-1]}}function q(e){const n=e.clone().normalize();return 1===n.length?n[0]:z(n)}function A(e,n,o){const{storageInfo:i,pixelSize:a}=n;let r,s=!1;const{pyramidResolutions:l}=i;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.l)(l)&&l.length){const t=(e.x+e.y)/2,i=l[l.length-1],c=(i.x+i.y)/2,f=(a.x+a.y)/2;if(t<=f)r=0;else if(t>=c)r=l.length,s=t/c>8;else{let e,n=f;for(let i=1;i<=l.length;i++){if(e=(l[i-1].x+l[i-1].y)/2,t<=e){t===e?r=i:"down"===o?(r=i-1,s=t/n>8):r="up"===o||t-n>e-t||t/n>2?i:i-1;break}n=e}}const x=0===r?a:l[r-1];return{pyramidLevel:r,pyramidResolution:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__.a({x:x.x,y:x.y,spatialReference:n.spatialReference}),excessiveReading:s}}const c=Math.log(e.x/a.x)/Math.LN2,f=Math.log(e.y/a.y)/Math.LN2,x=n.storageInfo.maximumPyramidLevel||0;r="down"===o?Math.floor(Math.min(c,f)):"up"===o?Math.ceil(Math.max(c,f)):Math.round((c+f)/2),r<0?r=0:r>x&&(s=r>x+3,r=x);const m=2**r;return{pyramidLevel:r,pyramidResolution:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__.a({x:m*n.nativePixelSize.x,y:m*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:s}}function F(e,n,t=512,i=!0){const{extent:a,spatialReference:r,pixelSize:s}=e,l=R(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__.a({x:s.x,y:s.y,spatialReference:r}),n,a);if(null==l)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const c=(l.x+l.y)/2,f=Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__.f)(n),x=c*f*96*39.37,m=n.isGeographic?256/t*295828763.7958547:256/t*591657527.591555;let p="vector-magdir"===e.dataType||"vector-uv"===e.dataType;const h=j(a,n);p||i&&(n.isGeographic||n.isWebMercator)&&(p=h.xmin*h.xmax<0);let y,M=x;const g=1.001;if(p){M=m;const e=n.isGeographic?1341104507446289e-21:.29858214164761665,t=e*(96*f*39.37),o=n.isGeographic?4326:3857;y=R(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__.a({x:e,y:e,spatialReference:{wkid:o}}),r,h),y.x*=M/t,y.y*=M/t}else{y={x:s.x,y:s.y};const n=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2);let t=0;for(;M<m*(g/2)&&t<n;)t++,M*=2,y.x*=2,y.y*=2;Math.max(M,m)/Math.min(M,m)<=g&&(M=m)}const d=[M],w=[{x:y.x,y:y.y}],v=Math.min(70.5310735,x)/g;for(;M>=v;)M/=2,y.x/=2,y.y/=2,d.push(M),w.push({x:y.x,y:y.y});return{projectedPixelSize:l,scales:d,srcResolutions:w,isCustomTilingScheme:!p}}},"./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js":function(module,__webpack_exports__,__webpack_require__){"use strict";function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function n(t,n){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function e(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++)}return e/n}(t.stops):n}function r(t,e){if(!e)return t;const r=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:r,minSize:s}=e;return(n(r,t)+n(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let n=0;n<o;n++)s+=r[n];const f=Math.floor(s/o);return Math.max(f,t)}function s(e){const n=e&&e.renderer,s="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!n)return s;const o="visualVariables"in n?r(s,n.visualVariables):s;if("simple"===n.type)return t(o,n.symbol);if("unique-value"===n.type){let e=o;return n.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol)})),e}if("class-breaks"===n.type){let e=o;return n.classBreakInfos.forEach((n=>{e=t(e,n.symbol)})),e}return n.type,o}__webpack_require__.d(__webpack_exports__,"a",(function(){return s}))},"./node_modules/@arcgis/core/views/3d/layers/ImageryTileLayerView3D.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return g}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/watchUtils.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js")),_LayerView3D_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@arcgis/core/views/3d/layers/LayerView3D.js"),_TiledLayerView3D_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@arcgis/core/views/3d/layers/TiledLayerView3D.js"),_terrain_RasterTile_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@arcgis/core/views/3d/terrain/RasterTile.js"),_layers_ImageryTileLayerView_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@arcgis/core/views/layers/ImageryTileLayerView.js"),_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@arcgis/core/views/layers/LayerView.js"),_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js"),_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@arcgis/core/views/support/drapedUtils.js"),_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@arcgis/core/views/webgl/capabilities.js");let c=class extends(Object(_layers_ImageryTileLayerView_js__WEBPACK_IMPORTED_MODULE_11__.a)(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_13__.a)(Object(_TiledLayerView3D_js__WEBPACK_IMPORTED_MODULE_9__.a)(Object(_LayerView3D_js__WEBPACK_IMPORTED_MODULE_8__.a)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__.a))))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage();const e=this.updateFullExtent();this.addResolvingPromise(e);const r=Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__.m)(this.view,"basemapTerrain.tilingSchemeLocked").then((()=>{const e=this.view.basemapTerrain.tilingScheme,{tileInfo:r}=this.layer,t=["png","png24","png32","jpg","mixed"].indexOf(r.format)>-1&&e.compatibleWith(r);this.isAlignedMapTile=t;const i=t?r:e.toTileInfo();this._set("tileInfo",i),this.updatingHandles.add(this,"layer.renderer",(()=>this.refresh())),this.updatingHandles.add(this,"layer.interpolation",(()=>this.refresh())),this.updatingHandles.add(this,"layer.bandIds",(()=>this.refresh())),this.updatingHandles.add(this,"layer.multidimensionalDefinition",(()=>this.refresh()))}));this.addResolvingPromise(r)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const e=document.createElement("canvas"),r=e.getContext("2d"),[t,i]=this.tileInfo.size;return e.width=t,e.height=i,r.clearRect(0,0,t,i),r.getImageData(0,0,t,i)}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){const e=this.tileInfo.lods,r=this.layer.tileInfo.lods,t=e[0].scale,i=r[r.length-1].scale;return this.levelRangeFromScaleRange(t,i)}async fetchTile(e,i,s,a){const l=this.tileInfo,o=this._canSymbolizeInWebGL(),m={tileInfo:l,requestRawData:o,signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.u)(a.signal),requestAsImageElement:this.isAlignedMapTile},d=await this.layer.fetchTile(e,i,s,m);if(d instanceof HTMLImageElement)return d;let h=d&&d.pixelBlock;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.k)(h))return this._blankTile;if(!o&&(h=await this.layer.applyRenderer(d),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.k)(h)))return this._blankTile;const p=new _terrain_RasterTile_js__WEBPACK_IMPORTED_MODULE_10__.a([e,i,s],h,l.size[0],l.size[1]);return o?(p.symbolizerRenderer=this.layer.symbolizer.rendererJSON,p.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e)),p.transformGrid=d.transformGrid):p.isRendereredSource=!0,p.interpolation=this.layer.interpolation,p.bandIds=this.layer.bandIds,p}_getSymbolizerOptions(e){const r=this.tileInfo.lodAt(e).resolution;return{pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:r,y:r},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(e){this._canSymbolizeInWebGL()&&JSON.stringify(e.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(e.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e.lij[0])))}createFetchPopupFeaturesQueryGeometry(e,r){return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_14__.a)(e,r,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){return Object(_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_15__.a)().supportsTextureFloat&&this.layer.symbolizer.canRenderInWebGL}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.b)({readOnly:!0})],c.prototype,"_blankTile",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.b)({readOnly:!0})],c.prototype,"imageFormatIsOpaque",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.b)({readOnly:!0})],c.prototype,"hasMixedImageFormats",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.b)({readOnly:!0})],c.prototype,"dataLevelRange",null),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.a)("esri.views.3d.layers.ImageryTileLayerView3D")],c);const g=c},"./node_modules/@arcgis/core/views/layers/ImageryTileLayerView.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return m}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_Graphic_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/Graphic.js"),_core_Error_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js")),_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@arcgis/core/layers/support/commonProperties.js"),_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js"),_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@arcgis/core/views/layers/support/popupUtils.js");const m=m=>{let f=class extends m{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.a("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:s}));const{popupEnabled:a}=s,n=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_11__.a)(s,o);if(!a||!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.l)(n))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.a("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:n});const l=[],{value:u,magdirValue:m}=await s.identify(e,{timeExtent:this.timeExtent});let f="";if(u&&u.length){var c,h;f="imagery-tile"===s.type&&s.hasStandardTime()&&null!=u[0]?u.map((e=>s.getStandardTimeValue(e))).join(", "):u.join(", ");const e={ObjectId:0},r="Raster.ServicePixelValue";e[r]=this._formatAttributeValue(f,r);const i=null==(c=s.rasterInfo)||null==(h=c.attributeTable)?void 0:h.features;if(i&&i.length>0){const t=i.filter((e=>{const t=e.attributes.value||e.attributes.Value||e.attributes.VALUE;return String(t)===f}));if(t.length>0){const r=t[0];if(r)for(const t in r.attributes)if(r.attributes.hasOwnProperty(t)){const i=this._rasterFieldPrefix+t;e[i]=this._formatAttributeValue(r.attributes[t],i)}}}const o=s.rasterInfo.dataType;"vector-magdir"!==o&&"vector-uv"!==o||(e["Raster.Magnitude"]=null==m?void 0:m[0],e["Raster.Direction"]=null==m?void 0:m[1]);const a=new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__.a(this.fullExtent.clone(),null,e);a.layer=s,a.sourceLayer=a.layer,l.push(a)}return l}updateFullExtent(){const e=this.layer.tileInfo;if(!e||!e.spatialReference)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.a("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.k)(this.layer.fullExtent))return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.a("layerview:extent-missing","The layer doesn't provide a full extent.",{layer:this.layer}));const t=Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_10__.b)(this.layer.fullExtent,this.view.spatialReference,!1),i=Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_10__.h)(this.layer.fullExtent,this.view.spatialReference,t);return null==i?Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.a("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})):(this._set("fullExtent",i),this.datumTransformation||(this.datumTransformation=Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_10__.b)(this.layer.fullExtent,this.view.spatialReference,!0)),Promise.resolve())}_formatAttributeValue(e,t){if("string"==typeof e){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(r,t),o=i&&i.format;if(o){let t,r;return e.trim().indexOf(",")>-1?(t=",",r=t+" ",this._formatDelimitedString(e,t,r,o)):e.trim().indexOf(" ")>-1?(t=r=" ",this._formatDelimitedString(e,t,r,o)):this._formatNumberFromString(e,o)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const r=t.toLowerCase();let i;return e.some((e=>!(!e.fieldName||e.fieldName.toLowerCase()!==r&&e.fieldName.toLowerCase()!==r.replace(/ /g,"_")||(i=e,0)))),i}_formatDelimitedString(e,t,r,i){return e&&t&&r&&i?e.trim().split(t).map((e=>this._formatNumberFromString(e,i))).join(r):e}_formatNumberFromString(e,t){if(!e||!t)return e;const r=Number(e);return isNaN(r)?e:t.format(r)}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)()],f.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__.a)],f.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)()],f.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)()],f.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)()],f.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)({readOnly:!0})],f.prototype,"hasTilingEffects",null),f=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.a)("esri.views.layers.ImageryTileLayerView")],f),f}},"./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return i}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/Logger.js"),_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/promiseUtils.js"),_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/watchUtils.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js"));const i=i=>{let c=class extends i{initialize(){this.handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"layer","refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.m)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.a.getLogger(this.declaredClass).error(r)}))})),"RefreshableLayerView")}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)()],c.prototype,"layer",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.a)("esri.layers.mixins.RefreshableLayerView")],c),c}},"./node_modules/@arcgis/core/views/layers/support/popupUtils.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return d})),__webpack_require__.d(__webpack_exports__,"b",(function(){return t}));var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/layers/support/fieldUtils.js");async function t(t,d=t.popupTemplate){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.l)(d))return[];const i=await d.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:n}=d,{objectIdField:s,typeIdField:a,globalIdField:o,relationships:u}=t;if(i.includes("*"))return["*"];const f=n?await Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.n)(t):[],r=Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.j)(t.fieldsIndex,[...i,...f]);return a&&r.push(a),r&&s&&t.fieldsIndex.has(s)&&-1===r.indexOf(s)&&r.push(s),r&&o&&t.fieldsIndex.has(o)&&-1===r.indexOf(o)&&r.push(o),u&&u.forEach((e=>{const{keyField:p}=e;r&&p&&t.fieldsIndex.has(p)&&-1===r.indexOf(p)&&r.push(p)})),r}function d(p,l){return p.popupTemplate?p.popupTemplate:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.l)(l)&&l.defaultPopupTemplateEnabled&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.l)(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}},"./node_modules/@arcgis/core/views/support/drapedUtils.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return a}));__webpack_require__("./node_modules/@arcgis/core/geometry.js");var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/unitUtils.js"),_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js"),__webpack_require__("./node_modules/@arcgis/core/geometry/Extent.js"));function a(t,n,a,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__.a){let s;if("2d"===a.type)s=n*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.l)(o)&&!o.equals(a.spatialReference)?Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__.f)(o)/Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__.f)(a.spatialReference):n*i}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__.a}}]);