<section>
    <h3>You made it!</h3>
    <p>Now dont forget to contact us and leave your question behind</p>
    <button><a href="">Contact us</a><img src="/assets/arrowup.png" alt="arrowicon" /></button>
</section>

<style>
    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 40vh;
        gap: 2em;
    }

    p{
        text-align: center;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
    
    }
    button > img {
		width: 2.5em;
	}

    @media (min-width: 40rem) {
        h3{
            font-size: 1.5em;
        }
        p{
            font-size: 1.5em;
        }
        button{
            font-size: 0.9em;
        }

	}

	@media (min-width: 60rem) {
        section{
            height: 60vh;
        }
        h3{
            font-size: 2.9em;
        }
        p{
        
        }
	
	}
</style>