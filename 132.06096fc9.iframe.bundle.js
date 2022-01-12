(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{"./node_modules/@arcgis/core/views/3d/layers/WMTSLayerView3D.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return m}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_Error_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/Logger.js"),_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/watchUtils.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js")),_LayerView3D_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@arcgis/core/views/3d/layers/LayerView3D.js"),_TiledLayerView3D_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@arcgis/core/views/3d/layers/TiledLayerView3D.js"),_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@arcgis/core/views/layers/LayerView.js"),_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js");const p=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.a.getLogger("esri.views.3d.layers.WMTSLayerView3d");let c=class extends(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__.a)(Object(_TiledLayerView3D_js__WEBPACK_IMPORTED_MODULE_10__.a)(Object(_LayerView3D_js__WEBPACK_IMPORTED_MODULE_9__.a)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__.a)))){constructor(){super(...arguments),this.type="wmts-3d"}get hasMixedImageFormats(){return!0}initialize(){const e=Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__.m)(this.view,"basemapTerrain.tilingSchemeDone").then((()=>{const e=()=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.a("layerview:no-compatible-tiling-scheme","None of the tiling schemes supported by the service are compatible with the scene.");if(!this.view.basemapTerrain.tilingSchemeLocked)throw e();const i=this.view.basemapTerrain.tilingScheme,r=this.layer.activeLayer;let s;if(r&&r.tileMatrixSet){s=r.tileMatrixSet;const e=s.tileInfo,t=this._getTileInfoSupportError(e,s.fullExtent)||this._getTileInfoCompatibilityError(e,i);if(t)throw t}else{if(s=this._getCompatibleTileMatrixSet(),!s)throw e();r.tileMatrixSetId=s.id}this._set("tileInfo",s.tileInfo),this._set("fullExtent",s.fullExtent),this.layer.fullExtent=s.fullExtent}));this.addResolvingPromise(e),this.when((()=>this._initialized()))}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const e=this.layer.activeLayer.tileMatrixSet;return e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_initialized(){this.updatingHandles.add(this,"layer.activeLayer.styleId",(()=>this.refresh())),this.updatingHandles.add(this,"tileMatrixSet",(()=>this.refresh())),this.updatingHandles.add(this.layer,"activeLayer",(e=>{let t=e.tileMatrixSet;if(t){const e=this._getTileInfoError(t.tileInfo,t.fullExtent);e&&(p.error("The selected tile matrix set is not compatible with the view",e),t=null)}else t=this._getCompatibleTileMatrixSet(),t?e.tileMatrixSetId=t.id:p.error("The layer does not provide a tiling scheme that is compatible with the view");this.notifyChange("suspended"),this.canResume()&&this.refresh()}))}_getCompatibleTileMatrixSet(){return this.layer.activeLayer.tileMatrixSets.find((e=>{const t=e.tileInfo;return!this._getTileInfoError(t,e.fullExtent)}))}_getTileInfoError(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)({readOnly:!0})],c.prototype,"hasMixedImageFormats",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)()],c.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)()],c.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)()],c.prototype,"suspended",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)()],c.prototype,"tileInfo",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.a)("esri.views.3d.layers.WMTSLayerView3D")],c);const m=c},"./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return i}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/Logger.js"),_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/promiseUtils.js"),_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/watchUtils.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js"));const i=i=>{let c=class extends i{initialize(){this.handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"layer","refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.m)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.a.getLogger(this.declaredClass).error(r)}))})),"RefreshableLayerView")}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)()],c.prototype,"layer",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.a)("esri.layers.mixins.RefreshableLayerView")],c),c}}}]);