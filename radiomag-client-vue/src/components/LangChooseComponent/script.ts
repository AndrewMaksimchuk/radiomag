import { defineComponent, ref } from "vue";
import { useI18nStore } from "@/store/i18n";
import { PingService } from "@/services/PingService";

export default defineComponent({
  emits: {
    "on-open"(data: boolean) {
      return data;
    },
    "on-close"() {
      return true;
    },
  },
  setup(_props, { emit }) {
    const useI18n = useI18nStore();
    const isOpen = ref(false);

    const toggle = () => {
      isOpen.value = !isOpen.value;
      isOpen.value ? emit("on-open", isOpen.value) : emit("on-close");
    };

    const close = () => {
      isOpen.value = false;
      emit("on-close");
    };

    const choose = (value: string) => {
      if (value === useI18n.locale) {
        return (isOpen.value = false);
      }

      PingService.ping({
        action: "open window",
        window: "LangChooseComponent",
        payload: value,
      });

      useI18n.setLocale(value);
      close();
    };

    return {
      useI18n,
      isOpen,
      toggle,
      choose,
    };
  },
});
