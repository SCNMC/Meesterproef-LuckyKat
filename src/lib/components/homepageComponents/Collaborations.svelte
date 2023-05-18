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
	</div>
	<div>
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
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2.5em;
	}

	div {
		display: flex;
		flex-direction: row;
		gap: 1em;
	}

	p::after {
		content: "-";
		display: inline-block;
		position: relative;
		top: 1px;
		left: 9px;
	}
	p {
		font-size: 1em;
	}

	@media (min-width: 40rem) {
		h2 {
			font-size: 1.5em;
		}
        p{
            font-size: 2em;
        }
	}

    @media (min-width: 60rem) {
        h2{
            font-size: 2.5em;
        }
        p{
            font-size: 3.5em;
        }

	}
</style>
