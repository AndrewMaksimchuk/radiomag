import { describe, it, expect } from "vitest";
import messages from "@/languages/dictionary";

type Key = Record<string, string> | string;
type Data = Record<string, Key>;

const getNestedKeys = (data: Data, keys: string[]) => {
  if (typeof data == "object" && data !== null) {
    Object.keys(data).forEach((key) => {
      keys.push(key);
      const value = data[key];
      if (typeof value === "object" && value !== null) {
        getNestedKeys(value, keys);
      }
    });
  }
  return keys;
};

describe("Dictionary ", () => {
  it("should be the same", () => {
    const uaArr: string[] = [];
    const enArr: string[] = [];
    getNestedKeys(messages.ua, uaArr);
    getNestedKeys(messages.en, enArr);
    expect(uaArr).toMatchObject(enArr);
  });
});
