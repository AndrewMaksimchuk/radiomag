import type { FormData } from "../../../dto/Order";

interface Option<T> {
  value: T;
  textI18nKey: string;
}

export type CreateFormOptions<T extends keyof FormData> = Option<FormData[T]>[];
