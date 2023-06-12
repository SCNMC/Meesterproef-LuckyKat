<script>
	import HeaderLuckykat from "$lib/components/homepageComponents/HeaderLuckykat.svelte";
	import Hero from "$lib/components/homepageComponents/Hero.svelte";
	import Usps from "$lib/components/homepageComponents/Usps.svelte";
  import Uspsvideo from "$lib/components/homepageComponents/Uspsvideo.svelte";
  import Collaborations from "$lib/components/homepageComponents/Collaborations.svelte";
  import Uspsimage from "$lib/components/homepageComponents/Uspsimage.svelte";
  import Footer from "$lib/components/homepageComponents/Footer.svelte";
  import CalltoAction from "$lib/components/homepageComponents/CalltoAction.svelte";
  import ColorBlocks from "$lib/components/aboutComponents/ColorBlocks.svelte";

	export let data;
	const { document } = data;

	import { onMount } from "svelte";
	import { gsap } from "gsap/dist/gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);  

gsap.utils.toArray(".wrapper").forEach(function(container) {
    let image = container.querySelector("img");
  
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false,
        },
      }); 
      tl.from(image, {
        yPercent: -25,
        ease: "none",
      }).to(image, {
        yPercent: 8,
        ease: "none",
      }); 
  });
	});
</script>

<HeaderLuckykat />
<Hero 
heroTitle="LUCKY KAT"
heroLogo="/assets/logo.svg"
heroButton="Scroll down..."
buttonImage ="/assets/scrolldown.png"
/>
<!-- {#each data.document as data} -->
<Uspsvideo
	textColor="#6A5ACD"
	buttonColor="#FFDB58"
	uspTitle={document[1].data.title}
	uspVideo={document[0].data.video.embed_url}
	uspDescription={document[1].data.description}
	uspButton={document[1].data.infobutton}
/>
<Uspsvideo
	textColor="#008080"
	buttonColor="#FF6F61"
	uspTitle={document[2].data.title}
uspVideo={document[2].data.video.embed_url}
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
<ColorBlocks/>
<Footer/>



