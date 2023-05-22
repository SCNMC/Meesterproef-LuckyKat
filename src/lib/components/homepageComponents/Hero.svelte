<script>
	export let heroTitle;
	export let heroLogo;
	export let heroDescription;
	export let heroButton;
	export let buttonImage;

</script>


<section>
	<div class="logo">
		<h1>{heroTitle}</h1>
		<img src={heroLogo} alt="logo geel" />
    </div>
	<p>{heroDescription} </p>
	<button>{heroButton}</button>
    <a href=""><img src={buttonImage} alt=""></a>
</section>

<style>
	@import url("https://fonts.cdnfonts.com/css/press-start-2p");
    @import url('https://fonts.googleapis.com/css?family=Noto Sans');
	/* @font-face {
    font-family: "Press Start2P -Regular";
    src: url('/assets/Fonts/PressStart2P-Regular/Press\ Start\ 2P\ Reguar.ttf');
    font-style: normal;
} */
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2em;
		padding: 1em 2em;
		height: 100vh;
	}

	h1 {
		font-size: 2em;
	}
    section p{
        text-align: center;
                                                
    }
	div {
		display: flex;
		flex-direction: row;
		align-items: center;

	}
	div img {
		width: 3em;
	}
    button{
        background: none;
        border: none;
        font-family: "Press Start 2P", sans-serif;
    }

    a > img{
        width: 3.5em;
        animation-name: floating;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
    }

    @keyframes floating {
		0% {
			transform: translate(0, 0px);
		}
		50% {
			transform: translate(0, 60px);
		}
		100% {
			transform: translate(0, -0px);
		}
	}

    @media (min-width: 40rem) {
        h1{
            font-size: 3em;
        }

        div img {
		width: 4em;
	}
		p {
			font-size: 2em;
		}
	}

    @media (min-width: 60rem) {

        section{
            gap: 4em;
        }
	h1{
        font-size: 6em;
    }
button{
    font-size: 1.5em;
}
    div img{
        width: 8em;
    }
	}

</style>
