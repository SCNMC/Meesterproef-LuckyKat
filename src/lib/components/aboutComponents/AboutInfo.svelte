<script>

	import { onMount } from "svelte";
	import { gsap } from "gsap/dist/gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


//     	onMount(() => {
// 		gsap.registerPlugin(ScrollTrigger);  

// gsap.utils.toArray(".wrapper").forEach(function(container) {
//     let image = container.querySelector(".luckykat");
  
//     let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: container,
//           scrub: true,
//           pin: false,
//         },
//       }); 
//       tl.from(image, {
//         yPercent: -25,
//         ease: "none",
//       }).to(image, {
//         yPercent: 25,
//         ease: "none",
//       }); 
//   });
// 	});
</script>


<section class="wrapper">

    <img class="luckykat" src="/assets/about.jpeg" alt="">
    <div>
    <h3>We are Luckykat</h3>
<p>We specialize in crafting captivating social media content that sparks conversations and connects communities. Our team of creative enthusiasts is dedicated to helping your brand shine by telling compelling stories and engaging your audience.</p>
<p>With expertise in strategy, content creation, and community management, we elevate your online presence and build meaningful connections. Our collaborative approach ensures content that reflects your brand's voice and resonates with followers.</p>
<p>We stay ahead of trends and algorithms to deliver visually stunning and results-driven content. From eye-catching visuals to compelling videos, we bring your ideas to life.

    Beyond content, we strive to promote inclusivity, diversity, and social change. Join us in making an impact through the power of social media.</p>
    <p>Welcome to [Company Name]! Let us help you unlock the potential of social media and create a digital presence that leaves a lasting impression.</p>
    </div>
</section>

<style>

    .wrapper{
        position: relative;
	overflow: hidden;
    }

    section{
        display: flex;
        flex-direction: column;
 
    }

    div{

     display: flex;
     flex-direction: column;
     gap: 1em;
padding: 2em 2em;
    }
    p{
		margin-bottom: 1em;
	}


    /* h2{
        font-size: 1.5em;
        color: #4169E1;
        position: absolute;
        background-color: white;
        border-bottom-right-radius: 1em;
        padding: 1em 2em;
		margin-top: -1em;
		height: 1em;
    } */
/* h1::before{
    content: "";
    position: absolute;
    border-width: 1px 0 0 1px;
    border-style: solid;
    color: white;
    width: 2rem;
    height: 2rem;
    border-top-left-radius: 2rem;
    box-shadow: -0.27rem -0.5rem 0 0.27rem;
    left: 0;
    bottom: -2rem;

} */
    /* h2::after {
		content: "";
		position: absolute;
		border-width: 1px 0 0 1px;
		border-style: solid;
		border-color: inherit;
		width: 2rem;
		height: 1rem;
		border-top-left-radius: 1.6rem;
		box-shadow: -0.29rem -0.7rem 0 0.27rem;
		right: -2rem;
		color: white;
		margin-top: -0.1em;
	} */
    img{
    width: 100%;
        height: 25em;
        object-fit: cover;
        position: relative;
        /* border-radius: 1em; */
    }
    @media (min-width: 75rem) {

        h2{
font-size: 1.8em;
        }

        h3{
            font-size: 1.5em;
        }

        section >  img{
            height: 31em;
            /* border-top: 1em solid #4169E1;
            border-right: 1em solid  #FFA14E ;
            border-bottom: 1em solid #6A5ACD; */
    
        }
section{
	display: grid;

	grid-template-columns: 1fr  1fr;
    place-content: center;
    gap: 3em;
    margin-bottom: 10em;

}
p{
    width: 45em;
}

div{
padding: 2em 1em
}


	}
</style>