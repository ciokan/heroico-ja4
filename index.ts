export const config = {
	runtime: 'edge',
};

export default async function handler(req: Request) {
	return new Response(
		JSON.stringify(req.headers.toJSON()),
		{
			status : 200,
			headers: {
				'content-type': 'text/json',
			},
		}
	);
}
