<script>
	import { onMount } from "svelte";
	import { gsap } from "gsap/dist/gsap";
	import { onDestroy } from "svelte";
	
	onMount(() => {
		const collabAnimation = gsap.fromTo(
			".collabs_item",
			{ x: 0 },
			{
				x: "-40%",
				duration: 25,
				ease: "linear",
				repeat: -1, 
				repeatDelay: 0, 
			}
		);
		const collab2Animation = gsap.fromTo(
			".collabs_items",
			{ x: 0 },
			{
				x: "40%",
				duration: 25,
				ease: "linear",
				repeat: -1, 
				repeatDelay: 0, 
			}
		);
	});
</script>

<section class="collabs">
	<h2>Collaborations</h2>
	<div class="collabs_item">
		<p>Alpha</p>
		<p>ventilatie</p>
		<p>-</p>
		<p>FIFA</p>
		<p>ONLINE</p>
		<p>-</p>
		<p>Nike</p>
		<p>-</p>
		<p>Taco</p>
		<p>MUNDO</p>
		<p>-</p>
		<p>ELISE</p>
		<p>STORE</p>
	</div>
	<div class="collabs_items">
		<p>Uboss</p>
		<p>-</p>
		<p>Kampioenen</p>
		<p>zorg</p>
		<p>-</p>
		<p>OLYMPUS</p>
		<p>-</p>
		<p>PAPA</p>
		<p>JOHNS</p>
		<p>-</p>
		<p>STUDIO</p>
		<p>A12</p>
		<p>-</p>
	</div>
</section>

<style>
	h2 {
		font-size: 1.5em;
	}

	.collabs {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 5em;

		z-index: -5;
		margin-bottom: 10em;

		overflow-x: hidden;
	}

	section > div {
		display: flex;
		flex-direction: row;
		gap: 2em;
	}

	/* p::after {
		content: "-";
		display: inline-block;
		position: relative;
		top: 1px;
		left: 9px;
	} */
	p {
		color: white;
		-webkit-text-stroke-width: 2px;
		-webkit-text-stroke-color: black; /* Can be changed in the live sample */
		font-size: 2em;
		text-transform: uppercase;
		font-weight: 600;
	}

	@media (min-width: 40rem) {
		h2 {
			font-size: 2em;
		}
		p {
			font-size: 5em;
			-webkit-text-stroke-width: 4px;
		}
		img {
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
		img {
			width: 20em;
		}
	}
</style>
