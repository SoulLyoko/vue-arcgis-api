(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return a}));const a={BingMapsLayer:async()=>(await __webpack_require__.e(192).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/BingMapsLayer.js"))).default,BuildingSceneLayer:async()=>(await __webpack_require__.e(67).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/BuildingSceneLayer.js"))).default,CSVLayer:async()=>(await __webpack_require__.e(117).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/CSVLayer.js"))).default,ElevationLayer:async()=>(await __webpack_require__.e(42).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/ElevationLayer.js"))).default,FeatureLayer:async()=>(await Promise.resolve().then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/FeatureLayer.js"))).default,GroupLayer:async()=>(await __webpack_require__.e(43).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/GroupLayer.js"))).default,GeoRSSLayer:async()=>(await __webpack_require__.e(193).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/GeoRSSLayer.js"))).default,GeoJSONLayer:async()=>(await __webpack_require__.e(118).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/GeoJSONLayer.js"))).default,ImageryLayer:async()=>(await Promise.all([__webpack_require__.e(17),__webpack_require__.e(26),__webpack_require__.e(194)]).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/ImageryLayer.js"))).default,ImageryTileLayer:async()=>(await Promise.all([__webpack_require__.e(17),__webpack_require__.e(26),__webpack_require__.e(77)]).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/ImageryTileLayer.js"))).default,IntegratedMeshLayer:async()=>(await __webpack_require__.e(83).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/IntegratedMeshLayer.js"))).default,KMLLayer:async()=>(await __webpack_require__.e(125).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/KMLLayer.js"))).default,MapImageLayer:async()=>(await Promise.resolve().then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/MapImageLayer.js"))).default,MapNotesLayer:async()=>(await __webpack_require__.e(126).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/MapNotesLayer.js"))).default,OGCFeatureLayer:async()=>(await __webpack_require__.e(98).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/OGCFeatureLayer.js"))).default,OpenStreetMapLayer:async()=>(await __webpack_require__.e(119).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/OpenStreetMapLayer.js"))).default,PointCloudLayer:async()=>(await __webpack_require__.e(78).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/PointCloudLayer.js"))).default,RouteLayer:async()=>(await __webpack_require__.e(195).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/RouteLayer.js"))).default,SceneLayer:async()=>(await __webpack_require__.e(89).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/SceneLayer.js"))).default,StreamLayer:async()=>(await __webpack_require__.e(196).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/StreamLayer.js"))).default,TileLayer:async()=>(await Promise.resolve().then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/TileLayer.js"))).default,UnknownLayer:async()=>(await __webpack_require__.e(197).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/UnknownLayer.js"))).default,UnsupportedLayer:async()=>(await __webpack_require__.e(198).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/UnsupportedLayer.js"))).default,VectorTileLayer:async()=>(await Promise.all([__webpack_require__.e(13),__webpack_require__.e(99)]).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/VectorTileLayer.js"))).default,VoxelLayer:async()=>(await __webpack_require__.e(120).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/VoxelLayer.js"))).default,WebTileLayer:async()=>(await __webpack_require__.e(128).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/WebTileLayer.js"))).default,WFSLayer:async()=>(await __webpack_require__.e(90).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/WFSLayer.js"))).default,WMSLayer:async()=>(await __webpack_require__.e(127).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/WMSLayer.js"))).default,WMTSLayer:async()=>(await __webpack_require__.e(109).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/WMTSLayer.js"))).default}},"./node_modules/@arcgis/core/portal/support/jsonContext.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return o}));var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/core/urlUtils.js"),_Portal_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/portal/Portal.js");function o(o){return{origin:"portal-item",url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.K)(o.itemUrl),portal:o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__.a.getDefault(),portalItem:o,readResourcePaths:[]}}},"./node_modules/@arcgis/core/portal/support/layersLoader.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"getFirstLayerOrTableId",(function(){return f})),__webpack_require__.d(__webpack_exports__,"getNumLayersAndTables",(function(){return h})),__webpack_require__.d(__webpack_exports__,"load",(function(){return o})),__webpack_require__.d(__webpack_exports__,"preprocessFSItemData",(function(){return m}));var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js"),_Portal_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/portal/Portal.js"),_jsonContext_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/portal/support/jsonContext.js"),_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/renderers/support/styleUtils.js"),_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@arcgis/core/support/requestPresets.js");async function o(e,t){const r=e.instance.portalItem;return r&&r.id?(await r.load(t),function s(t){const r=t.instance.portalItem;if(-1===t.supportedTypes.indexOf(r.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:t.supportedTypes.join(", ")})}(e),async function i(e,t){const r=e.instance,a=r.portalItem,{url:o,title:s}=a,i=Object(_jsonContext_js__WEBPACK_IMPORTED_MODULE_3__.a)(a);if("group"===r.type)return r.read({title:s},i),u(r,e);o&&r.read({url:o},i);const c=await y(e,t);return c&&r.read(c,i),r.resourceReferences={portalItem:a,paths:i.readResourcePaths},r.read({title:s},i),Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__.a)(r,i)}(e,t)):Promise.resolve()}function u(r,n){let l;const a=r.portalItem.type;switch(a){case"Feature Service":case"Feature Collection":l=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__.a.FeatureLayer;break;case"Stream Service":l=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__.a.StreamLayer;break;case"Scene Service":l=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__.a.SceneLayer;break;default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.a("portal:unsupported-item-type-as-group",`The item type '${a}' is not supported as a 'IGroupLayer'`)}let o;return l().then((e=>(o=e,y(n)))).then((async e=>"Feature Service"===a?(e=await m(e,r.portalItem.url),p(r,o,e)):h(e)>0?p(r,o,e):function c(e,t){return e.portalItem.url?Object(_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__.a)(e.portalItem.url).then((r=>{var n,l;function a(e){return{id:e.id,name:e.name}}r&&p(e,t,{layers:null==(n=r.layers)?void 0:n.map(a),tables:null==(l=r.tables)?void 0:l.map(a)})})):Promise.resolve()}(r,o)))}function p(e,t,r){let n=r.layers||[];const l=r.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&l.push(e)})),n=n.filter((e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),n.reverse().forEach((n=>{const l=d(e,t,r,n);e.add(l)})),l.reverse().forEach((n=>{const l=d(e,t,r,n);e.tables.add(l)}))}function d(e,t,n,l){const a=new t({portalItem:e.portalItem.clone(),layerId:l.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__.a.getDefault()};a.read(l,t);const o=n.showLegend;null!=o&&a.read({showLegend:o},t)}return a}function y(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",t).catch((()=>null)).then((async e=>{if(function I(e){return"stream"!==e.type&&"layerId"in e}(r)){let t,n=!0;return e&&h(e)>0&&(null==r.layerId&&(r.layerId=f(e)),t=function v(e,t){const r=e.layers;if(r)for(let l=0;l<r.length;l++)if(r[l].id===t)return r[l];const n=e.tables;if(n)for(let l=0;l<n.length;l++)if(n[l].id===t)return n[l];return null}(e,r.layerId),t&&(1===h(e)&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),n&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function m(e,t){var r,n;if(null==(null==(r=e)?void 0:r.layers)||null==(null==(n=e)?void 0:n.tables)){const r=await Object(_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__.a)(t);(e=e||{}).layers=e.layers||(null==r?void 0:r.layers),e.tables=e.tables||(null==r?void 0:r.tables)}return e}function f(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function h(e){var t,r,n,l;return(null!=(t=null==e||null==(r=e.layers)?void 0:r.length)?t:0)+(null!=(n=null==e||null==(l=e.tables)?void 0:l.length)?n:0)}},"./node_modules/@arcgis/core/support/requestPresets.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return n}));var _request_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/request.js");async function n(n){const{data:o}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__.default)(n,{responseType:"json",query:{f:"json"}});return o}}}]);