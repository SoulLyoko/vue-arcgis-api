(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{"./node_modules/@arcgis/core/views/3d/layers/support/TerrainTileTree3DDebugger.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TerrainTileTree3DDebugger",(function(){return p}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@arcgis/core/geometry.js"),__webpack_require__("./node_modules/@arcgis/core/core/watchUtils.js")),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("./node_modules/@arcgis/core/core/Logger.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/set.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js")),_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js"),_support_TileTreeDebugger_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@arcgis/core/views/support/TileTreeDebugger.js"),_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@arcgis/core/geometry/Polygon.js");let p=class extends _support_TileTreeDebugger_js__WEBPACK_IMPORTED_MODULE_10__.a{constructor(e){super(e),this.enablePolygons=!1}initialize(){Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(this,"enabled",(e=>this.view.basemapTerrain.renderPatchBorders=e))}getTiles(){return this.view.basemapTerrain.test.getRenderedTiles().map((e=>({...e,geometry:_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__.a.fromExtent(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__.A)(e.extent,this.view.basemapTerrain.spatialReference))})))}};p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.a)("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],p)},"./node_modules/@arcgis/core/views/support/TileTreeDebugger.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return b}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_Color_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/Color.js"),_Graphic_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/Graphic.js"),_core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/Accessor.js"),_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/core/mathUtils.js"),_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js")),_symbols_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@arcgis/core/symbols/PointSymbol3D.js"),_symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@arcgis/core/symbols/SimpleFillSymbol.js"),_symbols_TextSymbol_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@arcgis/core/symbols/TextSymbol.js"),_symbols_TextSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@arcgis/core/symbols/TextSymbol3DLayer.js");const m=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let b=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__.a{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=m.map((e=>new _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_12__.a({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const t=this.getTiles(),a=new Array,n=new Set((this._labels.size,this._labels.keys()));t.forEach(((p,m)=>{const b=p.lij.toString();n.delete(b);const d=p.lij[0],g=p.geometry;if(this.enablePolygons&&!this._polygons.has(b)){const e=new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__.a({geometry:g,symbol:this._symbols[d%this._symbols.length]});this._polygons.set(b,e),a.push(e)}if(this.enableLabels){const n=(e=>{if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.l)(e.label))return e.label;let s=e.lij.toString();return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.l)(e.loadPriority)&&(s+=` (${e.loadPriority})`),s})(p),d=m/(t.length-1),u=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__.l)(0,200,d),_=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__.l)(20,6,d)/.75,f=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.l)(p.loadPriority)&&p.loadPriority>=t.length,w=new _Color_js__WEBPACK_IMPORTED_MODULE_1__.a([u,f?0:u,f?0:u]),j="3d"===this.view.type?()=>new _symbols_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_11__.a({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new _symbols_TextSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_14__.a({text:n,halo:{color:"white",size:1/.75},material:{color:w},size:_})]}):()=>new _symbols_TextSymbol_js__WEBPACK_IMPORTED_MODULE_13__.a({text:n,haloColor:"white",haloSize:1/.75,color:w,size:_});if(this._labels.has(b)){const e=this._labels.get(b),s=j();(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.k)(e.symbol)||JSON.stringify(s)!==JSON.stringify(e.symbol))&&(e.symbol=s)}else{const e=new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__.a({geometry:g.extent.center,symbol:j()});this._labels.set(b,e),a.push(e)}}}));const p=new Array;n.forEach((e=>{this._polygons.has(e)&&(p.push(this._polygons.get(e)),this._polygons.delete(e)),this._labels.has(e)&&(p.push(this._labels.get(e)),this._labels.delete(e))})),this.view.graphics.removeMany(p),this.view.graphics.addMany(a)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.b)({constructOnly:!0})],b.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.b)({readOnly:!0})],b.prototype,"updating",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.b)()],b.prototype,"enabled",null),b=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.a)("esri.views.support.TileTreeDebugger")],b)}}]);