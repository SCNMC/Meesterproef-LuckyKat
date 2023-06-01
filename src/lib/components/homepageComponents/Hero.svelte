<script>
	export let heroTitle;
	export let heroLogo;
	export let heroDescription;
	export let heroButton;
	export let buttonImage;

	import { onMount } from "svelte";


	onMount(() => {
	
	});
</script>

<section>
	<div class="logo">


		<h1>{heroTitle}
		</h1>
		<img src={heroLogo} alt="logo geel" />
	</div>
	<p>We take it to the next level, and further <br>real and original content</p>
	<button>{heroButton}</button>
	<a href=""><img src={buttonImage} alt="" /></a>
</section>

<style>
	@import url("https://fonts.cdnfonts.com/css/press-start-2p");
	@import url("https://fonts.googleapis.com/css?family=Noto Sans");
	/* @font-face {
    font-family: "Press Start2P -Regular";
    src: url('/assets/Fonts/PressStart2P-Regular/Press\ Start\ 2P\ Reguar.ttf');
    font-style: normal;
} */

	section {
		display: flex;
		flex-direction: column;
		align-items: center;

		justify-content: center;
		gap: 1.5em;
		padding: 1em 2em;
		min-height: 90vh;
	}

	h1 {
		font-size: 3em;

	}
	section p {
		text-align: center;
		font-size: .95em;
		font-weight: 300;
	}
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1em;
	}
	div img {
		width: 3em;
	}
	button {
		background: none;
		border: none;
		font-family: "Press Start 2P", sans-serif;
	}

	a > img {
		width: 3.5em;
		animation-name: floating;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}

	@keyframes floating {
		0% {
			transform: translate(0, 0px);
		}
		50% {
			transform: translate(0, 60px);
		}
		100% {
			transform: translate(0, -0px);
		}
	}

	@media (min-width: 40rem) {
		h1 {
			font-size: 5em;
		}

		div img {
			width: 6em;
		}
		p {
			font-size: 1.5em;
			
		}
	}

	@media (min-width: 60rem) {
		section {
			gap: 3em;
			
		}
		h1 {
			font-size: 8em;
		}
		button {
			font-size: 1.5em;
		}
		div img {
			width: 8em;
		}
		section > p{
			font-size: 1.7em;
	
		}
		
	}
</style>
