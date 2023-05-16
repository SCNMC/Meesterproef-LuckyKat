import createClient from '$lib/prismicClient'

export async function load({ fetch, request }) {
    const uspUID = 'usp'
	const client = createClient({ fetch, request });
	const document = await client.getAllByType('usp', uspUID);

  console.log(document);

	if (document) {
		return { document };
	}

	error(404, 'Not found');
}