<section class="home" style="background-image: url(/assets/african-woman.jpg); background-repeat: no-repeat; background-size: cover;">
    <div class="comp-wrapper">
        <ShowcaseText/>
        <div>
            <p class="showcase-p">
                The African Adage platform provides a host of african adages and quotes to developers around the globe.
            </p>
        </div>
        <div>
            <Button link={'/auth'}><i class="fa-solid fa-marker"></i> Share Adage</Button> 
            <Button link={'okay'}><i class="fa-solid fa-terminal"></i> Use API</Button>
        </div>
    </div>
</section>

<script>
    import ShowcaseText from "../components/ShowcaseText.svelte";
    import Button from '../components/Button.svelte';

    let bmc = '/assets/bmc-button.png';
</script>

<style>
   .home {
       min-height: inherit;
       max-height: 100%;
       color: var(--clr-white);
       display: grid;
       place-items: center;
       text-align: center;
   }
   .showcase-p {
       font-size: 1.2rem;
   }
   .comp-wrapper {
       display: flex;
       flex-direction: column;
       gap: 2rem;
   }
</style>

