import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import ProductsPage from "@/views/ProductsPage/ProductsPage.vue";
import router from "@/router";

export const buildWrapper = () => {
  const testPinia = createTestingPinia({
    initialState: {
      catalog: {
        allMenuGroups: [{ id: 1, img: "", name: "" }],
      },
    },
  });

  return shallowMount(ProductsPage, {
    global: {
      plugins: [testPinia, router],
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });
};
