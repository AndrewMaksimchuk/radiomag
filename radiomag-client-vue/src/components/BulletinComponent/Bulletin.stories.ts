import type { Meta, StoryObj } from "@storybook/vue3";
import Bulletin from "./BulletinComponent.vue";

const meta = {
  title: "Bulletin component",
  component: Bulletin,
  tags: ["autodocs"],
} satisfies Meta<typeof Bulletin>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  render: () => {
    return {
      components: { Bulletin },
      template: "<Bulletin />",
    };
  },
};
