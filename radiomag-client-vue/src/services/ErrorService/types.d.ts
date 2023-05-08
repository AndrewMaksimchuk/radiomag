interface ErrorHandler {
  (struct: Record<string, unknown>): void;
}

export interface LogService {
  onError: ErrorHandler;
  onWarn: ErrorHandler;
  onDebug: ErrorHandler;
}
