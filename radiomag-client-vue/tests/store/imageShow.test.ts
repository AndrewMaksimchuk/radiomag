import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useImageShow } from "@/store/imageShow";

let store: ReturnType<typeof useImageShow>;

const buildStore = () => {
  setActivePinia(createPinia());
  store = useImageShow();
};

beforeEach(() => {
  buildStore();
});

describe("ImageShow store", () => {
  it("should don`t show window when init", () => {
    expect(store.isVisible).toBe(false);
  });

  it("should show window", () => {
    store.show({ alt: "test", src: "/icon.jpg" });
    expect(store.isVisible).toBe(true);
  });

  it("should hide window", () => {
    store.show({ alt: "test", src: "/icon.jpg" });
    store.hide();
    expect(store.isVisible).toBe(false);
  });
});
