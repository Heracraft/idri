<script>
  import {onMount} from "svelte"  
  import HomeProduct from './homeProduct.svelte';
  import anime from "../../js/anime.es"
  import Ratings from "$lib/ratings.svelte";

  let sorts=['Recommended', 'Recently added', 'Price:Low to High', 'Price:High to Low', 'Top rated']
  let reviews=[4,3.5,2]
  let reviewSelection=4
  let sortSelection=''
  let collapse,resize,caret,filterOptions

  onMount(()=>{
    resize=(target)=>{
        if (!target){target=caret}
            if(collapse.style.display!="flex"){
                collapse.style.display="flex"
                anime({
                    targets:caret,
                    rotateZ:"90deg",
                    duration:1000
                })                
            }
            else{
                collapse.style.display="none"
                anime({
                    targets:caret,
                    rotateZ:"0deg",
                    duration:1000
                }) 
            }
        }
  })
</script>

<article class="prose md:prose-xl xl:prose-2xl flex flex-col justify-center items-center h-full w-full max-w-none mt-5">
    <section class="flex flex-col child:dark:!text-white child:!text-neutral-700 w-full p-5 lg:p-10 prose-headings:font-mono">
        <h1  class="!my-1">Discover</h1>
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
        <section class="bg-neutral-50 dark:bg-neutral-800 shadow-md  rounded-lg flex flex-col w-full max-w-md p-5">
            <div>
                <h6 class="text-xl w-fit">Category</h6>
                <div class="flex overflow-x-scroll md:overflow-hidden scroll-smooth max-w-full px-1 py-2">
                    <div class="chip">Phones</div>
                    <div class="chip">Laptos</div>
                    <div class="chip">Peripherals</div>
                    <div class="chip">Networking</div>
                    <div class="chip">Phone</div>
                </div>
                <div class="flex my-2 justify-between items-center">
                    <h6 class="text-xl w-fit">Sort by:</h6>
                    <div class="hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:svg:fill-white rounded-full w-fit h-fit p-1" on:click={()=>resize()} bind:this={caret}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m376 816-56-56 184-184-184-184 56-56 240 240-240 240Z"/></svg>
                    </div>
                </div>
                <div class="hidden flex-col" bind:this={collapse}>
                    {#each sorts as sort}
                            <p class="!my-1 pl-3 leading-normal text-base py-2 hover:bg-neutral-100 hover:shadow dark:hover:bg-neutral-700 rounded" 
                            on:keydown={()=>{}}
                            on:click={()=>{
                                sortSelection=sort
                                resize();
                            }}>{sort}</p>
                    {/each}
                </div>
                <h6 class="text-xl w-fit">Customer review</h6>
                <div class="flex flex-col">
                    {#each reviews as review}
                        {#if review==reviewSelection}
                            <div class="flex justify-between">
                                <span class="flex">
                                    <Ratings rate={review} badge={true}/>
                                    <p>& up</p>
                                </span>
                                <input type="radio" value="on">
                            </div>
                        {:else}
                            <div class="flex justify-between">
                                <span class="flex">
                                    <Ratings rate={review} badge={true}/>
                                    <p>& up</p>
                                </span>
                                <input type="radio" on:click={function(){
                                    console.log(this.value);
                                    
                                }}>
                            </div>
                        {/if}
                    {/each}
                </div>
                
            </div>

        </section>
    </section>
    <section class="flex flex-col child:dark:!text-white child:!text-neutral-700 w-full p-5">
        <h3 class="!mt-1 mb-2 font-mono lg:p-10">Popular products</h3>
        <div class="flex xl:justify-center overflow-x-scroll scroll-smooth max-w-full pb-5">
            <HomeProduct/>
            <HomeProduct/>
            <HomeProduct/>
            <HomeProduct/>
            <HomeProduct/>
            <HomeProduct/>
            <HomeProduct/>
            <HomeProduct/>
        </div>
    </section>
    <section class="flex flex-col child:dark:!text-white child:!text-neutral-700 w-full p-5 lg:p-10">
        <h3 class="!my-1 font-mono">Categories</h3>
        <div class="flex text-red-800  w-full overflow-x-scroll scroll-smooth max-w-full child:no-underline">
            <a href="#" class="flex flex-col justify-center w-32 min-w-[128px] items-center mx-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-50 hover:bg-neutral-100 rounded-2xl shadow dark:text-white text-neutral-700 p-3 my-5">
                <img class="!my-0 h-20" src="/laptop.svg" alt="laptop">
                <p class="!my-2 text-base !leading-tight text-center whitespace-nowrap text-ellipsis max-w-[10ch] overflow-hidden">laptops</p>                    
            </a>
            <a href="#" class="flex flex-col justify-center w-32 min-w-[128px] items-center mx-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-50 hover:bg-neutral-100 rounded-2xl shadow dark:text-white text-neutral-700 p-3 my-5">
                <img class="!my-0 h-20" src="/phone.svg" alt="phone">
                <p class="!my-2 text-base !leading-tight text-center whitespace-nowrap text-ellipsis max-w-[10ch] overflow-hidden">Phones</p>
            </a>
            <a href="#" class="flex flex-col justify-center w-32 min-w-[128px] items-center mx-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-50 hover:bg-neutral-100 rounded-2xl shadow dark:text-white text-neutral-700 p-3 my-5">
                <img class="!my-0 h-20" src="/headphone.svg" alt="phone">
                <p class="!my-2 text-base !leading-tight text-center whitespace-nowrap text-ellipsis max-w-[10ch] overflow-hidden">headsets</p>
            </a>
            <a href="#" class="flex flex-col justify-center w-32 min-w-[128px] items-center mx-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-50 hover:bg-neutral-100 rounded-2xl shadow dark:text-white text-neutral-700 p-3 my-5">
                <img class="!my-0 h-20" src="/computers.svg" alt="phone">
                <p class="!my-2 text-base !leading-tight text-center whitespace-nowrap text-ellipsis max-w-[10ch] overflow-hidden">Computers</p>
            </a>
            <a href="#" class="flex flex-col justify-center w-32 min-w-[128px] items-center mx-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-50 hover:bg-neutral-100 rounded-2xl shadow dark:text-white text-neutral-700 p-3 my-5">
                <img class="!my-0 h-20" src="/speaker.svg" alt="phone">
                <p class="!my-2 text-base !leading-tight text-center whitespace-nowrap text-ellipsis max-w-[10ch] overflow-hidden">smart speakers</p>
            </a>
            <a href="#" class="flex flex-col justify-center w-32 min-w-[128px] items-center mx-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-50 hover:bg-neutral-100 rounded-2xl shadow dark:text-white text-neutral-700 p-3 my-5">
                <img class="!my-0 h-20" src="/watch.svg" alt="phone">
                <p class="!my-2 text-base !leading-tight text-center whitespace-nowrap text-ellipsis max-w-[10ch] overflow-hidden">smart watch</p>
            </a>
            <a href="#" class="flex flex-col justify-center w-32 min-w-[128px] items-center mx-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-50 hover:bg-neutral-100 rounded-2xl shadow dark:text-white text-neutral-700 p-3 my-5">
                <img class="!my-0 h-20" src="/office.svg" alt="phone">
                <p class="!my-2 text-base !leading-tight text-center whitespace-nowrap text-ellipsis max-w-[10ch] overflow-hidden">peripherals</p>
            </a>
            <a href="#" class="flex flex-col justify-center w-32 min-w-[128px] items-center mx-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-50 hover:bg-neutral-100 rounded-2xl shadow dark:text-white text-neutral-700 p-3 my-5">
                <img class="!my-0 h-20" src="/network.svg" alt="phone">
                <p class="!my-2 text-base !leading-tight text-center whitespace-nowrap text-ellipsis max-w-[10ch] overflow-hidden">Networking</p>
            </a>
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
    height: .3em;
    }
    .overflow-x-scroll::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
 
    .overflow-x-scroll::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    }
</style>