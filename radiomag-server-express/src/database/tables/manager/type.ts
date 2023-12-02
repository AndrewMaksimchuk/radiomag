export interface ManagerTable {
  id: number;
  active: number | boolean; // Must be boolean but sqlite not have this type, emulate by integer number
  shopId: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  messenger_telegram: string;
}
