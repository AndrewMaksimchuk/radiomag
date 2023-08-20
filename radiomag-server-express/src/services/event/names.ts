export const eventName = {
  bulletin: "bulletin",
} as const;

export type RadiomagEventName = keyof typeof eventName;
