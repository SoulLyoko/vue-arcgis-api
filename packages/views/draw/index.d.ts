declare const _default: import("vue-demi").DefineComponent<
  {
    point: {
      type: ObjectConstructor;
      default: () => {
        type: string;
        color: number[];
        size: string;
        outline: {
          color: number[];
          width: number;
        };
      };
    };
    polyline: {
      type: ObjectConstructor;
      default: () => {
        type: string;
        color: number[];
        width: string;
      };
    };
    polygon: {
      type: ObjectConstructor;
      default: () => {
        type: string;
        color: number[];
        outline: {
          color: number[];
          width: number;
        };
      };
    };
  },
  () => void,
  unknown,
  {},
  {},
  import("vue-demi").ComponentOptionsMixin,
  import("vue-demi").ComponentOptionsMixin,
  Record<string, any>,
  string,
  import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps,
  Readonly<
    {
      point?: unknown;
      polyline?: unknown;
      polygon?: unknown;
    } & {
      point: Record<string, any>;
      polyline: Record<string, any>;
      polygon: Record<string, any>;
    } & {}
  >,
  {
    point: Record<string, any>;
    polyline: Record<string, any>;
    polygon: Record<string, any>;
  }
>;
export default _default;
