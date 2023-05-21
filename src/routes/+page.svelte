<script>
	import HeaderLuckykat from "$lib/components/homepageComponents/HeaderLuckykat.svelte";
	import Hero from "$lib/components/homepageComponents/Hero.svelte";
	import Usps from "$lib/components/homepageComponents/Usps.svelte";
  import Uspsvideo from "$lib/components/homepageComponents/Uspsvideo.svelte";
  import Collaborations from "$lib/components/homepageComponents/Collaborations.svelte";
  import Uspsimage from "$lib/components/homepageComponents/Uspsimage.svelte";
  import Footer from "$lib/components/homepageComponents/Footer.svelte";
  import CalltoAction from "$lib/components/homepageComponents/CalltoAction.svelte";
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
	uspTitle={document[2].data.title}
	uspImage={document[2].data.image}
	uspDescription={document[2].data.description}
	uspButton={document[2].data.infobutton}
/>
<Collaborations/>
<Usps
	textColor="#4169E1"
	buttonColor="#FFA14E"
	uspTitle={document[3].data.title}
	uspImage={document[3].data.image}
	uspDescription={document[3].data.description}
	uspButton={document[3].data.infobutton}
/>

<Uspsimage
	textColor="#8E4585"
	buttonColor="#FFBF00"
	uspTitle={document[0].data.title}
	uspImage={document[0].data.image}
	uspsecondImage={document[0].data.secondimage}
	uspDescription={document[0].data.description}
	uspButton={document[0].data.infobutton}
/>
<CalltoAction/>
<Footer/>



