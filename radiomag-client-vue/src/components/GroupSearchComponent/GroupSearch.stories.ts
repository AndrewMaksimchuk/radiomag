import type { Meta, StoryObj } from "@storybook/vue3";
import GroupSearch from "./GroupSearchComponent.vue";

const meta = {
  title: "Group search component",
  component: GroupSearch,
} satisfies Meta<typeof GroupSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  render: () => {
    return {
      components: { GroupSearch },
      template: "<GroupSearch />",
    };
  },
};
