import type { Meta, StoryObj } from "@storybook/vue3";
import SpinnerLoader from "./SpinnerLoader.vue";

const meta = {
  title: "Spinner loader component",
  component: SpinnerLoader,
  tags: ["autodocs"],
} satisfies Meta<typeof SpinnerLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Behavior: Story = {
  args: {
    isVisible: true,
  },
  render: (args) => {
    return {
      components: { SpinnerLoader },
      setup() {
        return { args };
      },
      template: '<SpinnerLoader v-bind="args"/>',
    };
  },
};
