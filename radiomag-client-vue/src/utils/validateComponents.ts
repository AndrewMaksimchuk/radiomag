import type { Ref } from "vue";

export type ComponentInterface = Ref<{ useValidation: () => boolean } | null>;

export const validateComponents = <T extends ComponentInterface[]>(
  componentsRefs: T
) => {
  return componentsRefs.some((ref) => {
    return ref.value?.useValidation();
  });
};
