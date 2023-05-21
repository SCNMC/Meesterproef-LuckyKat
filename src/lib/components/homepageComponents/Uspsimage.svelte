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
</script>

<section>
	<h2>{@html prismicH.asText(uspTitle)}</h2>
	<section class="images">
		<img loading="lazy" src={prismicH.asImageSrc(uspImage)} alt="#" />
		<img loading="lazy" src={prismicH.asImageSrc(uspsecondImage)} alt="#" />
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
	section {
		/* height: 100vh; */
		display: flex;
		flex-direction: column;

		/* margin-bottom: 8em; */
	}
	section > img {
		width: 100%;
		height: 35vh;
		object-fit: cover;
	}

	div {
		display: grid;
		grid-template-columns: 1fr;
	}

	h2 {
		position: absolute;
		background-color: white;
		padding: 1em 1.7em;
		border-bottom-right-radius: 1em;
	}

	h2::after {
		content: "";
		position: absolute;
		border-width: 1px 0 0 1px;
		border-style: solid;
		border-color: inherit;
		width: 2rem;
		height: 2rem;
		border-top-left-radius: 1.6rem;
		box-shadow: -0.29rem -0.7rem 0 0.27rem;
		top: 0;
		right: -2rem;
		color: white;
		margin-top: -0.05em;
	}
	p {
		background: var(--color);
		color: white;
		padding: 2em;
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

	@media (min-width: 60rem) {
		h2 {
			font-size: 2.9em;
		}
		p {
			font-size: 1.5em;
			padding: 3em;
		}
		section > img {
			height: 65vh;
		}
		button {
			font-size: 1.4em;
		}
	}
</style>
