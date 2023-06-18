<script>
	import Animatedhamburgers from "./Animatehamburgers.svelte";
	import NavLink from "./NavLink.svelte";
	import { fly } from "svelte/transition";
	export let open = false;
	export let onClick = () => {
		open = !open;
	};
</script>

<div>
	<ul>
		<NavLink link="/work" text="WORK" />
		<NavLink link="/about" text="ABOUT" />
		<li><a href="/contacts"> CONTACT</a></li>
	</ul>
</div>
<Animatedhamburgers {open} {onClick} />
{#if open}
	<nav transition:fly={{ y: -200, duration: 400 }}>
		<a transition:fly={{ y: -1000, duration: 1100 }} href="./work">Work</a>
		<a transition:fly={{ y: -800, duration: 1100 }} href="./about">About us</a>
		<a transition:fly={{ y: -600, duration: 1100 }} href="./contacts">Contact</a
		>
	</nav>
{/if}

<style>
	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		display: none;
		list-style: none;
		padding: 1.5em 3em;
		gap: 2em;
		color: rebeccapurple;
	}
	ul :nth-child(3) {
		text-align: center;
		background-color: black;
		color: white;
		padding: 0.5em;
		border-radius: 2em;
		width: 6em;
		font-size: 1.2em;
	}

	nav {
		position: fixed;
		display: flex;
		gap: 2em;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #000;
		width: 100%;
		height: 100vh;

		top: 0;
		left: 0;
		z-index: 100;
	}
	nav > a {
		margin: 0.5em;
		font-size: 1.5em;
		text-decoration: none;
		color: white;
		transition: all 0.2s ease-in-out;
	}
	nav :hover {
		box-shadow: inset 17em 0 0 0 #fff021;
		transition: inset 6s;
		color: black;
	}

	@media (min-width: 50rem) {
		div > ul {
			display: inline;
			display: flex;
			flex-direction: row;
			gap: 3em;
		}
	}
</style>
