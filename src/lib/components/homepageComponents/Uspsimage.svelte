<script>
	import * as prismicH from "@prismicio/helpers";
	export let uspTitle;
	export let uspImage;
	export let uspDescription;
	export let uspButton;
	export let uspsecondImage;
	export let textColor = `red`;
	export let width = `${4}rem`;
	export let buttonColor = `red`;

	import { onMount } from "svelte";
	import { gsap } from "gsap/dist/gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.utils.toArray(".parralax-wrapper").forEach(function (container) {
			let image = container.querySelector(".rightImage");

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
				yPercent: 9,
				ease: "none",
			});
		});
		gsap.utils.toArray(".parralax-wrapper").forEach(function (container) {
			let image = container.querySelector(".leftImage");

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
				yPercent: 9,
				ease: "none",
			});
		});
	});
</script>

<section class="parralax-wrapper">
	<h2>{@html prismicH.asText(uspTitle)}</h2>
	<section class="images">
		<img
			class="leftImage"
			loading="lazy"
			src={prismicH.asImageSrc(uspImage)}
			alt="#"
		/>
		<img
			class="rightImage"
			loading="lazy"
			src={prismicH.asImageSrc(uspsecondImage)}
			alt="#"
		/>
	</section>

	<div>
		<p style="--color:{textColor};--width:{width}"
			>{@html prismicH.asHTML(uspDescription)}</p
		>
		<button style="--color:{buttonColor};--width:{width}"
			><a href="">{@html prismicH.asHTML(uspButton)}</a>
			<img src="/assets/arrowup.png" alt="arrowicon" /></button
		>
	</div>
</section>

<style>
	.parralax-wrapper {
		position: relative;
		overflow: hidden;
	}

	section {
		/* height: 100vh; */
		display: flex;
		flex-direction: column;
		z-index: -4;
		/* margin-bottom: 8em; */
	}
	section > img {
		width: 100%;
		height: 45vh;
		object-fit: cover;
		position: relative;
	}

	div {
		display: grid;
		grid-template-columns: 1fr;
		position: sticky;
		margin-top: -3.2em;
	}

	h2 {
		position: absolute;
		background-color: white;
		border-bottom-right-radius: 1em;
		padding: 1em 2em;
		margin-top: -1em;
		height: 1em;
		z-index: 3;
	}

	h2::after {
		content: "";
		position: absolute;
		border-width: 1px 0 0 1px;
		border-style: solid;
		border-color: inherit;
		width: 2rem;
		height: 1rem;
		border-top-left-radius: 1.6rem;
		box-shadow: -0.29rem -0.7rem 0 0.27rem;
		right: -2rem;
		color: white;
		margin-top: -0.1em;
	}
	p {
		background: var(--color);
		color: white;
		padding: 1.5em;
		text-align: center;
	}
	button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 4em;
		font-size: 0.8em;
		gap: 1em;
		background: var(--color);
	}

	button > img {
		width: 2.5em;
	}

	@media (min-width: 40rem) {
		h2::after {
			border-width: 2.5px 0 0 1px;
		}
		.images {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0px 0px;
		}
		h2 {
			font-size: 1.5em;
		}
		button {
			font-size: 0.9em;
		}
	}

	@media (min-width: 75rem) {
		h2 {
			font-size: 2.9em;
		}

		h2::after {
			border-width: 4px 0 0 1px;
			height: 3rem;
			width: 2.5rem;
			bottom: 2.8rem;
			right: -2.5rem;
		}
		p {
			text-align: center;
			font-size: 1.4em;
			padding: 1.8em;
		}
		section > img {
			height: 65vh;
		}
		button {
			font-size: 1.4em;
		}
	}
</style>
