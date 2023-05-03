import type { Ref } from "vue";

type ComponentInterface = Ref<{ useValidation: () => boolean } | null>;

export const validateComponents = <T extends ComponentInterface[]>(
  componentsRefs: T
) => {
  return componentsRefs.some((ref) => ref.value?.useValidation());
};
