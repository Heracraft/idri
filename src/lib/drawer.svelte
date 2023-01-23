<script>
    import {onMount} from "svelte"
    import Language from "./language.svelte";

    import anime from "../js/anime.es"
    import {colorTheme} from "../js/store"
 

    let collapse,resize,switchModes

    onMount(()=>{
        resize=async()=>{
            if ( collapse){
                collapse.style.background="none"
                 anime({
                    targets:"#drawer",
                    translateX:"100%",
                    easing:"easeInCubic",
                    duration:100
                })
                setTimeout(()=>{collapse.style.display="none"},600)
                
            }
        }
        switchModes=()=>{
          if($colorTheme=="light"){
            $colorTheme="dark"
          }
          else if($colorTheme=="dark"){
            $colorTheme="light"
          }
          localStorage.setItem("colorTheme",$colorTheme)
        }
    })
</script>

<article id="drawer" class="w-full h-screen bg-black bg-opacity-50 fixed flex m-0 justify-end z-10" style="transform: translateX(100%);" bind:this={collapse}>
    <div class="w-full z-20 fixed bottom-0 top-0 left-0" on:click={()=>{resize();}}></div>
    <section class="flex flex-col p-2 card !rounded max-w-sm w-64 px-5 h-full fixed z-30 border-0 border-l-2">
        <div class="flex flex-col justify-center items-center">
            <img class="w-20 h-20 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
            <p class="text-xl font-semibold my-2">Daniel</p>
            <button class="button flex items-center !bg-inherit border-solid border-[1px] border-neutral-500 text-neutral-500 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="fill-current"><path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h7v2Zm11-4-1.375-1.45 2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5Z"/></svg>
                Logout
            </button>
            <div class="flex justify-center dark:text-neutral-500 text-neutral-700">
                <span class="grid place-content-center hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-2xl p-2">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"></path></svg>
                </span>
                <span class="grid place-content-center hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-2xl p-2">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
                </span>
                <span class="grid place-content-center hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-2xl p-2">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
                </span>
                <span class="grid place-content-center hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-2xl p-2" on:click={()=>{switchModes()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="fill-current w-6 h-6"><path d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05 4.575 6q-.3-.275-.288-.7.013-.425.288-.725.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7 0 .4-.275.7-.275.3-.687.287-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712 0-.413.275-.688.275-.3.688-.287.412.012.712.287L19.425 18q.3.275.288.7-.013.425-.288.725-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688.012-.412.287-.712L18 4.575q.275-.3.7-.288.425.013.725.288.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275.412 0 .687.275.3.275.288.688-.013.412-.288.712L6 19.425q-.275.3-.7.287-.425-.012-.725-.287ZM12 12Z"/></svg>
                </span>
            </div>
            <div class="spacer"></div>
        </div>
        <div class="flex flex-col text-xl w-full dark:text-white text-neutral-700">
            
            <span class="flex items-center dark:hover:bg-neutral-700 hover:bg-neutral-300 p-2 rounded-xl my-2 w-full ">
                <svg class="mx-2 fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M13 20v-4.586L20.414 8c.375-.375.586-.884.586-1.415V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.585c0 .531.211 1.04.586 1.415L11 15.414V22l2-2z"></path></svg>
                <a href="/">Filter</a>
            </span>
            <span class="flex items-center dark:hover:bg-neutral-700 hover:bg-neutral-300 p-2 rounded-xl my-2 w-full">
                <svg class="mx-2 fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="m10 10.414 4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414z"></path></svg>
                <a href="/">Trending</a>
            </span>
            <span class="flex items-center dark:hover:bg-neutral-700 hover:bg-neutral-300 p-2 rounded-xl my-2 w-full">
                <svg class="mx-2 fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.78 15.84S18.64 13 19.61 12c3.07-3 1.54-9.18 1.54-9.18S15 1.29 12 4.36C9.66 6.64 8.14 8.22 8.14 8.22S4.3 7.42 2 9.72L14.25 22c2.3-2.33 1.53-6.16 1.53-6.16zm-1.5-9a2 2 0 0 1 2.83 0 2 2 0 1 1-2.83 0zM3 21a7.81 7.81 0 0 0 5-2l-3-3c-2 1-2 5-2 5z"></path></svg>
                <a href="/">Discover</a>
            </span>
            <span class="flex items-center dark:hover:bg-neutral-700 hover:bg-neutral-300 p-2 rounded-xl my-2 w-full">
                <svg class="mx-2 fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.78 15.84S18.64 13 19.61 12c3.07-3 1.54-9.18 1.54-9.18S15 1.29 12 4.36C9.66 6.64 8.14 8.22 8.14 8.22S4.3 7.42 2 9.72L14.25 22c2.3-2.33 1.53-6.16 1.53-6.16zm-1.5-9a2 2 0 0 1 2.83 0 2 2 0 1 1-2.83 0zM3 21a7.81 7.81 0 0 0 5-2l-3-3c-2 1-2 5-2 5z"></path></svg>
                <a href="/">New</a>
            </span>
        </div>
        <div class="flex flex-col">
            <div class="spacer"></div>
            <div class="mt-auto">
                <Language/>
            </div>
        </div>
    </section>
</article>