<script>
	import Logo from "./Logo.svelte";
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
		z-index: 2;
        background-color: black;
    }
</style>