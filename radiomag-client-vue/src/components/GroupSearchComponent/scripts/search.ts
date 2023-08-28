import type { WorkerProduct } from "@/public/types";
import Fuse from "fuse.js";

const options = {
  keys: ["id", "articul", "description"],
};

export const fuseSearch = (list: WorkerProduct[], input: string) => {
  const fuse = new Fuse(list, options);
  return fuse.search<WorkerProduct>(input).map((goods) => {
    return goods.item;
  });
};
