<script>
    import Navbar from "$lib/navbar.svelte"
    import "../style/tailwind.css"

</script>
<main class="dark bg-neutral-900 h-full pb-10">
    <Navbar/>
    <slot/>
</main>