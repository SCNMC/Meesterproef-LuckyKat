<script>
</script>

<section class="wrapper">
	<img class="luckykat" src="/assets/about.jpeg" alt="" />
	<div>
		<h3>We are Luckykat</h3>
		<p
			>We specialize in crafting captivating social media content that sparks
			conversations and connects communities. Our team of creative enthusiasts
			is dedicated to helping your brand shine by telling compelling stories and
			engaging your audience.</p
		>
		<p
			>With expertise in strategy, content creation, and community management,
			we elevate your online presence and build meaningful connections. Our
			collaborative approach ensures content that reflects your brand's voice
			and resonates with followers.</p
		>
		<p
			>We stay ahead of trends and algorithms to deliver visually stunning and
			results-driven content. From eye-catching visuals to compelling videos, we
			bring your ideas to life. Beyond content, we strive to promote
			inclusivity, diversity, and social change. Join us in making an impact
			through the power of social media.</p
		>
		<p
			>Welcome to Lucky Kat! Let us help you unlock the potential of social
			media and create a digital presence that leaves a lasting impression.</p
		>
	</div>
</section>

<style>
	.wrapper {
		position: relative;
		overflow: hidden;
	}

	section {
		display: flex;
		flex-direction: column;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 2em 2em;
	}
	p {
		margin-bottom: 1em;
	}

	img {
		width: 100%;
		height: 25em;
		object-fit: cover;
		position: relative;
		/* border-radius: 1em; */
	}
	@media (min-width: 75rem) {
		h2 {
			font-size: 1.8em;
		}

		h3 {
			font-size: 1.5em;
		}

		section > img {
			height: 31em;
		}
		section {
			display: grid;

			grid-template-columns: 1fr 1fr;
			place-content: center;
			gap: 3em;
			margin-bottom: 10em;
		}
		p {
			width: 45em;
		}

		div {
			padding: 2em 1em;
		}
	}
</style>
