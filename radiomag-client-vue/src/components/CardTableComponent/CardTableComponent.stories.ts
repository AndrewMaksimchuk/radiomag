import type { Meta, StoryObj } from "@storybook/vue3";
import CardTable from "./CardTableComponent.vue";
import product from "../../../tests/mock/workerProduct.json";

const meta = {
  title: "Card table component",
  component: CardTable,
} satisfies Meta<typeof CardTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    product,
    filterHeaders: ["Description"],
  },
  render: (args) => {
    return {
      components: { CardTable },
      setup() {
        return { args };
      },
      template: '<CardTable v-bind="args" />',
    };
  },
};
