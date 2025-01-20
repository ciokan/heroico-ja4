import {type Server} from "bun";

export default {
	async fetch(request: Request, server: Server) {
		return new Response(JSON.stringify(request.headers.toJSON()), {
			status : 200,
			headers: {"Content-Type": "application/json"},
		});
	}
};
