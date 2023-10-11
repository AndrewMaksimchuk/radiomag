import type { PropType } from "vue";
import type { Columns } from "../../functions/types";
import { defineComponent } from "vue";
import { ElTableColumn } from "element-plus";

export default defineComponent({
  components: {
    ElTableColumn,
  },
  props: {
    dialogColumns: {
      required: true,
      type: Array as PropType<Columns>,
    },
  },
});
