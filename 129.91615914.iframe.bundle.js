(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{"./node_modules/@arcgis/core/layers/support/arcgisLayers.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"fromUrl",(function(){return i}));var _request_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/request.js"),_core_Error_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/urlUtils.js"),_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js"),_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js");async function i(e){var r;const a=null==(r=e.properties)?void 0:r.customParameters,t=await async function d(e,t){let l=Object(_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__.f)(e);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.k)(l)&&(l=await f(e,t)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.k)(l))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:n,sublayer:o}=l;let u;const i={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(n){case"MapServer":u=null!=o?"FeatureLayer":async function S(e,r){return(await w(e,r)).tileInfo}(e,t).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=w(e,t).then((e=>{const r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!r||"LERC"!==r.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=w(l.url.path,t).then((e=>{if(e){if("Voxel"===(null==e?void 0:e.layerType))return"VoxelLayer";if(null!=e&&e.layers&&Array.isArray(e.layers)&&e.layers.length>0){var r;const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},t=null==(r=e.layers[0])?void 0:r.layerType;if(null!=a[t])return a[t]}}return"SceneLayer"}));break;default:u=i[n]}const y={FeatureLayer:!0,SceneLayer:!0},c="FeatureServer"===n,d={parsedUrl:l,Constructor:null,layerOrTableId:c?o:null,sublayerIds:null,tableIds:null},p=await u;if(y[p]&&null==o){const r=await v(e,n,t);if(c&&(d.sublayerInfos=r.layerInfos,d.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length)d.sublayerIds=r.layerIds,d.tableIds=r.tableIds;else if(c){var I,b;d.layerOrTableId=null!=(I=r.layerIds[0])?I:r.tableIds[0],d.sourceJSON=null!=(b=r.layerInfos[0])?b:r.tableInfos[0]}}return d.Constructor=await async function m(e){return(0,_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__.a[e])()}(p),d}(e.url,a),l={...e.properties,url:e.url};if(!t.sublayerIds)return null!=t.layerOrTableId&&(l.layerId=t.layerOrTableId,l.sourceJSON=t.sourceJSON),new t.Constructor(l);const n=new(0,(await __webpack_require__.e(43).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/GroupLayer.js"))).default)({title:t.parsedUrl.title});return function c(e,r,a){function l(e,l){const n={...a,layerId:e,sublayerTitleMode:"service-name"};return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.l)(l)&&(n.sourceJSON=l),new r.Constructor(n)}r.sublayerIds.forEach((a=>{const t=l(a,y(r.sublayerInfos,a));e.add(t)})),r.tableIds.forEach((a=>{const t=l(a,y(r.tableInfos,a));e.tables.add(t)}))}(n,t,l),n}function y(e,r){return e?e.find((e=>e.id===r)):null}async function f(e,r){var a;const s=await w(e,r);let u=null,i=null;const y=s.type;if("Feature Layer"===y||"Table"===y?(u="FeatureServer",i=s.id):"indexedVector"===y?u="VectorTileServer":s.hasOwnProperty("mapName")?u="MapServer":s.hasOwnProperty("bandCount")&&s.hasOwnProperty("pixelSizeX")?u="ImageServer":s.hasOwnProperty("maxRecordCount")&&s.hasOwnProperty("allowGeometryUpdates")?u="FeatureServer":s.hasOwnProperty("streamUrls")?u="StreamServer":p(s)?(u="SceneServer",i=s.id):s.hasOwnProperty("layers")&&p(null==(a=s.layers)?void 0:a[0])&&(u="SceneServer"),!u)return null;const c=null!=i?Object(_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__.g)(e):null;return{title:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.l)(c)&&s.name||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.k)(e),serverType:u,sublayer:i,url:{path:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.l)(c)?c.serviceUrl:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.K)(e).path}}}function p(e){return(null==e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function v(e,r,a){var t,l;let n,s=!1;if("FeatureServer"===r){const r=await async function b(e,r){var a,t;let l=await w(e,r);l=l||{},l.layers=(null==(a=l.layers)?void 0:a.filter(I))||[];const n={serviceJSON:l};if(l.currentVersion<10.5)return n;const s=await w(e+"/layers",r);return n.layersJSON={layers:(null==s||null==(t=s.layers)?void 0:t.filter(I))||[],tables:(null==s?void 0:s.tables)||[]},n}(e,a);s=!!r.layersJSON,n=r.layersJSON||r.serviceJSON}else n=await w(e,a);const o=null==(t=n)?void 0:t.layers,u=null==(l=n)?void 0:l.tables;return{layerIds:(null==o?void 0:o.map((e=>e.id)).reverse())||[],tableIds:(null==u?void 0:u.map((e=>e.id)).reverse())||[],layerInfos:s?o:[],tableInfos:s?u:[]}}function I(e){return!e.type||"Feature Layer"===e.type}async function w(r,a){return(await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__.default)(r,{responseType:"json",query:{f:"json",...a}})).data}},"./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return a}));const a={BingMapsLayer:async()=>(await __webpack_require__.e(192).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/BingMapsLayer.js"))).default,BuildingSceneLayer:async()=>(await __webpack_require__.e(67).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/BuildingSceneLayer.js"))).default,CSVLayer:async()=>(await __webpack_require__.e(117).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/CSVLayer.js"))).default,ElevationLayer:async()=>(await __webpack_require__.e(42).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/ElevationLayer.js"))).default,FeatureLayer:async()=>(await Promise.resolve().then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/FeatureLayer.js"))).default,GroupLayer:async()=>(await __webpack_require__.e(43).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/GroupLayer.js"))).default,GeoRSSLayer:async()=>(await __webpack_require__.e(193).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/GeoRSSLayer.js"))).default,GeoJSONLayer:async()=>(await __webpack_require__.e(118).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/GeoJSONLayer.js"))).default,ImageryLayer:async()=>(await Promise.all([__webpack_require__.e(17),__webpack_require__.e(26),__webpack_require__.e(194)]).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/ImageryLayer.js"))).default,ImageryTileLayer:async()=>(await Promise.all([__webpack_require__.e(17),__webpack_require__.e(26),__webpack_require__.e(77)]).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/ImageryTileLayer.js"))).default,IntegratedMeshLayer:async()=>(await __webpack_require__.e(83).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/IntegratedMeshLayer.js"))).default,KMLLayer:async()=>(await __webpack_require__.e(125).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/KMLLayer.js"))).default,MapImageLayer:async()=>(await Promise.resolve().then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/MapImageLayer.js"))).default,MapNotesLayer:async()=>(await __webpack_require__.e(126).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/MapNotesLayer.js"))).default,OGCFeatureLayer:async()=>(await __webpack_require__.e(98).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/OGCFeatureLayer.js"))).default,OpenStreetMapLayer:async()=>(await __webpack_require__.e(119).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/OpenStreetMapLayer.js"))).default,PointCloudLayer:async()=>(await __webpack_require__.e(78).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/PointCloudLayer.js"))).default,RouteLayer:async()=>(await __webpack_require__.e(195).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/RouteLayer.js"))).default,SceneLayer:async()=>(await __webpack_require__.e(89).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/SceneLayer.js"))).default,StreamLayer:async()=>(await __webpack_require__.e(196).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/StreamLayer.js"))).default,TileLayer:async()=>(await Promise.resolve().then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/TileLayer.js"))).default,UnknownLayer:async()=>(await __webpack_require__.e(197).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/UnknownLayer.js"))).default,UnsupportedLayer:async()=>(await __webpack_require__.e(198).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/UnsupportedLayer.js"))).default,VectorTileLayer:async()=>(await Promise.all([__webpack_require__.e(13),__webpack_require__.e(99)]).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/VectorTileLayer.js"))).default,VoxelLayer:async()=>(await __webpack_require__.e(120).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/VoxelLayer.js"))).default,WebTileLayer:async()=>(await __webpack_require__.e(128).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/WebTileLayer.js"))).default,WFSLayer:async()=>(await __webpack_require__.e(90).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/WFSLayer.js"))).default,WMSLayer:async()=>(await __webpack_require__.e(127).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/WMSLayer.js"))).default,WMTSLayer:async()=>(await __webpack_require__.e(109).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/WMTSLayer.js"))).default}}}]);