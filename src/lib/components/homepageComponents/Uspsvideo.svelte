<script>
	import * as prismicH from "@prismicio/helpers";
	export let uspTitle;
	export let uspImage;
	export let uspDescription;
	export let uspButton;
	export let textColor = `red`;
	export let width = `${4}rem`;
	export let buttonColor = `red`;
	export let uspVideo;
</script>

<section>
	<h2>{@html prismicH.asText(uspTitle)}</h2>
	<div class="divie">
		<div>
			<iframe
				src={uspVideo}
				title="Iframe-video"
				frameborder="0"
				allow="autoplay; fullscreen; picture-in-picture"
				allowfullscreen
				style="position:absolute;top:0;left:0;width:100%;height:100%;"
				autopause="0"
			/></div
		>
	</div>
	<div class="info">
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
	.divie {
		position: relative;
		overflow: hidden;
		padding-bottom: 43%;
		width: 100%;
	}

	iframe {
		position: relative;
		top: 0;
		left: 0;
		border: 0;
		z-index: -3;
	}
	section {
		/* height: 100vh; */
		width: 100%;
		margin-bottom: 10em;
	}
	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	div {
		display: grid;
		grid-template-columns: 1fr;
	}

	h2 {
		position: absolute;
		background-color: white;
		padding: 1em 2em;
		border-bottom-right-radius: 1em;
		z-index: -1;
		margin-top: -1em;
		height: 1em;
	}

	h2::after {
		content: "";
		position: absolute;
		border-width: 2px 0 0 1px;
		border-style: solid;
		border-color: inherit;
		width: 2rem;
		height: 1rem;
		border-top-left-radius: 1.5rem;
		box-shadow: -0.29rem -0.7rem 0 0.27rem;
		right: -2rem;
		color: white;
		margin-top: -0.1em;
	}
	p {
		background: var(--color);
		color: white;
		padding: 1em 2em;
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
		width: 3em;
	}

	@media (min-width: 40rem) {
		p {
			padding: 1.5em;
			text-align: center;
		}

		div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0px 0px;
			margin-top: -0.5em;
		}
		h2 {
			font-size: 1.5em;
		}
		h2::after {
			border-width: 2.5px 0 0 1px;
		}
	}

	@media (min-width: 75rem) {
		.info {
			margin-top: -12em;
		}
		h2 {
			font-size: 2.9em;
		}
		p {
			text-align: center;
			font-size: 1.4em;
			padding: 1.8em;
		}
		section > img {
			height: 60vh;
		}
		button {
			font-size: 1.2em;
		}
		h2::after {
			border-width: 4px 0 0 1px;
			height: 3rem;
			width: 2.5rem;
			bottom: 2.8rem;
			right: -2.5rem;
		}
	}
</style>
