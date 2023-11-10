import type { Meta, StoryObj } from "@storybook/vue3";
import UserLink from "./UserLinkComponent.vue";

const meta = {
  title: "User link component",
  component: UserLink,
} satisfies Meta<typeof UserLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  render: () => {
    return {
      components: { UserLink },
      template: "<UserLink />",
    };
  },
};
