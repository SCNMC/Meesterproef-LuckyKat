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
	<iframe src={uspVideo} />
</div>
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

	.divie{
		position: relative;
    overflow: hidden;
    padding-top: 56.25%;
	}

	iframe{
		position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
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
		padding: 0.6em 1.5em;
		border-bottom-right-radius: 1em;
		z-index: 9999;
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
		width: 3em;
	}

	@media (min-width: 40rem) {
		section {
			margin-bottom: 20em;
		}
		div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0px 0px;
		}
		h2 {
			font-size: 2.5em;
		}
	}

	@media (min-width: 60rem) {
		
		.divie{
			display: grid;
		position: relative;
    overflow: hidden;
	}

	iframe{
		position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    border: 0;
	}
	
		h2 {
			font-size: 3.5em;
		}
		p {
			font-size: 1.7em;
			padding: 3em;
		}
		section > img {
			height: 60vh;
		}
		button {
			font-size: 1.4em;
		}
	}
</style>