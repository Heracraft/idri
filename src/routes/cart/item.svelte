<script>
    import {onMount} from "svelte"
    import {cartPrices,cartItems} from "../../js/store"

    let productQuantity=1
    let cost
    let parent
    
    export let index
    export let cartItem
    
    let price=cartItem.price

    const updateCart=()=>{
        let temp=$cartPrices
        temp[index]=(price*productQuantity)
        $cartPrices=temp
        
    }

    onMount(()=>{
        updateCart()
    })
   
</script>

<div class="md:grid card p-2 prose-base w-full place-content-center m-2" bind:this={parent}>
    <!-- <div class="flex-[2] h-full p-1 rounded" style="background-image: url(/apple-watch.png);"> -->
    <div class="flex-[2] p-1 rounded h-40 flex justify-center items-center" >
        <img class="max-w-full max-h-full !m-0" src={cartItem.image} alt="product image">
    </div>
    <div class="dark:child:text-white flex flex-col justify-evenly pl-2 child:!m-0">
        <h6 class="font-semibold text-ellipsis whitespace-nowrap overflow-hidden max-w-[20ch]">{cartItem.title}</h6>
        <p class="!text-gray-400">{cartItem.category}</p>
        <p class="font-semibold" id="cartPrice">${price}</p>
    </div>
    <div class="p-1 flex items-center justify-between md:flex-col md:justify-around">
        <span class="flex items-center w-fit border-solid border-neutral-700 border-[1px] rounded px-1">
            <svg on:click={()=>{
                productQuantity=productQuantity+1
                updateCart()
            }} class="fill-current w-5 h-5 hover:bg-neutral-300 dark:hover:bg-neutral-600 p-1 mx-1 rounded" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
            <p class="!h-fit !m-0 !p-0">{productQuantity}</p>
            <svg on:click={()=>{
                if(productQuantity>1){
                    productQuantity=productQuantity-1
                    updateCart()
                }
            }} class="fill-current w-5 h-5 hover:bg-neutral-300 dark:hover:bg-neutral-600 p-1 mx-1 rounded" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg>
        </span>
        <!-- <span class="border-solid border-[1px] border-primary px-2  rounded text-primary bg-primary-600 bg-opacity-30 hover:bg-opacity-100 hover:text-white">
            Remove
        </span> -->
        <button class="button" on:click={()=>{
            let index=$cartItems.indexOf(cartItem)
            let temp=$cartItems
            temp.splice(index,index+1)
            $cartItems=temp
            temp=$cartPrices
            index=temp.indexOf(price)
            temp[index]=undefined
            $cartPrices=temp
            
        }}>Remove</button>
    </div>
    <!-- <div class=""></div> -->

</div>
<style>
    .card{
        grid-template-columns: 3fr 4fr 2fr;
    }
</style>