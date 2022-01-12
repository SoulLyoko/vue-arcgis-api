(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"./node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return h}));var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/core/arrayUtils.js"),_maybe_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_PooledArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/PooledArray.js"),_chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/chunks/quickselect.js");class h{constructor(t=9,i){this.compareMinX=l,this.compareMinY=c,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),M.prune(),X.prune(),Y.prune(),B.prune()}all(t){this._all(this.data,t)}search(t,i){let n=this.data;const e=this.toBBox;if(p(t,n))for(M.clear();n;){for(let s=0,h=n.children.length;s<h;s++){const h=n.children[s],a=n.leaf?e(h):h;p(t,a)&&(n.leaf?i(h):x(t,a)?this._all(h,i):M.push(h))}n=M.pop()}}collides(t){let i=this.data;const n=this.toBBox;if(!p(t,i))return!1;for(M.clear();i;){for(let e=0,s=i.children.length;e<s;e++){const s=i.children[e],h=i.leaf?n(s):s;if(p(t,h)){if(i.leaf||x(t,h))return!0;M.push(s)}}i=M.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){const t=this.data;this.data=i,i=t}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new b([]),this}remove(i){if(!i)return this;let e,s=this.data,h=null,a=0,r=!1;const o=this.toBBox(i);for(Y.clear(),B.clear();s||Y.length>0;){var l;if(s||(s=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__.d)(Y.pop()),h=Y.data[Y.length-1],a=null!=(l=B.pop())?l:0,r=!0),s.leaf&&(e=Object(_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.g)(s.children,i,s.children.length,s.indexHint),-1!==e))return s.children.splice(e,1),Y.push(s),this._condense(Y),this;r||s.leaf||!x(s,o)?h?(a++,s=h.children[a],r=!1):s=null:(Y.push(s),B.push(a),a=0,h=s,s=s.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,i){let n=t;for(X.clear();n;){var e;if(!0===n.leaf)for(const t of n.children)i(t);else X.pushArray(n.children);n=null!=(e=X.pop())?e:null}}_build(t,i,n,e){const s=n-i+1;let h=this._maxEntries;if(s<=h){const e=new b(t.slice(i,n+1));return a(e,this.toBBox),e}e||(e=Math.ceil(Math.log(s)/Math.log(h)),h=Math.ceil(s/h**(e-1)));const r=new j([]);r.height=e;const o=Math.ceil(s/h),l=o*Math.ceil(Math.sqrt(h));g(t,i,n,l,this.compareMinX);for(let a=i;a<=n;a+=l){const i=Math.min(a+l-1,n);g(t,a,i,o,this.compareMinY);for(let n=a;n<=i;n+=o){const s=Math.min(n+o-1,i);r.children.push(this._build(t,n,s,e-1))}}return a(r,this.toBBox),r}_chooseSubtree(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,s=1/0;for(let h=0,a=i.children.length;h<a;h++){const a=i.children[h],r=m(a),o=d(t,a)-r;o<s?(s=o,e=r<e?r:e,n=a):o===s&&r<e&&(e=r,n=a)}i=n||i.children[0]}return i}_insert(t,i,n){const e=this.toBBox,s=n?t:e(t);Y.clear();const h=this._chooseSubtree(s,this.data,i,Y);for(h.children.push(t),o(h,s);i>=0&&Y.data[i].children.length>this._maxEntries;)this._split(Y,i),i--;this._adjustParentBBoxes(s,Y,i)}_split(t,i){const n=t.data[i],e=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,e);const h=this._chooseSplitIndex(n,s,e);if(!h)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(h,n.children.length-h),o=n.leaf?new b(r):new j(r);o.height=n.height,a(n,this.toBBox),a(o,this.toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,i){this.data=new j([t,i]),this.data.height=t.height+1,a(this.data,this.toBBox)}_chooseSplitIndex(t,i,n){let e,s,h;e=s=1/0;for(let a=i;a<=n-i;a++){const i=r(t,0,a,this.toBBox),o=r(t,a,n,this.toBBox),l=f(i,o),c=m(i)+m(o);l<e?(e=l,h=a,s=c<s?c:s):l===e&&c<s&&(s=c,h=a)}return h}_chooseSplitAxis(t,i,n){const e=t.leaf?this.compareMinX:l,s=t.leaf?this.compareMinY:c;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,s)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const s=this.toBBox,h=r(t,0,i,s),a=r(t,n-i,n,s);let l=u(h)+u(a);for(let r=i;r<n-i;r++){const i=t.children[r];o(h,t.leaf?s(i):i),l+=u(h)}for(let r=n-i-1;r>=i;r--){const i=t.children[r];o(a,t.leaf?s(i):i),l+=u(a)}return l}_adjustParentBBoxes(t,i,n){for(let e=n;e>=0;e--)o(i.data[e],t)}_condense(i){for(let n=i.length-1;n>=0;n--){const e=i.data[n];if(0===e.children.length)if(n>0){const s=i.data[n-1],h=s.children;h.splice(Object(_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.g)(h,e,h.length,s.indexHint),1)}else this.clear();else a(e,this.toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,i){r(t,0,t.children.length,i,t)}function r(t,i,n,e,s){s||(s=new b([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let h,a=i;a<n;a++)h=t.children[a],o(s,t.leaf?e(h):h);return s}function o(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function l(t,i){return t.minX-i.minX}function c(t,i){return t.minY-i.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function f(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),s=Math.min(t.maxX,i.maxX),h=Math.min(t.maxY,i.maxY);return Math.max(0,s-n)*Math.max(0,h-e)}function x(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function p(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function g(t,i,e,h,a){const r=[i,e];for(;r.length;){const i=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__.d)(r.pop()),e=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__.d)(r.pop());if(i-e<=h)continue;const o=e+Math.ceil((i-e)/h/2)*h;Object(_chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_3__.a)(t,o,e,i,a),r.push(e,o,o,i)}}const M=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__.a,X=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__.a,Y=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__.a,B=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__.a({deallocator:void 0});class w extends class _{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.a}}class b extends w{constructor(t){super(),this.children=t,this.leaf=!0}}class j extends w{constructor(t){super(),this.children=t,this.leaf=!1}}},"./node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return e}));var _core_has_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/core/has.js"),_core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js");const n={minX:0,minY:0,maxX:0,maxY:0};class e{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__.a(9,Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__.a)("esri-csp-restrictions")?i=>({minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const i=new Array(this._idByBounds.size);let s=0;this._idByBounds.forEach(((d,n)=>{i[s++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(i)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((i=>this._idByBounds.has(i)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(i){const s=this._boundsById.get(i);this._boundsById.delete(i),s&&(this._idByBounds.delete(s),this._indexInvalid||this._index.remove(s))}forEachInBounds(i,s){this._loadIndex(),function t(i,s,d){n.minX=s[0],n.minY=s[1],n.maxX=s[2],n.maxY=s[3],i.search(n,d)}(this._index,i,(i=>s(this._idByBounds.get(i))))}get(i){return this._boundsById.get(i)}has(i){return this._boundsById.has(i)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(i,s){if(!this._indexInvalid){const s=this._boundsById.get(i);s&&(this._index.remove(s),this._idByBounds.delete(s))}this._boundsById.set(i,s),s&&(this._idByBounds.set(s,i),this._indexInvalid||(this._boundsToLoad.push(s),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},"./node_modules/@arcgis/core/layers/graphics/data/FeatureStore.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return m}));var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),_core_Evented_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/Evented.js"),_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/Logger.js"),_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js"),_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js"),_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js"),_BoundsStore_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js"),_optimizedFeatureQueryEngineAdapter_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/data/optimizedFeatureQueryEngineAdapter.js");class m{constructor(e){this.geometryInfo=e,this._boundsStore=new _BoundsStore_js__WEBPACK_IMPORTED_MODULE_7__.a,this._featuresById=new Map,this._markedIds=new Set,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__.a,this.featureAdapter=_optimizedFeatureQueryEngineAdapter_js__WEBPACK_IMPORTED_MODULE_8__.a}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__.l)(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__.a);return this._featuresById.forEach((t=>{const r=this._boundsStore.get(t.objectId);r&&(e[0]=Math.min(r[0],e[0]),e[1]=Math.min(r[1],e[1]),e[2]=Math.max(r[2],e[2]),e[3]=Math.max(r[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.l)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,r){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__.s)(r,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,r)=>{this._markedIds.has(r)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const i=t.objectId;if(null==i)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.a("featurestore:invalid-feature","feature id is missing",{feature:t}));const d=this._featuresById.get(i);let h;if(this._markedIds.add(i),d?(t.displayId=d.displayId,h=this._boundsStore.get(i),this._boundsStore.delete(i)):Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.l)(this.onFeatureAdd)&&this.onFeatureAdd(t),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.k)(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(i,null),void this._featuresById.set(i,t);h=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__.r)(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.l)(h)?h:Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__.l)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.l)(h)&&this._boundsStore.set(i,h),this._featuresById.set(i,t)}_remove(e){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.l)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},"./node_modules/@arcgis/core/layers/graphics/data/optimizedFeatureQueryEngineAdapter.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return o}));var _centroid_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/centroid.js"),_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js"),_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js");const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,r)=>new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_1__.b(r,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(e,o)=>(e.centroid||(e.centroid=Object(_centroid_js__WEBPACK_IMPORTED_MODULE_0__.a)(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__.a,e.geometry,o.hasZ,o.hasM)),e.centroid)}},"./node_modules/@arcgis/core/layers/graphics/sources/geojson/GeoJSONSourceWorker.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return C}));var _request_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/request.js"),_core_Error_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/core/Logger.js"),_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/core/maybe.js"),_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@arcgis/core/core/promiseUtils.js"),_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@arcgis/core/geometry/support/jsonUtils.js"),_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js"),_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js"),_data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/data/FeatureStore.js"),_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js"),_data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/data/QueryEngine.js"),_geojson_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/sources/geojson/geojson.js"),_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js"),_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/sources/support/sourceUtils.js"),_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@arcgis/core/layers/support/FieldsIndex.js"),_support_fieldType_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@arcgis/core/layers/support/fieldType.js"),_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@arcgis/core/layers/support/fieldUtils.js");const O={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class C{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,s={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const i=[];await this._checkProjection(e.spatialReference);let r=null;e.url&&(r=await this._fetch(null==s?void 0:s.signal));const n=Object(_geojson_js__WEBPACK_IMPORTED_MODULE_11__.c)(r,{geometryType:e.geometryType}),a=e.fields||n.fields||[],l=null!=e.hasZ?e.hasZ:n.hasZ,u=n.geometryType,d=e.objectIdField||n.objectIdFieldName||"__OBJECTID",p=e.spatialReference||_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.b;let c=e.timeInfo;a===n.fields&&n.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n.unknownFields}});let y=a.find((e=>e.name===d));y?("esriFieldTypeString"!==y.type&&(y.type="esriFieldTypeOID"),y.editable=!1,y.nullable=!1):(y={alias:d,name:d,type:"string"===n.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},a.unshift(y));const m={};for(const o of a){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),!o.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.a("geojson-layer:invalid-field-name","field name is missing",{field:o});if(!_support_fieldType_js__WEBPACK_IMPORTED_MODULE_15__.a.jsonValues.includes(o.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.a("geojson-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o});if(o.name!==y.name){const e=Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.o)(o);void 0!==e&&(m[o.name]=e)}}this._fieldsIndex=new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_14__.a(a);const f=this._fieldsIndex.requiredFields.indexOf(y);if(f>-1&&this._fieldsIndex.requiredFields.splice(f,1),c){if(c.startTimeField){const e=this._fieldsIndex.get(c.startTimeField);e?(c.startTimeField=e.name,e.type="esriFieldTypeDate"):c.startTimeField=null}if(c.endTimeField){const e=this._fieldsIndex.get(c.endTimeField);e?(c.endTimeField=e.name,e.type="esriFieldTypeDate"):c.endTimeField=null}if(c.trackIdField){const e=this._fieldsIndex.get(c.trackIdField);e?c.trackIdField=e.name:(c.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:c}}))}c.startTimeField||c.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:c}}),c=null)}const I=u?Object(_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_12__.d)(u):null,j={warnings:i,featureErrors:[],layerDefinition:{...O,drawingInfo:I,templates:Object(_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_12__.c)(m),extent:null,geometryType:u,objectIdField:d,fields:a,hasZ:!!l,timeInfo:c}};this._queryEngine=new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_10__.a({fields:a,geometryType:u,hasM:!1,hasZ:l,objectIdField:d,spatialReference:p,timeInfo:c,featureStore:new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_8__.a({geometryType:u,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=Object(_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_12__.b)(m,d);const T=await this._createFeatures(r);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,T);const w=this._normalizeFeatures(T,j.warnings,j.featureErrors);if(this._queryEngine.featureStore.addMany(w),j.layerDefinition.extent=this._queryEngine.fullExtent,j.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;j.layerDefinition.timeInfo.timeExtent=[e,t]}return j}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.c)(t,s),Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__.a)(e.adds,t),Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__.a)(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var i;return this.loadOptions.customParameters=e,null==(i=this._snapshotTask)||i.abort(),this._snapshotTask=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.h)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.m)(e)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.a.getLogger("esri.layers.GeoJSONLayer").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.a("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:s,objectIdField:r}=this._queryEngine,n=Object(_geojson_js__WEBPACK_IMPORTED_MODULE_11__.a)(e,{geometryType:t,hasZ:s,objectIdField:r});if(!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.d)(this._queryEngine.spatialReference,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.b))for(const a of n)Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.l)(a.geometry)&&(a.geometry=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__.d)(Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__.b)(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__.k)(a.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.b,this._queryEngine.spatialReference)));return n}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:s,customParameters:i}=this.loadOptions,r=(await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__.default)(s,{responseType:"json",query:{...i},signal:t})).data;return await Object(_geojson_js__WEBPACK_IMPORTED_MODULE_11__.d)(r),r}_normalizeFeatures(e,t,s){const{objectIdField:i}=this._queryEngine,r=[];for(const n of e){const e=this._createDefaultAttributes(),a=Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.d)(this._fieldsIndex,e,n.attributes,!0,t);a?null==s||s.push(a):(this._assignObjectId(e,n.attributes,!0),n.attributes=e,n.objectId=e[i],r.push(n))}return r}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),s&&s.length&&this._applyUpdateEdits(r,s),i&&i.length){for(const e of i)r.deleteResults.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.b)(e));this._queryEngine.featureStore.removeManyById(i)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:r,hasM:n,hasZ:o,objectIdField:l,spatialReference:u,featureStore:d}=this._queryEngine,c=[];for(const p of t){if(p.geometry&&r!==Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__.c)(p.geometry)){s.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.d)(this._fieldsIndex,t,p.attributes);if(n)s.push(n);else{if(this._assignObjectId(t,p.attributes),p.attributes=t,null!=p.uid){const t=p.attributes[l];e.uidToObjectId[p.uid]=t}Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.l)(p.geometry)&&(p.geometry=Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__.b)(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.e)(p.geometry,u),p.geometry.spatialReference,u)),c.push(p),s.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.b)(p.attributes[l]))}}d.addMany(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__.c)([],c,r,o,n,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:r,hasZ:n,objectIdField:o,spatialReference:l,featureStore:u}=this._queryEngine;for(const d of t){const{attributes:t,geometry:p}=d,h=t&&t[o];if(null==h){e.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.a)(`Identifier field ${o} missing`));continue}if(!u.has(h)){e.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.a)(`Feature with object id ${h} missing`));continue}const m=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__.i)(u.getFeature(h),s,n,r);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.l)(p)){if(s!==Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__.c)(p)){e.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.a)("Incorrect geometry type."));continue}m.geometry=Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__.b)(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.e)(p,l),p.spatialReference,l)}if(t){const s=Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.d)(this._fieldsIndex,m.attributes,t);if(s){e.push(s);continue}}u.add(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__.a)(m,s,n,r,o)),e.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_13__.b)(h))}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===s.type)return()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__.a)(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.b,e)}catch{throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.a("geojson-layer","Projection not supported")}}}},"./node_modules/@arcgis/core/layers/graphics/sources/geojson/geojson.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return L})),__webpack_require__.d(__webpack_exports__,"b",(function(){return i})),__webpack_require__.d(__webpack_exports__,"c",(function(){return T})),__webpack_require__.d(__webpack_exports__,"d",(function(){return O}));var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/core/Error.js"),_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js"),_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js"),_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/layers/support/fieldUtils.js");const r={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function i(e){return r[e]}function*s(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function l(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function p(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function d(e,t,n){switch(t.type){case"LineString":return function g(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function m(e,t,n){for(const o of t.coordinates)F(e,o,n);return e}(e,t,n);case"MultiPoint":return function h(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"MultiPolygon":return function w(e,t,n){for(const o of t.coordinates){j(e,o[0],n);for(let t=1;t<o.length;t++)S(e,o[t],n)}return e}(e,t,n);case"Point":return function P(e,t,n){return M(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function b(e,t,n){const o=t.coordinates;j(e,o[0],n);for(let r=1;r<o.length;r++)S(e,o[r],n);return e}(e,t,n)}}function j(e,t,n){const o=p(t);!function f(e){return!y(e)}(o)?F(e,o,n):G(e,o,n)}function S(e,t,n){const o=p(t);!function a(e){return y(e)}(o)?F(e,o,n):G(e,o,n)}function F(e,t,n){for(const o of t)M(e,o,n);e.lengths.push(t.length)}function G(e,t,n){for(let o=t.length-1;o>=0;o--)M(e,t[o],n);e.lengths.push(t.length)}function M(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0)}function k(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function O(t){if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.a("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==t.type&&"FeatureCollection"!==t.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.a("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:n}=t;if(!n)return;const o="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!r.test(o))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.a("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function T(e,t={}){const n=[],r=new Set,u=new Set;let f,a=!1,y=null,p=!1,{geometryType:d=null}=t,g=!1;for(const o of s(e)){const{geometry:e,properties:t,id:s}=o;if((!e||(d||(d=i(e.type)),i(e.type)===d))&&(a||(a=l(c(e))),p||(p=null!=s,p&&(f=typeof s,y=Object.keys(t).filter((e=>t[e]===s)))),p&&null!=s&&(y.length>1?y=y.filter((e=>t[e]===s)):1===y.length&&(y=t[y[0]]===s?y:[])),!g&&t)){let e=!0;for(const o in t){if(r.has(o))continue;const i=t[o];if(null==i){e=!1,u.add(o);continue}const s=k(i);"unknown"!==s?(u.delete(o),r.add(o),n.push({name:o,alias:o,type:s})):u.add(o)}g=e}}const m=y&&1===y.length&&y[0]||null;if(m)for(const i of n)if(i.name===m&&Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__.p)(i)){i.type="esriFieldTypeOID";break}return{fields:n,geometryType:d,hasZ:a,objectIdFieldName:m,objectIdFieldType:f,unknownFields:Array.from(u)}}function L(e,t){return Array.from(function*u(e,o={}){const{geometryType:r,objectIdField:s}=o;for(const u of e){var c;const{geometry:e,properties:l,id:f}=u;if(e&&i(e.type)!==r)continue;const a=l||{};let y=null!=(c=a[s])?c:null;s&&null!=f&&!a[s]&&(a[s]=y=f);const p=new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_1__.b(e?d(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__.a,e,o):null,a,null,y);yield p}}(s(e),t))}},"./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return a})),__webpack_require__.d(__webpack_exports__,"b",(function(){return n})),__webpack_require__.d(__webpack_exports__,"c",(function(){return i})),__webpack_require__.d(__webpack_exports__,"d",(function(){return u}));var _core_has_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/core/has.js"),_core_lang_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/core/lang.js"),_data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@arcgis/core/layers/graphics/data/QueryEngineCapabilities.js"),_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@arcgis/core/symbols/support/defaultsJSON.js");function u(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__.c:"esriGeometryPolyline"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__.e:_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__.d}}}function n(s,e){if(Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__.a)("esri-csp-restrictions"))return()=>({[e]:null,...s});try{let t=`this.${e} = null;`;for(const e in s)t+=`this${e.includes(".")?`["${e}"]`:`.${e}`} = ${JSON.stringify(s[e])};`;const r=new Function(t);return()=>new r}catch(r){return()=>({[e]:null,...s})}}function i(t={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.a)(t)}}]}function a(t,s){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:_data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},"./node_modules/@arcgis/core/layers/graphics/sources/support/sourceUtils.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return u})),__webpack_require__.d(__webpack_exports__,"b",(function(){return c})),__webpack_require__.d(__webpack_exports__,"c",(function(){return y})),__webpack_require__.d(__webpack_exports__,"d",(function(){return d})),__webpack_require__.d(__webpack_exports__,"e",(function(){return h}));var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js"),_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@arcgis/core/layers/support/fieldUtils.js");class o{constructor(){this.code=null,this.description=null}}class l{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new l(e)}class a{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new a(e)}const f=new Set;function d(e,t,r,s=!1,o){f.clear();for(const l in r){const a=e.get(l);if(!a)continue;const c=r[l],d=m(a,c);if(d!==c&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:c,sanitizedValue:d}}),f.add(a.name),a&&(s||a.editable)){const e=Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.v)(a,d);if(e)return u(Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.w)(e,a,d));t[a.name]=d}}for(const n of e.requiredFields)if(!f.has(n.name))return u(`missing required field "${n.name}"`);return null}function m(e,n){let i=n;return"string"==typeof n&&Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.p)(e)?i=parseFloat(n):null!=n&&Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.q)(e)&&"string"!=typeof n&&(i=String(n)),Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.t)(i)}let p;function h(t,n){if(!t||!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__.l)(n))return t;if("rings"in t||"paths"in t){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(n,t)}return t}async function y(t,n){!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__.l)(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await async function g(){return p||(p=await Promise.all([__webpack_require__.e(7),__webpack_require__.e(19)]).then(__webpack_require__.bind(null,"./node_modules/@arcgis/core/geometry/geometryEngineJSON.js")),p)}()}}}]);