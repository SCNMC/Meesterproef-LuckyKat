<script>
	import HeaderLuckykat from "$lib/components/homepageComponents/HeaderLuckykat.svelte";
	import WorkHero from "$lib/components/WorkComponents/workHero.svelte";
	import WorkSection from "$lib/components/WorkComponents/workSection.svelte";
	import Work from "$lib/components/WorkComponents/Work.svelte";
    import WorkImage from "$lib/components/WorkComponents/workImage.svelte";
    import Footer from "$lib/components/homepageComponents/Footer.svelte";
	import ColorBlocks from "$lib/components/aboutComponents/ColorBlocks.svelte";
	export let data;
	const { document } = data;
</script>

<HeaderLuckykat />
<WorkHero />
<WorkSection>
	<Work
		workColor="#6A5ACD"
		workVideo={document[0].data.video.embed_url}
        workTitles={document[0].data.title}
	/>
	<Work
		workColor="#FFDB58"
		workVideo={document[1].data.video.embed_url}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#008080"
        workVideo={document[1].data.video.embed_url}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#FF6F61"
        workVideo={document[0].data.video.embed_url}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#4169E1"
        workVideo={document[0].data.video.embed_url}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#FFA14E"
        workVideo={document[1].data.video.embed_url}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#8E4585"
		workVideo={document[1].data.video.embed_url}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#FFBF00"
        workVideo={document[0].data.video.embed_url}
		workTitles={document[0].data.title}
	/>
</WorkSection>
<ColorBlocks/>
<Footer/>
