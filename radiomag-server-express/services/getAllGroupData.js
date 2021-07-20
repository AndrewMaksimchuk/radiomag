const https = require("https");

/**
 * @param {String} id - Number of goods group.
 * @returns Promise
 */
function getAllGroupInfo(id) {
	const urlRcs = `https://www.rcscomponents.kiev.ua/modules.php?name=Asers_Shop&s_op=productlist_json&group_id=${id}&lang=ukrainian`;

	return new Promise((resolve, reject) => {
		https
			.get(urlRcs, res => {
				let rawData = "";

				res.on("data", chunk => {
					rawData += chunk;
				});

				res.on("end", () => {
					try {
						const jsonData = JSON.parse(rawData);
						resolve(jsonData);
					} catch (error) {
						console.error(`Got error: ${error.message}`);
						reject(error.message);
					}
				});
			})
			.on("error", error => {
				reject(error);
			});
	});
}

module.exports = getAllGroupInfo;
