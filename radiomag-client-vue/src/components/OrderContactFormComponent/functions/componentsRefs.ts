import type { components } from "./components";
import { ref } from "vue";

export const useComponentsRefs = () => {
  const contact = ref<InstanceType<
    typeof components.OrderContactFormContact
  > | null>(null);

  const unit = ref<InstanceType<typeof components.OrderContactFormUnit> | null>(
    null
  );

  const subscriptions = ref<InstanceType<
    typeof components.OrderContactFormSubscriptions
  > | null>(null);

  const sending = ref<InstanceType<
    typeof components.OrderContactFormSending
  > | null>(null);

  const componentsRefs = [contact, sending, subscriptions, unit];

  return {
    componentsRefs,
  };
};
