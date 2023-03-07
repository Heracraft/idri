<script>
    import {page} from "$app/stores"
    import Product from "$lib/product.svelte"
    import Ratings from "$lib/ratings.svelte";

    import anime from "../../js/anime.es"

    export let data
    let query=$page.url.searchParams.get("q")||null
    let results=JSON.parse(data.items)
    let sorts=['Recently added', 'Price:Low to High', 'Price:High to Low']
    let reviews=[4,3.5,2]
    let categories=["Phones","Laptos","Peripherals","Networking","Phone"]
    let reviewSelection=3.5
    let sortSelection=''
    let categorySelection=" "
    let sort="Top" 
    let collapse,caret
    const resize=(target,caret)=>{
            if(target.style.display!="flex"){
                target.style.display="flex"
                if(!caret) return
                anime({
                    targets:caret,
                    rotateZ:"90deg",
                    duration:1000
                })                
            }
            else{
                target.style.display="none"
                if(!caret) return
                anime({
                    targets:caret,
                    rotateZ:"0deg",
                    duration:1000
                }) 
            }
        }
</script>

<article class="flex max-h-screen pb-10">
    <aside class="rounded-lg bottom-0 top-0 fixed w-72 mt-16">
        <div class="h-full m-3 py-5 shadow-lg border-solid border-[1px] dark:border-none dark:bg-neutral-800 rounded-lg prose lg:prose-xl max-w-none child:text-neutral-700 child:dark:text-white" id="filters">
            <h3 class="font-semibold !my-1 px-5">Filter</h3>
            <div class="max-h-full px-5 overflow-y-scroll">
                <h6 class="text-xl w-fit">Category</h6>
                <div class="flex md:overflow-x-scroll overflow-flex scroll-smooth max-w-full px-1 py-2">
                    {#each categories as category}
                        {#if category==categorySelection}
                            <p class="chip-selected"
                            on:keydown={()=>{}}
                            on:click={()=>{
                                categorySelection=category
                            }}>{category}</p>
                        {:else}
                            <p class="chip"
                            on:keydown={()=>{}}
                            on:click={()=>{
                                categorySelection=category
                            }}>{category}</p>
                        {/if}
                    {/each}
                </div>
                <div class="flex my-2 justify-between items-center">
                    <h6 class="text-xl w-fit">Sort by:</h6>
                    
                </div>
                <div class="flex flex-col">
                    {#each sorts as sort}
                        {#if sort==sortSelection}
                            <p class="!my-1 pl-3 leading-normal text-base py-2 bg-neutral-100 shadow dark:bg-neutral-700 rounded">{sort}</p>
                        {:else}
                            <p class="!my-1 pl-3 leading-normal text-base py-2 hover:bg-neutral-100 hover:shadow dark:hover:bg-neutral-700 rounded" 
                            on:keydown={()=>{}}
                            on:click={()=>{
                                sortSelection=sort
                            }}>{sort}</p>
                        {/if}
                    {/each}
                </div>
                <div class="flex my-2 justify-between items-center">
                    <h6 class="text-xl w-fit">Customer review</h6>
                    
                </div>
                <div class="flex flex-col">
                    {#each reviews as review}
                        {#if review==reviewSelection}
                            <div class="hover:bg-neutral-100 hover:shadow dark:hover:bg-neutral-700 rounded px-2 flex justify-between" on:keydown={()=>{}} on:click={()=>{
                                 }}>
                                <span class="flex">
                                    <Ratings rate={review} badge={true}/>
                                    <p class="!my-1 ml-4">& up</p>
                                </span>
                                <input type="radio" checked="checked">
                            </div>
                        {:else}
                            <div class="hover:bg-neutral-100 hover:shadow dark:hover:bg-neutral-700 rounded px-2 flex justify-between" on:keydown={()=>{}} on:click={()=>{
                                reviewSelection=review
                             }}>
                                <span class="flex">
                                    <Ratings rate={review} badge={true}/>
                                    <p class="!my-1 ml-4">& up</p>
                                </span>
                                <input type="radio">
                            </div>
                        {/if}
                    {/each}
                </div>
        </div>
    </aside>
    <section class="flex flex-col pr-5 py-5 ml-72">
        <div class="flex justify-between w-full prose lg:prose-xl max-w-none child:text-neutral-700 child:dark:text-white">
            <h3>Over {results.length} results for  <span class="text-primary">{query?query:"Clothing"}</span></h3>        
            <div class="relative rounded text-xs md:text-base w-20 md:w-32 ml-3">
                <span class="flex font-semibold items-center outline-neutral-800 outline outline-1 dark:outline dark:bg-neutral-800 p-2 w-full rounded overflow-hidden whitespace-nowrap text-ellipsis hover:rounded-b-none" on:keydown={()=>{}} on:click={(e)=>resize(collapse,caret)}>
                    <p class="!my-0 text-center flex-[6]">{sort}</p>
                    <div bind:this={caret} class="hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:svg:fill-white rounded-full w-fit h-fit p-1 s-A-bC3Hke5zSn"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" class="s-A-bC3Hke5zSn"><path d="m376 816-56-56 184-184-184-184 56-56 240 240-240 240Z"></path></svg></div>
                </span>
                <div class="flex-col hidden absolute w-full mr-2 bg-neutral-800" bind:this={collapse}>
                  <span class="p-2 hover:bg-neutral-300 dark:hover:bg-neutral-700 w-full my-1 rounded" on:click={function(){
                    sort=this.textContent
                    resize(collapse,caret)
                  }}>
                    Top
                  </span>
                  <span class="p-2 hover:bg-neutral-300 dark:hover:bg-neutral-700 w-full my-1 rounded" on:click={function(){
                    sort=this.textContent
                    resize(collapse,caret)
                  }}>Newest</span>
                </div>
              </div>
        </div>
        <div class="flex flex-wrap gap-2 overflow-y-scroll">
            {#each results as item}
                <Product data={item}/>
            {/each}
        </div>
    </section>
</article>

<style>
    ::-webkit-scrollbar{
        width: 5px;
    }
    #filters::-webkit-scrollbar{
        margin: 30px 0;
    }
    :global(body){
        overflow: hidden;
    }
</style>