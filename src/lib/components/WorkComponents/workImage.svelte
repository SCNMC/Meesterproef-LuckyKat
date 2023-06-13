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
	<img loading="lazy" src={prismicH.asImageSrc(workImages)} alt="#" />
</section>

<style>
	section {
		padding: 0.5em;
		background: var(--color);
	}
	p {
		position: absolute;
		color: white;
		padding: 1em 1em;
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
			height: 22vh;
		}
		section {
			padding: 2em;
		}
	}
</style>
