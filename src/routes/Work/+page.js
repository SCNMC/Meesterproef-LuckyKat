
import createClient from '$lib/prismicClient.js'

export async function load({ fetch, request, params }) {

	const { uid } = params;
	const client = createClient({ fetch, request });
	const document = await client.getAllByType('work' , uid);
    console.log(document)
	if(document) {
		return  {document} 
	}

	error(404, 'Not found');
}
