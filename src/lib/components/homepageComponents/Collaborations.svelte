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
    x: '-150%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.poop',
      pin: '.pap',
      start: '40% 40%',
      end: '+=2000',
      scrub: 1,
    },
  });

  timeline.to('.peep', {
    x: '150%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.peep',
      start: '60% 60%',
      end: '+=2000',
      scrub: 1,
    },
  });

  timeline.play();

  // Refresh ScrollTrigger on window resize
  let resizeTimeout;

const refreshScrollTrigger = () => {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      ScrollTrigger.refresh();
    }, 600); // Adjust the timeout duration as needed
  }
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
		<img src="/assets/kampioenen.png" alt="">
	

	</div>
	<div class="peep">
		<img   src="/assets/niblr.png" alt="">
		<img   src="/assets/nike.png" alt="">
		<img  src="/assets/olympus.png" alt="">
		<img   src="/assets/papa-johns.png" alt="">
		<img  src="/assets/skincarew.png" alt="">
		<img  src="/assets/studio-a12.png" alt="">
		<img   src="/assets/taco.png" alt="">

	</div>
</section>

<style>

	h2 {

		font-size: 1.5em;
	
	}

	.pap {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2em;
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
position: relative;
	transform: translateX(50%);
	will-change: transform, opacity;
	}
	.peep{
position: relative;
		transform: translateX(-50%);

		will-change: transform, opacity;
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
