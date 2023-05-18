<script>
	import HeaderLuckykat from "$lib/components/homepageComponents/HeaderLuckykat.svelte";
	import Hero from "$lib/components/homepageComponents/Hero.svelte";
	import Usps from "$lib/components/homepageComponents/Usps.svelte";
  import Uspsvideo from "$lib/components/homepageComponents/Uspsvideo.svelte";
  import Collaborations from "$lib/components/homepageComponents/Collaborations.svelte";
	import * as prismicH from "@prismicio/helpers";
	export let data;
	const { document } = data;
	console.log(document);
</script>

<HeaderLuckykat />
<Hero />
<!-- {#each data.document as data} -->
<Usps
	textColor="#6A5ACD"
	buttonColor="#FFDB58"
	uspTitle={document[1].data.title}
	uspImage={document[1].data.image}
	uspDescription={document[1].data.description}
	uspButton={document[1].data.infobutton}
/>
<Usps
	textColor="#008080"
	buttonColor="#FF6F61"
	uspTitle={document[0].data.title}
	uspImage={document[0].data.image}
	uspDescription={document[0].data.description}
	uspButton={document[0].data.infobutton}
/>
<Collaborations/>


<!-- {/each} -->
