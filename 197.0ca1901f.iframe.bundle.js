(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{"./node_modules/@arcgis/core/layers/UnknownLayer.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return c}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_Error_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js"),_core_scheduling_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/scheduling.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js")),_Layer_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@arcgis/core/layers/Layer.js"),_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@arcgis/core/layers/mixins/PortalLayer.js");let a=class extends(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_10__.a)(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.a)(_Layer_js__WEBPACK_IMPORTED_MODULE_9__.a))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unknown layer type";r&&(s+=" "+r),e(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.a("layer:unknown-layer-type",s,{layerType:r}))}))})))}read(r,o){super.read({resourceInfo:r},o)}write(){return null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)({readOnly:!0})],a.prototype,"resourceInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)({type:["show","hide"]})],a.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.a)("esri.layers.UnknownLayer")],a);const c=a}}]);