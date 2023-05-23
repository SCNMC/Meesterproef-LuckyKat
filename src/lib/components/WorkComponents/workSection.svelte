<section>
    <slot/>
</section>

<style>
    section{
        display: flex;
        flex-direction: column;
    }
 
 @media(min-width:60rem){
  section{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
 }
</style>