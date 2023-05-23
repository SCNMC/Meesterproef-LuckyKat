<script>
	import HeaderLuckykat from "$lib/components/homepageComponents/HeaderLuckykat.svelte";
	import WorkHero from "$lib/components/WorkComponents/workHero.svelte";
	import WorkSection from "$lib/components/WorkComponents/workSection.svelte";
	import Work from "$lib/components/WorkComponents/Work.svelte";
	export let data;
	const { document } = data;
</script>

<HeaderLuckykat />
<WorkHero />
<WorkSection>
	<Work
		workColor="#6A5ACD"
		workImages={document[0].data.image}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#FFDB58"
		workImages={document[0].data.image}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#008080"
		workImages={document[0].data.image}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#FF6F61"
		workImages={document[0].data.image}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#4169E1"
		workImages={document[0].data.image}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#FFA14E"
		workImages={document[0].data.image}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#8E4585"
		workImages={document[0].data.image}
		workTitles={document[0].data.title}
	/>
	<Work
		workColor="#FFBF00"
		workImages={document[0].data.image}
		workTitles={document[0].data.title}
	/>
</WorkSection>
