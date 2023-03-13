<script>
    import {onMount} from "svelte"
    import {goto} from "$app/navigation"

    import anime from "../js/anime.es"
    import {sortSelection,cartItems} from "../js/store"

    let collapse,resizeSearch,switchModes,resizeDrawer
    let searchQuery=""
    onMount(()=>{
        resizeSearch=()=>{
            console.log("SD");
            if(collapse.style.display!="flex"){
                collapse.style.display="flex"
            }
            else{
                collapse.style.display="none"
            }
        }
       
        resizeDrawer=()=>{
          let parentElement=document.getElementById("drawer")
            if(parentElement.style.transform ==" "){
              parentElement.style.background="none"
                   anime({
                      targets:"#drawer",
                      translateX:"100%",
                      easing:"easeInCubic",
                      duration:500
                  })
              setTimeout(()=>{collapse.style.display="none"},600)
            }
            else{
              parentElement.style.display="flex"
              parentElement.style.background="rgba(0,0,0,.5)"
                   anime({
                      targets:"#drawer",
                      translateX:"0%",
                      easing:"easeInCubic",
                      duration:500
                  })
            }
        }
    })
</script>
<nav class="bg-white border-neutral-200 px-2 sm:px-4 py-2.5 dark:bg-neutral-800 text-neutral-500 dark:text-white shadow-lg">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    
  <a href="/" class="flex items-center">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Idriselectro</span>
  </a>
  <div class="flex md:order-2">
    <div class="relative hidden md:block" >
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-neutral-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input bind:value={searchQuery} on:keydown={(e)=>{
        if(e.key=="Enter"){
          goto(`/search?q=${searchQuery}&sort=${sortSelection=="Price:Low to High"? 'asc':'desc'}`)
        }
      }} type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
    </div>
    <a href="/cart" class="relative shadow mx-2 flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full border-primary border-2 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-primary w-6 h-6"><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg>
        <span class="h-5 w-5 text-xs text-white bg-primary rounded-full absolute top-[-20%] left-0 flex justify-center items-center">{$cartItems.length}</span>
    </a>
    
    <button type="button" on:click={resizeSearch()} data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 rounded-lg text-sm p-2.5 mr-1" >
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Search</span>
      </button>
      <!-- <div class="mx-2 flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg p-2" on:click={()=>{switchModes()}}>    
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="fill-neutral-500 w-6 h-6"><path d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05 4.575 6q-.3-.275-.288-.7.013-.425.288-.725.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7 0 .4-.275.7-.275.3-.687.287-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712 0-.413.275-.688.275-.3.688-.287.412.012.712.287L19.425 18q.3.275.288.7-.013.425-.288.725-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688.012-.412.287-.712L18 4.575q.275-.3.7-.288.425.013.725.288.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275.412 0 .687.275.3.275.288.688-.013.412-.288.712L6 19.425q-.275.3-.7.287-.425-.012-.725-.287ZM12 12Z"/></svg>
      </div> -->
    <button type="button" class="inline-flex items-center p-2 text-sm text-neutral-500 rounded-lg hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600" aria-controls="navbar-search" aria-expanded="false" on:click={resizeDrawer()}>
      <span class="sr-only">Open menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    
  </div>
    <div class="justify-center w-full flex md:w-auto md:order-1 flex-col-reverse md:flex-col" >
      <div class="relative mt-3 hidden bg-neutral-700" bind:this={collapse}>
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" on:click={()=>{
          goto(`/search?q=${searchQuery}&sort=${sortSelection=="Price:Low to High"? 'asc':'desc'}`)
        }}>
          <svg class="w-5 h-5 fill-neutral-500" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input bind:value={searchQuery} on:keydown={(e)=>{
          if(e.key=="Enter"){
            goto(`/search?q=${searchQuery}&sort=${sortSelection=="Price:Low to High"? 'asc':'desc'}`)
          }
        }} type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
      </div>
      <ul class="flex py-2 rounded-lg flex-row space-x-8 mt-0 text-sm font-medium border-0 dark:border-neutral-700">
        <li>
          <a href="/" class="flex svg:fill-current svg:mr-2 items-center rounded bg-transparent text-primary p-0 dark:text-white" aria-current="page">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.5 15.5h2v-5h5v5h2V8.25L10 4.875 5.5 8.25ZM4 17V7.5L10 3l6 4.5V17h-5v-5H9v5Zm6-6.812Z"/></svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" class="flex svg:fill-current svg:mr-2 items-center text-neutral-700 rounded hover:bg-transparent hover:text-primary p-0 dark:hover:text-white dark:text-neutral-400 dark:hover:bg-transparent dark:border-neutral-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M9.25 14h1.5V9h-1.5ZM10 7.5q.312 0 .531-.219.219-.219.219-.531 0-.312-.219-.531Q10.312 6 10 6q-.312 0-.531.219-.219.219-.219.531 0 .312.219.531.219.219.531.219ZM10 18q-1.646 0-3.104-.625-1.458-.625-2.552-1.719t-1.719-2.552Q2 11.646 2 10q0-1.667.625-3.115.625-1.447 1.719-2.541Q5.438 3.25 6.896 2.625T10 2q1.667 0 3.115.625 1.447.625 2.541 1.719 1.094 1.094 1.719 2.541Q18 8.333 18 10q0 1.646-.625 3.104-.625 1.458-1.719 2.552t-2.541 1.719Q11.667 18 10 18Zm0-1.5q2.708 0 4.604-1.896T16.5 10q0-2.708-1.896-4.604T10 3.5q-2.708 0-4.604 1.896T3.5 10q0 2.708 1.896 4.604T10 16.5Zm0-6.5Z"/></svg>
            About
          </a>
        </li>
        <li>
          <a href="#"  class="flex svg:fill-current svg:mr-2 items-center text-neutral-700 rounded hover:bg-transparent hover:text-primary p-0 dark:hover:text-white dark:text-neutral-400 dark:hover:bg-transparent dark:border-neutral-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M15.896 16.979q-2.563-.208-4.834-1.281-2.27-1.073-3.989-2.802-1.719-1.729-2.802-4T3 4.062q-.042-.437.26-.76T4 2.979h2.833q.355 0 .615.209.26.208.344.562l.5 2.229q.041.25-.021.5-.063.25-.25.438L6 8.958q.875 1.584 2.146 2.854Q9.417 13.083 11 13.958l2.062-2q.209-.208.459-.26.25-.052.479-.01l2.229.479q.354.083.563.354.208.271.208.625v2.833q0 .563-.396.792-.396.229-.708.208ZM5.312 7.5l1.459-1.458-.354-1.563H4.542q.104.792.291 1.542.188.75.479 1.479Zm7.167 7.167q.729.291 1.49.468.76.177 1.531.282v-1.875l-1.562-.334ZM5.312 7.5Zm7.167 7.167Z"/></svg>
            Contact
          </a>
        </li>
      </ul>
    </div>
    <!-- <div>
      
    </div> -->
  </div>
</nav>
