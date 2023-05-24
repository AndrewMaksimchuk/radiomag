import type { PingPayload } from "../../../dto/Ping";
import { POST } from "@/httpClient";
import { useUser } from "@/models/user";

type Remove<T> = T extends PingPayload
  ? Omit<T, "time" | "user" | "from">
  : never;

type PingData = Remove<PingPayload>;

export class PingService {
  public static async ping(data: PingData) {
    const time = Date.now();
    const user = useUser().value.id;

    if (data.action === "go to page") {
      const from = document.location.pathname;
      return POST.ping({ ...data, time, user, from });
    }

    POST.ping({ ...data, time, user });
  }
}
