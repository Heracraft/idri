<script>
    import {onMount} from "svelte"
    import Ratings from "./ratings.svelte";

    export let data

    onMount(()=>{
        console.log(data);
    })
</script>
<!-- 
<section class="prose lg:prose-xl flex flex-col items-center dark:child:text-white child:!my-2">
    <h1>Product card</h1> -->
    <div class="flex flex-col max-w-sm w-80 p-5 mx-auto last:!mx-2 card my-2 ">
        <div class="flex justify-center h-48">
            <img src={data.image} alt="apple watch" class="max-w-[90%]"></div>
        <p class="font-semibold text-xl max-h-[5ch] min-h-[5ch] overflow-hidden text-ellipsis my-2">
            {data.title}
        </p>
        <div class="flex">
            <Ratings rate={data.rating.rate}/>
        </div>
        <div class="flex justify-between items-center ">
            <h1 class="!my-0 font-semibold dark:text-white text-neutral-700">${data.price}</h1>
            <button class="button !m-0">
                Add to Cart
            </button>
        </div>
    </div>
<!-- </section> -->
