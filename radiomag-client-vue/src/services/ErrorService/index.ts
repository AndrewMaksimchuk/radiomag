import type { LogService } from "./types";
import LogEngine from "@/services/radiomagLogService";

class ErrorService {
  #logService: LogService;

  constructor(logService: LogService) {
    this.#logService = logService;
  }

  public globalError(struct: Record<string, unknown>, cb: () => void) {
    this.#logService.onError(struct);
    cb();
  }

  public globalWarn(struct: Record<string, unknown>) {
    this.#logService.onWarn(struct);
  }

  public error(struct: Record<string, unknown>) {
    this.#logService.onError(struct);
  }

  public warn(struct: Record<string, unknown>) {
    this.#logService.onWarn(struct);
  }

  public debug(struct: Record<string, unknown>) {
    this.#logService.onDebug(struct);
  }
}

let logService: ErrorService | undefined;

export const useLogService = function () {
  if (logService === undefined) {
    logService = new ErrorService(new LogEngine());
  }
  return logService;
};
