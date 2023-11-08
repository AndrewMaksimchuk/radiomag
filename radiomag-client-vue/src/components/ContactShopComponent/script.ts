import type { ContactItemList } from "$/dto/Contacts";
import type { PropType } from "vue";
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    shopInfo: {
      required: true,
      type: Object as PropType<ContactItemList>,
    },
  },
  setup(props) {
    const formatPhoneNumber = computed(() => {
      return props.shopInfo.telephons.replaceAll("-", "");
    });

    return {
      formatPhoneNumber,
    };
  },
});
