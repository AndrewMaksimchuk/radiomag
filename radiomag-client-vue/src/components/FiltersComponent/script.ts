import type { PropType } from "vue";
import type { FiltersItemsMod } from "$/dto/Group";
import type { AllSearchParams } from "@/store/filters";
import { defineComponent } from "vue";
import { useFilters } from "@/store/filtes";
import { Filter } from "@/components";

export default defineComponent({
  components: {
    Filter,
  },
  props: {
    headers: {
      require: true,
      type: Array as PropType<string[]>,
    },
    data: {
      require: true,
      type: Array as PropType<FiltersItemsMod>,
    },
  },
  emits: {
    filtersApply(payload: AllSearchParams) {
      return payload;
    },
    filtersReset() {
      return true;
    },
  },
  setup(_props, ctx) {
    const store = useFilters();

    const reset = () => {
      store.reset();
      ctx.emit("filtersReset");
    };

    return {
      store,
      reset,
    };
  },
});
