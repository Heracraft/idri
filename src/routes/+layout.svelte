<script>
    import {onMount} from "svelte"
    import Navbar from "$lib/navbar.svelte"
    import Drawer from "$lib/drawer.svelte"

    import "../style/tailwind.css"

    import {colorTheme} from "../js/store"

    onMount(()=>{
        // if (!$colorTheme){
            // }
        $colorTheme=localStorage.getItem("colorTheme")||"light"
    })
    $:{
        if($colorTheme=="light"){
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
        else if($colorTheme=="dark"){
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        }
    }
</script>
<main class="dark:bg-neutral-900 min-h-[100vh] h-full pb-10 relative ">
    <Drawer/>
    <Navbar/>
    <slot/>
</main>