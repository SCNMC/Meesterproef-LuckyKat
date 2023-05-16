<script>
	import * as prismicH from "@prismicio/helpers";
	export let uspTitle;
	export let uspImage;
	export let uspDescription;
	export let uspButton;
	export let textColor = `red`;
	export let width = `${4}rem`;
	export let buttonColor= `red`;
</script>

<section>
	<h2>{@html prismicH.asText(uspTitle)}</h2>
	<img loading ='lazy' src={prismicH.asImageSrc(uspImage)} alt="#" />
<div>
	<p style="--color:{textColor};--width:{width}">{@html prismicH.asHTML(uspDescription)}</p>
	<button style="--color:{buttonColor};--width:{width}"><a href="">{@html prismicH.asHTML(uspButton)}</a> <img src="/assets/arrowup.png" alt="arrowicon"></button>
</div>
</section>

<style>
	section {
		/* height: 100vh; */
		display: flex;
		flex-direction: column;
		margin-bottom: 10em;
	}
	img {
		width: 100%;
		height: auto;
	}

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

	h2 {
		position: absolute;
		background-color: white;
		padding: 0.6em 1.5em;
		border-bottom-right-radius: 1em;
	}

	h2::after {
		content: "";
		position: absolute;
		border-width: 1px 0 0 1px;
		border-style: solid;
		border-color: inherit;
		width: 2.1rem;
		height: 2rem;
		border-top-left-radius: 2rem;
		box-shadow: -0.29rem -0.7rem 0 0.27rem;
		top: 0;
		right: -2.1rem;
		color: white;
	}
    p{
		background: var(--color);
        color: white;
        padding: 2em;
    }
    button{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
        padding: 4em;
        font-size: .8em;
		gap: 1em;
		background: var(--color);
    }

	button > img{
		width: 3em;
	}
</style>
