import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useGroup } from "@/store/group";
import fixture from "../mock/kits_group.json";

const i18nMock = () => {
  vi.mock("@/store/i18n", () => {
    return {
      useI18nStore: vi
        .fn()
        .mockImplementation(() => ({ t: (data: string) => data })),
    };
  });
};

const httpMock = () => {
  vi.mock("@/httpClient", () => {
    return {
      GET: {
        groupName: (id: number | string) => [null, String(id)],
        group: () => [null, fixture],
      },
    };
  });
};

class Worker {
  terminate() {
    return undefined;
  }
}
vi.stubGlobal("Worker", Worker);

let store: ReturnType<typeof useGroup>;

const buildStore = () => {
  i18nMock();
  httpMock();
  setActivePinia(createPinia());
  store = useGroup();
};

const groupId = 13;

describe("ComponentName", () => {
  beforeEach(() => buildStore());

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should be empty", () => {
    expect(store.length).toEqual(0);
  });

  it("should don`t have name", () => {
    expect(store.groupName).toEqual("");
  });

  describe("should load data", () => {
    it("should be in loading state", () => {
      store.load(groupId);
      expect(store.isLoading).toBe(true);
    });

    it("should load group data", async () => {
      await store.load(groupId);
      expect(store.getData(groupId)).toEqual(fixture);
    });

    it("should load group name", async () => {
      await store.load(groupId);
      expect(store.groupName).toEqual(String(groupId));
    });
  });

  describe("should have worker", () => {
    it("be create", () => {
      store.createWorker();
      expect(store.groupWorker).not.toBeUndefined();
    });

    it("be terminate", () => {
      store.terminateWorker();
      expect(store.groupWorker).toBeUndefined();
    });
  });
});
