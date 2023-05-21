<section>
	<h2>Collaboration</h2>
	<div>
		<p>Nike</p>
		<p>Nike</p>
		<p>Nike</p>
		<p>Nike</p>
		<p>Nike</p>
		<p>Nike</p>
		<p>Nike</p>
		<p>Nike</p>
	</div>
	<div>
		<p>Nike</p>
		<p>Nike</p>
		<p>Nike</p>
		<p>Nike</p>
		<p>Nike</p>
		<p>Nike</p>
		<p>Nike</p>
		<p>Nike</p>
	</div>
</section>

<style>
	h2 {
		font-size: 1.2em;
		position: absolute;
	}

	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 10em;
		margin-bottom: 8em;
		overflow-y: scroll;
	}

	section > div {
		display: flex;
		flex-direction: row;
		gap: 1.5em;
		overflow-y: scroll;
	}

	/* p::after {
		content: "-";
		display: inline-block;
		position: relative;
		top: 1px;
		left: 9px;
	} */
	p {
		font-size: 2em;
	}

	@media (min-width: 40rem) {
		h2 {
			font-size: 1.5em;
		}
		p {
			font-size: 2em;
		}
	}

	@media (min-width: 75rem) {
		h2 {
			font-size: 2.5em;
		}
		p {
			font-size: 3.5em;
		}

		section {
			margin-bottom: 15em;
		}
	}
</style>
