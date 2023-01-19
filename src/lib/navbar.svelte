<script>
    import {onMount} from "svelte"

    let collapse,resize

    onMount(()=>{
        resize=()=>{
            console.log("SD");
            if(collapse.style.display!="block"){
                collapse.style.display="block"
            }
            else{
                collapse.style.display="none"
            }
        }

    })
</script>
<nav class="bg-white border-neutral-200 px-2 sm:px-4 py-2.5 dark:bg-neutral-800 text-neutral-500 dark:text-white">
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
      <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
    </div>
    <div class="mx-2 flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-primary w-6 h-6 dark:fill-neutral-500"><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg>
    </div>
    <button type="button" on:click={resize()} data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 rounded-lg text-sm p-2.5 mr-1" >
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Search</span>
      </button>
    <button type="button" class="inline-flex items-center p-2 text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600" aria-controls="navbar-search" aria-expanded="false" on:click={resize()}>
      <span class="sr-only">Open menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    
  </div>
    <div class="items-center justify-between flex-col hidden w-full md:!flex md:w-auto md:order-1" bind:this={collapse}>
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-neutral-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
      </div>
      <ul class="flex flex-col p-4 mt-4 border border-neutral-100 rounded-lg bg-neutral-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-neutral-800  dark:border-neutral-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-neutral-700 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-neutral-700 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-neutral-400 md:dark:hover:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
