import type { PingPayload } from "../../../dto/Ping";
import { POST } from "@/httpClient";
import { useUser } from "@/store/user";

type Remove<T> = T extends PingPayload
  ? Omit<T, "time" | "user" | "from" | "userRole">
  : never;

type PingData = Remove<PingPayload>;

export class PingService {
  public static async ping(data: PingData) {
    const time = Date.now();
    const userData = useUser();
    const user = userData.user.id;
    const userRole = userData.user.role;

    if ("go to page" === data.action) {
      const from = document.location.pathname;
      return POST.ping({ ...data, time, user, userRole, from });
    }

    POST.ping({ ...data, time, user, userRole });
  }
}
