export interface SearchParams {
  filterIndex: number;
  filterItemValue: string;
}

export type AllSearchParams = Record<string | number, string[]>;

export type ApplyTarget = (arg: AllSearchParams) => unknown;
