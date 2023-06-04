<script>
import Contact from "./Contact.svelte";
</script>

<section>
	<h1>CONTACT</h1>
<p>Ready to make your idea come to life? <br>
    Contact us and lets make that idea a reality.</p>
    <div>
    <Contact/>
</div>
</section>

<style>


    h1{
        font-size: 1.5em;
        text-align: center;
    }
	section {
display: grid;
place-content: center;
gap: 1em;
		color: black;
        padding: 3em 2em;

        height: 75vh;
        
	}


@media(min-width:60rem){

    h1{
        font-size: 4em;
    }
    p{
        font-size: 1.7em;
    }


}
</style>