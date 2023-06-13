<script>
	import * as prismicH from "@prismicio/helpers";
	export let uspTitle;
	export let uspImage;
	export let uspDescription;
	export let uspButton;
	export let textColor = `red`;
	export let width = `${4}rem`;
	export let buttonColor = `red`;
</script>

<section class="wrapper">
	<h2>{@html prismicH.asText(uspTitle)}</h2>
	<img loading="lazy" src={prismicH.asImageSrc(uspImage)} alt="#" />
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
	.wrapper {
		position: relative;
		overflow: hidden;
	}

	section {
		/* height: 100vh; */
		display: flex;
		flex-direction: column;
		margin-bottom: 10em;
		z-index: -2;
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
		z-index: 1;
		background-color: white;
		padding: 1em 2em;
		margin-top: -1em;
		height: 1em;

		border-bottom-right-radius: 1em;
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
		p {
			padding: 1.5em;
			text-align: center;
		}
		h2::after {
			border-width: 2.5px 0 0 1px;
		}

		section {
			margin-bottom: 12em;
		}
		div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-content: center;
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
		h2::after {
			border-width: 4px 0 0 1px;
			height: 3rem;
			width: 2.5rem;
			bottom: 2.8rem;
			right: -2.5rem;
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
			height: 65vh;
		}
		button {
			font-size: 1.4em;
		}
	}
</style>
