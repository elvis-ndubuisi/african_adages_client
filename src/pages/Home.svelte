<section class="home">
    <div>
        <WelcomeText/>
    </div>
</section>

<script>
    import WelcomeText from "../components/WelcomeText.svelte";
    let bg = '/assets/ahoy.jpg';
</script>

<style>
   .home {
       min-height: inherit;
       max-height: 100%;
       color: var(--clr-white);
       background-color: var(--clr-white);
       display: grid;
       place-items: center;
   }

</style>

