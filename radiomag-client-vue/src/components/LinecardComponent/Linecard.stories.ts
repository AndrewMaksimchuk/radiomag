import type { Meta, StoryObj } from "@storybook/vue3";
import Linecard from "./LinecardComponent.vue";

const meta = {
  title: "Linecard component",
  component: Linecard,
  tags: ["autodocs"],
} satisfies Meta<typeof Linecard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  render: () => {
    return {
      components: { Linecard },
      template: "<Linecard />",
    };
  },
};
