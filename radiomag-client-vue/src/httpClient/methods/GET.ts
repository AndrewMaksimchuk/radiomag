const CACHE: Record<string, string | unknown | unknown[]> = {};

type FetchArg = Parameters<typeof fetch>[0];
export type ReturnData<UnknownData> = [Error, null] | [null, UnknownData];

export default async <T>(url: FetchArg): Promise<ReturnData<T>> => {
  try {
    if (CACHE[String(url)]) {
      return [null, CACHE[String(url)]] as [null, T];
    }

    const data = await fetch(url);
    const parsedData = await data.json();
    CACHE[String(url)] = parsedData;
    return [null, parsedData] as [null, T];
  } catch (error) {
    return [error, null] as [Error, null];
  }
};
