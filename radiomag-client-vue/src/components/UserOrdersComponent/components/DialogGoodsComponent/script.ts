import type { PropType } from "vue";
import type { Columns } from "../../functions/types";
import { defineComponent } from "vue";
import { ElTableColumn } from "element-plus";
import CardLineImage from "@/components/CardLineImageComponent.vue";

export default defineComponent({
  components: {
    ElTableColumn,
    CardLineImage,
  },
  props: {
    dialogColumns: {
      required: true,
      type: Array as PropType<Columns>,
    },
  },
});
