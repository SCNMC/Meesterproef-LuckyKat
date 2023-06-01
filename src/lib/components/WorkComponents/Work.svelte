<script>
	import * as prismicH from "@prismicio/helpers";
	export let workColor = `red`;
	export let width = `${4}rem`;
	export let workTitles;
	export let workImages;
	export let workVideo;
</script>

<section style="--color:{workColor};--width:{width}">
	<p>{@html prismicH.asText(workTitles)}</p>
	<div class="divs">
		<iframe src={workVideo} frameborder="" />
	</div>
	<!-- <img loading="lazy" src={prismicH.asImageSrc(workImages)} alt="#" /> -->
</section>

<style>
	.divs {
		position: relative;
		padding-top: 50.25%;
		border-radius: 1.9em;
	}
	iframe {
		position: absolute;
		top: 0;
		left: 0;
		border: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	section {
		padding: 0.5em;
		background: var(--color);
	}
	p {
		position: absolute;
		color: white;
		padding: 2em 1em;
		z-index: 995;
	}

	img {
		width: 100%;
		height: 35vh;
		object-fit: cover;
		border-radius: 0.5em;
	}

	@media (min-width: 60rem) {
		img {
			height: 40vh;
		}
		section {
			padding: 1em;
		}

		.divs {
			position: relative;
			padding-top: 43.99%;
		}

		p {
			font-size: 1em;
			font-weight: bold;
		}
	}
</style>
