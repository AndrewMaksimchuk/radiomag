import { defineComponent } from "vue";
import { components } from "./scripts/components";
import { setup } from "./scripts/setup";
import "element-plus/es/components/form/style/css";
import "element-plus/es/components/form-item/style/css";
import "element-plus/es/components/input/style/css";
import "element-plus/es/components/text/style/css";

export default defineComponent({
  components,
  setup,
});
