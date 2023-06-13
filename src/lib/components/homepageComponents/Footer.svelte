<footer>
	<div>
		<ul>
			<li>Lucykat</li>
			<li> Kamelenspoor 80-5 </li>
			<li>3605 ED Maarssen</li>
			<li>The Netherlands</li>
			<li>0624633634</li>
			<li> Contact@luckykat.nl</li>
		</ul>

		<ul>
			<li>Navigations</li>
			<li>Work</li>
			<li>About us</li>
			<li> Contact</li>
		</ul>

		<ul>
			<li>Socials</li>
			<li><img src="/assets/Instagram.png" alt="instagram" /></li>
			<li><img src="/assets/Facebook.png" alt="facebook" /></li>
			<li><img src="/assets/Twitter.png" alt="twitter" /></li>
			<li><img src="/assets/Linkedin.png" alt="linkedin" /></li>
		</ul>
	</div>

	<img src="/assets/logogeel.png" alt="logo" />
	<p> All rights reserved Copyright &#169 2023</p>
</footer>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 2.5em;
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: black;
		color: white;
		gap: 2.5em;
		padding: 2em;
	}
	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5em;
	}
	li:nth-child(1) {
		font-family: "Press Start 2P", sans-serif;
		margin-bottom: 0.5em;
	}

	footer > img {
		width: 3em;
	}
	li {
		font-size: 1em;
	}

	@media (min-width: 60rem) {
		li:nth-child(1) {
			font-size: 1.5em;
		}
		div {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 8em;
			padding: 1em;
		}
		li {
			font-size: 1.2em;
			text-align: start;
		}
		footer {
			gap: 4em;
		}
		footer > img {
			width: 5em;
		}
		li :nth-child(1) {
			font-size: 0.8em;
		}
	}
</style>
