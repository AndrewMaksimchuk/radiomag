import { defineComponent } from "vue";
import { ElRow, ElCol, ElButton } from "element-plus";
import { useUser } from "@/store/user";
import "element-plus/es/components/button/style/css";
import "element-plus/es/components/row/style/css";
import "element-plus/es/components/col/style/css";

export default defineComponent({
  components: {
    ElRow,
    ElCol,
    ElButton,
  },
  setup() {
    const userStore = useUser();

    const onLogout = () => {
      return "User logout";
    };

    return {
      userStore,
      onLogout,
    };
  },
});
