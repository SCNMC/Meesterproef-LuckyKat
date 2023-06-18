<form
	id="fs-frm"
	name="simple-contact-form"
	accept-charset="utf-8"
	action="https://formspree.io/f/mbjenpro"
	method="post"
>
	<fieldset id="fs-frm-inputs">
		<label for="full-name">Full Name</label>
		<input
			class="name"
			type="text"
			name="name"
			id="full-name"
			placeholder="First and Last"
			required=""
			data-nlok-ref-guid="51e6df78-9893-41f5-8383-746062818f53"
		/><div />
		<label for="email-address">Email Address</label>
		<input
			class="email"
			type="email"
			name="_replyto"
			id="email-address"
			placeholder="Email@domain.tld"
			required=""
		/>
		<label for="Message">Message</label>
		<input
			class="message"
			type="text"
			name="message"
			id="message"
			placeholder="Write your message"
			required=""
		/>
	</fieldset>
	<div>
		<button type="submit">Submit</button>
	</div>
</form>

<style>
	form {
		flex-direction: column;
		justify-content: start;

		border: none;
	}

	form,
	input,
	button,
	textarea,
	fieldset {
		border-radius: 0;
		outline: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	fieldset {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border: none;
		gap: 2em;
	}

	input {
		border-color: white;
		border-style: unset;
		border-bottom: 3px solid black;
		height: 2em;
	}
	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	button {
		color: white;
		background-color: black;
		padding: 2em;
		margin-top: 2em;
	}

	.name::placeholder {
		color: #4169e1;
	}

	.email::placeholder {
		color: #8e4585;
	}
	.message::placeholder {
		color: #008080;
	}
</style>
