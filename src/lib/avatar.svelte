<script>
    export let config

    if(!config.width){config.width=10}
    if(!config.src){config.src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"}

    console.log(!config.width);
</script>
{#if config.width==10}
    <img class="w-10 h-10 rounded-full !my-0" src={config.src} alt="Rounded avatar">
    
{/if}
