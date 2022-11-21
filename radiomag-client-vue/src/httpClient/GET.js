/**
 * @returns Promise<[null, Record<string, any> | Array<Record<string, any>>] | [Error, null]>
 */
export default async (url) => {
    try {
        const data = await fetch(url);
        const parsedData = await data.json();
        return [ null, parsedData ];
    } 
    catch (error) {
        return [ error, null ];
    }
}
