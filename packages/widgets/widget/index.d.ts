declare const _default: import("vue-demi").DefineComponent<
  {
    module: {
      type: StringConstructor;
    };
    position: {
      type: StringConstructor;
      default: string;
    };
  },
  () => any,
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
      module?: unknown;
      position?: unknown;
    } & {
      position: string;
    } & {
      module?: string | undefined;
    }
  >,
  {
    position: string;
  }
>;
export default _default;
