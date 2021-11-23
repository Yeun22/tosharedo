import axios from "axios";

export const authenticate = (email) => {
	console.log("la");
	return axios
		.get("https://127.0.0.1:8002/api/users?page=1&email=" + email)
		.then((response) => {
			const json = response.data;
			if (!json) {
				return [];
			}
			console.log(
				Object.keys(json).map((key) => {
					return { ...json[key], id: key };
				})
			);
		});
};
