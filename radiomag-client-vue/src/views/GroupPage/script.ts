import { defineComponent } from "vue";
import { useGroup } from "@/store/group";
import { getFilteredGoods } from "./scripts/getFilteredGoods";
import { resetGoods } from "./scripts/resetGoods";
import { useSearch } from "./scripts/useSearch";
import { useWatch } from "./scripts/useWatch";
import { useToShow } from "./scripts/useToShow";
import { useDataLength } from "./scripts/useDataLength";
import { useOnBeforeMount } from "./scripts/useOnBeforeMount";
import { useOnBeforeUnmount } from "./scripts/useOnBeforeUnmount";
import { useEmpty } from "./scripts/useEmpty";
import { useToggleView } from "./scripts/useToggleView";
import { useIntersectionObserver } from "./scripts/useIntersectionObserver";
import { components } from "./scripts/components";

export default defineComponent({
  components,
  setup() {
    const store = useGroup();
    const { allDataToShow, allFilters, filterHeaders } = useOnBeforeMount();
    const { toShow } = useToShow(allDataToShow);
    const { allDataToShowLength } = useDataLength(allDataToShow);
    const { searchShow, searchReset } = useSearch(allDataToShow);
    const { isEmpty } = useEmpty(allDataToShowLength);
    const { view, toggleView } = useToggleView(["CardLine", "CardTable"]);
    useWatch(view);
    useIntersectionObserver();
    useOnBeforeUnmount();

    return {
      store,
      filterHeaders,
      allFilters,
      getFilteredGoods,
      resetGoods,
      allDataToShow,
      allDataToShowLength,
      isEmpty,
      toShow,
      searchShow,
      searchReset,
      view,
      toggleView,
    };
  },
});
