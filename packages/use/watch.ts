import { SetupContext, watchEffect } from "vue-demi";

export function useWatch({ attrs, instance }: { attrs: SetupContext["attrs"]; instance: any }) {
  watchEffect(() => {
    Object.keys(attrs).forEach(key => {
      instance[key] = attrs[key];
    });
    instance?.refresh?.();
  });
}
