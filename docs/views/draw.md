# Draw 画

## 示例

<demo-draw></demo-draw>

<code-details>
<<< @/.vitepress/components/views/draw/index.vue#snippet
</code-details>

## Props

| Name | Type | Summary |
| --- | --- | --- |
| point | [Symbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html) | the symbol of point |
| multipoint | Symbol | the symbol of multipoint |
| polyline | Symbol | the symbol of polyline |
| polygon | Symbol | the symbol of polygon |
| circle | Symbol | the symbol of circle |
| rectangle | Symbol | the symbol of rectangle |

## Methods

| Name | Args | Return | Summary |
| --- | --- | --- | --- |
| create | `(drawAction:string,drawOptions:{mode:string})` | DrawAction | Creates an instance of the requested draw action.see [draw.create()](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-draw-Draw.html#create) |
| clear | `(drawAction:string)` |  | Clear the drawn graphics |

## Events

| Name | Type | Summary |
| --- | --- | --- |
| [PointDrawAction Native Events](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-draw-PointDrawAction.html#events-summary) |  |  |
| [MultipointDrawAction Native Events](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-draw-MultipointDrawAction.html#events-summary) |  |  |
| [PolylineDrawAction Native Events](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-draw-PolylineDrawAction.html#events-summary) |  |  |
| [PolygonDrawAction Native Events](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-draw-PolygonDrawAction.html#events-summary) |  |  |
| init | Draw | Emit when component initialized |
