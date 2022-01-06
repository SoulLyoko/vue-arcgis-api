import { watch, SetupContext } from "vue-demi";

export function useWatch({ attrs, instance }: { attrs: SetupContext["attrs"]; instance: any }) {
  watch(
    () => attrs,
    val => {
      Object.keys(val).forEach(key => {
        instance[key] = val[key];
      });
      instance?.refresh?.();
    }
    // { deep: true }
  );
}
