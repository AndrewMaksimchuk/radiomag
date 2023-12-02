export const dialogComponents = {
  DialogGoods: "DialogGoods",
  DialogForm: "DialogForm",
} as const;

export type DialogComponent = keyof typeof dialogComponents;
