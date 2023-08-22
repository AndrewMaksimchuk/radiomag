import type { Meta, StoryObj } from "@storybook/vue3";
import ServerNotAvailable from "./ServerNotAvailableComponent.vue";

const meta = {
  title: "Server not available component",
  component: ServerNotAvailable,
} satisfies Meta<typeof ServerNotAvailable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Behavior: Story = {
  render: () => {
    return {
      components: { ServerNotAvailable },
      template: "<ServerNotAvailable />",
    };
  },
};
