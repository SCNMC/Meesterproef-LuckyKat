<script>
	import Logo from "./Logos.svelte";
    import Nav from "./Nav.svelte";
</script>

<header>
	<Logo title="Luckykat"
	/>
    	<Nav/>
</header>

<style>
    header{
        display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;

        background-color: black;
		padding: .5em .5em;
    }
</style>