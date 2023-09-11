import type { UserRegistration, UserClientData } from "$/dto/User";

export interface DefaultResponse {
  ok: boolean;
  message?: string;
}

export interface Login {
  url: "/api/login";
  request: UserRegistration;
  response: UserClientData | DefaultResponse;
}
