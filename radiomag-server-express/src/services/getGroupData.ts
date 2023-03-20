import type { Group } from "../../../dto/Group";
import https from "https";

export const getGroupInfo = (id: string | number) => {
  const urlRcs = `https://www.rcscomponents.kiev.ua/modules.php?name=Asers_Shop&s_op=productlist_json&group_id=${id}&lang=ukrainian`;

  return new Promise<Group>((resolve, reject) => {
    https
      .get(urlRcs, (res) => {
        let rawData = "";

        res.on("data", (chunk) => {
          rawData += chunk;
        });

        res.on("end", () => {
          try {
            const jsonData = JSON.parse(rawData);
            resolve(jsonData);
          } catch (error) {
            if (error instanceof Error) {
              console.error(`Got error: ${error.message}`);
              return reject(error.message);
            }
            return reject("ERROR");
          }
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};
