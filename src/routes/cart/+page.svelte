<script>
   import {onMount} from "svelte"
   import Item from "./item.svelte";
 
   import {cartPrices,cartItems,round} from "../../js/store"
   import {beforeNavigate } from "$app/navigation"

   let orderTotal=0
   let subTotal=0

   $:{
       subTotal=0
        for( let cartPrice of $cartPrices){
            if(cartPrice){
                subTotal=subTotal+cartPrice
                console.log($cartPrices,cartPrice,subTotal);
            }
        }
        subTotal=round(subTotal,-1)
        orderTotal=subTotal+2.5+3
    }
    onMount(()=>{
        document.body.style.overflow="hidden"
    })

    beforeNavigate(()=>{
        document.body.style.overflow="auto"
    })
</script>

<article class="prose lg:prose-xl max-w-none h-full">
    <section class="flex flex-wrap rounded justify-center items-center h-full max-h-screen">
        <div class="md:flex-[6] flex flex-col justify-center p-2 overflow-scroll max-h-screen ">
            {#if $cartItems.length>0}
                {#each $cartItems as cartItem,index}
                    <Item {cartItem} {index}/>
                {/each}
            {:else}
                <div class="h-[70vh] grid place-content-center child:text-neutral-700 dark:child:text-white">
                    <h3><i>No Items</i></h3>
                </div>
            {/if}
        </div>
        <div class="md:flex-[4] flex flex-col justify-end items-center h-full mt-5 md:mt-auto p-5 w-2/3">
            <div class="w-full">
                <div class="w-full flex flex-col dark:child:text-white child:text-neutral-700">
                    <span class="child:!my-0 flex justify-between px-2">
                        <p>Sub total</p>
                        <p class="font-semibold">${subTotal}</p>
                    </span>
                    <div class="spacer-xs"></div>
                    <span class="child:!my-0 flex justify-between px-2">
                        <p>Shipping estimate</p>
                        <p class="font-semibold">$2.5</p>
    
                    </span>
                    <div class="spacer-xs"></div>
                    <span class="child:!my-0 flex justify-between px-2">
                        <p>Tax estimate</p>
                        <p class="font-semibold">$3</p>
    
                    </span>
                    <div class="spacer-xs"></div>
                    <span class="child:!my-0 flex justify-between px-2">
                        <h6 class="font-semibold">Order total</h6>
                        <p class="font-semibold">${orderTotal}</p>
    
                    </span>
                </div>
                <button class="button w-full">
                    Check out
                </button>
            </div>
        </div>
    </section>
</article>