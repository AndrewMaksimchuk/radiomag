import type { Meta, StoryObj } from "@storybook/vue3";
import ToggleGroupView from "./ToggleGroupViewComponent.vue";

const meta = {
  title: "Toggle group view component",
  component: ToggleGroupView,
} satisfies Meta<typeof ToggleGroupView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  render: () => {
    return {
      components: { ToggleGroupView },
      template: "<ToggleGroupView />",
    };
  },
};
