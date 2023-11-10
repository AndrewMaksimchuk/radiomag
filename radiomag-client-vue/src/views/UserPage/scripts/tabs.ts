type i18nString = string;

export type TabName =
  | "orders"
  | "history"
  | "notification"
  | "tracking"
  | "messages"
  | "settings";

export interface Tab {
  label: i18nString;
  name: TabName;
  component: string;
  disabled: boolean;
}

export const tabs: Readonly<Tab[]> = [
  {
    label: "userPage.tabs.orders",
    name: "orders",
    component: "UserOrders",
    disabled: false,
  },
  {
    label: "userPage.tabs.history",
    name: "history",
    component: "UserHistory",
    disabled: true,
  },
  {
    label: "userPage.tabs.notification",
    name: "notification",
    component: "UserNotification",
    disabled: true,
  },
  {
    label: "userPage.tabs.tracking",
    name: "tracking",
    component: "UserTracking",
    disabled: true,
  },
  {
    label: "userPage.tabs.messages",
    name: "messages",
    component: "UserMessages",
    disabled: true,
  },
  {
    label: "userPage.tabs.settings",
    name: "settings",
    component: "UserSettings",
    disabled: true,
  },
];
