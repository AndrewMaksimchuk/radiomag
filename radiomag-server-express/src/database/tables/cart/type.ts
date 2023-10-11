type JSONString = string;

export interface CartTableRow {
  id: number;
  items: JSONString;
  totalCost: string | null;
}
