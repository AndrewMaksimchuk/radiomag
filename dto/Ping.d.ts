import type { UserUniqueId } from "./User";

interface Base {
  user: UserUniqueId;
  time: number;
  action: "open window" | "go to page" | "action";
  payload?: unknown;
}

interface GoToPage extends Base {
  action: "go to page";
  from: Location["href"];
  to: Location["href"];
}

interface OpenWindow extends Base {
  action: "open window";
  window: string;
}

type ToDo = "cart add" | "cart remove";

interface Action extends Base {
  action: "action";
  todo: ToDo;
}

export type PingPayload = GoToPage | OpenWindow | Action;
