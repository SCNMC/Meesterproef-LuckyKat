<script>
	import Logo from "./Logos.svelte";
    import Navs from "./Navs.svelte";
</script>

<header>
	<Logo title="Luckykat"
	/>
    	<Navs/>
</header>

<style>
    header{
        display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		

		top: 0;
        background-color: white;
		border-bottom: 1px solid #E5E5E5;
		padding: .5em .5em;
z-index: 9999;
    }
</style>