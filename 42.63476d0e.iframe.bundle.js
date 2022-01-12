(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"./node_modules/@arcgis/core/layers/ElevationLayer.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return x}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_request_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/request.js"),_core_Error_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/Logger.js"),_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js"),_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@arcgis/core/core/promiseUtils.js"),_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@arcgis/core/core/urlUtils.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js")),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js"),_geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@arcgis/core/geometry/HeightModelInfo.js"),_Layer_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@arcgis/core/layers/Layer.js"),_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js"),_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@arcgis/core/layers/mixins/ArcGISService.js"),_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js"),_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@arcgis/core/layers/mixins/PortalLayer.js"),_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/@arcgis/core/layers/support/commonProperties.js"),_support_LercDecoder_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/@arcgis/core/layers/support/LercDecoder.js");const w=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.a.getLogger("esri.layers.ElevationLayer");let T=class extends(Object(_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_16__.a)(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_17__.a)(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_18__.a)(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_19__.a)(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__.a)(_Layer_js__WEBPACK_IMPORTED_MODULE_15__.a)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=Object(_support_LercDecoder_js__WEBPACK_IMPORTED_MODULE_21__.a)()}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.s)(this._lercDecoder)}set minScale(e){this.constructed&&w.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(e){this.constructed&&w.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.v).then((()=>this._fetchImageService(r)))),Promise.resolve(this)}fetchTile(e,t,o,i){const a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)((i=i||{signal:null}).signal)?i.signal:i.signal=(new AbortController).signal,l={responseType:"array-buffer",signal:a},n={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,o,i))).then((()=>Object(_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(this.getTileUrl(e,t,o),l))).then((e=>this._lercDecoder.decode(e.data,n,a))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,r,t){const o=!this.tilemapCache&&this.supportsBlankTile,i=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.E)({...this.parsedUrl.query,blankTile:!o&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await __webpack_require__.e(15).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/support/ElevationQuery.js"));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.w)(r),(new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await __webpack_require__.e(15).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/layers/support/ElevationQuery.js"));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.w)(r),(new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},o=await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(this.parsedUrl.path,t);o.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.b)({json:{read:{source:"copyrightText"}}})],T.prototype,"copyright",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.b)({readOnly:!0,type:_geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_14__.a})],T.prototype,"heightModelInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],T.prototype,"path",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.b)({type:["show","hide"]})],T.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.b)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],T.prototype,"minScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.b)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],T.prototype,"maxScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.b)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],T.prototype,"opacity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.b)({type:["ArcGISTiledElevationServiceLayer"]})],T.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.b)()],T.prototype,"sourceJSON",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.b)({json:{read:!1},value:"elevation",readOnly:!0})],T.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.b)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__.n)],T.prototype,"url",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.b)()],T.prototype,"version",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__.a)("version",["currentVersion"])],T.prototype,"readVersion",null),T=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__.a)("esri.layers.ElevationLayer")],T),T.prototype.fetchTile.__isDefault__=!0;const x=T}}]);