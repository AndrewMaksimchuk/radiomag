import type { LogService } from "./ErrorService/types";
import { POST } from "@/httpClient";

export default class RadiomagLogEngine implements LogService {
  onError(data: Record<string, unknown>) {
    console.error(data);
    POST.error({ level: "error", ...data });
  }

  onWarn(data: Record<string, unknown>) {
    console.warn(data);
  }

  onDebug(data: Record<string, unknown>) {
    console.debug(data);
  }
}
