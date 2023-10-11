/* eslint-disable max-lines */
import type { Store } from "./testFunctions/buildStore";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mockStoreI18n } from "tests/mock/mockStoreI18n";
import { buildStore } from "./testFunctions/buildStore";

let store: Store;
mockStoreI18n();

vi.mock("./functions/useNotification", () => {
  return {
    useNotification: () => {
      return {
        notifyError: (text: string) => {
          return text;
        },
      };
    },
  };
});

vi.mock("@/httpClient", () => {
  return {
    POST: {
      order: () => {
        return Promise.resolve(undefined);
      },
    },
  };
});

beforeEach(() => {
  store = buildStore();
});

describe("Orders store", () => {
  it("should be empty", () => {
    expect(store.orders.length).toEqual(0);
  });

  it("should be in loading state", async () => {
    store.getOrders();
    expect(store.isLoading).toBe(true);
  });

  it("should be in not loading state", async () => {
    await store.getOrders();
    expect(store.isLoading).toBe(false);
  });

  it("should not make request to server", async () => {
    store.orders.length = 3;
    const response = await store.getOrders();
    expect(response).toBeUndefined();
  });

  it("should show notification, bad response", async () => {
    const response = await store.getOrders();
    expect(response).toEqual("orders.notify.bad");
  });

  it("should show notification, server error", async () => {
    const { POST } = await import("@/httpClient");
    POST.order = vi.fn().mockResolvedValue({
      ok: false,
    });
    const response = await store.getOrders();
    expect(response).toEqual("orders.notify.unknown");
  });

  it("should show notification, is not orders", async () => {
    const { POST } = await import("@/httpClient");
    POST.order = () => {
      return Promise.resolve({
        ok: true,
      });
    };
    const response = await store.getOrders();
    expect(response).toEqual("orders.notify.unknown");
  });

  it("should show notification, orders not provided", async () => {
    const { POST } = await import("@/httpClient");
    POST.order = () => {
      return Promise.resolve({
        ok: true,
        orders: undefined,
      });
    };
    const response = await store.getOrders();
    expect(response).toEqual("orders.notify.notProvide");
  });

  it("should have error", async () => {
    const { POST } = await import("@/httpClient");
    POST.order = () => {
      throw new Error("Request throw error");
    };
    const response = await store.getOrders();
    expect(response).toEqual("orders.notify.unknown");
  });
});
