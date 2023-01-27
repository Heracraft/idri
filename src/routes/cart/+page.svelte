<script>
   import {onMount} from "svelte"
   import Item from "./item.svelte";
 
   import {cartItems} from "../../js/store"
 


//    export let subTotal=writable(0)
   let orderTotal=0
   let subTotal=0

   $:{
    console.log($cartItems);
    // console.log(list);
    // for( let cartItem of $cartItems.values()){
    //     console.log("cartItem")
    // }
    }
   $:{orderTotal=subTotal+2.5+3}

</script>

<article class="prose lg:prose-xl max-w-none h-full">
    <section class="flex flex-wrap rounded justify-center items-center h-full max-h-screen">
        <div class="md:flex-[6] flex flex-col justify-center p-2">
            <Item {cartItems}/>
            <Item {cartItems}/>
            <Item {cartItems}/>
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