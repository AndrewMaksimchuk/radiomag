import type { UserUniqueId } from "./User";

export interface Base {
  user: UserUniqueId;
  time: number;
  action: "open window" | "go to page" | "action";
  payload?: string | number | object | unknown[];
}

export interface GoToPage extends Base {
  action: "go to page";
  from: Location["href"];
  to: Location["href"];
}

export interface OpenWindow extends Base {
  action: "open window";
  window: string;
}

type ToDo = "cart add" | "cart remove";

export interface Action extends Base {
  action: "action";
  todo: ToDo;
}

export type PingPayload = GoToPage | OpenWindow | Action;
