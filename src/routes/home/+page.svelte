<script>
  import HomeProduct from './homeProduct.svelte';


</script>

<article class="prose md:prose-xl xl:prose-2xl flex flex-col justify-center items-center h-full w-full max-w-none mt-5">
    <section class="flex flex-col child:dark:!text-white child:!text-neutral-700 w-full p-5 lg:p-10 child:font-mono">
        <h1 class="!my-1">Discover</h1>
        <h3 class="!text-gray-600 !my-1 font-normal">New collections</h3>
        <div class="flex py-3">
            <span class="flex-[8] flex rounded-lg px-2 py-3 dark:bg-neutral-800 bg-neutral-200 text-neutral-300  svg:fill-current max-w-xs">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"/></svg>
                <input type="text" placeholder="Find your product" class="w-auto bg-inherit text-xs outline-none text-center">
            </span>
            <div class=" bg-primary p-3 rounded-lg ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="fill-white"><path d="M11 21v-6h2v2h8v2h-8v2Zm-8-2v-2h6v2Zm4-4v-2H3v-2h4V9h2v6Zm4-2v-2h10v2Zm4-4V3h2v2h4v2h-4v2ZM3 7V5h10v2Z"/></svg>
            </div>
        </div>
    </section>
    <section class="flex flex-col child:dark:!text-white child:!text-neutral-700 w-full">
        <h3 class="!my-1 font-mono p-5 lg:p-10">Popular products</h3>
        <div class="flex xl:justify-center overflow-x-scroll lg scroll-smooth max-w-full pb-2">
            <HomeProduct/>
            <HomeProduct/>
            <HomeProduct/>
            <HomeProduct/>
            <HomeProduct/>
        </div>
    </section>
    <section class="flex flex-col child:dark:!text-white child:!text-neutral-700 w-full p-5 lg:p-10">
        <h3 class="!my-1 font-mono">Categories</h3>
        <div class="flex w-full">
            <div class="flex flex-col justify-center items-center bg-primary-600 rounded-2xl shadow-lg text-white p-3">
                <!-- <svg></svg> -->
                Electronics
            </div>
        </div>
    </section>
</article>

<style>
    /* .overflow-x-scroll::-webkit-scrollbar{
        height: 10px;
        background-color: #404040;
        padding: 2px;
        border: solid #525252 2px;
    }
    .overflow-x-scroll::-webkit-scrollbar-thumb{
        background-color: #262626;
        border-radius: 1000000px;
    } */
    .overflow-x-scroll::-webkit-scrollbar {
    height: .5em;
    }
    .overflow-x-scroll::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
 
    .overflow-x-scroll::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    }
</style>