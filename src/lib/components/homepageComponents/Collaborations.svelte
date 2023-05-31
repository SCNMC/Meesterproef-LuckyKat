<script>
	import { onMount } from "svelte";
	import { gsap } from "gsap/dist/gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import { onDestroy } from 'svelte';

	gsap.registerPlugin(ScrollTrigger);


	onMount(() => {
  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline();

  timeline.to('.poop', {
    xPercent: -150,
    ease: 'none',
    scrollTrigger: {
      trigger: '.poop',
      pin: '.pap',
      start: '45% 45%',
      end: '+=2000',
      scrub: .5,
    },
  });

  timeline.to('.peep', {
    xPercent: 150,
    ease: 'none',
    scrollTrigger: {
      trigger: '.peep',
      start: '3% 3%',
      end: '+=2000',
      scrub: .5,
    },
  });

  timeline.play();

  // Refresh ScrollTrigger on window resize
  const refreshScrollTrigger = () => {
    ScrollTrigger.refresh();
  };

  window.addEventListener('resize', refreshScrollTrigger);
});
	
	onDestroy(() => {
		ScrollTrigger.killAll();
	})
</script>

<section class="pap">
	<h2>Collaborations</h2>
	<div class="poop">
		<img   src="/assets/Alpha.png" alt="">
		<img  src="/assets/dominos.png" alt="">
		<img  src="/assets/dtc.png" alt="">
		<img  src="/assets/Elisestore.png" alt="">
		<img  src="/assets/fifa.png" alt="">
		<img  src="/assets/goal.png" alt="">
		<img lsrc="/assets/kampioenen.png" alt="">
	

	</div>
	<div class="peep">
		<img   src="/assets/niblr.png" alt="">
		<img   src="/assets/nike.png" alt="">
		<img  src="/assets/olympus.png" alt="">
		<img   src="/assets/papa-johns.png" alt="">
		<img  lsrc="/assets/skincarew.png" alt="">
		<img  src="/assets/studio-a12.png" alt="">
		<img   src="/assets/taco.png" alt="">

	</div>
</section>

<style>

	h2 {
		position: absolute;
		font-size: 1.5em;
	
	}

	.pap {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 8em;
min-height: 100vh;
z-index: -5;

		overflow-x: hidden;

	}


	section > div {
		display: flex;
		flex-direction: row;
		gap: 6em;
		position: relative;
	}
	.poop{
	transform: translateX(50%);
	}
	.peep{
		transform: translateX(-50%);
	}





	/* p::after {
		content: "-";
		display: inline-block;
		position: relative;
		top: 1px;
		left: 9px;
	} */
	p {
		font-size: 2em;
padding: .4em;
text-transform: uppercase;
font-weight: 600;

	}


	@media (min-width: 40rem) {
		h2 {
			font-size: 2em;
		}
		p {
			font-size: 2em;
		}
		img{
			width: 15em;
		}
	}

	@media (min-width: 75rem) {
		h2 {
			font-size: 4em;
		}
		p {
			font-size: 7.5em;
		}

		section {
			margin-bottom: 5em;
		}
		img{
			width: 20em;
		}
	}
</style>
