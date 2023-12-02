import type { DOMWrapper } from "@vue/test-utils";
import type { BuildWrapper } from "./buildWrapper";
import { describe, it, expect } from "vitest";
import { nextTick } from "vue";
import { ElButton } from "element-plus";

export const testGoodsColumn = (
  findTableColumns: () => DOMWrapper<HTMLTableCellElement>[],
  wrapper: BuildWrapper
) => {
  return describe("goods column", () => {
    const column = findTableColumns()[3];
    const button = column.findComponent(ElButton);

    it("should have button", () => {
      expect(button.exists()).toBe(true);
    });

    it("should have button with text", async () => {
      expect(button.text()).toContain(
        "orders.window.orders.tableBody.showGoods"
      );
    });

    it("should show goods details modal window", async () => {
      await button.trigger("click");
      await nextTick();
      expect(wrapper.vm.showDetails.calls.at(-1)[0]).toEqual("DialogGoods");
    });
  });
};
