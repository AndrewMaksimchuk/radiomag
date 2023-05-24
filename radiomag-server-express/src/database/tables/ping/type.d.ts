import type {
  Base,
  GoToPage,
  OpenWindow,
  Action,
} from "../../../../../dto/Ping";

export type PingModel = Base &
  Pick<GoToPage, "from" | "to"> &
  Pick<OpenWindow, "window"> &
  Pick<Action, "todo">;
