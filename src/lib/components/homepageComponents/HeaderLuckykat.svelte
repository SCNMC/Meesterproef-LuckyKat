<script>
	import Logo from "./Logos.svelte";
    import Navs from "./Navs.svelte";

	import { gsap } from "gsap/dist/gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import { onMount } from "svelte";
	
	onMount(() => {
		const showAnim = gsap.from('header', { 
  yPercent: -100,
  paused: true,
  duration: 0.3
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  }
});
});

</script>

<header>
	<Logo title="Luckykat"
	/>
    	<Navs/>
</header>

<style>
    header{
        display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
        background-color: black;
		padding: .5em .5em;
    }
</style>