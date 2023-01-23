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
    <div class="flex flex-col max-w-sm p-5 card my-2 ">
        <div class="flex justify-center h-48">
            <img src={data.image} alt="apple watch" class="max-w-[90%]"></div>
        <p class="font-semibold text-xl">
            {data.title}
        </p>
        <div class="flex">
            <Ratings/>
        </div>
        <div class="flex justify-between items-center ">
            <h1 class="!my-0 font-semibold dark:text-white text-neutral-700">${data.price}</h1>
            <button class="button !m-0">
                Add to Cart
            </button>
        </div>
    </div>
<!-- </section> -->
