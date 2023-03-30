import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { usePagination } from "@/store/pagination";

let store: ReturnType<typeof usePagination>;

const buildStore = () => {
  setActivePinia(createPinia());
  store = usePagination();
};

describe("Pagination store", () => {
  beforeEach(() => {
    buildStore();
  });

  it("should have property: length", () => {
    expect(store.length).toEqual(0);

    store.setLength(5);
    expect(store.length).toEqual(5);
  });

  it("should have property: activePage", () => {
    expect(store.activePage).toEqual(1);

    store.setActive(5);
    expect(store.activePage).toEqual(5);
  });

  it("should have property: quantity", () => {
    expect(store.quantity).toBeInstanceOf(Array);
    expect(store.quantity).toHaveLength(7);
  });

  it("should have property: onPage", () => {
    expect(store.onPage).toEqual(store.quantity[1]);

    store.setOnPage(store.quantity[4]);
    expect(store.onPage).toEqual(store.quantity[4]);
  });

  it("should have property: numberOfButtons", () => {
    store.length = 100;
    store.onPage = 10;
    expect(store.numberOfButtons).toEqual(10);
  });

  it("should have property: isLeftButtonDisabled", () => {
    store.activePage = 1;
    expect(store.isLeftButtonDisabled).toBe(true);

    store.activePage = 5;
    expect(store.isLeftButtonDisabled).toBe(false);
  });

  it("should have property: isRightButtonDisabled", () => {
    store.activePage = 1;
    store.length = 10;
    store.onPage = 10;
    expect(store.isLeftButtonDisabled).toBe(true);

    store.activePage = 5;
    expect(store.isLeftButtonDisabled).toBe(false);
  });

  it("should have property: whichButtonsDisplayed", () => {
    store.length = 10;
    store.onPage = 10;
    expect(store.whichButtonsDisplayed).toHaveLength(1);

    store.length = 100;
    store.onPage = 50;
    expect(store.whichButtonsDisplayed).toHaveLength(2);

    store.length = 1000;
    store.onPage = 30;
    expect(store.whichButtonsDisplayed).toHaveLength(10);
  });

  it("should have property: getRange", () => {
    store.activePage = 5;
    store.onPage = 30;
    expect(store.getRange).toEqual({ start: 120, end: 150 });
  });

  it("should be set property: activePage", () => {
    store.activePage = 5;
    store.moveLeft();
    expect(store.activePage).toEqual(4);

    store.activePage = 5;
    store.moveRight();
    expect(store.activePage).toEqual(6);

    store.activePage = 5;
    store.toFirst();
    expect(store.activePage).toEqual(1);

    store.toLast();
    expect(store.activePage).toEqual(store.numberOfButtons);
  });
});
