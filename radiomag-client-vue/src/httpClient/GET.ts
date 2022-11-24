// TODO: Add cache
// { [url]: data_of_url }

type FetchArg = Parameters<typeof fetch>[0]

export default async <T>(url: FetchArg) => {
    try {
        const data = await fetch(url);
        const parsedData= await data.json();
        return [null, parsedData] as [null, T];
    } 
    catch (error) {
        return [error, null] as [Error, null];
    }
}
