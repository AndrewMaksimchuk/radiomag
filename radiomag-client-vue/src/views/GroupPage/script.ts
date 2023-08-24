import { defineComponent } from "vue";
import { useGroup } from "@/store/group";
import { getFilteredGoods } from "./scripts/getFilteredGoods";
import { resetGoods } from "./scripts/resetGoods";
import { useWatch } from "./scripts/useWatch";
import { useToShow } from "./scripts/useToShow";
import { useDataLength } from "./scripts/useDataLength";
import { useOnBeforeMount } from "./scripts/useOnBeforeMount";
import { useOnBeforeUnmount } from "./scripts/useOnBeforeUnmount";
import { useEmpty } from "./scripts/useEmpty";
import { SkeletonGroup } from "@/components/SkeletonGroupComponent";
import Pagination from "@/components/PaginationComponent.vue";
import CardLine from "@/components/CardLineComponent.vue";
import ErrorMessageInGroup from "@/components/ErrorMessageInGroup.vue";
import Filters from "@/components/FiltersComponent.vue";

export default defineComponent({
  components: {
    SkeletonGroup,
    Pagination,
    CardLine,
    ErrorMessageInGroup,
    Filters,
  },
  setup() {
    const store = useGroup();
    const { allDataToShow, allFilters, filterHeaders } = useOnBeforeMount();
    const { toShow } = useToShow(allDataToShow);
    const { allDataToShowLength } = useDataLength(allDataToShow);
    const { isEmpty } = useEmpty(allDataToShowLength);
    useWatch();
    useOnBeforeUnmount();

    return {
      store,
      filterHeaders,
      allFilters,
      getFilteredGoods,
      resetGoods,
      allDataToShowLength,
      isEmpty,
      toShow,
    };
  },
});
