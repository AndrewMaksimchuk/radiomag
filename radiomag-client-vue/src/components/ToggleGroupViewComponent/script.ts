import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: {
    change(payload: boolean) {
      return payload;
    },
  },
  setup(_props, ctx) {
    const state = ref<boolean>(false);

    const toggle = () => {
      state.value = !state.value;
      ctx.emit("change", state.value);
    };

    return {
      toggle,
    };
  },
});
