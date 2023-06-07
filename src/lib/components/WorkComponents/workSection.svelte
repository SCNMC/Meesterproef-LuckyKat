<section>
	<slot />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		margin-bottom: 10em;
	}

	@media (min-width: 50rem) {
		section {
			display: grid;
			grid-template-columns: 1fr 1fr;
			margin-bottom: 10em;
		}
	}
</style>
