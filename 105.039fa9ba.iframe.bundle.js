(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"./node_modules/@arcgis/core/views/3d/layers/FeatureLayerViewBase3D.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return x}));var tslib_es6=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),Error=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),maybe=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),watchUtils=__webpack_require__("./node_modules/@arcgis/core/core/watchUtils.js"),property=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),subclass=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js")),hydratedFeatures=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/hydratedFeatures.js"),FeatureTileController3D=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/controllers/FeatureTileController3D.js"),FeatureLikeLayerView3D=__webpack_require__("./node_modules/@arcgis/core/views/3d/layers/FeatureLikeLayerView3D.js"),LayerView3D=__webpack_require__("./node_modules/@arcgis/core/views/3d/layers/LayerView3D.js"),FeatureTileFetcher3D=__webpack_require__("./node_modules/@arcgis/core/views/3d/layers/support/FeatureTileFetcher3D.js"),Accessor=__webpack_require__("./node_modules/@arcgis/core/core/Accessor.js"),promiseUtils=__webpack_require__("./node_modules/@arcgis/core/core/promiseUtils.js"),dehydratedFeatures=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js"),query=__webpack_require__("./node_modules/@arcgis/core/rest/query/operations/query.js"),Graphic=__webpack_require__("./node_modules/@arcgis/core/Graphic.js"),WorkerHandle=__webpack_require__("./node_modules/@arcgis/core/core/workers/WorkerHandle.js"),SpatialReference=__webpack_require__("./node_modules/@arcgis/core/geometry/SpatialReference.js"),Field=__webpack_require__("./node_modules/@arcgis/core/layers/support/Field.js");class PBFDecoder_i{constructor(e){this._schedule=e,this._handle=new PBFDecoder_n(e)}destroy(){this._handle.destroy()}invoke(o,i){return o.buffer&&0!==o.buffer.byteLength?(o.options.sourceSpatialReference&&o.options.sourceSpatialReference instanceof SpatialReference.a&&(o.options={...o.options,sourceSpatialReference:o.options.sourceSpatialReference.toJSON()}),this._handle.invoke(o,i).then((o=>this._schedule((()=>{if(o.spatialReference=SpatialReference.a.fromJSON(o.spatialReference),o.fields)for(let e=0;e<o.fields.length;e++)o.fields[e]=Field.a.fromJSON(o.fields[e]);const i=o.spatialReference;for(const t of o.features)t.uid=Graphic.a.generateUID(),Object(maybe.l)(t.geometry)&&(t.geometry.spatialReference=i);return o}))))):Promise.resolve(null)}}class PBFDecoder_n extends WorkerHandle.a{constructor(e){super("PBFDecoderWorker","_parseFeatureQuery",e)}getTransferList(e){return[e.buffer]}}let d=class extends Accessor.a{constructor(e){super(e)}get queryFeaturesDehydrated(){const e=this.layer.capabilities,r=e&&e.query;if(r&&r.supportsFormatPBF){var o,y;Object(maybe.k)(this._decoder)&&(this._decoder=new PBFDecoder_i(this.schedule));const e={sourceSpatialReference:null!=(o=null==(y=this.layer.spatialReference)?void 0:y.toJSON())?o:null,applyTransform:!0,maxStringAttributeLength:1024};return(r,t)=>Object(query.runQuery)(this.layer.parsedUrl,r,"pbf",this._createRequestOptions(t)).then((r=>(Object(promiseUtils.w)(t),Object(maybe.l)(this._decoder)?this._decoder.invoke({buffer:r.data,options:e},t.signal):Promise.reject(Object(promiseUtils.e)()))))}return(e,r)=>Object(query.executeQuery)(this.layer.parsedUrl,e,this.layer.spatialReference,this._createRequestOptions(r)).then((e=>Object(dehydratedFeatures.f)(e.data)))}queryFeatureCount(e,r){return this.layer.queryFeatureCount(e,r)}destroy(){this._decoder=Object(maybe.e)(this._decoder)}_createRequestOptions(e){return{...e,query:{...this.layer.customParameters,token:this.layer.apiKey,...null==e?void 0:e.query}}}};Object(tslib_es6.a)([Object(property.b)({constructOnly:!0})],d.prototype,"layer",void 0),Object(tslib_es6.a)([Object(property.b)({constructOnly:!0})],d.prototype,"schedule",void 0),Object(tslib_es6.a)([Object(property.b)({readOnly:!0})],d.prototype,"queryFeaturesDehydrated",null),d=Object(tslib_es6.a)([Object(subclass.a)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],d);let h=class extends Accessor.a{constructor(e){super(e)}queryFeaturesDehydrated(e,r){return this.layer.queryFeatures(e,r)}queryFeatureCount(e,r){return this.layer.queryFeatureCount(e,r)}};Object(tslib_es6.a)([Object(property.b)({constructOnly:!0})],h.prototype,"layer",void 0),Object(tslib_es6.a)([Object(property.b)({readOnly:!0})],h.prototype,"queryFeaturesDehydrated",null),h=Object(tslib_es6.a)([Object(subclass.a)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],h);let m=class extends Accessor.a{constructor(e){super(e)}queryFeaturesDehydrated(e,r){return this.layer.queryFeatures(e,r)}};Object(tslib_es6.a)([Object(property.b)({constructOnly:!0})],m.prototype,"layer",void 0),m=Object(tslib_es6.a)([Object(subclass.a)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],m);let f=class extends Accessor.a{constructor(e){super(e)}queryFeaturesDehydrated(e,r){return this.source.queryFeaturesJSON(e,r).then(dehydratedFeatures.f,(t=>{if(t&&"query-features-json:unsupported"===t.name)return this.layer.queryFeatures(e,r);throw t}))}queryFeatureCount(e,r){return this.layer.queryFeatureCount(e,r)}};Object(tslib_es6.a)([Object(property.b)({constructOnly:!0})],f.prototype,"layer",void 0),Object(tslib_es6.a)([Object(property.b)({constructOnly:!0})],f.prototype,"source",void 0),f=Object(tslib_es6.a)([Object(subclass.a)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],f);class FeatureTileFetcher3DLayerViewContext_l{constructor(e){this._memoryCache=null,this._capabilities=null;const r=e.layerView.layer;this.layerView=e.layerView,this.objectIdField=r.objectIdField,this.globalIdField="globalIdField"in r?r.globalIdField:null,this.returnZ=e.returnZ,this.returnM=e.returnM;const t=this.layerView.view.resourceController;this.query=function q(e,r){return"feature"===e.type&&"feature-layer"===e.source.type?Object(maybe.l)(e.infoFor3D)?new h({layer:e}):new d({layer:e,schedule:r}):"feature"===e.type&&"memory"===e.source.type||"csv"===e.type||"geojson"===e.type||"wfs"===e.type?new f({layer:e,source:e.source}):"ogc-feature"===e.type?new m({layer:e}):null}(r,(e=>t.schedule(e))),t&&this.memoryCacheEnabled&&(this._memoryCache=t.memoryController.newCache(r.uid))}get memoryCacheEnabled(){switch(this.layerView.layer.source.type){case"feature-layer":case"ogc-feature":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=Object(maybe.e)(this._memoryCache),this.query.destroy()}createQuery(){const e=this.layerView.layer.createQuery();return e.outFields=this.layerView.availableFields,e.returnZ=this.returnZ,e.returnM=this.returnM,e.outSpatialReference=this.tilingScheme.spatialReference,e}get memoryCache(){return this._memoryCache}get viewingMode(){return this.layerView.view.state.viewingMode}get tilingScheme(){return this.layerView.view.featureTiles.tilingScheme}get scheduler(){const e=this.layerView.view.resourceController;return e?e.scheduler:null}get geometryType(){return this.layerView.layer.geometryType}get fullExtent(){return this.layerView.layer.fullExtent}get tileMaxRecordCount(){return this.layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this.layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return Object(maybe.l)(this._capabilities)||(this._capabilities=Object(FeatureTileFetcher3D.b)(this.layerView.layer)),this._capabilities}logFetchError(e,r){e.error("#fetchTile()",this.layerView.layer,r&&r.message?r.message:r)}}var EventedSet=__webpack_require__("./node_modules/@arcgis/core/views/3d/support/EventedSet.js"),updatingProperties=__webpack_require__("./node_modules/@arcgis/core/views/3d/support/updatingProperties.js"),FeatureLayerView=__webpack_require__("./node_modules/@arcgis/core/views/layers/FeatureLayerView.js"),LayerView=__webpack_require__("./node_modules/@arcgis/core/views/layers/LayerView.js"),RefreshableLayerView=__webpack_require__("./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js");let FeatureLayerViewBase3D_f=class extends(Object(RefreshableLayerView.a)(Object(FeatureLikeLayerView3D.a)(Object(FeatureLayerView.a)(Object(LayerView3D.a)(LayerView.a))))){constructor(e){super(e),this._controllerTotal=0,this._graphicsCoreTotal=0,this.suspendResumeExtentMode="data"}initialize(){this.updatingHandles.add(this,"view.floors",(()=>this.graphics3d.filterVisibility.filterChanged()))}destroy(){this.fetcherContext&&(this.fetcherContext.destroy(),this.fetcherContext=null)}get maximumNumberOfFeatures(){var e,t;return null!=(e=null==(t=this.controller)?void 0:t.maximumNumberOfFeatures)?e:this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(e){this._set("maximumNumberOfFeatures",e),this.controller&&(this.controller.maximumNumberOfFeatures=e)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var e,t,r;let s=0;if(null!=(e=this.controller)&&e.updating){const e=this.controller.updatingRemaining,t=Math.max(this.controller.updatingTotal,this._controllerTotal);t>0&&(s=(t-e)/t,this._controllerTotal=t)}let i=0;if(null!=(t=this.graphics3d)&&null!=(r=t.graphicsCore)&&r.updating){const e=this.graphics3d.graphicsCore.updatingRemaining,t=Math.max(e,this._graphicsCoreTotal);t>0&&(i=(t-e)/t,this._graphicsCoreTotal=t)}return.5*(s+i)}get updatePolicy(){if(!this.controller)return 0;switch(this.controller.mode){case"snapshot":{const e=F[this.layer.geometryType];return null==e||this.controller.serviceDataCount>e?0:1}case"tiles":return 0}}get hasZ(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in e&&null!=e.returnZ?e.returnZ:t.supportsZ)}get hasM(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in e&&null!=e.returnM&&e.returnM}setVisibility(e,t){this.graphics3d&&this.graphics3d.graphicsCore.setObjectIdVisibility(e,t)}createQuery(){return super.createQuery()}queryFeatures(e,t){const r=()=>super.queryFeatures(e,t);return"mesh"===this.layer.geometryType?this._queryFeaturesMesh(this._ensureQuery(e),r):r()}beforeSetController(e){e.maximumNumberOfFeatures=this.maximumNumberOfFeatures}createController(){this.fetcherContext=new FeatureTileFetcher3DLayerViewContext_l({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const e=new FeatureTileController3D.a({layerView:this,context:this.fetcherContext,graphics:new EventedSet.a,extent:this.clippingExtent});return this.updatingHandles.add(e,"serviceDataExtent",(e=>{this.graphics3d&&(this.graphics3d.dataExtent=e)}),2),this.handles.add(Object(watchUtils.a)(this,"suspended",(t=>{t?e.suspend():e.resume()}),!0)),this.updatingHandles.add(this.graphics3d.graphicsCore,"displayFeatureLimit",(()=>this.updateDisplayFeatureLimit(e)),2),this.handles.add([this.view.resourceController.memoryController.events.on("quality-changed",(()=>this.updateDisplayFeatureLimit())),Object(watchUtils.g)(this,"updating",(()=>{this._controllerTotal=0,this._graphicsCoreTotal=0,this.notifyChange("updatingProgressValue")}))]),e}async doRefresh(e){e&&!this.suspended&&this.controller&&this.controller.refetch(),this.graphics3d.filterVisibility.dirty=!0}getUsedMemory(){const e=this.graphics3d&&this.graphics3d.graphicsCore;return(e?e.usedMemory:0)+(this.controller?this.controller.memoryForUnusedFeatures:0)}getUnloadedMemory(){const e=this.graphics3d&&this.graphics3d.graphicsCore;return(e?e.unprocessedMemoryEstimate:0)+(this.controller?this.controller.expectedFeatureDiff*e.usedMemoryPerGraphic:0)}ignoresMemoryFactor(){return this.controller&&this.controller.hasMaximumNumberOfFeaturesOverride}updateDisplayFeatureLimit(e=this.controller){if(!e||!this.graphics3d||!this.graphics3d.graphicsCore)return;const t=this.graphics3d.graphicsCore.displayFeatureLimit,r=this.view.resourceController.memoryController.memoryFactor;if(1===r)e.displayFeatureLimit=t;else{const s=Math.ceil(t.maximumNumberOfFeatures*r),i=Math.ceil(t.maximumTotalNumberOfFeatures*r),o=Math.ceil(t.minimumTotalNumberOfFeatures*r);e.displayFeatureLimit={...t,maximumNumberOfFeatures:s,maximumTotalNumberOfFeatures:i,minimumTotalNumberOfFeatures:o}}}async _queryFeaturesMesh(e,t){await this._validateQueryFeaturesMesh(e);const r=await t();if(e&&e.outStatistics)return r;const s=this.layer.objectIdField,i=this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID,o=[];for(const a of r.features)if(a.geometry){const e=i.get(a.attributes[s]);e&&(a.geometry=Object(hydratedFeatures.b)(e.graphic.geometry),o.push(a))}else o.push(a);return r.features=o,r}async _validateQueryFeaturesMesh(e){if(!e)return;const s=e=>{throw new Error.a("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${e}'`)},i=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const t of i)null!=e[t]&&s(t);"returnM"in e&&e.returnM&&s("returnM"),"returnCentroid"in e&&e.returnCentroid&&s("returnCentroid"),Object(maybe.l)(e.outSpatialReference)&&!e.outSpatialReference.equals(this.view.spatialReference)&&s("outSpatialReference")}get performanceInfo(){const e=this.controller&&this.controller.displayFeatureLimit,t=Object(maybe.l)(e)&&e.averageSymbolComplexity,s=Object(maybe.l)(t)?`f:${t.primitivesPerFeature},v:${t.primitivesPerCoordinate}`:"n/a",i={...this._getResourceInfo(),storedFeatures:0,totalVertices:0,partial:this.maximumNumberOfFeaturesExceeded,mode:this.controller?this.controller.mode:"n/a",symbolComplexity:s,nodes:this.controller?this.controller.tileDescriptors.length:0};if(this.controller&&i.displayedNumberOfFeatures){const e=this.controller.debug;i.storedFeatures=e.storedFeatures,i.totalVertices=e.totalVertices}return i}get test(){return{updatePolicy:this.updatePolicy,controller:this.controller}}};Object(tslib_es6.a)([Object(property.b)()],FeatureLayerViewBase3D_f.prototype,"layer",void 0),Object(tslib_es6.a)([Object(property.b)()],FeatureLayerViewBase3D_f.prototype,"controller",void 0),Object(tslib_es6.a)([Object(property.b)()],FeatureLayerViewBase3D_f.prototype,"maximumNumberOfFeatures",null),Object(tslib_es6.a)([Object(property.b)()],FeatureLayerViewBase3D_f.prototype,"maximumNumberOfFeaturesExceeded",null),Object(tslib_es6.a)([Object(property.b)(updatingProperties.a)],FeatureLayerViewBase3D_f.prototype,"updatingProgress",void 0),Object(tslib_es6.a)([Object(property.b)({readOnly:!0,dependsOn:["controller.updatingRemaining","controller.updatingTotal","graphics3d.graphicsCore.updatingRemaining"]})],FeatureLayerViewBase3D_f.prototype,"updatingProgressValue",null),Object(tslib_es6.a)([Object(property.b)({readOnly:!0})],FeatureLayerViewBase3D_f.prototype,"updatePolicy",null),Object(tslib_es6.a)([Object(property.b)({readOnly:!0})],FeatureLayerViewBase3D_f.prototype,"hasZ",null),Object(tslib_es6.a)([Object(property.b)({readOnly:!0})],FeatureLayerViewBase3D_f.prototype,"hasM",null),Object(tslib_es6.a)([Object(property.b)()],FeatureLayerViewBase3D_f.prototype,"suspendResumeExtentMode",void 0),FeatureLayerViewBase3D_f=Object(tslib_es6.a)([Object(subclass.a)("esri.views.3d.layers.FeatureLayerViewBase3D")],FeatureLayerViewBase3D_f);const F={point:5e3,polygon:500,polyline:1e3},x=FeatureLayerViewBase3D_f},"./node_modules/@arcgis/core/views/3d/layers/GeoJSONLayerView3D.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return p}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js")),_FeatureLayerViewBase3D_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@arcgis/core/views/3d/layers/FeatureLayerViewBase3D.js");let t=class extends _FeatureLayerViewBase3D_js__WEBPACK_IMPORTED_MODULE_6__.a{constructor(){super(...arguments),this.type="geojson-3d"}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.b)()],t.prototype,"layer",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.a)("esri.views.3d.layers.GeoJSONLayerView3D")],t);const p=t},"./node_modules/@arcgis/core/views/layers/FeatureLayerView.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return O}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_deprecate_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/deprecate.js"),_core_Error_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/Logger.js"),_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@arcgis/core/core/promiseUtils.js"),_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@arcgis/core/core/watchUtils.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js")),_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@arcgis/core/layers/support/commonProperties.js"),_layers_support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@arcgis/core/layers/support/FeatureEffect.js"),_layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@arcgis/core/layers/support/FeatureFilter.js"),_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@arcgis/core/layers/support/fieldUtils.js"),_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@arcgis/core/rest/support/Query.js"),_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@arcgis/core/support/arcadeOnDemand.js"),_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@arcgis/core/views/layers/support/popupUtils.js"),_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@arcgis/core/views/support/floorFilterUtils.js");const P=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.a.getLogger("esri.views.layers.FeatureLayerView"),O=i=>{let O=class extends i{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__.a)(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","featureEffect","layer.timeInfo","layer.floorInfo","timeExtent"],(()=>this._handleRequiredFieldsChange()),!0),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__.b)(this,"view.floors","change",(()=>this._handleRequiredFieldsChange())),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__.b)(this,"layer.sublayer","change",(()=>this._handleRequiredFieldsChange()))}get availableFields(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return"outFields"in e&&e.outFields?Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.j)(t,[...Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.u)(t,e.outFields),...r]):Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.j)(t,r)}set effect(e){Object(_core_deprecate_js__WEBPACK_IMPORTED_MODULE_1__.c)(P,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect=e}get effect(){return Object(_core_deprecate_js__WEBPACK_IMPORTED_MODULE_1__.c)(P,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){void 0!==e?this._override("featureEffect",e):this._clearOverride("featureEffect")}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){P.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(this.filter)?this.filter.createQuery(e):new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_16__.a(e);if("feature"===this.layer.type){const e=Object(_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_19__.b)(this);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(this.timeExtent)&&(t.timeExtent=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(t.timeExtent)?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeatures(e,t){const r=this.validateFetchPopupFeatures(t);if(r)throw r;return this.fetchClientPopupFeatures(t)}_loadArcadeModules(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_17__.e)()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)}))}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r,objectIdField:i}}=this,o="renderer"in t&&t.renderer,n="orderBy"in t&&t.orderBy,l=t.featureReduction,u=new Set,p=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.j)([o?o.collectRequiredFields(u,r):null,Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.g)(u,t),e?Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.b)(u,t):null,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(this.filter)?Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.f)(u,t,this.filter):null,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(this.featureEffect)?Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.f)(u,t,this.featureEffect.filter):null,l?Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.c)(u,t,l):null,n?Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.h)(u,t,n):null]);if(t.timeInfo&&this.timeExtent&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.e)(u,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&t.floorInfo&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.e)(u,t.fieldsIndex,[t.floorInfo.floorField]),"subtype-group"===t.type){Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.d)(u,r,t.subtypeField);const e=t.sublayers.map((e=>{var t;return Promise.all([null==(t=e.renderer)?void 0:t.collectRequiredFields(u,r),Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.g)(u,e)])}));await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.j)(e)}for(const s of p)s.error&&P.error(s.error);Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.d)(u,r,i),e&&"displayField"in t&&t.displayField&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.d)(u,r,t.displayField);const f=Array.from(u).sort();this._set("requiredFields",f)}validateFetchPopupFeatures(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.k)(e))return null;for(const t of e.clientGraphics){const i=t.layer;if("popupEnabled"in i&&!i.popupEnabled)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.a("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i});if("popupTemplate"in i&&!Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_18__.a)(i,e))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.a("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i});if(t.isAggregate&&!(i.featureReduction&&"popupTemplate"in i.featureReduction&&i.featureReduction.popupEnabled&&i.featureReduction.popupTemplate))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.a("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i})}}async fetchClientPopupFeatures(e){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(e)?e.clientGraphics:null;if(!t||0===t.length)return[];const r=new Array(t.length),i=new Map,o=await this.createPopupQuery(e);for(let a=0;a<t.length;a++){const n=t[a];if(n.isAggregate){r[a]=n;continue}const{layer:l}=n;if(!("popupEnabled"in l))continue;const u=Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.u)(this.layer.fieldsIndex,o.outFields),p=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_18__.a)(l,e);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(p))continue;const f=await this._loadArcadeModules(p);f&&f.arcadeUtils.hasGeometryOperations(p)||!Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.i)(u,n)?i.set(n.getObjectId(),a):r[a]=n}if("stream"===this.layer.type||0===i.size)return r.filter(Boolean);o.objectIds=Array.from(i.keys());try{const e=await this.layer.queryFeatures(o);for(const t of e.features)r[i.get(t.getObjectId())]=t}catch{}return r.filter(Boolean)}async createPopupQuery(e){const t=this.layer.createQuery(),r=new Set;let i=!1;const o=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(e)&&e.clientGraphics?e.clientGraphics.map((e=>e.layer)):[this.layer];for(const a of o){if(!("popupEnabled"in a))continue;const t=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_18__.a)(a,e);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(t))continue;const o=await this._loadArcadeModules(t),n=o&&o.arcadeUtils.hasGeometryOperations(t);i=!("point"!==this.layer.geometryType&&!n);const l=await Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_18__.b)(this.layer,t);for(const e of l)r.add(e)}if(t.returnGeometry=i,t.returnZ=i,t.returnM=i,t.outFields=Array.from(r),t.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const e=Object(_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_19__.b)(this);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return t}canResume(){return!(!super.canResume()||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.l)(this.timeExtent)&&this.timeExtent.isEmpty)}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.b)()],O.prototype,"_updatingRequiredFieldsPromise",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.b)({readOnly:!0})],O.prototype,"availableFields",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.b)()],O.prototype,"effect",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.b)({type:_layers_support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_13__.a})],O.prototype,"featureEffect",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.b)({type:_layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_14__.a})],O.prototype,"filter",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.b)(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_12__.a)],O.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.b)()],O.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.b)({type:Number})],O.prototype,"maximumNumberOfFeatures",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.b)({readOnly:!0,type:Boolean})],O.prototype,"maximumNumberOfFeaturesExceeded",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.b)({readOnly:!0})],O.prototype,"requiredFields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.b)()],O.prototype,"suspended",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.b)()],O.prototype,"view",void 0),O=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.a)("esri.views.layers.FeatureLayerView")],O),O}},"./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return i}));var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/chunks/tslib.es6.js"),_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/Logger.js"),_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/promiseUtils.js"),_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/watchUtils.js"),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js"),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),__webpack_require__("./node_modules/@arcgis/core/core/has.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/ensureType.js"),__webpack_require__("./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js"));const i=i=>{let c=class extends i{initialize(){this.handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"layer","refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.m)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.a.getLogger(this.declaredClass).error(r)}))})),"RefreshableLayerView")}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.b)()],c.prototype,"layer",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__.a)([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.a)("esri.layers.mixins.RefreshableLayerView")],c),c}},"./node_modules/@arcgis/core/views/layers/support/popupUtils.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return d})),__webpack_require__.d(__webpack_exports__,"b",(function(){return t}));var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/layers/support/fieldUtils.js");async function t(t,d=t.popupTemplate){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.l)(d))return[];const i=await d.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:n}=d,{objectIdField:s,typeIdField:a,globalIdField:o,relationships:u}=t;if(i.includes("*"))return["*"];const f=n?await Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.n)(t):[],r=Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.j)(t.fieldsIndex,[...i,...f]);return a&&r.push(a),r&&s&&t.fieldsIndex.has(s)&&-1===r.indexOf(s)&&r.push(s),r&&o&&t.fieldsIndex.has(o)&&-1===r.indexOf(o)&&r.push(o),u&&u.forEach((e=>{const{keyField:p}=e;r&&p&&t.fieldsIndex.has(p)&&-1===r.indexOf(p)&&r.push(p)})),r}function d(p,l){return p.popupTemplate?p.popupTemplate:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.l)(l)&&l.defaultPopupTemplateEnabled&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.l)(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}}}]);