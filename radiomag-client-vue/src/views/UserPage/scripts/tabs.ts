type i18nString = string;

export interface Tab {
  label: i18nString;
  name: string;
  component: string;
  [key: string]: string;
}

export const tabs: Tab[] = [
  {
    label: "userPage.tabs.orders",
    name: "orders",
    component: "UserOrders",
  },
  {
    label: "userPage.tabs.history",
    name: "history",
    component: "UserHistory",
  },
  {
    label: "userPage.tabs.notification",
    name: "notification",
    component: "UserNotification",
  },
  {
    label: "userPage.tabs.tracking",
    name: "tracking",
    component: "UserTracking",
  },
  {
    label: "userPage.tabs.settings",
    name: "settings",
    component: "UserSettings",
  },
];
