import type { VueWrapper } from "@vue/test-utils";
import type { DefinedComponent } from "@vue/test-utils/dist/types";

export const isComponentRender = (
  wrapper: VueWrapper,
  component: DefinedComponent,
  name?: string
) => {
  it(`should render the component ${name ? name : ""}`, () => {
    expect(wrapper.findComponent(component).exists()).toBe(true);
  });
};
