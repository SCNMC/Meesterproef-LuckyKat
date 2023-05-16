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
		<NavLink  link='/' text='Work'  />
		<NavLink link='/' text='About us'  />
		<NavLink link='/' text='Contact'  />
		
		<!-- <li>Beoogde leerresultaten</li>
		<li>Onderwijsleeromgeving</li>
		<li>Toetsing</li>
		<li>Gerealiseerde Leerresultaten</li> -->
	</ul>
	</div>
	<Animatedhamburgers {open} {onClick} />
    {#if open}
		<nav transition:fly={{ y: -200, duration: 400 }}>
			<a transition:fly={{y:-1000, duration:1100}} href="./beoogde-leerresultaten">Work</a>
			<a transition:fly={{y:-800, duration:1100}} href="./onderwijsleeromgeving">About us</a>
			<a transition:fly={{y:- 600, duration:1100}}  href="./toetsing">Contact</a>
		</nav>
	{/if}

<style>
	div > ul{
		display: flex;
		display: none;
		list-style: none;
		padding:1.7em;
		gap: 2em;

	}

	nav {
		width: 100vw;
		position: fixed;
		display: flex;
		gap: 2em;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #000;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
    nav > a {
		margin: .5em;
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
 

    @media (min-width:50rem){
      div >  ul{
            display: inline;
			display: flex;
			flex-direction: row;
        }
}
</style>