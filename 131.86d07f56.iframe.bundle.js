(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{"./node_modules/@arcgis/core/views/2d/layers/OGCFeatureLayerView2D.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return a}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./node_modules/@arcgis/core/core/Logger.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/set.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js")),_FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@arcgis/core/views/2d/layers/FeatureLayerView2D.js"),_layers_OGCFeatureLayerView_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@arcgis/core/views/layers/OGCFeatureLayerView.js");let t=class extends(Object(_layers_OGCFeatureLayerView_js__WEBPACK_IMPORTED_MODULE_8__.a)(_FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_7__.default)){};t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.a)("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t},"./node_modules/@arcgis/core/views/layers/OGCFeatureLayerView.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return a}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_Error_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js"));const a=a=>{let o=class extends a{initialize(){const{layer:e,view:s}=this;e.source.supportsSpatialReference(s.spatialReference)||this.addResolvingPromise(Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.a("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})))}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.b)()],o.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.b)({readOnly:!0})],o.prototype,"availableFields",null),o=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.a)("esri.views.layers.OGCFeatureLayerView")],o),o}}}]);